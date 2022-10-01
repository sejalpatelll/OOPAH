//import logo from './logo.svg';
import './App.css';
import MoneyInput from './MoneyInput';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavHeader from './NavHeader';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Pie} from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


ChartJS.register(ArcElement, Tooltip, Legend);

function App() {

  const data = {
    labels: ['Gas', 'Entertainment', 'Profesional Services', 'Bills and Utilites', 'Food/Drinks', 'Other'],
    datasets: [
      {
        label: '% of Expenses in Total Expenses',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 3,
      },
    ],
  };

  //   let yoMama = function(category, amount) {
  //       this.category = category;
  //       this.amount = amount;
  //       this.piChart = -1; // -1= does not exist
  //  };

  //   // creating a calculator to add expenses and income added by a user and display the total
  //   const calculator = function(income, expenses, total) {
  //     income = 0;
  //     expenses = 0;
  //     // let category = "";
  //     total = 0;
  //     let addIncome = function() {
  //       income += income;
  //     }
  //     let addExpenses = function() {
  //       expenses += expenses;
  //     }
  //     let addTotal = function() {
  //       total = income - expenses;
  //     }
  //     return {
  //       addIncome,
  //       addExpenses,
  //       addTotal
  //     }
  //   };


  //   // create a function that adds and sets a categories to the expense 
  //   const addCategory = function(category) {
  //     category = "";
  //     let addCategory = function() {
  //       category = category;
  //     }
  //     return {
  //       addCategory
  //     }
  //   };

  const [mode, setMode] = useState("0");
  const [category, setCategory] = useState("none");
  const [incomeTotal, setIncome] = useState('');
  
  return (
    <div className="App">
      <NavHeader/>
      <Container fluid>
        <Row>
          <Col md={{span: 4, offset: 1}}><Pie data={data}/></Col>
          <Col md={{ span: 3, offset: 2 }}>
            <Form.Select value={mode} onChange={e => setMode(e.target.value)} aria-label="Default select example">
              <option value="0">Income or Expense</option>
              <option value="1">Income</option>
              <option value="2">Expense</option>
            </Form.Select>
            {mode === '1' && (
              <>
                <Form.Label htmlFor="inputIncome">Amount:</Form.Label>
                <Form.Control id="income-form" type="number" id="inputIncome" placeholder="i.e. 5000" value={incomeTotal} onChange={e => setIncome(e.target.value)}/>
                <h2>Your total income is {incomeTotal}</h2>
              </>
            )}
            {mode === '2' && (
              <>
                <Form.Select value={category} onChange={e => setCategory(e.target.value)} aria-label="Category Mode">
                  <option value="0">Choose category</option>
                  <option value="gas">Gas</option>
                  <option value="entertainment">Entertainment</option>
                  <option value="pro-services">Professonal Services</option>
                  <option value="bills-utilities">Bills and Utilities</option>
                  <option value="food">Food and Drinks</option>
                  <option value="other">Other</option>
                </Form.Select>
                  {category === 'gas' && (
                    <>
                      <Form.Label htmlFor="inputGas">Amount:</Form.Label>
                      <Form.Control type="number" id="inputGas" placeholder="i.e. 20"/>
                    </>
                  )}
                  {category === 'entertainment' && (
                    <>
                      <Form.Label htmlFor="inputEntertainment">Amount:</Form.Label>
                      <Form.Control type="number" id="inputEntertainment" placeholder="i.e. 20"/>
                    </>
                  )}
                  {category === 'pro-services' && (
                    <>
                      <Form.Label htmlFor="inputServices">Amount:</Form.Label>
                      <Form.Control type="number" id="inputServices" placeholder="i.e. 20"/>
                    </>
                  )}
                  {category === 'bills-utilities' && (
                    <>
                      <Form.Label htmlFor="inputBills">Amount:</Form.Label>
                      <Form.Control type="number" id="inputBills" placeholder="i.e. 20"/>
                    </>
                  )}
                  {category === 'food' && (
                    <>
                      <Form.Label htmlFor="inputFood">Amount:</Form.Label>
                      <Form.Control type="number" id="inputFood" placeholder="i.e. 20"/>
                    </>
                  )}
                  {category === 'other' && (
                    <>
                      <Form.Label htmlFor="inputOther">Amount:</Form.Label>
                      <Form.Control type="number" id="inputOther" placeholder="i.e. 20"/>
                    </>
                  )}
              </>
            )}
            </Col>
        </Row>
      </Container>
    </div>
  );

}

export default App;
