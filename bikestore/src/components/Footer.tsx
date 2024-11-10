import React from 'react'
import Logo from "@/img/Logo.png"
import Image from 'next/image';
import Link from 'next/link';
const Footer = () => {
  return (
    <footer className="h-[80%] bg-lime-700 text-white ">
      <div className='flex justify-evenly items-center max-sm:flex-col'>
        <div className='w-60 max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center '>
          <Image src={Logo} alt="logo" /> Your trusted Shop Since 2024
        </div>
        <div>
          <h2 className='text-[20px] font-semibold pb-2'>Quick Links</h2>
          <div className="flex flex-col justify-center items-center text-[17px] gap-1">
            <Link href="/">Home</Link>
            <Link href="/SuperBikes">SuperBikes</Link>
            <Link href="/Super-Car">Super-Car</Link>
          </div>
        </div>
      </div>
      <div className='text-center pt-5 bg-lime-900'>2024 Car & Bikes Shop --- Abdullah Rustam</div>
    </footer>
  );
}

export default Footer