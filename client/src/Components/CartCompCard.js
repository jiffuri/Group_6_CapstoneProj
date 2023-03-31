




const CartCompCard = ({name, price, mainCategory, imgUrl, handleRemove, prodId, deleteCartItem, cartId}) => {





    return ( 
<div>

                    <div className="d-flex justify-content-between align-items-center mt-3 p-2 items rounded">
                        <div className="d-flex flex-row"><img className="rounded" src={imgUrl} width="40"/>
                            <div className="ml-2"><span className="font-weight-bold d-block h3">{name}</span><span className="spec">{mainCategory}</span></div>
                        </div>
                        <div><button className="me-5 h2">+</button><button className="h2">-</button></div>
                        <div className="d-flex flex-row align-items-center"><span className="d-block">    </span><span className="d-block ml-5 font-weight-bold h2">P {price}</span><i className="fa fa-trash-o ml-3 text-black-50"></i><button className="btn bg-dark text-light" onClick={()=>{deleteCartItem(cartId) }}>REMOVE</button></div>
                    </div>









{/* onClick={()=>handleRemove(prodId)} */}






</div>
     );
}
  
export default CartCompCard;