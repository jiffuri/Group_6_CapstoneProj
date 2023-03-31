import React, { useState } from "react";
import Mainpage from "./Components/Mainpage";
import {BrowserRouter} from "react-router-dom";



function App() {

  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState();

  const handleClick = (pastry)=>{
    /* console.log(pastry) */
    let isPresent = false;
    cart.forEach((product)=>{
       if(pastry.id === product.prod_id){
          isPresent = true;
        } 
        console.log("AA"+product.prod_id)
      
    })
       if(isPresent){
        setWarning(true);
        setTimeout(()=>{
          setWarning(false);
        },2000)
          return;
      }
      
        setCart([...cart, pastry]); 
       /*  console.log(cart) */
  }

    

  return (
    <div>
      <React.Fragment>
        <BrowserRouter>
          <Mainpage cart={cart} setCart={setCart} cartNum={cart.length} handleClick={handleClick}  message={'gdfgdfgdfg'}/>


        </BrowserRouter>
        


      </React.Fragment>
    </div>
  );
}

export default App;
