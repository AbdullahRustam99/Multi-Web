import Link from 'next/link';
import React from 'react'
import Logo from "@/img/Logo.png"
import Image from 'next/image';
const Header = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Image src={Logo} alt="logo" width="100" height="50" />
      </div>
      <div className="nav-links">
        <Link href="/">Home</Link>
        <Link href="/SuperBikes">SuperBikes</Link>
        <Link href="/Super-Car">SuperCar</Link>
      </div>
    </nav>
  );
}

export default Header