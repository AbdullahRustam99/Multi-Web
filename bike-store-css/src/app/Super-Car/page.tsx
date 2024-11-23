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
      <div className="car-grid">

        <div className="car-card">
          <h2>Rolls Royce</h2>
          <Image src={roll1} alt="Rolls Royce"/>
            <div className="price-section">
              <h3>Price:</h3>
              <p>$493,000 MSRP</p>
            </div>
            <button>Buy Now</button>
        </div>

    
        <div className="car-card">
          <h2>Rolls Royce Ghost</h2>
          <Image src={roll2} alt="Rolls Royce Ghost"/>
            <div className="price-section">
              <h3>Price:</h3>
              <p>$660,000</p>
            </div>
            <button>Buy Now</button>
        </div>


        <div className="car-card">
          <h2>Range Rover</h2>
          <Image src={rang1} alt="Range Rover"/>
            <div className="price-section">
              <h3>Price:</h3>
              <p>$160,150</p>
            </div>
            <button>Buy Now</button>
        </div>

    
        <div className="car-card">
          <h2>Range Rover Sport</h2>
          <Image src={rang2} alt="Range Rover Sport"/>
            <div className="price-section">
              <h3>Price:</h3>
              <p>$20,150</p>
            </div>
            <button>Buy Now</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cycle;
