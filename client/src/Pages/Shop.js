import ShopGallery from "../Components/ShopGallery";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import React from "react";
import ProductCards from "../Components/ProductCards";
import '../Style/ProductCards.css'


const Shop = ({handleClick, message}) => {
    
    const [myProducts, setProducts] = useState([])

    useEffect(()=>{
        const fetchAllProducts = async ()=>{
            try{
                const res = await axios.get("http://localhost:3577/products")
                setProducts(res.data)
            }catch(err){
                console.log(err)
            }
        }
        fetchAllProducts();
    },[])


    return ( 
        
        <div>
            <div>
            <section className="heading" id="shopHead">
                <div className="row d-flex justify-content-center " id="shopHeadContainer">
                    <div className="col-lg-4 col-sm-12 hati">
                        <h4>Design Your Bread, Cake or Cupcakes</h4>
                        <p>Choose form our many flavors & decorative Options.</p>
                    </div>
                    <div className="col-lg-4 col-sm-12 hati">
                        <h4>We Hand-Decorate It</h4>
                        <p>Our bakery will create the perfect custom cake or cupcakes for your special occasion.</p>
                    </div>
                    <div className="col-lg-4 col-sm-12 hati">
                        <h4>Pick Up or Delivery</h4>
                        <p>Your order will be waitng for you or deliver at your home</p>
                    </div>
                    
                </div> 
                <button id='shopBannerButton'>Click Here</button>
            </section>
        
            <div className="row">
            {
                myProducts.map(pastry=>(
                    <div className="col-lg-4 mb-5">
                        <div >
                            <ProductCards productName={pastry.prod_name} price={pastry.prod_price} imgUrl={pastry.product_img}
                            prodId={pastry.prod_id} handleClick={handleClick} pastry={pastry} primaryCategory={pastry.product_primary_category}
                            secondaryCategory={pastry.product_secondary_category} details={pastry.product_details}
                            />
                        
                        </div>
                    </div>
                ))
            }
            </div>
   
          
            <ShopGallery/>
       </div>
        </div>   
      
            
     
     );
}
 
export default Shop;








