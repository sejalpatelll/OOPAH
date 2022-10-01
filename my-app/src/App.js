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

  let App = function(category, amount) {
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

// creating a dropdown toggle and an amount box to add categories to the expenses





