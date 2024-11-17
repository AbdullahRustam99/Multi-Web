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
    <div className="product-grid">
    
    <div className="product-card">
      <h2>Harley</h2>
      <Image src={Haiyanda} alt="Harley"/>
      <div className="price-section">
        <h3>Price:</h3>
        <p>$40,000</p>
      </div>
      <button>Buy Now</button>
    </div>

    
    <div className="product-card">
      <h2>HAYA BUSA</h2>
      <Image src={Busa} alt="Hayabusa"/>
      <div className="price-section">
        <h3>Price:</h3>
        <p>$28,490</p>
      </div>
      <button>Buy Now</button>
    </div>

    
    <div className="product-card">
      <h2>Ducati</h2>
      <Image src={Ducati} alt="Ducati"/>
      <div className="price-section">
        <h3>Price:</h3>
        <p>$65,000</p>
      </div>
      <button>Buy Now</button>
    </div>

    
    <div className="product-card">
      <h2>BMW</h2>
      <Image src={BMW} alt="BMW"/>
      <div className="price-section">
        <h3>Price:</h3>
        <p>$86,800</p>
      </div>
      <button>Buy Now</button>
    </div>
  </div>
      <Footer />
    </>
  );
};

export default Bicke;
