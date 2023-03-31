
import '../Style/recentBought.css';
import Img001 from '../Img/shop_products/03_baguette.png';
import Img002 from '../Img/shop_products/donut_1-s.png';
import Img003 from '../Img/shop_products/mango_torte-s.png';


const RecentBought = () => {
    return ( 
<div>
 
<section id="recentlyBought">
        <h1 className="title">Other's<span>Tempted</span></h1>


        <div className="bContainer row d-flex justify-content-center align-items-center">
 
                <div className="bProduct col-lg-3 col-md-5" id="bItem1">
                    <div className="bImage" id="topPart">
                        <img src={Img001} alt=""/>
                    </div>
                    <div id="bottomPart">
                        <div className="bPrice">
                            <h3>baguette</h3>
                            <span>₱ 200.00</span>
                        </div>
                        <p className="whoBought">
                            bought by: <br/><span>Billy</span>
                        </p>
                        <p className="timeFrame">12 hours ago</p>
                        <div className="bStars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                        <div className="buy">
                            <button href="">Add to cart</button>
                        </div>
                    </div>
                </div>

                <div className="bProduct col-lg-3 col-md-5" id="bItem2">
                    <div className="bImage" id="topPart">
                        <img src={Img002} alt=""/>
                    </div>
                    <div id="bottomPart">
                        <div className="bPrice">
                            <h3>donut 6pcs</h3>
                            <span>₱ 97.00</span>
                        </div>
                        <p className="whoBought">
                            bought by: <br/><span>Marites</span>
                        </p>
                        <p className="timeFrame">
                            3 hours ago
                        </p>
                        <div className="bStars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                        <div className="buy">
                            <button>Add to cart</button>
                        </div>
                    </div>
                </div>

                <div className="bProduct col-lg-3 col-md-5" id="bItem3">
                    <div className="bImage" id="topPart">
                        <img src={Img003} alt=""/>
                    </div>
                    <div id="bottomPart">
                        <div className="bPrice">
                            <h3>mango torte</h3>
                            <span>₱ 1,300.00</span>
                        </div>
                        <p className="whoBought">
                            bought by: <br/><span>Batang Quapo</span> 
                        </p>
                        <p className="timeFrame">
                            1 hour ago
                        </p>
                        <div className="bStars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        
                            <i className="fas fa-star"></i>
                        </div>
                        <div className="buy">
                            <button>Add to cart</button>
                        </div>
                    </div>
                </div>

            
                

                
          
        </div>



    </section>











</div>
     );
}
 
export default RecentBought;