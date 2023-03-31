import React, { useState } from "react";
import Navbar from "./Navbar";





const CartDataConnection = () => {

    const [show, setShow] = useState(true);
    const [initialCart, setCart] = useState([]);



    return ( 
        <div>
            <React.Fragment>

            <Navbar cn={'20'}/>
            </React.Fragment>
            



        </div>
     );
}
 
export default CartDataConnection;