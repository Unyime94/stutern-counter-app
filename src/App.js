import React, {useState} from 'react';
import DecreaseBtn from './components/DecreaseBtn';
import IncreaseBtn from './components/IncreaseBtn';
import ResetBtn from './components/ResetBtn';
import CountDisplay from './components/CountDisplay';
import './App.css';
import './index.css'

function App() {
  const [count, setCount] = useState(0);

  const handleDecrease = () => {
    setCount(count - 1);
  }

  const handleReset = () => {
    setCount(0);
  }
  const handleIncrease = () => {
    setCount(count + 1);
  }

  return (
    <div className='App' >
      <CountDisplay count={count} />
      <IncreaseBtn increase={handleIncrease}/>
      <ResetBtn reset={handleReset}/>
      <DecreaseBtn decrease={handleDecrease}/>
    </div>
  );


}

export default App;
