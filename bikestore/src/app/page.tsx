import React from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from 'next/image';
import cycle from "@/img/Cycle.png"
import car from "@/img/Rollroys.png"
import bike from "@/img/Kawa H2r.png"
import Link from 'next/link';

const Home = () => {
  return (
    <>
      <Header />
      <div className="h-screen max-md:h-[130vh]">
        <div className="px-44 py-10 text-center max-md:px-14 max-md:py-7 max-sm:py-2 max-sm:px-5">
          <h2 className="text-[35px] font-bolder ">About US</h2>
          <p className="text-[18px] max-md:text-[16px]">
            Welcome, your one-stop destination for premium cars and bikes. We
            offer a wide selection of top-quality vehicles, ensuring you find
            the perfect ride that suits your style and needs. Our expert team is
            dedicated to providing exceptional customer service and guidance to
            help you make the best choice. Whether youre looking for speed,
            comfort, or reliability, we have something for everyone
          </p>
        </div>
        <div className="flex gap-20 justify-center h-40 max-sm:gap-4 max-sm:flex-col">
          <div className="flex items-center flex-col justify-center h-[400px]  gap-5 bg-slate-400 p-5 rounded-lg max-sm:h-[800px]">
            <Image
              src={car}
              alt="picture "
              width={200}
              height={200}
              className="h-100%"
            />
            <Link href="/Super-Car">
              <button className="py-3 px-10 bg-lime-700">Explore More</button>
            </Link>
          </div>
          <div className="flex items-center flex-col justify-center h-[400px]  gap-5 bg-slate-400 p-5 rounded-lg ">
            <Image
              src={bike}
              alt="picture"
              width={200}
              height={200}
              className="h-100%"
            />
            <Link href="/Super-Car">
              <button className="py-3 px-10 bg-lime-700">Explore More</button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}


export default Home