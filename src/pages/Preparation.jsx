import React from 'react';
import v60 from '../assets/v60.svg';
import grinder from '../assets/grinder.svg';
import kettle from '../assets/kettle.svg';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function Preparation() {
  return (
    <div className="bg-lightGray text-black text-base h-screen">
      <div className="mx-auto max-w-screen-sm">
        <div className="flex flex-col items-center">
          <div className="flex flex-col h-[20vh] justify-center items-center">
            <h3 className="text-primary text-big"> Preparation</h3>
            <Link to="/" className="px-3 py-1 rounded-xl bg-primary text-white">
              Back
            </Link>
          </div>
          <div className="flex flex-col justify-center h-[60vh]">
            <div className="flex justify-center gap-3">
              <div className="flex flex-col justify-center bg-white h-40 w-32 rounded-2xl shadow-sm ">
                <img src={grinder} className=" h-14 fill-primary" alt="" />
                <p className="text-black text-big text-center font-medium mt-2 px-4">
                  Grind 18g of coffee
                </p>
              </div>
              <div className="flex flex-col justify-center bg-white h-40 w-32 rounded-2xl shadow-sm ">
                <img src={kettle} className=" h-14 " alt="" />
                <p className="text-black text-big text-center font-medium mt-2 px-4">
                  Boil 300g of water
                </p>
              </div>
            </div>
            <div className="">
              <a
                href="https://nekocalc.com/px-to-rem-converter"
                className="flex justify-center items-center mt-14 px-12 py-4 text-white text-big bg-primary rounded-3xl"
              >
                Let's Brew
                <img src={v60} className="h-7 fill-white ml-3" alt="v60icon" />
              </a>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Preparation;
