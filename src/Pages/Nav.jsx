import React, { useState } from 'react';
import { Container, Row, Col, Image, InputGroup, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from "../../public/logo.png";
import LoginModal from './loginModal';
import { IoIosSearch  } from "react-icons/io";
import { RiArrowDropDownFill } from "react-icons/ri";

const Nav = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className='d-flex justify-content-between align-items-center p-2'>
        <div>
        <Image src={logo} alt="" />
        </div>
        <div className='d-none d-md-flex d-lg-flex' style={{ position: 'relative', width: '400px' }}>
  <p className='text-center mt-3' style={{ position: 'absolute',  left: '10%', transform: 'translate(-50%, -50%)', zIndex: 1 }}>
  <IoIosSearch />

  </p>
  <Form.Control
    style={{ borderRadius: '60px',backgroundColor:"#F2F2F2" }}
    type="text"
    className="border  text-center"
    placeholder="Search for your favorite groups in ATG"
  />
</div>


        <div className='d-flex align-items-center mt-3'>
        <h6 className='d-flex align-items-center gap-2'>
      <span className='d-none d-md-flex d-lg-flex '>Create Account{'  '}</span>
       <span>
        <Link to='#' onClick={() => setModalShow(true)}>
           It's free! <RiArrowDropDownFill className='fs-0 fs-md-1 fs-md-1 text-dark' />
        </Link>
      </span>
    </h6>
        </div>
        <LoginModal show={modalShow} onHide={() => setModalShow(false)} />
      </div>
        
    
  );
};

export default Nav;
