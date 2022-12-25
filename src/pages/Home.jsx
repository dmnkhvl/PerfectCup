import React from 'react';
import v60 from '../assets/v60.svg';
import Options from '../components/Options';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

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
          <Options />
          <Link to="/preparation">asdfd</Link>
        </section>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
