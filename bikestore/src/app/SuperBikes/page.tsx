import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import BMW from "@/img/Bmw1.png";
import Busa from "@/img/Busa.png";
import Ducati from "@/img/Ducati.png";
import Haiyanda from "@/img/Haiyda.png";
const Bicke = () => {
  return (
    <>
      <Header />
      <div className="h-screen grid grid-cols-4 grid-rows-1 gap-5 p-6 justify-center max-md:grid-cols-2 max-md:grid-rows-2 max-md:h-[185vh] max-sm:grid-cols-1 max-sm:h-[350vh] ">
        <div className="pt-7 pb-48   px-5  bg-gray-300 rounded-lg">
          <h2 className="text-center pb-4 font-extrabold text-[28px] max-sm:text-[18px]">
            Harley
          </h2>
          <Image src={Haiyanda} alt="Pic"></Image>
          <div className=" flex gap-5 py-5 ">
            <h2 className="text-[20px] font-semibold">Price :</h2>
            <p className="text-[16px]"> $40,000</p>
          </div>
          <button className="w-full py-3 px-2 bg-lime-700 rounded-md">
            Buy Now
          </button>
        </div>
        <div className="pt-7 pb-48   px-5  bg-gray-300 rounded-lg">
          <h2 className="text-center pb-4 font-extrabold text-[28px] max-sm:text-[18px]">
            HAYA BUSA
          </h2>
          <Image src={Busa} alt="Pic"></Image>
          <div className=" flex gap-5 py-5 ">
            <h2 className="text-[20px] font-semibold">Price :</h2>
            <p className="text-[16px]">$28,490</p>
          </div>
          <button className="w-full py-3 px-2 bg-lime-700 rounded-md">
            Buy Now
          </button>
        </div>{" "}
        <div className="pt-7 pb-48   px-5  bg-gray-300 rounded-lg">
          <h2 className="text-center pb-4 font-extrabold text-[28px] max-sm:text-[18px]">
            Ducati
          </h2>
          <Image src={Ducati} alt="Pic"></Image>
          <div className=" flex gap-5 py-5 ">
            <h2 className="text-[20px] font-semibold">Price :</h2>
            <p className="text-[16px]">$65,000</p>
          </div>
          <button className="w-full py-3 px-2 bg-lime-700 rounded-md">
            Buy Now
          </button>
        </div>
        <div className="pt-7 pb-48   px-5  bg-gray-300 rounded-lg">
          <h2 className="text-center pb-4 font-extrabold text-[28px] max-sm:text-[18px]">BMW</h2>
          <Image src={BMW} alt="Pic"></Image>
          <div className=" flex gap-5 py-5">
            <h2 className="text-[20px] font-semibold">Price :</h2>
            <p className="text-[16px]">$86,800</ p>
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

export default Bicke;
