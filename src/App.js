import React, { useState } from 'react';

const Greeting = () => {
  var today = new Date();
  var hours = today.getHours();
  var greet;

  if (hours < 12) greet = 'morning';
  else if (hours > 12 && hours <= 17) greet = 'afternoon';
  else if (hours > 17 && hours <= 24) greet = 'evening';

  return <span>{greet}</span>;
};

function App() {
  const [count, setCount] = useState(0);
  const [steps, setSteps] = useState(false);

  const handleSteps = () => {
    setSteps(true);
  };

  let waterRatio = 16.6666666667;

  return (
    <div className="App">
      <div className="bg-lightGray text-black text-base min-h-screen">
        <div className="mx-auto max-w-screen-sm">
          <header
            className="pt-10
           pb-10 px-6 w-full flex justify-between items-center h-16"
          >
            <h1 className=" font-bold text-lgTitle ">Good {Greeting()}</h1>
          </header>
          <main>
            <body>
              <div className="mx-6 flex flex-col ml-6 mt-2">
                <h3 className="text-base uppercase font-bold text-blue">
                  Select the Amount of Beans
                </h3>
                <div>
                  <div className="flex justify-start mt-2 gap-x-5">
                    <div className="">
                      <input
                        onChange={() => {
                          setCount(
                            parseInt(document.getElementById('fifteen').value)
                          );
                          handleSteps();
                        }}
                        type="radio"
                        value="15"
                        id="fifteen"
                        name="beans"
                        className="hidden p-10 peer/fifteen"
                      />
                      <label
                        className="flex items-center justify-center bg-white w-12 h-12 rounded-lg shadow-md font-bold text-lg peer-checked/fifteen:text-white peer-checked/fifteen:bg-blue"
                        htmlFor="fifteen"
                      >
                        15<span className="text-sm font-medium">g</span>
                      </label>
                    </div>
                    <div>
                      <input
                        onChange={() => {
                          setCount(
                            parseInt(document.getElementById('eighteen').value)
                          );
                          handleSteps();
                        }}
                        type="radio"
                        value="18"
                        id="eighteen"
                        name="beans"
                        className="hidden p-10 peer/eighteen"
                      />
                      <label
                        className="flex items-center justify-center bg-white w-12 h-12 rounded-lg shadow-md font-bold text-lg peer-checked/eighteen:text-white peer-checked/eighteen:bg-blue"
                        htmlFor="eighteen"
                      >
                        18<span className="text-sm font-medium">g</span>
                      </label>
                    </div>
                    <div>
                      <input
                        onChange={() => {
                          setCount(
                            parseInt(document.getElementById('twenty').value)
                          );
                          handleSteps();
                        }}
                        type="radio"
                        value="21"
                        id="twenty"
                        name="beans"
                        className="hidden p-10 peer/twenty"
                      />
                      <label
                        className="flex items-center justify-center bg-white w-12 h-12 rounded-lg shadow-md font-bold text-lg peer-checked/twenty:text-white peer-checked/twenty:bg-blue"
                        htmlFor="twenty"
                      >
                        21<span className="text-sm font-medium">g</span>
                      </label>
                    </div>
                  </div>
                  <div className={`${steps ? '' : 'hidden'}`}>
                    <div>
                      <h3 className="text-base uppercase font-bold text-blue mt-10">
                        preparation
                      </h3>
                      <div className="flex flex-col gap-4 mt-2 items-start align-center">
                        <div className="flex items-center align-center">
                          <div className="flex items-center justify-center bg-blue text-white font-medium h-6 w-6 rounded-full">
                            1
                          </div>
                          <p className="ml-3 font-medium text-blue text-lg">
                            Grind {count}g of coffee
                          </p>
                        </div>
                        <div className="flex items-center align-center">
                          <div className="flex items-center justify-center bg-blue text-white font-medium h-6 w-6 rounded-full">
                            2
                          </div>
                          <p className="ml-3 font-medium text-blue text-lg">
                            Boil {Math.round(count * waterRatio)}ml of water
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* PREPARATION */}
                    <div>
                      <h3 className="text-base uppercase font-bold text-blue mt-10">
                        COFFEE RECIPE
                      </h3>
                      <div className="flex flex-col mt-2 items-start align-center">
                        <div className="mt-3">
                          <p className="ml-9 font-medium text-almoustBlack text-xs">
                            0m 00s - 0m 10s (10s)
                          </p>
                          <div className="flex items-center align-center">
                            <div className="flex items-center justify-center bg-blue text-white font-medium h-6 w-6 rounded-full">
                              1
                            </div>
                            <p className="ml-3 font-medium text-blue text-lg">
                              Pour {Math.round(count * 3.3333333333)}g of water
                              to bloom
                            </p>
                          </div>
                        </div>
                        <div className="mt-3">
                          <p className="ml-9 font-medium text-almoustBlack text-xs ">
                            0m 10s - 0m 15s (5s)
                          </p>
                          <div className="flex items-center align-center">
                            <div className="flex items-center justify-center bg-blue text-white font-medium h-6 w-6 rounded-full">
                              2
                            </div>

                            <p className="ml-3 font-medium text-blue text-lg">
                              Gently Swirl
                            </p>
                          </div>
                        </div>
                        <div className="mt-3">
                          <p className="ml-9 font-medium text-almoustBlack text-xs ">
                            0m 15s - 0m 45s (30s)
                          </p>
                          <div className="flex items-center align-center">
                            <div className="flex items-center justify-center bg-blue text-white font-medium h-6 w-6 rounded-full">
                              3
                            </div>

                            <p className="ml-3 font-medium text-blue text-lg">
                              Let it bloom
                            </p>
                          </div>
                        </div>
                        <div className="mt-3">
                          <p className="ml-9 font-medium text-almoustBlack text-xs ">
                            0m 45s - 1m 00s (15s)
                          </p>
                          <div className="flex items-center align-center">
                            <div className="flex items-center justify-center bg-blue text-white font-medium h-6 w-6 rounded-full">
                              3
                            </div>

                            <p className="ml-3 font-medium text-blue text-lg">
                              Pour up to {Math.round(count * 3.3333333333) * 2}g
                              total
                            </p>
                          </div>
                        </div>
                        <div className="mt-3">
                          <p className="ml-9 font-medium text-almoustBlack text-xs ">
                            1m 00s - 1m 10s (10s)
                          </p>
                          <div className="flex items-center align-center">
                            <div className="flex items-center justify-center bg-blue text-white font-medium h-6 w-6 rounded-full">
                              4
                            </div>

                            <p className="ml-3 font-medium text-blue text-lg">
                              PAUSE
                            </p>
                          </div>
                        </div>
                        <div className="mt-3">
                          <p className="ml-9 font-medium text-almoustBlack text-xs ">
                            1m 10s - 1m 20s (10s)
                          </p>
                          <div className="flex items-center align-center">
                            <div className="flex items-center justify-center bg-blue text-white font-medium h-6 w-6 rounded-full">
                              5
                            </div>

                            <p className="ml-3 font-medium text-blue text-lg">
                              Pour up to {Math.round(count * 3.3333333333) * 3}g
                              total
                            </p>
                          </div>
                        </div>
                        <div className="mt-3">
                          <p className="ml-9 font-medium text-almoustBlack text-xs ">
                            1m 20s - 1m 30s (10s)
                          </p>
                          <div className="flex items-center align-center">
                            <div className="flex items-center justify-center bg-blue text-white font-medium h-6 w-6 rounded-full">
                              6
                            </div>

                            <p className="ml-3 font-medium text-blue text-lg">
                              PAUSE
                            </p>
                          </div>
                        </div>
                        <div className="mt-3">
                          <p className="ml-9 font-medium text-almoustBlack text-xs ">
                            1m 30s - 1m 40s (10s)
                          </p>
                          <div className="flex items-center align-center">
                            <div className="flex items-center justify-center bg-blue text-white font-medium h-6 w-6 rounded-full">
                              7
                            </div>

                            <p className="ml-3 font-medium text-blue text-lg">
                              Pour up to {Math.round(count * 3.3333333333) * 4}g
                              total
                            </p>
                          </div>
                        </div>
                        <div className="mt-3">
                          <p className="ml-9 font-medium text-almoustBlack text-xs ">
                            1m 40s - 1m 50s (10s)
                          </p>
                          <div className="flex items-center align-center">
                            <div className="flex items-center justify-center bg-blue text-white font-medium h-6 w-6 rounded-full">
                              8
                            </div>

                            <p className="ml-3 font-medium text-blue text-lg">
                              PAUSE
                            </p>
                          </div>
                        </div>
                        <div className="mt-3">
                          <p className="ml-9 font-medium text-almoustBlack text-xs ">
                            1m 50s - 2m 00s (10s)
                          </p>
                          <div className="flex items-center align-center">
                            <div className="flex items-center justify-center bg-blue text-white font-medium h-6 w-6 rounded-full">
                              9
                            </div>

                            <p className="ml-3 font-medium text-blue text-lg">
                              Pour up to {Math.round(count * 3.3333333333) * 5}g
                              total
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="pt-6 pb-10 ml-9 font-bold text-xl text-blue">
                      ENJOY YOUR COFFEE
                    </p>
                  </div>
                </div>
              </div>
            </body>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
