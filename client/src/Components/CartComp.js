
import '../Style/CartComp.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import CartCompCard from './CartCompCard';



const CartComp = () => {

    const [myCart, setCart] = useState([])

    useEffect(()=>{
        const fetchAllCart = async ()=>{
            try{
                const res = await axios.get("http://localhost:3577/cart")
                setCart(res.data)
            }catch(err){
                console.log(err)
            }
        }
        fetchAllCart();
    },[])

    return ( 
        <div>
            <div className="container mt-5 p-3 rounded cart">
        <div className="row no-gutters">
            <div className="col-md-8">
                <div className="product-details mr-2">
                    <div className="d-flex flex-row align-items-center"><i className="fa fa-long-arrow-left"></i><span className="ml-2">Continue Shopping</span></div>
                    <hr/>


                    <h6 className="mb-0">Shopping cart</h6>

                    <div className="d-flex justify-content-between"><span>You have 4 items in your cart</span>

                        <div className="d-flex flex-row align-items-center"><span className="text-black-50">Sort by:</span>
                            <div className="price ml-2"><span className="mr-1">price</span><i className="fa fa-angle-down"></i></div>
                        </div>
                    </div>

{/* INSERT CART ITEMS */}
                    
            <div className="row">
            {
                myCart.map(pastry=>(
                    
                        <div key={pastry.cart_id}>
                            <CartCompCard productName={pastry.prod_name} price={pastry.prod_price} imgUrl={pastry.product_img}/>
                        </div>
                    
                ))
            }
            </div>


                    

{/* CART ITEMS END */}

                </div>
            </div>
            <div className="col-md-4">
                <div className="payment-info">
                    <div className="d-flex justify-content-between align-items-center"><span>Card details</span>{/* <img className="rounded" src="https://i.imgur.com/WU501C8.jpg" width="30"/> */}</div><span className="type d-block mt-3 mb-1">Card type</span><label className="radio"> <input type="radio" name="card" value="payment" checked/> <span><img width="30" src="https://img.icons8.com/color/48/000000/mastercard.png"/></span> </label>

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
                    <div className="d-flex justify-content-between information"><span>Subtotal</span><span>$3000.00</span></div>
                    <div className="d-flex justify-content-between information"><span>Shipping</span><span>$20.00</span></div>
                    <div className="d-flex justify-content-between information"><span>Total</span><span>{23}</span></div><button className="btn btn-primary btn-block d-flex justify-content-between mt-3" type="button"><span>$3020.00</span><span>Checkout<i className="fa fa-long-arrow-right ml-1"></i></span></button></div>
            </div>
        </div>
    </div>
        </div>
     );
}
 
export default CartComp;