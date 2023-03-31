
import { createContext, useContext, useEffect, useReducer } from "react";
import { useState } from "react";
import axios from "axios";
import { cartReducer } from "./Reducer";

const Cart = createContext();



const Context = ({ children }) => {

    const [getMyProducts, setMyProducts] = useState([])
    

    useEffect(()=>{
        const fetchAllProducts = async ()=>{
            try{
                const res = await axios.get("http://localhost:3577/products")
                setMyProducts(res.data)
            }catch(err){
                console.log(err)
            }
        }
        fetchAllProducts();
    },[])

   
        const [state, dispatch] = useReducer(cartReducer,{
                
            prod: getMyProducts,
            cart: []
        
        })
        

    return ( 

       


        <Cart.Provider value={{state, dispatch}}>

        {children}

        </Cart.Provider>

     );
}
 
export default Context;

export const CartState =() =>{
    return useContext(Cart)
}
