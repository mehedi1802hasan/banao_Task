import React, { useState } from 'react';
import { Button, Col, Form, InputGroup, Modal, Row } from 'react-bootstrap';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import login from "../../public/login.png";
import { IoEyeOutline } from "react-icons/io5";

function LoginModal(props) {
  const [isCreateAccount, setCreateAccount] = useState(false);

  const toggleCreateAccount = () => {
    setCreateAccount(!isCreateAccount);
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header  closeButton style={{ borderBottom: "none" }}>
        <Modal.Title id="contained-modal-title-vcenter">
          <h6 className='text-center px-3 d-none d-md-flex d-lg-flex' style={{ backgroundColor: "#EFFFF4", color: "#008A45" }}>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</h6>

        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row className='d-flex justify-content-center p-3 align-items-center'>
          {/** 1st part authentication and Form */}

          <Col md={6} sm={12} >

            <h3 className='font-weight-bold '>Sign {isCreateAccount? "Up":"In"}</h3>
            <Form.Group className='mt-3'> 
            
            

         {isCreateAccount &&  <div className='d-flex mb-1 gap-1'>
          <Form.Control
                className='p-2'
                required
                type="text"
                placeholder=" First Name "
              />
               <Form.Control
                className='p-2'
                required
                type="text"
                placeholder="Last Name "
              />
          </div> }



              <Form.Control
                className='p-2'
                required
                type="email"
                placeholder=" Email "
              />
              <div className='position-relative d-flex align-items-center'>
              <p  style={{left:"240px"}} className='position-absolute mt-3 ms-0 ms-md-5 ms-lg-5 fs-5'><IoEyeOutline/></p>

              <Form.Control
                className='p-2 mt-1'
                required
                type="password"
                placeholder=" Password "
              />
              </div>


{isCreateAccount &&  
                   <Form.Control
                className='p-2 mt-1'
                required
                type="password"
                placeholder="Confirm Password "
              />
            }

              <p style={{ backgroundColor: "#2F6CE5", borderRadius: "15px", color: "white" }} className='w-100 text-center p-2 mt-3 '>Sign {isCreateAccount? "Up":"In"} </p>

            </Form.Group>
            <p style={{ borderRadius: "10px", borderColor: "#D9D9DB", border: "1px solid #D9D9DB" }} className='w-100 text-center p-2 d-flex justify-content-center align-items-center gap-2 mt-4  '><FaFacebook className='fs-3' style={{ color: "blue" }} />
              Sign in with Facebook</p>
            <p style={{ borderRadius: "10px", borderColor: "#D9D9DB", border: "1px solid #D9D9DB" }} className='w-100 p-2 text-center d-flex justify-content-center align-items-center gap-2 '><FcGoogle className='fs-3 ' />
              Sign in with Google</p>

{!isCreateAccount &&            <h6 className='text-center'>Forget Password?</h6>
}          </Col>


          {/** 2nd part link and image */}
          <Col md={6} sm={12} className='d-flex d-flex'>
            <div>
              <h6>   {isCreateAccount ? 'Already have an account!' : 'Don’t have an account yet? '}   

              <span
                  style={{ color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}
                  onClick={toggleCreateAccount}
                >
                  {isCreateAccount ? 'Login now!' : 'Create new for free!'}
                </span>
                     {/* <span style={{ color: 'blue', textDecoration: 'underline' }}>
                Create new for free!
              </span> */}
              </h6>
              <img className='mt-2 d-none d-md-flex ' src={login} alt="" />
{isCreateAccount && 
           <p className='' style={{ fontSize: 'small' }}>By signing up,you agree to our Terms & conditions,policy</p>

}            </div>

          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer style={{ borderTop: "none" }}>
        {/* <Button onClick={props.onHide}>Close</Button> */}
      </Modal.Footer>
    </Modal>
  );
}

export default LoginModal;
