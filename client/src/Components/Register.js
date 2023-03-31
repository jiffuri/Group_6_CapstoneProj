import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';


const Register = () => {

    const [data, setUserData] = useState({
        fname: "",
        lname:'',
        email:'',
        password:'',
    })

    const storeData=(e)=>{
        setUserData({...data, [e.target.name]: e.target.value});

        console.log(data);
    }
    const submitUserData=(e)=>{
        e.preventDefault();
        const sendData = {
            fname : data.fname,
            lname : data.lname

        }

        axios.post('http://localhost/conn.php', sendData)
        .then((result)=>{
            if(result.data.Status == 'Invalid'){
                alert("Invalid User");}
            else{

            }
                

        })
    }
    return ( 
        <div>
           
            <Form onSubmit={submitUserData}>
                <Form.Field>
                <label>First Name</label>
                <input name="fname" onChange={storeData} value={data.fname} placeholder='First Name' />
                </Form.Field>
                <Form.Field>
                <label>Last Name</label>
                <input name="lname" onChange={storeData} value={data.lname} placeholder='Last Name' />
                </Form.Field>
             
                <Button type='submit'>Submit</Button>
            </Form>

        </div>
     );
}
 
export default Register;