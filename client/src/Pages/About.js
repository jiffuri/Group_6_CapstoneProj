
import aboutImg from '../Img/aboutUsbottom.jpg';
import '../Style/main.css';

const About = () => {
    return ( 
        <div>
         <section className="aboutHeading d-flex justify-content-center align-item-center">
          
            <h1 id="aboutUs">ABOUT US</h1>
        </section>

        <section className="about">
            <div className="img">
                <img src={aboutImg} alt=""/>
            </div>
            <div className="content">
                <span>knows about bread temptation</span>
                <h3>A place where you can find the super delicious bread ever.</h3>
                <p>We're inspired by the time-honoured craft and magic of baking. It takes us to a place of childhood joy. The stuff of Enid Blyton stories â€“familiar, warm and wonderful.

                    We love working with high-quality ingredients from the earth. We love the craft. We love our community.
                    
                    We also donâ€™t think premium-quality bakery products should cost the earth. That's why we're doing everything we can to minimise our environmental impact, from our packaging to our processes.</p>
                <p></p>
                <a href="#" className="btn" id="aboutBanBtn">read more</a>
            </div>
        </section>

        </div>
     );
}
 
export default About;