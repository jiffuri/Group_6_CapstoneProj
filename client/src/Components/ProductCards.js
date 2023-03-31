
import '../Style/ProductCards.css'
import axios from "axios";
import { useEffect, useState } from 'react';


const ProductCards = ({pastry, price, productName, imgUrl, secondaryCategory, handleClick, primaryCategory, details}) => {



    
    const addtocart = async (a, b, c)=>{

        await axios.post("http://localhost:3577/carts", {pname: a, pprice: b, purl: c}).
            then((response)=>{
                console.log(response);
            })
            window.location.reload(false);
        }

       /*  const addtocart = (a, b, c) =>{
            
            axios.post("http://localhost:3577/carts", {pname: a, pprice: b, purl: c}).
            then((response)=>{
                console.log(response);
            })
             window.location.reload(false); 
        }
         */

    
    return ( 
        <div>
        
       

                
                    <div className="card">
                    <div className="bg-image hover-overlay ripple ripple-surface ripple-surface-light text-center"
                        data-mdb-ripple-color="light">
                        <img src={imgUrl} className="img-fluid" alt="Laptop" />
                        <a href="#!">
                        <div className="mask"></div>
                        </a>
                    </div>
                    <div className="card-body pb-0">
                        <div className="d-flex justify-content-between">
                        <div>
                            <p><a href="#!" className="text-dark text-decoration-none h2">{productName}</a></p>
                            <p className="small text-muted">{primaryCategory}</p>
                        </div>
                        <div>
                            <div className="d-flex flex-row justify-content-end mt-1 mb-4 text-danger">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            </div>
                            <p className="small text-muted">Rated 4.0/5</p>
                        </div>
                        </div>
                    </div>
                    <hr className="my-0" />
                    <div className="card-body pb-0">
                        <div className="d-flex justify-content-between">
                        <p><a href="#!" className="text-dark text-decoration-none">₱ {price}.00</a></p>
                        <p className="text-dark">{details}</p>
                        </div>
                        <p className="small text-muted">{secondaryCategory}</p>
                    </div>
                    <hr className="my-0" />
                    <div className="card-body">
                        <div className="d-flex justify-content-center align-items-center pb-2 mb-1">
                        {/* <a href="#" className="text-dark fw-bold">Cancel</a> */}
                        <a type="button" className="btn shopCardBtn" 
                                onClick={()=>{
                                 
                                   addtocart(productName, price, imgUrl)
                           
                                }}><p className="h2">Buy now</p></a>
                        </div>
                    </div>
                    </div>
                
                    {/*  handleClick(pastry)  */}
       
   
        </div>
     );
}
 
export default ProductCards;