import React, { useState } from 'react';

export default function Options() {
  return (
    <main className="px-6 h-[60vh] flex flex-col justify-center">
      <p className="ml-3 text-smTitle font-normal">
        how do you feel about V60?
      </p>
      <div>
        <input
          type="radio"
          id={15}
          name="beans"
          className="hidden peer"
        ></input>
        <label
          htmlFor={15}
          className="flex items-center h-20 rounded-2xl shadow-sm mt-4 font-bold text-mdTitle bg-white text-black peer-checked:bg-primary peer-checked:text-white cursor-pointer transition hover:bg-opacity-30"
        >
          <p className="ml-10">15g</p>
          <p className="font-medium text-big ml-6 ">I'd like one</p>
        </label>
      </div>
      <div>
        <input
          type="radio"
          id={18}
          name="beans"
          className="hidden peer"
        ></input>
        <label
          htmlFor={18}
          className="flex items-center h-20 rounded-2xl shadow-sm mt-4 font-bold text-mdTitle bg-white text-black peer-checked:bg-primary peer-checked:text-white cursor-pointer transition hover:bg-opacity-30"
        >
          <p className="ml-10">18g</p>
          <p className="font-medium text-big ml-6 ">I can use some</p>
        </label>
      </div>
      <div>
        <input
          type="radio"
          id={21}
          name="beans"
          className="hidden peer"
        ></input>
        <label
          htmlFor={21}
          className="flex items-center h-20 rounded-2xl shadow-sm mt-4 font-bold text-mdTitle bg-white text-black peer-checked:bg-primary peer-checked:text-white cursor-pointer transition hover:bg-opacity-30"
        >
          <p className="ml-10">21g</p>
          <p className="font-medium text-big ml-6 ">I really need one</p>
        </label>
      </div>
    </main>
  );
}
