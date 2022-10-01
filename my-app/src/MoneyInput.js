import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';
import {useState} from 'react';

function MoneyInput () {

    const [mode, setMode] = useState("0");


    // return (
    //     <div className="money-input">
    //         <p>Insert Income:</p>
    //         <Form.Label htmlFor="inputIncome">Income</Form.Label>
    //             <Form.Control type="text" id="inputIncome" placeholder="i.e. 5000"/>
    //         <p>Insert Expenses:</p>
    //     </div>
        
    //   );
    return (
        <Form.Select value={mode} onChange={e => setMode(e.target.value)} aria-label="Default select example">
          <option value="0">Open this select menu</option>
          <option value="1">Income</option>
          <option value="2">Expense</option>
        </Form.Select>
      );
}

export default MoneyInput;