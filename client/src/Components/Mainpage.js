
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Navpage from "./Navpage";


const Mainpage = ({cartNum, handleClick, message, cart, setCart}) => {
    return ( 
        <div>
            <React.Fragment>
                <section>
                    <div className="mainPageDiv01">
                        <Navbar number={cartNum}/>
                    </div>
                 <div className="">
                        <Navpage cartNum={cartNum} handleClick={handleClick} cart={cart} setCart={setCart} message={message}/>
                    </div>
                    <div>
                        <Footer/>
                    </div>
                </section>
            </React.Fragment>
        </div>
     );
}
 
export default Mainpage;


















