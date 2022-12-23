import React, { useState } from 'react';
// import { handleSteps } from '../App';

function Choice({ value, name }) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <input
        onChange={() => {
          setCount(parseInt(value));
        }}
        type="radio"
        value={parseInt(value)}
        id={name}
        name="beans"
        className={`hidden p-10 ${'peer/' + name}`}
      />
      <label
        className={`flex items-center justify-center bg-white w-12 h-12 rounded-lg shadow-md font-bold text-lg ${
          'peer-checked/' + name + ':text-white'
        } ${'peer-checked/' + name + ':bg-blue'}`}
        htmlFor={name}
      >
        {value}
        <span className="text-sm font-medium">g</span>
      </label>
      <p>{count}</p>
      <p>{typeof count}</p>
    </div>
  );
}

export default Choice;
