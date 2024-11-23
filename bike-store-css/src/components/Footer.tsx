import React from "react";
import Logo from "@/img/Logo.png";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <Image src={Logo} alt="logo" />
            Your trusted Shop Since 2024
          </div>
          <div className="links">
            <h2>Quick Links</h2>
            <div className="links">
              <a href="/">Home</a>
              <a href="/SuperBikes">SuperBikes</a>
              <a href="/Super-Car">SuperCar</a>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer-bottom">
        2024 Car & Bikes Shop --- Abdullah Rustam
      </div>
    </>
  );
};

export default Footer;
