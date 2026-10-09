



let budget = 0;
let expenses = 0;
let balance = 0;


let budgetInput = prompt("Enter your total budget (SSP):");
let expensesInput = prompt("Enter your total expenses (SSP):");


budget = Number(budgetInput);
expenses = Number(expensesInput);


function calculateBalance(budget, expenses) {
    return budget - expenses;
}


function displayBudget(budget, expenses) {
    let remainingBalance = calculateBalance(budget, expenses);

    
    console.log("Total Budget: SSP " + budget);
    console.log("Total Expenses: SSP " + expenses);
    console.log("Remaining Balance: SSP " + remainingBalance);

    if (remainingBalance < 0) {
        console.log("Warning: You have exceeded your budget!");
    } else {
        console.log("You are within your budget.");
    }
}


if (
    budgetInput !== null &&
    expensesInput !== null &&
    budgetInput.trim() !== "" &&
    expensesInput.trim() !== "" &&
    Number.isFinite(budget) &&
    Number.isFinite(expenses) &&
    budget >= 0 &&
    expenses >= 0
) {
    balance = calculateBalance(budget, expenses);
    displayBudget(budget, expenses);
} else {
    console.log(
        "Invalid input. Please enter valid, non-negative numbers."
    );
}