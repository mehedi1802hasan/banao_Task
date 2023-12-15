import React from 'react';
import { Container, Image } from 'react-bootstrap';
import banner from "../../public/banner.png";

const Banner = () => {
  return (
    <Container fluid className="p-0">
      <div
        className='banner h-440 w-full overflow-hidden position-relative'
        style={{ position: "relative" }}
      >
        <div
          className="gradient-overlay"
          style={{
            position: "absolute",
            inset: 0,
            background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.60) 100%)',
          }}
        />
        <Image
          src={banner}
          alt='Banner'
          className='banner-image img-fluid h-full w-100 object-cover'
        />
        <div className='text-container'>
          <div
            className='bottom-20 absolute text-white text-left w-100  md-ml-0 '
            style={{
              position: "absolute",
              left: 70,
              bottom: 20,
            }}
          >
            <h1 className='text-5xl font-bold mb-3'>Computer Engineering</h1>
            <p className='text-lg font-medium'>142,765 Computer Engineers follow this</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Banner;
