import Link from 'next/link';
import React from 'react'
import Logo from "@/img/Logo.png"
import Image from 'next/image';
const Header = () => {
  return (
    <nav className="flex justify-evenly bg-lime-700 p-8 items-center max-sm:flex-col max-sm:p-3">
      <div>
        <Image src={Logo} alt="logo" width={100} height={10} />
      </div>
      <div className="flex justify-between gap-20 text-2xl text-white hover:text-emerald-100 max-md:gap-5 max-sm:gap-5 max-sm:text-[16px]">
        <Link href="/"> Home</Link>
        <Link href="/SuperBikes"> SuperBikes</Link>
        <Link href="/Super-Car"> SuperCar</Link>
      </div>
    </nav>
  );
}

export default Header