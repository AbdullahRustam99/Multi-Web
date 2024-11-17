import React from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from 'next/image';
import car from "@/img/Rollroys.png"
import bike from "@/img/Kawa H2r.png"
import Link from 'next/link';

const Home = () => {
  return (
    <>
      <Header />
      <div className="about-section">
        <div className="about-text">
          <h2>About Us</h2>
          <p>
            Welcome, your one-stop destination for premium cars and bikes. We
            offer a wide selection of top-quality vehicles, ensuring you find
            the perfect ride that suits your style and needs. Our expert team is
            dedicated to providing exceptional customer service and guidance to
            help you make the best choice. Whether you're looking for speed,
            comfort, or reliability, we have something for everyone.
          </p>
        </div>

        <div className="about-cards">
          <div className="about-card">
            <Image src={car} alt="Car" width="200" height="200" />
            <Link href="/Super-Car">
              <button>Explore More</button>
            </Link>
          </div>

          <div className="about-card">
            <Image src={bike}  alt="Bike" width="200" height="200" />
            <Link href="/SuperBikes">
              <button>Explore More</button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}


export default Home