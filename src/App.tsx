
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './Pages/Home/Home';
import School from './Pages/School/School';
import Language from './Pages/Institute/Language'
import ComputerScience from './Pages/Institute/ComputerScience';
import Form from './Components/Form/Form';
import TuitionAcademy from './Pages/Institute/TuitionAcademy';
import SoftwareHouse from './Pages/Institute/SoftwareHouse';
import Courses from './Pages/Academics/Courses';
import Message from './Pages/Academics/Message';
import Staff from './Pages/Academics/Staff';
import CoursesForm from './Components/CoursesForm/CoursesForm';
import FeeForm from './Pages/Fee/FeeForm';
import Contact from './Pages/Contact/Contact';
import About from './Pages/About/About';

function App() {

  return (
    <div className="">

      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} /> 
          <Route path='/school' element={<School/>} />
          {/* <Route path='/:institute/:formName/form' element={<Form/>} /> */}
          <Route path='/form' element={<Form/>} />
          <Route path='/language' element={<Language/>} />
          <Route path='/computer-institute' element={<ComputerScience/>} />
          <Route path='/tuition-academy' element={<TuitionAcademy/>} />
          <Route path='/software-house' element={<SoftwareHouse/>} />
          <Route path='/courses' element={<Courses/>} />
          <Route path='/director&principle-message' element={<Message/>} />
          <Route path='/teaching-staff' element={<Staff/>} /> 
          <Route path='/courses-form' element={<CoursesForm/>} /> 
          <Route path='/fee-form' element={<FeeForm/>} /> 
          <Route path='/contact' element={<Contact/>} /> 


        </Routes>
      </Router>

    </div>
  )
}

export default App
