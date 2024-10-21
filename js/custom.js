// - submit function
//        - add event listener
// - ${} Paragraph for each answer
//        - depending on the answer
// - conditional statement depending on what they choose
//        - or create a dynamic function instead 
// - toggle funtion
//        - display block
// - display onto UI function
//        get element by ID and display it
// - form reset (at the end)


// Define tax rates for each state using key value pairs 
const taxRates = {
    oregon: { avgRate: 28.7, marginalRate: 38.5 },
    utah: { avgRate: 26.0, marginalRate: 34.5 },
    colorado: { avgRate: 25.5, marginalRate: 34.2 },
    washington: { avgRate: 21.6, marginalRate: 30.1 }
  };
  
  // calculate taxes and display result
  function calculateTaxes() {
    // Get user input values
    //This targets the specific input field that the user enters. .value will put it into a string format. 
    //parsFloat takes the .value string and converts it into a number that can have decimals.
    const income = parseFloat(document.getElementById("incomeInput").value);
    const state = document.getElementById("stateSelect").value;
    
    // isNan checks whether the value entered by the user is a number (Not a Number) If it's not, the user gets an alert to enter a number. 
    if (isNaN(income)) {
      alert("Please enter a valid income.");
      return;
    }
  
    // Get the tax rates for the selected state
    const { avgRate, marginalRate } = taxRates[state];
  
    // Calculate tax amount, net pay, pay per month, and marginal amounts
    const taxDollarAmount = (income * avgRate) / 100;
    const netPay = income - taxDollarAmount;
    const payPerMonth = netPay / 12;
    const marginalTaxSalaryAmount = (100 * marginalRate) / 100;
    const marginalTaxIncrease = 100 - marginalTaxSalaryAmount;
  
    // Create the dynamic template literal
    // .toFixed(2) is a method that ensures that the result is shown with two decimal places since we are talking about money. It rounds to two decimal places.
    const resultTemplate = `
      If you make $${income} a year living in the region of ${state}, USA, you will be taxed $${taxDollarAmount.toFixed(2)}. 
      That means that your net pay will be $${netPay.toFixed(2)} per year, or $${payPerMonth.toFixed(2)} per month. 
      Your average tax rate is ${avgRate}% and your marginal tax rate is ${marginalRate}%. 
      This marginal tax rate means that your immediate additional income will be taxed at this rate. 
      For instance, an increase of $100 in your salary will be taxed $${marginalTaxSalaryAmount.toFixed(2)}, hence, your net pay will only increase by $${marginalTaxIncrease.toFixed(2)}.`;
  
    // Display the result
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = resultTemplate;
    resultDiv.style.display = "block"; // Show the result
  }
  
  // Event listener for the calculate button
  document.getElementById("calculateBtn").addEventListener("click", function(event) {
      event.preventDefault(); // This prevents the form from submitting
      calculateTaxes(); // Call your function here
  });
  
  