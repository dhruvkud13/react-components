import React from 'react';
import {useState} from 'react';
import FormInput from './FormInput';
import './LoginForm.css'
import Sidebar from './Sidebar';

const LoginForm = () => {
    const[values,setValues]=useState({
        sapid:'',
        email:'',
        password:'',
      })
      const inputs=[
        {
          id:1,
          name:'sapid',
          type:'text',
          placeholder:'SAPID',
          errorMessage:"SAPID should be 10 digits and shouldn't include any other characters!",
          label:'sapid',
          pattern: "^[0-9]{10}$",
          required:true,
        },
        {
          id: 2,
          name: "email",
          type: "email",
          placeholder: "Email",
          errorMessage: "It should be a valid email address!",
          label: "Email",
          required: true,
        },
        {
          id: 3,
          name: "password",
          type: "password",
          placeholder: "Password",
          errorMessage:"Password should be 10 characters and include at least 1 letter, 1 number and 1 special character!",
          label: "Password",
          pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
          required: true,
        },
      ]
    
      
    
      const handleSubmit = (e) => {
        e.preventDefault();
      }
    
      const onChange=(e)=>{
        setValues({...values,
          [e.target.name]:e.target.value})
      }
  return (
    <div>
        <Sidebar />
        <form onSubmit={handleSubmit}>
        <h1>LOGIN</h1>
        {inputs.map((input)=>(
          <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} />
        ))}
        
        <button>Submit</button>
      </form>
    </div>
  )
}

export default LoginForm