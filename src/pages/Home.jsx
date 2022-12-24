import React from 'react';
import v60 from '../assets/v60.svg';
import Test from '../components/Test';

export const Greeting = () => {
  var today = new Date();
  var hours = today.getHours();
  var greet;

  if (hours < 12) greet = 'morning';
  else if (hours >= 12 && hours <= 17) greet = 'afternoon';
  else if (hours > 17 && hours <= 24) greet = 'evening';

  return <span>{greet}</span>;
};

function Home() {
  return (
    <div className="bg-lightGray text-black text-base h-screen">
      <div className="mx-auto max-w-screen-sm">
        <header
          className="pt-10
     pb-10 px-6 w-full flex justify-between items-end h-[20vh]"
        >
          <div className="flex flex-col justify-between items-start text-primary">
            <h1 className=" font-bold text-lgTitle ">Good</h1>
            <h1 className=" font-medium text-lgTitle capitalize -mt-2 ">
              {Greeting()}
            </h1>
          </div>
          <img src={v60} className="w-14 mb-1 fill-primary " alt="v60icon" />
        </header>
        <section>
          <Test></Test>
        </section>
        <footer className="h-[20vh] flex justify-center items-center">
          <div className="flex flex-col items-center text-gray">
            <a
              href="https://youtu.be/1oB1oDrDkHM"
              target="_blank"
              className="text-small"
              rel="noreferrer"
            >
              James Hoffman V60 Technique
            </a>
            <a
              href="https://dmnkhvl.eu/"
              target="_blank"
              className="text-xsmall"
              rel="noreferrer"
            >
              Created by dmnkhvl
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Home;