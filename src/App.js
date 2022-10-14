import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  
  return  <div className='App'> 
    <h3>Count =  {count} </h3>
    <button onClick={() =>setCount(count+1)}>Increase by 1</button>
    <button onClick={() => setCount(count-1)}>Decrease by 1</button>
    <button onClick={() => setCount(0)}>Set to Zero</button>
  </div>
}



export default App;
