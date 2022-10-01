//import logo from './logo.svg';
import './App.css';
import MoneyInput from './MoneyInput';
import PIChart from './PIChart'

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <div>
        <h1>&emsp;Finance App</h1>
        </div>
      </header>
      <div className="data-display">
        <PIChart/>
        <MoneyInput/>
      </div>
      

    </div>
  );
}

export default App;
let incomeAmount= 0;
let expensesAmount= 0; 
let investmentsExpensesAmount=0; 
let savingsExpensesAmount= 0;
let propertiesExpensesAmount= 0; 
let shoppingFoodExpensesAmount= 0; 
let otherExpensesAmount = 0; 


  let App = function(category, amount, piChart) {
      this.category = category;
      this.amount = amount;
      this.piChart = -1; // -1= does not exist
  };

// creating a calculator to add expenses and income added by a user and display the total
const calculator = function(income, expenses, total) {
  let income = 0;
  let expenses = 0;
  // let category = "";
  let total = 0;
  let addIncome = function() {
    income += income;
  }
  let addExpenses = function() {
    expenses += expenses;
  }
  let addTotal = function() {
    total = income - expenses;
  }
  return {
    addIncome,
    addExpenses,
    addTotal
  }
}

// create a function that adds and sets a categories to the expense 
const addCategory = function(category) {
  let category = "";
  let addCategory = function() {
    category = category;
  }
  return {
    addCategory
  }
}
function showIncomeAmount(){
	incomePercentage= Math.round(incomeAmount/ (total)) * 100; 
  return incomePercentage; }
function showExpensesAmount(){
	expensesPercentage= Math.round (expensesAmount/ (total)) * 100; 
  return expensesPercentage; 
}
function showInvestmentsAmount(){
	investmentsPercentage= Math.round(investmentsExpensesAmount/ expenses) * 100; 
  return investmentsPercentage;
}
function showPropertiesAmount(){
	propertiesPercentage= Math.round (propertiesExpensesAmount/ expenses) * 100; 
  return propertiesPercentage; 
}
function showOtherAmount(){
	otherPercentage= Math.round(otherExpensesAmount/expenses) * 100; 
  return otherPercentage;
}
function showShoppingFoodAmount(){
	shoppingFoodPercentage= Math.round (shoppingFoodExpensesAmount/ expenses) * 100; 
  return shoppingFoodPercentage;  }
function showSavingsAmount(){
    savingsPercentage= Math.round (savingsExpensesAmount/ expenses) * 100; 
    return savingsPercentage; 
}


// creating a dropdown toggle and an amount box to add categories to the expenses





