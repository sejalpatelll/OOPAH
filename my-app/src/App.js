import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

let budget = (function() { // constructor

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
};

