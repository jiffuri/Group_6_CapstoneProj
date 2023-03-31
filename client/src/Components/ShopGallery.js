
import g01 from '../Img/shop_galleries/g01.jpg'
import g02 from '../Img/shop_galleries/g02.jpg'
import g03 from '../Img/shop_galleries/g03.jpg'
import g04 from '../Img/shop_galleries/g04.jpg'
import g05 from '../Img/shop_galleries/g05.jpg'
import g06 from '../Img/shop_galleries/g06.jpg'






const ShopGallery = () => {
    return ( 
        <div>
        <section className="gallery">
            <h1 className="title">Temptation's<span>Gallery</span><a href="#">View all</a></h1>
            <div className="box-container">
    
                <div className="box">
                    <img src={g01} alt=""/>
                    <div className="icons">
                        <a href="#" className="fas fa-eye"></a>
                        <a href="#" className="fas fa-heart"></a>
                        <a href="#" className="fas fa-share-alt"></a>
                    </div>
                </div>
                <div className="box">
                    <img src={g02} alt=""/>
                    <div className="icons">
                        <a href="#" className="fas fa-eye"></a>
                        <a href="#" className="fas fa-heart"></a>
                        <a href="#" className="fas fa-share-alt"></a>
                    </div>
                </div>
                <div className="box">
                    <img src={g03} alt=""/>
                    <div className="icons">
                        <a href="#" className="fas fa-eye"></a>
                        <a href="#" className="fas fa-heart"></a>
                        <a href="#" className="fas fa-share-alt"></a>
                    </div>
                </div>
                <div className="box">
                    <img src={g04} alt=""/>
                    <div className="icons">
                        <a href="#" className="fas fa-eye"></a>
                        <a href="#" className="fas fa-heart"></a>
                        <a href="#" className="fas fa-share-alt"></a>
                    </div>
                </div>
                <div className="box">
                    <img src={g05} alt=""/>
                    <div className="icons">
                        <a href="#" className="fas fa-eye"></a>
                        <a href="#" className="fas fa-heart"></a>
                        <a href="#" className="fas fa-share-alt"></a>
                    </div>
                </div>
                <div className="box">
                    <img src={g06} alt=""/>
                    <div className="icons">
                        <a href="#" className="fas fa-eye"></a>
                        <a href="#" className="fas fa-heart"></a>
                        <a href="#" className="fas fa-share-alt"></a>
                    </div>
                </div>
            </div>
        </section>
    

        </div>
     );
}
 
export default ShopGallery;