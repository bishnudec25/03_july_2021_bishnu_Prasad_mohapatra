const { chain } = require("stream-chain");
const { parser } = require("stream-json");
const { streamValues } = require("stream-json/streamers/StreamValues");
const fs = require("fs");
const bmi = require("./bmi");

const pipeline = chain([
  fs.createReadStream("sample.json"),
  parser(),
  streamValues(),
  (data) => {
    return data.value;
  },
]);


pipeline.on("data", (data) => {
  console.log("----Start-----");
  const objectKeysArray = Object.keys(data);
  objectKeysArray.map( (objKey)=> {
    const objValue = data[objKey];
    let bmi_calculator = bmi.bmiCalculator(
      objValue["Gender"],
      objValue["HeightCm"],
      objValue["WeightKg"]
    );
    console.log(objValue["Gender"], '--', 
                objValue["HeightCm"], '--', 
                objValue['WeightKg'], '--', 
                bmi_calculator["category"], "--", 
                bmi_calculator["risk"]);
  });
});
pipeline.on("end", () => console.log("----End-----"));