import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import roll1 from "@/img/Roll1.png";
import roll2 from "@/img/roll2.png";
import rang1 from "@/img/rang1.png";
import rang2 from "@/img/rang2.png";
const Cycle = () => {
  return (
    <>
      <Header />
        <div className="h-screen grid grid-cols-4 grid-rows-1 gap-5 p-6 justify-center max-md:grid-cols-2 max-md:grid-rows-2 max-md:h-[185vh] max-sm:grid-cols-1 max-sm:h-[320vh]">
          <div className="pt-7 pb-48   px-5  bg-gray-300 rounded-lg">
            <h2 className="text-center pb-4 font-extrabold text-[28px] max-md:text-[20px] max-sm:text-[16px]">
              Rolls Royce
            </h2>
            <Image src={roll1} alt="Pic"></Image>
            <div className=" flex gap-5 py-5 max-sm:justify-center max-sm:items-end max-sm:gap-2 ">
              <h2 className="text-[20px] font-semibold">Price :</h2>
              <p className="text-[16px]">493,000 MSRP</p>
            </div>
            <button className="w-full py-3 px-2 bg-lime-700 rounded-md">
              Buy Now
            </button>
          </div>
          <div className="pt-7 pb-48   px-5  bg-gray-300 rounded-lg">
            <h2 className="text-center pb-4 font-extrabold text-[28px] max-md:text-[20px] max-sm:text-[16px]">
              Rolls Royce Ghost
            </h2>
            <Image src={roll2} alt="Pic"></Image>
            <div className=" flex gap-5 py-5 max-sm:justify-center max-sm:items-end max-sm:gap-2 ">
              <h2 className="text-[20px] font-semibold">Price :</h2>
              <p className="text-[16px]">$660,000</p>
            </div>
            <button className="w-full py-3 px-2 bg-lime-700 rounded-md">
              Buy Now
            </button>
          </div>{" "}
          <div className="pt-7 pb-48   px-5  bg-gray-300 rounded-lg">
            <h2 className="text-center pb-4 font-extrabold text-[28px] max-md:text-[20px] max-sm:text-[16px]">
              Rang Rover{" "}
            </h2>
            <Image src={rang1} alt="Pic"></Image>
            <div className=" flex gap-5 py-5 max-sm:justify-center max-sm:items-end max-sm:gap-2 ">
              <h2 className="text-[20px] font-semibold">Price :</h2>
              <p className="text-[16px]">$160150</p>
            </div>
            <button className="w-full py-3 px-2 bg-lime-700 rounded-md">
              Buy Now
            </button>
          </div>
          <div className="pt-7 pb-48   px-5  bg-gray-300 rounded-lg">
            <h2 className="text-center pb-4 font-extrabold text-[28px] max-md:text-[20px] max-sm:text-[16px]">
              Rang Rover Sport
            </h2>
            <Image src={rang2} alt="Pic"></Image>
            <div className=" flex gap-5 py-5 max-sm:justify-center max-sm:items-end max-sm:gap-2 ">
              <h2 className="text-[20px] font-semibold">Price :</h2>
              <p className="text-[16px]">$20150</p>
            </div>
            <button className="w-full py-3 px-2 bg-lime-700 rounded-md">
              Buy Now
            </button>
          </div>
        </div>
      <Footer />
    </>
  );
};

export default Cycle;
