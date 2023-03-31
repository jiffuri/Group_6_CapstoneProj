import { useEffect, useState } from "react";
import '../Style/CartComp.css';
import  CartCompCard from '../Components/CartCompCard';

import '../Style/PagesCart.css';
import { NavLink } from "react-router-dom";
import axios from "axios";


const Cart = ({cartNum, cart, setCart}) => {

    
    const [getTheCart, setTheCart] = useState([])
    const [getTotalprice, setTotalPrice] = useState();

    const handlePrice = ()=>{
            let totalp= 0;
            getTheCart.map((pastry)=>{
                totalp += pastry.product_price
            })
            setTotalPrice(totalp)

    }

    useEffect(()=>{
        handlePrice();
    })
 
    const handleRemove = (id)=>{
        const arr = cart.filter((item)=> item.prod_id !== id);
        setCart(arr);
        handlePrice();
    }




    
   
    const deleteCartItem = async (id)=>{
        console.log(id)
        try{
            await axios.delete("http://localhost:3577/cartdelete/"+ id)
            /* window.location.reload() */
            
        }catch(err){
            console.log(err)
        }
        window.location.reload(false)
    }


console.log(getTotalprice)

    useEffect(()=>{
       
        
        
        const fetchAllCarts = async ()=>{
            try{
                const res = await axios.get("http://localhost:3577/cart")
                setTheCart(res.data)
                }catch(err){
                    console.log(err)
                }
            }
            fetchAllCarts();
    },[]);


    return ( 
<div>

<div className="cartContainer">
            <div className="container mt-5 p-3 rounded cart">
        <div className="row no-gutters">
            <div className="col-md-8">
                <div className="product-details mr-2">
                    <div className="d-flex flex-row align-items-center aa"><i className="fa fa-long-arrow-left continueArrow"></i><span className="ml-2"><NavLink to='/Shop' className="continueShopping">Continue Shopping</NavLink></span></div>
                    <hr/>


                    {/* <h6 className="mb-0 h5">Cart</h6> */}

                    <div className="d-flex justify-content-between h5"><span>You have {cartNum} items in your cart</span>

                        <div className="d-flex flex-row align-items-center"><span className="text-black-50">Sort by:</span>
                            <div className="price ml-2"><span className="mr-1">price</span><i className="fa fa-angle-down"></i></div>
                        </div>
                    </div>

{/* INSERT CART ITEMS */}
                    
            <div className="row">
            {
                getTheCart.map((pastry)=>(
                    
                        <div key={pastry.cart_id}>
                             <CartCompCard key={cart.id}  name={pastry.product_name} 
                             price={pastry.product_price} mainCategory={pastry.primary_category_id}
                             imgUrl={pastry.product_img} handleRemove={handleRemove} prodId={pastry.prod_id}
                             deleteCartItem={deleteCartItem} cartId={pastry.cart_id}
                             />
                            
                        </div>
                    
                ))
            }
            </div>
         
                   

{/* CART ITEMS END */}

                </div>
            </div>
            <div className="col-md-4">
                <div className="payment-info">
                    <div className="d-flex justify-content-between align-items-center"><span>Card details</span></div><span className="type d-block mt-3 mb-1">Card type</span><label className="radio"> <input type="radio" name="card" value="payment" checked/> <span><img width="30" src="https://img.icons8.com/color/48/000000/mastercard.png"/></span> </label>

                    <label className="radio"> <input type="radio" name="card" value="payment"/> <span><img width="30" src="https://img.icons8.com/officel/48/000000/visa.png"/></span> </label>

                    <label className="radio"> <input type="radio" name="card" value="payment"/> <span><img width="30" src="https://img.icons8.com/ultraviolet/48/000000/amex.png"/></span> </label>


                    <label className="radio"> <input type="radio" name="card" value="payment"/> <span><img width="30" src="https://img.icons8.com/officel/48/000000/paypal.png"/></span> </label>
                    <div><label className="credit-card-label">Name on card</label><input type="text" className="form-control credit-inputs" placeholder="Name"/></div>
                    <div><label className="credit-card-label">Card number</label><input type="text" className="form-control credit-inputs" placeholder="0000 0000 0000 0000"/></div>
                    <div className="row">
                        <div className="col-md-6"><label className="credit-card-label">Date</label><input type="text" className="form-control credit-inputs" placeholder="12/24"/></div>
                        <div className="col-md-6"><label className="credit-card-label">CVV</label><input type="text" className="form-control credit-inputs" placeholder="342"/></div>
                    </div>
                    <hr className="line"/>
                    <div className="d-flex justify-content-between information"><span>Subtotal</span><span>{getTotalprice}.00</span></div>
                    <div className="d-flex justify-content-between information"><span>Shipping</span><span>20.00</span></div>
                    <div className="d-flex justify-content-between information"><span>Total</span><span>{getTotalprice + 20}.00</span></div><button className="btn btn-primary btn-block d-flex justify-content-between mt-3" type="button"><span>$3020.00</span><span>Checkout<i className="fa fa-long-arrow-right ml-1"></i></span></button>
                </div>
            </div>
        </div>
    </div>
        </div>

      


      
        
</div>
     );
}
 
export default Cart;