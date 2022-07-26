import React,{useState} from 'react';
import Sidebar from './Sidebar';
import FormInput from './FormInput';
import './ScheduleAppointment.css';

const ScheduleAppointment = () => {
    const[values,setValues]=useState({
        sapid:'',
        email:'',
        reason:'',
        preferredDate:'',
        preferredTime:'',
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
            name: "reason",
            type: "text",
            placeholder: "Reason for Appointment",
            errorMessage:"Please enter a reason for the appointment!",
            label: "Reason",
          //   pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
            required: true,
          },
        {
          id: 4,
          name: "preferredDate",
          type: "date",
          placeholder: "Preferred Date",
          errorMessage:"Please enter a preferred date!",
          label: "Preferred Date",
        //   pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
          required: true,
        },
        {
            id: 5,
            name: "preferredTime",
            type: "time",
            placeholder: "Preferred time",
            errorMessage:"Please enter a preferred time!",
            label: "Preferred Time",
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
        <h1>SCHEDULE</h1>
        {inputs.map((input)=>(
          <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} />
        ))}
        
        <button>SCHEDULE</button>
      </form>
    </div>
  )
}

export default ScheduleAppointment