
import {Routes, Route} from 'react-router-dom';
import React from "react";
import Home from '../Pages/Home';
import Shop from '../Pages/Shop';
import About from '../Pages/About';
import Review from '../Pages/Review';
import Contact from '../Pages/Contact';
import Login from '../Pages/Login';
import Cart from '../Pages/Cart';


const Navpage = ({handleClick, cartNum, message, cart, setCart}) => {

    {}
    return ( 
        <div>
            <React.Fragment>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/Shop" element={<Shop handleClick={handleClick} message={message}/>}/>
                    <Route path="/About" element={<About />}/>
                    <Route path="/Review" element={<Review />}/>
                    <Route path="/Contact" element={<Contact />}/>
 
                    <Route path="/Login" element={<Login />}/>
                    <Route path="/Cart" element={<Cart cartNum={cartNum} cart={cart} setCart={setCart} />}/>
                </Routes>
            </React.Fragment>
        </div>
     );
}
 
export default Navpage;




