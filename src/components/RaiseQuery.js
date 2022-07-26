import React from 'react';
import { useState } from 'react';
import FormInput from './FormInput';
import Sidebar from './Sidebar';
import './RaiseQuery.css';

const RaiseQuery = () => {
    const[values,setValues]=useState({
        sapid:'',
        email:'',
        query:'',
        moreInfo:'',
      })
      const inputs=[
        {
          id:1,
          name:'sapid',
          type:'text',
          placeholder:'SAPID',
          errorMessage:"SAPID should be 10 digits and shouldn't include any other characters!",
          label:'SAPID',
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
          name: "query",
          type: "text",
          placeholder: "Query",
          errorMessage:"Please enter a query!",
          label: "Query",
        //   pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
          required: true,
        },
        {
            id: 4,
            name: "moreInfo",
            type: "text",
            placeholder: "Detailed Info about the query",
            errorMessage:"Please enter a query!",
            label: "Query Info",
          //   pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
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
        <h1>RAISE A QUERY</h1>
        {inputs.map((input)=>(
          <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} />
        ))}
        
        <button>RAISE QUERY</button>
      </form>
    </div>
  )
}

export default RaiseQuery