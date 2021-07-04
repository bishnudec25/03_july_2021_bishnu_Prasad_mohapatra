/* This file will have BMI rule and will be available for all component */
const bmidata = require("./bmidata");

const formula_one = (p_height_incm, p_weight_inkg) =>{
    
    if (p_height_incm == 0){
        throw new Error("Invalid p_height_incm " + p_height_incm);
    } 
    const bmi_val = (p_weight_inkg / (p_height_incm / 100)) ;
    if (bmi_val < 0 || bmi_val > 999999999) {
      throw new Error("Invalid value provided ");
    } 
    return bmi_val;
}


exports.bmiCalculator = (p_gender, p_height, p_weight)=>{
    const bmi_number =  formula_one(p_height, p_weight);
    const risk_category = bmidata.bmiCategory(bmi_number); 
    return risk_category;
}