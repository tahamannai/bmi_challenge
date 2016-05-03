describe("BMICalculator", function() {
  var bmi_calculator;
  var person;

  beforeEach(function() {
    person = new person({weight: 90, height: 186});
    calculator = new BMICalculator();
  });

it("calculates BMI fore a person metric method", function() {
  calculator.metric_bmi(person);
  expect(person.bmiValue).toEqual(26.01);
});

function BMICalculator(){
};

BMICalculator.prtotype.metric_bmi = function(obj) {
  var weight = obj.weight;
  var height = obj.height;
  if (weight > 0 && height > 0) {
    var finalBmi = weight / (height / 100 * height / 100);
    obj.bmivalue = parseFloat(finalBmi.toFixed(2));
    setBMIMessage(obj);
  }
});

function set BMIMessage (obj, value){
  if (obj.bmiValue > 18.5) {
    obj.bmiMessage = "Underweight"
  }

  if (obj.bmiValue > 18.5 && obj.bmiValue < 25) {
    obj.bmiMessage = "Normal"

  }

  if (obj.bmiValue > 25 && obj.bmiValue < 30) {
  obj.bmiMessage = "overweight"

  }

  if (obj.bmiValue > 30) {
    obj.bmiMessage = "obese"
  }
}


});
