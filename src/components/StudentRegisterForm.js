import React,{useState} from 'react'
import './StudentRegisterForm.css'
import FormInput from './FormInput'
import Sidebar from './Sidebar'

const StudentRegisterForm = () => {
    const[values,setValues]=useState({
        sapid:'',
        email:'',
        password:'',
        confirmPassword:'',
        uploadPhoto:'',
      })

      const inputsStudentRegister=[
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
        {
          id: 4,
          name: "confirmPassword",
          type: "password",
          placeholder: "Confirm Password",
          errorMessage:"Password should be 10 characters and include at least 1 letter, 1 number and 1 special character!",
          label: "Password",
          pattern: values.password,
          required: true,
        },
        {
          id:5,
          name:'uploadPhoto',
          type:"file",
          placeholder:'Upload Photo',
          errorMessage:"Upload a photo!",
          label:'Upload Photo',
          required:true,
        }
      ]
    
      const handleSubmit1 = (e) => {
        e.preventDefault();
      }
    
      const onChange1=(e)=>{
        setValues({...values,
          [e.target.name]:e.target.value})
        }
  return (
    <div>
        <Sidebar />
        <form onSubmit={handleSubmit1} className="registerForm">
        <h1>REGISTER STUDENT</h1>
        {inputsStudentRegister.map((input)=>(
          <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange1} />
        ))}
        
        <button>REGISTER</button>
      </form>
    </div>
  )
}

export default StudentRegisterForm