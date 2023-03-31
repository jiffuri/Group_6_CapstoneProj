import RCC01 from '../Img/01.jpg';
import RCC02 from '../Img/p04.jpg';
import RCC03 from '../Img/p05.jpg';
import RCC04 from '../Img/p06.jpg';



const ReviewCustomerCards = () => {
    return ( 
        <div>
             <section className="review">
    <div className="box">
        <div className="user">
            <img src={RCC01} alt=""/>
            <div className="info">
                <h3>Darren</h3>
                <h6>TripAdvisor Review</h6>
                <span>Happy customer</span>
            </div>
        </div>
        <p>Wow! Super cute place with amazing pastries. The staff was also super nice and welcoming. Definitely recommend a trip!</p>
    </div>
    <div className="box">
        <div className="user">
            <img src={RCC03} alt=""/>
            <div className="info">
                <h3>Alan</h3>
                <h6>Zomato Review</h6>
                <span>Happy customer</span>
            </div>
        </div>
        <p>Go get these donuts and various pastries. You will not be disappointed as they are the best. </p>
    </div>
    <div className="box">
        <div className="user">
            <img src={RCC02} alt=""/>
            <div className="info">
                <h3>Jonathan</h3>
                <h6>Facebook Review</h6>
                <span>Happy customer</span>
            </div>
        </div>
        <p>Lots of great pastries. Nice people. Good coffee and a squeaky clean restroom ðŸ™‚
            A place with self respect! I like it.</p>
    </div>
    <div className="box">
        <div className="user">
            <img src={RCC02} alt=""/>
            <div className="info">
                <h3>Billy</h3>
                <h6>Google Review</h6>
                <span>Happy customer</span>
            </div>
        </div>
        <p>Such a gem! Not only are the staff and pastries / donuts incredible, you canâ€™t beat the prices and supporting local! Get here ASAP!</p>
    </div>
    <div className="box">
        <div className="user">
            <img src={RCC04} alt=""/>
            <div className="info">
                <h3>Kayleigh</h3>
                <h6>Facebook Review</h6>
                <span>Happy customer</span>
            </div>
        </div>
        <p>This bakery is a slice of heaven. All the pastries are beautiful and delicious, and the menu is fantastic, too.</p>
    </div>
    <div className="box">
        <div className="user">
            <img src={RCC04} alt=""/>
            <div className="info">
                <h3>Karen</h3>
                <h6>Google Review</h6>
                <span>Happy customer</span>
            </div>
        </div>
        <p>The cake was absolutely perfect and was super moist but the buttercream stole the show! My wife and I have never had any other come close to the flavor in the frosting.</p>
    </div>
</section>
        </div>
     );
}
 
export default ReviewCustomerCards;