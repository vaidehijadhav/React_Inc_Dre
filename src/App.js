import React, {useState} from 'react';
import './App.css';

function App(){

  const [count, setCount] = useState(0);

  const decreaseHandler = ()=>{
    setCount(count-1);
    // console.log(count);
  };

  const increaseHandler = ()=>{
    setCount(count+1);
    // console.log(count);
  };

  const resetHandler =()=>{
    setCount(0);
  }

  return (
    <div className='w-[100vw] h-[100vh] flex flex-col justify-center items-center bg-[#344151] gap-10'>
      <div className='text-[#0398d4] font-medium text-2xl'>Increment & Decrement</div>
      <div className='bg-white flex justify-center gap-12 py-3 rounded-sm text-[25px] text-[#344151]'>
        <button onClick={decreaseHandler} className='border-r-2 text-center w-20 border-[#bfbfbf] text-5xl'>
          -
        </button>
        <div className='font-bold gap-12 text-5xl'>
          {count}
        </div>
        <button onClick={increaseHandler} className='border-l-2 text-center w-20 border-[#bfbfbf] text-5xl'>
          +
        </button>
      </div>
      <button onClick={resetHandler}>Reset</button>
    </div>
  );
}

export default App;