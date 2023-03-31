
const Footer = () => {
    return ( 
<div>


    <section className="footer">
        <div className="box-container">
            <div className="box">
                <h3>Quick links</h3>
                <a href="#"><i className="fas fa-arrow-right"></i>Home</a>
                <a href="#"><i className="fas fa-arrow-right"></i>Shop</a>
                <a href="#"><i className="fas fa-arrow-right"></i>About</a>
                <a href="#"><i className="fas fa-arrow-right"></i>Review</a>
                <a href="#"><i className="fas fa-arrow-right"></i>Contact</a>
            </div>
            <div className="box">
                <h3>Extra links</h3>
                <a href="#"><i className="fas fa-arrow-right"></i>My order</a>
                <a href="#"><i className="fas fa-arrow-right"></i>My favorite</a>
                <a href="#"><i className="fas fa-arrow-right"></i>My wishlist</a>
                <a href="#"><i className="fas fa-arrow-right"></i>My account</a>
                <a href="#"><i className="fas fa-arrow-right"></i>Terms or use</a>
            </div>
            <div className="box">
                <h3>Social Media</h3>
                <a href="#"><i className="fa-brands fa-square-facebook"></i>Facebook</a>
                <a href="#"><i className="fa-brands fa-square-twitter"></i>Twitter</a>
                <a href="#"><i className="fa-brands fa-instagram"></i>Instagram</a>
                <a href="#"><i className="fa-brands fa-linkedin"></i>Linkedin</a>
                <a href="#"><i className="fa-brands fa-pinterest"></i>Pinterest</a>
            </div>
            <div className="box">
                <h3>News letter</h3>
                <p>Subscribe for latest update</p>
                <form action="">
                    <input type="email" placeholder="Enter you email address"/>
                    <input type="submit" value="Subscribe" className="btn"/>
                </form>
                <div>

                    <div>jiffuri@gmail.com</div>
                    <div>oland.sayson@gmail.com</div>
                    <div>josephvincentcayabyablaxa@gmail.com</div>
                        

                    

                
                </div>
                    
            
            </div>
        </div>
    </section>

</div>
     );
}
 
export default Footer;