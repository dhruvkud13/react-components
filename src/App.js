import { useState } from 'react';
import './App.css';
// import FormInput from './components/FormInput';
import LoginForm from './components/LoginForm';
import StudentRegisterForm from './components/StudentRegisterForm';
import AssignmentForm from './components/AssignmentForm';
import RaiseQuery from './components/RaiseQuery';
import ScheduleAppointment from './components/ScheduleAppointment';
import Profile from './components/Profile';
import Sidebar from './components/Sidebar';
import Papaparsing from './components/Papaparsing';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App() {

  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/studentRegister" element={<StudentRegisterForm />} />
          <Route path="/assignment" element={<AssignmentForm />} />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/raiseQuery" element={<RaiseQuery />} />
          <Route path="/schedule" element={<ScheduleAppointment />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/papaparsing" element={<Papaparsing />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App
