
import '../Style/LoginForm01.css';
import { useState } from "react";
import axios from 'axios';
import {useNavigate} from "react-router-dom";


const LoginForm01 = () => {

	const navigate = useNavigate()

	const [myUsername, setmyUsername] = useState('');
	const [myEmail, setmyEmail] = useState('');
	const [myPassword, setmyPassword] = useState('');

	const [logEmail, setlogEmail] = useState('');
	const [logPass, setlogPass] = useState('');

	const [logstatus, setlogstatus] = useState('')

	const register = () =>{
		axios.post("http://localhost:3577/customer", {username: myUsername, email: myEmail, password: myPassword}).
		then((response)=>{
			console.log(response);
		})
	}

	const login = () =>{
		axios.post("http://localhost:3577/login", {
			email: logEmail,
			password: logPass,
		}).then((response)=>{
			console.log(response);
			if(response.data.message){
				setlogstatus(response.data.message)
			}else{
				setlogstatus("Successfully Login: "+response.data[0].customer_name)
				navigate('/')
			}
			
		})
		
	}
		

    return ( 
        <div>

<a href="https://front.codes/" className="logo" target="_blank">
	
	</a>
	
	<div className="section">
		<div className="container">
			<div className="row full-height justify-content-center">
				<div className="col-12 text-center align-self-center py-5">
					<div className="section pb-5 pt-5 pt-sm-2 text-center">
						<h6 className="mb-0 pb-3"><span>Log In </span><span>Sign Up</span></h6>
			          	<input className="checkbox" type="checkbox" id="reg-log" name="reg-log"/>
			          	<label for="reg-log"></label>
						  <p>{logstatus}</p>
						<div className="card-3d-wrap mx-auto">
							
							<div className="card-3d-wrapper">
						
								<div className="card-front">
									<div className="center-wrap">
										<div className="section text-center">
											<h4 className="mb-4 pb-3">Log In</h4>
											<div className="form-group">
												<input type="email" name="logEmail" onChange={(e)=>{setlogEmail(e.target.value)}} className="form-style" placeholder="Your Email" id="logemail" autoComplete="off"/>
												<i className="input-icon uil uil-at"></i>
											</div>	
											<div className="form-group mt-2">
												<input type="password" name="logPass" onChange={(e)=>{setlogPass(e.target.value)}} className="form-style" placeholder="Your Password" id="logpass" autoComplete="off"/>
												<i className="input-icon uil uil-lock-alt"></i>
											</div>
											<a href="#" className="mybtn mt-4" onClick={login}>submit</a>
                            				<p className="mb-0 mt-4 text-center"><a href="#0" className="link">Forgot your password?</a></p>
				      					</div>
			      					</div>
			      				</div>
								<div className="card-back">
									<div className="center-wrap">
										<div className="section text-center">
											<h4 className="mb-4 pb-3">Sign Up</h4>
											<div className="form-group">
												<input type="text" name="username" onChange={(e)=>{setmyUsername(e.target.value)}} className="form-style" placeholder="Your Full Name" id="logname" autoComplete="off"/>
												<i className="input-icon uil uil-user"></i>
											</div>	
											<div className="form-group mt-2">
												<input type="email" name="email" onChange={(e)=>{setmyEmail(e.target.value)}}  className="form-style" placeholder="Your Email" id="logemail" autoComplete="off"/>
												<i className="input-icon uil uil-at"></i>
											</div>	
											<div className="form-group mt-2">
												<input type="password" name="password" onChange={(e)=>{setmyPassword(e.target.value)}} className="form-style" placeholder="Your Password" id="logpass" autoComplete="off"/>
												<i className="input-icon uil uil-lock-alt"></i>
											</div>
											<a href="#" className="mybtn mt-4" onClick={register}>submit</a>
				      					</div>
			      					</div>
			      				</div>
			      			</div>
			      		</div>
			      	</div>
		      	</div>
	      	</div>
	    </div>
	</div>

        </div>
     );
}
 
export default LoginForm01;