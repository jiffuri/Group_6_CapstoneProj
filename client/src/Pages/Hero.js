
import { useEffect } from 'react';
import '../Style/Animate.css';
import '../Style/Hero.css';
import heroImage01 from '../Img/index_slide/01-1.png';
/* import heroImage02 from '../Img/index_slide/02-2.png';
import heroImage03 from '../Img/index_slide/03-3.png'; */
import { Link } from 'react-router-dom';

const Hero = () => {
  
    useEffect(()=>{

    

    })

    return ( 
        <div>
         
<div id='caroCon'>
<div id="myCarousel" className="carousel slide carousel-fade" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <div className="mask flex-center">
        <div className="container indexCarouselContainer">
          <div className="row align-items-center">
            <div className="col-md-7 col-12 order-md-1 order-2">
              <h4>Same Day<br/>
                Delivery</h4>
              <p>Lorem ipsum dolor sit amet. Reprehenderit, qui blanditiis quidem rerum <br/>
                necessitatibus praesentium voluptatum deleniti atque corrupti.</p>
               
               <Link to="/Shop" className='heroBuyHere'>BUY HERE</Link>
 
               </div>
            <div className="col-md-5 col-12 order-md-2 order-1"><img src={heroImage01} className="mx-auto" alt="slide"/></div>
          </div>
        </div>
      </div>
    </div>
    {/* <div className="carousel-item">
      <div className="mask flex-center">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-7 col-12 order-md-1 order-2">
              <h4>Present your <br/>
                awesome product</h4>
              <p>Lorem ipsum dolor sit amet. Reprehenderit, qui blanditiis quidem rerum <br></br>
                necessitatibus praesentium voluptatum deleniti atque corrupti.</p>
              <a href="#">BUY NOW</a> </div>
            <div className="col-md-5 col-12 order-md-2 order-1"><img src={heroImage02} className="mx-auto" alt="slide"/></div>
          </div>
        </div>
      </div>
    </div> */}
    {/* <div className="carousel-item">
      <div className="mask flex-center">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-7 col-12 order-md-1 order-2">
              <h4>Present your <br/>
                awesome product</h4>
              <p>Lorem ipsum dolor sit amet. Reprehenderit, qui blanditiis quidem rerum <br></br>
                necessitatibus praesentium voluptatum deleniti atque corrupti.</p>
                 </div>
                 <a ><Link to="/Shop">BUY HERE</Link></a>
            <div className="col-md-5 col-12 order-md-2 order-1"><img src={heroImage03} className="mx-auto" alt="slide"/></div>
          </div>
        </div>
      </div>
    </div> */}
  </div>
 

</div>
{/* <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev"> <span className="carousel-control-prev-icon" aria-hidden="true"></span> <span className="sr-only">Previous</span> </a> <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next"> <span className="carousel-control-next-icon" aria-hidden="true"></span> <span className="sr-only">Next</span> </a> */} 

        </div>


        
       
        
        </div>
 
        
     );
}
 
export default Hero;