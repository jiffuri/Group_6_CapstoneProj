
import {Badge, Dropdown} from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";
import '../Style/Navbar.css';
import { FaShoppingCart } from 'react-icons/fa';


const Navbar = () => {
    const activeLink = 'nav-item text-decoration-none myActive'; 
    const normalLink = 'nav-item text-decoration-none';
    const iconActiveLink = ''; 
    const iconNormalLink = '';
    

    const [getCartLen, setCartLen] = useState([]);

    useEffect(()=>{
        
        const fetchAllCarts = async ()=>{
            try{
                const res = await axios.get("http://localhost:3577/cart")
                setCartLen(res.data)
                }catch(err){
                    console.log(err)
                }
            }
            fetchAllCarts();
    },[]);


    return ( 
        <div>
 
        <header>    
            <nav className="navbar navbar-expand-lg fixed-top">
                <div className="container-fluid">
                
                <button className="navbar-toggler navToggle" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerd" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Link to="/"><a className="navbar-brand ms-5 ourLogo">BreadTemptation</a></Link>
                    <div className="collapse navbar-collapse" id="navbarTogglerd">
                        <div className="navbar-nav gap-3 ">
                        <NavLink to="/" className={({isActive}) => isActive ? activeLink: normalLink  }><p className="nav-link">Home</p></NavLink>
                        <NavLink to="/Shop" className={({isActive}) => isActive ? activeLink: normalLink  }><p className="nav-link">Shop</p></NavLink>
                        <NavLink to="/About" className={({isActive}) => isActive ? activeLink: normalLink  }><p className="nav-link">About</p></NavLink>
                        <NavLink to="/Review" className={({isActive}) => isActive ? activeLink: normalLink  }><p className="nav-link">Review</p></NavLink>
                        <NavLink to="/Contact" className={({isActive}) => isActive ? activeLink: normalLink  }><p className="nav-link">Contact</p></NavLink>
                        </div>
                         
                    </div>
                    <div className="navIcons me-5">
                    <NavLink to="/Login" className={({isActive}) => isActive ? iconActiveLink: iconNormalLink  }><a id="search-btn" className="fas fa-search text-decoration-none"></a></NavLink>
                        <NavLink to="/Login" className={({isActive}) => isActive ? iconActiveLink: iconNormalLink  }><a id="login-btn" className="fas fa-user text-decoration-none"></a></NavLink>
                        <NavLink to="/Cart" className={({isActive}) => isActive ? iconActiveLink: iconNormalLink  }><a id="cart-btn" className="fas fa-shopping-cart text-decoration-none "><span className="numOfItemInCart">{getCartLen.length}</span></a></NavLink>

                                {/* <Dropdown alignRight className="">
                                    <Dropdown.Toggle>
                                    <Badge>{10}</Badge>
                                    </Dropdown.Toggle>
                                    <FaShoppingCart color="white" fontSize="25px"/>
                                    <Dropdown.Menu style={{minWidth: 370}}>
                                        <span style={{padding: 10}}>Cart is Empty</span>
                                    </Dropdown.Menu>
                                </Dropdown>
 */}
                    </div>
                    
                </div>
            </nav>
        </header>
        </div>
     );
}
 
export default Navbar;











