const BMI_RISK_CATEGORY = [
  { range: [0, 18.4], category: "Underweight", risk: "Malnutrition risk" },
  { range: [18.5, 24.9], category: "Normal weight", risk: "Low risk" },
  { range: [25, 29.9], category: "Overweight", risk: "Enhanced risk" },
  {
    range: [30, 34.9],
    category: "Moderately obese",
    risk: "Medium risk",
  },
  { range: [35, 39.9], category: "Severely obese", risk: "High risk" },
  {
    range: [40, 999999999],
    category: "Very severely obese",
    risk: "Very high risk",
  },
];

exports.bmiCategory = (p_bmi) => {
  const catagory_idx = BMI_RISK_CATEGORY.findIndex(
    (v) => p_bmi >= v.range[0] && p_bmi <= v.range[1]
  );
  return BMI_RISK_CATEGORY[catagory_idx];
};

