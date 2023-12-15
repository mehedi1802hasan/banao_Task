import React, { useState, useEffect } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import post1 from "../../public/post1.png";
import man1 from "../../public/man1.png";
import post2 from "../../public/post2.png";
import man2 from "../../public/man2.png";
import post3 from "../../public/post3.png";
import man3 from "../../public/man3.png";
import man4 from "../../public/man4.png";
import { RiArrowDropDownFill } from "react-icons/ri";
import { BiSolidLike } from "react-icons/bi";
import { IoEyeOutline } from "react-icons/io5";
import { IoShareSocial } from "react-icons/io5";
import { FaCalendarWeek } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { MdOutlineWebAsset } from "react-icons/md";
import { MdOutlineGroupAdd } from "react-icons/md";
import { FaPen } from "react-icons/fa";
import { MdErrorOutline } from "react-icons/md";
import group1 from "../../public/group1.png";
import group2 from "../../public/group2.png";
import group3 from "../../public/group3.png";
import group4 from "../../public/group4.png";


const Post = () => {
  const [showDropdown1, setShowDropdown1] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);
  const [showDropdown3, setShowDropdown3] = useState(false);
  const [showDropdown4, setShowDropdown4] = useState(false);
  const [followGroup, setFollowGroup] = useState('Join-Group');

  const handleClickJoin = () => {
    const newGroup = followGroup === 'Join-Group' ? 'Leave-Group' : 'Join-Group';
    setFollowGroup(newGroup);
  };
  const handleClick = (dropdownNumber) => {
    switch (dropdownNumber) {
      case 1:
        setShowDropdown1(!showDropdown1);
        break;
      case 2:
        setShowDropdown2(!showDropdown2);
        break;
      case 3:
        setShowDropdown3(!showDropdown3);
        break;
      case 4:
        setShowDropdown4(!showDropdown4);
        break;
      default:
        break;
    }
  };

  const handleItemClick = (item, dropdownNumber) => {
    // Handle the click on dropdown items as needed
    console.log(`Dropdown ${dropdownNumber}, Item clicked: ${item}`);
  };

  const [titleWidth, setTitleWidth] = useState('300px');

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth >= 992) {
        setTitleWidth('500px'); // Large devices
      } else if (screenWidth >= 768) {
        setTitleWidth('500px'); // Medium devices
      } else {
        setTitleWidth('300px'); // Small devices
      }
    };

    // Initial call to set the initial width
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div>
      <div className='mt-4 d-flex justify-content-center'>

        <Container className='row d-flex justify-content-between align-items-center'>
          <div className='col-6 col-md-6 d-flex align-items-center '>
            <h6 className='d-none d-md-flex d-lg-flex ' style={{ marginLeft: '0', fontWeight: 'bold' }}>All Post(32)</h6>
            <h6 className='d-none d-md-flex d-lg-flex ' style={{ marginLeft: '20px', color: '#8A8A8A' }}>Article</h6> 
            <h6 className='d-none d-md-flex d-lg-flex ' style={{ marginLeft: '20px', color: '#8A8A8A' }}>Event</h6>
            <h6 className='d-none d-md-flex d-lg-flex ' style={{ marginLeft: '20px', color: '#8A8A8A' }}>Education</h6>
            <h6 className='d-none d-md-flex d-lg-flex ' style={{ marginLeft: '20px', color: '#8A8A8A' }}>Jobs</h6>
           
            <div className='d-flex d-md-none justify-content-center align-items-center d-lg-none'>
  <h6 className='' style={{ marginLeft: '0', fontWeight: 'bold' }}>All Post(32)</h6>
</div>

          </div>
        
          <div className='col-6 col-md-4 d-flex align-items-center'>
            <Button className='fw-bold d-none   d-md-flex d-lg-flex align-items-center justify-content-center' style={{ backgroundColor: "#EDEEF0" }} variant="btn">Write a Post <RiArrowDropDownFill className='fs-2' /> </Button>
            <Button onClick={handleClickJoin} className='fw-bold d-flex align-items-center justify-content-center gap-1' style={{ marginLeft: '20px' }} variant="btn btn-primary"> <MdOutlineGroupAdd
              className='fs-4' /> {followGroup} </Button>

          </div>
        </Container>
       
      </div>
      <Container className=''><hr className='w-100 ' /></Container>
      <div>
        <Container className=' '>
          <Row className=' '>
            <Col >
              {/**-----card 1------------ */}

              <Card className="w-100 w-md-50" style={{ maxWidth: "600px" }}>
                <Card.Img variant="top" src={post1} />
                <Card.Body>
                  <Card.Title>✍️ Article</Card.Title>

                  <div className='d-flex justify-content-between align-items-center'>
                    <Card.Title style={{ width: titleWidth }}>
                      What if famous brands had regular fonts? Meet RegulaBrands!
                    </Card.Title>




                    <div style={{ position: 'relative' }}>
                      <p onClick={() => handleClick(1)} style={{ fontWeight: 'bold' }}>...</p>
                      {showDropdown1 && (
                        <div
                          style={{
                            position: 'absolute',
                            top: '100%',
                            right: 0,
                            margin: '8px 0 0', // Adjust this value as needed
                            borderRadius: '4px',
                            background: '#FFF',
                            boxShadow: '0px 0px 2px 0px rgba(0, 0, 0, 0.08), 0px 2px 8px 0px rgba(0, 0, 0, 0.16)',
                            width: '160px',
                            height: '100px',
                            flexShrink: 0,
                          }}
                          className="dropdown-content border border-dark p-2"
                        >
                          <div onClick={() => handleItemClick(1, 1)}>Edit</div>
                          <div className='my-1' onClick={() => handleItemClick(2, 1)}>Report</div>
                          <div onClick={() => handleItemClick(3, 1)}>Option 3</div>
                        </div>
                      )}
                    </div>


                  </div>
                  <Card.Text>
                    I’ve worked in UX for the better part of a decade. From now on, I plan to rei…
                  </Card.Text>
                  <div className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex justify-content-center align-items-center'>
                      <img
                        className="rounded-circle "
                        src={man1}
                        alt=""
                        style={{ height: '50px', width: '50px' }}
                      />
                      <h6 className='ms-2'>
                        Sarthak Kamra
                      </h6>
                    </div>

                    <div className='d-flex justify-content-between align-items-center gap-5'>
                      <div className=' d-flex align-items-center gap-2 '>
                        <IoEyeOutline className='fs-5' />
                        <h6 className='mt-1'>1.4k views</h6>
                      </div>
                      <div className='rounded-2 d-flex align-items-center justify-content-center' style={{
                        width: '29px',
                        height: '27px', backgroundColor: "#EDEEF0"
                      }}> <IoShareSocial className='fs-5 ' /></div>

                    </div>
                  </div>
                </Card.Body>
              </Card>

              {/*---------------card 2------------ */}

              <Card className="w-100 w-md-50 my-3" style={{ maxWidth: "600px" }}>
                <Card.Img variant="top" src={post2} />
                <Card.Body>
                  <Card.Title>🔬️ Education</Card.Title>
                  <div className='d-flex justify-content-between align-items-center'>
                    <Card.Title style={{ width: titleWidth }}>
                      Tax Benefits for Investment under National Pension Scheme launched by Government
                    </Card.Title>

                    <div style={{ position: 'relative' }}>
                      <p onClick={() => handleClick(2)} style={{ fontWeight: 'bold' }}>...</p>
                      {showDropdown2 && (
                        <div
                          style={{
                            position: 'absolute',
                            top: '100%',
                            right: 0,
                            margin: '8px 0 0', // Adjust this value as needed
                            borderRadius: '4px',
                            background: '#FFF',
                            boxShadow: '0px 0px 2px 0px rgba(0, 0, 0, 0.08), 0px 2px 8px 0px rgba(0, 0, 0, 0.16)',
                            width: '160px',
                            height: '100px',
                            flexShrink: 0,
                          }}
                          className="dropdown-content border border-dark p-2"
                        >
                          <div onClick={() => handleItemClick(1, 2)}>Edit</div>
                          <div className='my-1' onClick={() => handleItemClick(2, 2)}>Report</div>
                          <div onClick={() => handleItemClick(3, 2)}>Option 3</div>
                        </div>
                      )}
                    </div>
                  </div>

                  <Card.Text>
                    I’ve worked in UX for the better part of a decade. From now on, I plan to rei…
                  </Card.Text>
                  <div className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex justify-content-center align-items-center'>
                      <img
                        className="rounded-circle "
                        src={man2}
                        alt=""
                        style={{ height: '50px', width: '50px' }}
                      />
                      <h6 className='ms-2'>
                        Sarah West
                      </h6>
                    </div>

                    <div className='d-flex justify-content-between align-items-center gap-5'>
                      <div className=' d-flex align-items-center gap-2 '>
                        <IoEyeOutline className='fs-5' />
                        <h6 className='mt-1'>1.4k views</h6>
                      </div>
                      <div className='rounded-2 d-flex align-items-center justify-content-center' style={{
                        width: '29px',
                        height: '27px', backgroundColor: "#EDEEF0"
                      }}> <IoShareSocial className='fs-5 ' /></div>
                    </div>
                  </div>
                </Card.Body>
              </Card>

              {/**---------------card 3------------ */}
              <Card className="w-100 w-md-50" style={{ maxWidth: "600px" }}>
                <Card.Img variant="top" src={post3} />
                <Card.Body>
                  <Card.Title>🗓️ Meetup</Card.Title>

                  <div className='d-flex justify-content-between align-items-center'>





                    <Card.Title style={{ width: titleWidth }}>
                      Finance & Investment Elite Social Mixer @Lujiazui
                    </Card.Title>
                    <div style={{ position: 'relative' }}>
                      <p onClick={() => handleClick(3)} style={{ fontWeight: 'bold' }}>...</p>
                      {showDropdown3 && (
                        <div
                          style={{
                            position: 'absolute',
                            top: '100%',
                            right: 0,
                            margin: '8px 0 0', // Adjust this value as needed
                            borderRadius: '4px',
                            background: '#FFF',
                            boxShadow: '0px 0px 2px 0px rgba(0, 0, 0, 0.08), 0px 2px 8px 0px rgba(0, 0, 0, 0.16)',
                            width: '160px',
                            height: '100px',
                            flexShrink: 0,
                          }}
                          className="dropdown-content border border-dark p-2"
                        >
                          <div onClick={() => handleItemClick(1, 3)}>Edit</div>
                          <div className='my-1' onClick={() => handleItemClick(2, 3)}>Report</div>
                          <div onClick={() => handleItemClick(3, 3)}>Option 3</div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className='d-flex mt-1 mb-3 align-items-center gap-4'>
                    <div className='d-flex align-items-center gap-1' ><FaCalendarWeek /> <span>Fri, 12 Oct, 2018</span></div>
                    <div className='d-flex align-items-center gap-1'><HiLocationMarker /> <span>Ahmedabad, India</span>
                    </div>
                  </div>
                  <Button style={{ color: '#E56135' }} className='w-100 mb-4' variant="outline-secondary">Visit Website</Button>{' '}
                  <div className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex justify-content-center align-items-center'>
                      <img
                        className="rounded-circle "
                        src={man3}
                        alt=""
                        style={{ height: '50px', width: '50px' }}
                      />
                      <h6 className='ms-2'>
                        Ronal Jones
                      </h6>
                    </div>

                    <div className='d-flex justify-content-between align-items-center gap-5'>
                      <div className=' d-flex align-items-center gap-2 '>
                        <IoEyeOutline className='fs-5' />
                        <h6 className='mt-1'>1.4k views</h6>
                      </div>
                      <div className='rounded-2 d-flex align-items-center justify-content-center' style={{
                        width: '29px',
                        height: '27px', backgroundColor: "#EDEEF0"
                      }}> <IoShareSocial className='fs-5 ' /></div>           </div>
                  </div>
                </Card.Body>
              </Card>

              {/**---------------card 4------------ */}
              <Card className="w-100 w-md-50 mt-3 mb-2" style={{ maxWidth: "600px" }}>
                {/* <Card.Img variant="top" src={post3} />  */}
                <Card.Body>
                  <Card.Title>💼️ Job</Card.Title>

                  <div className='d-flex justify-content-between align-items-center'>

                    <Card.Title style={{ width: titleWidth }}>
                      Software Developer
                    </Card.Title>


                    <div style={{ position: 'relative' }}>
                      <p onClick={() => handleClick(4)} style={{ fontWeight: 'bold' }}>...</p>
                      {showDropdown4 && (
                        <div
                          style={{
                            position: 'absolute',
                            top: '100%',
                            right: 0,
                            margin: '8px 0 0', // Adjust this value as needed
                            borderRadius: '4px',
                            background: '#FFF',
                            boxShadow: '0px 0px 2px 0px rgba(0, 0, 0, 0.08), 0px 2px 8px 0px rgba(0, 0, 0, 0.16)',
                            width: '160px',
                            height: '100px',
                            flexShrink: 0,
                          }}
                          className="dropdown-content border border-dark p-2"
                        >
                          <div onClick={() => handleItemClick(1, 3)}>Edit</div>
                          <div className='my-1' onClick={() => handleItemClick(2, 3)}>Report</div>
                          <div onClick={() => handleItemClick(3, 3)}>Option 3</div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className='d-flex mt-1 mb-3 align-items-center gap-4'>
                    <div className='d-flex align-items-center gap-1' ><MdOutlineWebAsset />
                      <span>Innovaccer Analytics Private Ltd.</span></div>
                    <div className='d-flex align-items-center gap-1'><HiLocationMarker /> <span>Noida, India</span>
                    </div>
                  </div>
                  <Button style={{ color: '#02B875' }} className='w-100 mb-4' variant="outline-secondary">Apply on Timesjobs</Button>{' '}
                  <div className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex justify-content-center align-items-center'>
                      <img
                        className="rounded-circle "
                        src={man4}
                        alt=""
                        style={{ height: '50px', width: '50px' }}
                      />
                      <h6 className='ms-2'>
                        Joseph Gray
                      </h6>
                    </div>

                    <div className='d-flex justify-content-between align-items-center gap-5'>
                      <div className=' d-flex align-items-center gap-2 '>
                        <IoEyeOutline className='fs-5' />
                        <h6 className='mt-1'>1.4k views</h6>
                      </div>
                      <div className='rounded-2 d-flex align-items-center justify-content-center' style={{
                        width: '29px',
                        height: '27px', backgroundColor: "#EDEEF0"
                      }}> <IoShareSocial className='fs-5 ' /></div>           </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col className='d-flex justify-content-center ms-0 ms-md-5 ms-lg-5'   style={{ marginRight: '20px' }}>
             <div className=''>
             <div style={{ marginTop: "50px" }} className='d-flex align-items-center '>

<HiLocationMarker className='fs-4 ' />
<Form.Control
  className=' ms-1'
  style={{ border: 'none', boxShadow: 'none', width: "155px", height: '15px', padding: '0', margin: '0' }}
  type="text"
  placeholder="Enter your Location"
  defaultValue={'Nodia , India'}
/>          <p><FaPen className=' mt-3'
/>
</p>


</div>
<div style={{ width: "230px",marginTop:"-15px" }} className='d-flex '><hr className='w-100 ' /></div>

<div className='d-flex justify-content-center text-center ' style={{ width: "300px" }}>
<MdErrorOutline className='fs-3' />
<p>Your location will help us serve better and extend a  personalised experience.</p>
</div>


{followGroup === 'Leave-Group' &&
<div className='mt-3'>
  <div className='d-flex  align-items-center gap-2'>
    <p><BiSolidLike className='fs-5' /></p>
    <p>REcommended Groups</p>
  </div>

  <div className='d-flex align-items-center gap-2 justify-content-between mt-2'>
    <div className='d-flex align-items-center gap-2'><p> <img src={group1} alt="" /></p>
      <p>Leisure</p></div>
    <div className='text-center' style={{
      width: '90px',
      height: '27px', backgroundColor: "black", color: "white", borderRadius: '24px'
    }}>Follow</div>
  </div>
  <div className='d-flex align-items-center gap-2 justify-content-between'>
    <div className='d-flex align-items-center gap-2'><p> <img src={group2} alt="" /></p>
      <p>Activism</p></div>
    <div className='text-center' style={{
      width: '90px',
      height: '27px', backgroundColor: "#EDEEF0", color: "black", borderRadius: '24px'
    }}>Follow</div>
  </div>
  <div className='d-flex align-items-center gap-2 justify-content-between'>
    <div className='d-flex align-items-center gap-2'><p> <img src={group3} alt="" /></p>
      <p>MBA</p></div>
    <div className='text-center' style={{
      width: '90px',
      height: '27px', backgroundColor: "#EDEEF0", color: "black", borderRadius: '24px'
    }}>Follow</div>
  </div>
  <div className='d-flex align-items-center gap-2 justify-content-between'>
    <div className='d-flex align-items-center gap-2'><p> <img src={group4} alt="" /></p>
      <p>Philosophy</p></div>
    <div className='text-center' style={{
      width: '90px',
      height: '27px', backgroundColor: "#EDEEF0", color: "black", borderRadius: '24px'
    }}>Follow</div>
  </div>

  <h6 style={{ color: "#2F6CE5" }} className='text-end mt-5'>See More...</h6>
</div>
}



             </div>
            </Col>
          </Row>
        </Container>

      </div>

    </div>
  );
};

export default Post;
