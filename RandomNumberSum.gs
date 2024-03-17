function generateRandomNumbers(num) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var totalCells = 12; //Total number of questions
  var maxFirstFive = 3; //Part A marks
  var desiredSum = sheet.getRange("Q"+num).getValue(); // Specify the total mark column name
  var conditionMet = false;

  while (!conditionMet) {
    var numbers = [];
    for (var i = 0; i < totalCells; i++) {
      if (i < 5) {
        numbers.push(Math.floor(Math.random() * (maxFirstFive + 1)));
      } else {
        numbers.push(Math.floor(Math.random() * 8));
      }
    }
    var sum = numbers.reduce((a, b) => a + b, 0);
    if (sum === desiredSum) {
      conditionMet = true;
      sheet.getRange("C"+num+":N"+num).setValues([numbers]); //C1-mark of first question; N1-mark of last question
      sheet.getRange("P"+num).setValue(sum); // P-total mark will display here
      sheet.getRange("R"+num).setValue("Condition Met"); // Condition checking column
    }
  }
}


function funcall()
{
  for(var i = 13; i < 76; i++)
  {
    generateRandomNumbers(i);
  }
}