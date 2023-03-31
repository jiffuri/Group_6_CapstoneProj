import TestInput from '../Components/TestInput';
import { CartState } from '../Context/Context';
import '../Style/contact.css';




const Contact = () => {

    const {state} =  CartState()

    console.log(state);

    return ( 
<div>

        <TestInput/>

 
    <section className="contact">

        <div className="row">
            <form action="">
                <h3>get in touch</h3>
                <div className="inputBox">
                    <input type="text" placeholder="Enter your name" className="box"/>
                    <input type="text" placeholder="Enter your Email" className="box"/>
                </div>
                <div className="inputBox">
                    <input type="number" placeholder="Enter your number" className="box"/>
                    <input type="text" placeholder="Enter your subject" className="box"/>
                </div>
                <textarea placeholder="Your message" cols="30" rows="10"></textarea>
                <input type="submit" value="send message" className="btn"/>
            </form>
            <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125585.22372709139!2d123.77625413271971!3d10.378756863745503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a999258dcd2dfd%3A0x4c34030cdbd33507!2sCebu%20City%2C%20Cebu!5e0!3m2!1sen!2sph!4v1675741411552!5m2!1sen!2sph" width="600" height="450" ></iframe>
        </div>
    </section>


    {/* style={{border:0, allowfullscreen="", loading="lazy", referrerpolicy="no-referrer-when-downgrade}} */}






</div>
     );
}
 
export default Contact;



