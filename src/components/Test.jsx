import React, { useState } from 'react';

export default function Test() {
  return (
    <main className="px-6 h-[60vh] flex flex-col justify-center">
      <p className="ml-3 text-smTitle font-normal">
        how do you feel about V60?
      </p>

      <Form value={15} id="fifteen" text="I'd like one" />
      <Form value={18} id="eighteen" text="I can use some" />
      <Form value={21} id="twentyOne" text="I really need one" />
      <button className="">NEXT</button>
    </main>
  );
}

export const Form = ({ value, text, id }) => {
  const [grams, setGrams] = useState(0);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked((prev) => !prev);
  };

  return (
    <>
      <label
        htmlFor={id}
        className={`flex items-center h-20 rounded-2xl shadow-sm mt-4 font-bold text-mdTitle ${
          clicked ? 'bg-primary text-white' : 'bg-white text-black'
        }     `}
      >
        <p className="ml-10">{value}g</p>
        <p className="font-medium text-big ml-6 ">{text}</p>
      </label>
      <input
        onClick={() => {
          handleClick();
        }}
        type="button"
        id={id}
        name="beans"
      ></input>
    </>
  );
};
