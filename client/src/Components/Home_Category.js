

import '../Style/main.css';
import '../Style/myStyle.css'

import CImage01 from '../Img/index_category/pie.png';
import CImage02 from '../Img/index_category/cookies.png';
import CImage03 from '../Img/index_category/hopia.png';
import CImage04 from '../Img/index_category/siopao.png';
import CImage05 from '../Img/index_category/donut.png';

const HomeCategory = () => {
    return ( 
        <div>

    <section class="category">
        <h1 class="title">Temptation's<span>Category</span><a href="#">view all </a></h1>
        <div class="box-container">
            <a href="#" class="box">
                <img src={CImage01} alt=""/>
                <h3>Pie's</h3>
            </a>
            <a href="#" class="box">
                <img src={CImage02} alt=""/>
                <h3>cookies</h3>
            </a>
            <a href="#" class="box"> 
                <img src={CImage03} alt=""/>
                <h3>Hopia</h3>
            </a>
            <a href="#" class="box">
                <img src={CImage04} alt=""/>
                <h3>Siopao</h3>
            </a>
            <a href="#" class="box">
                <img src={CImage05} alt=""/>
                <h3>Donut</h3>
            </a>
            
        </div>
    </section>


        </div>
     );
}
 
export default HomeCategory;