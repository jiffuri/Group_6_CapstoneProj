import Hero from "./Hero";
import '../Style/main.css';
import '../Style/myStyle.css'
import HomeCategory from "../Components/Home_Category";
import RecentBought from "../Components/RecentBought";
import '../Style/Home.css';

const Home = () => {


    return ( 
        <div>

            <div className="">
             
                <Hero/>
            </div>
            <div className="">
                <HomeCategory/>
            </div>
            <div className="RCB">
                <RecentBought/>
            </div>
        
        </div>
        
     );
}
 
export default Home;















