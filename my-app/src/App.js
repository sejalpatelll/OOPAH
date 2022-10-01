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
