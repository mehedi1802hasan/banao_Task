import React from 'react';
import Nav from './Nav';
import LoginModal from './loginModal';
import Banner from './Banner';
import Post from './Post';
import Raf from './Raf';

const Main = () => {
    return (
        <div>
            <Nav></Nav>
             <LoginModal></LoginModal>


<Banner></Banner>  
<Post></Post>       
        </div>
    );
};

export default Main;