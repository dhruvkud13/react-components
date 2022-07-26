import React,{useState} from 'react';
import FormInput from './FormInput';
import Sidebar from './Sidebar';

const AssignmentForm = () => {
  const[values,setValues]=useState({
    maxMarks:'',
    // email:'',
    startDate:'',
    endDate:'',
    assignment:'',
  })
  const inputs=[
    {
      id:1,
      name:'maxMarks',
      type:'number',
      placeholder:'Maximum Marks',
      errorMessage:"Max Marks should be a number",
      label:'maxMarks',
      pattern: "^[0-9]$",
      required:true,
    },
    {
      id: 2,
      name: "startDate",
      type: "date",
      placeholder: "Start Date",
      // errorMessage:"Password should be 10 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Start Date",
      // pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 3,
      name: "endDate",
      type: "date",
      placeholder: "End Date",
      // errorMessage:"Password should be 10 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "End Date",
      // pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id:4,
      name:'assignment',
      type:"file",
      placeholder:'Upload Assignment',
      errorMessage:"Upload an assignment!",
      label:'Upload Assignment',
      required: true,
    }
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
      <Sidebar/>
      <form onSubmit={handleSubmit}>
        <h1>MAKE ASSIGNMENT</h1>
        {inputs.map((input)=>(
          <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} />
        ))}
        
        <button>SET ASSIGNMENT</button>
      </form>
    </div>
  )
}

export default AssignmentForm