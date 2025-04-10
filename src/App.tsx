
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './Pages/Home/Home';
import School from './Pages/School/School';
import Language from './Pages/Institute/Language'
import ComputerScience from './Pages/Institute/ComputerScience';
import Form from './Components/Form/Form';
import TuitionAcademy from './Pages/Institute/TuitionAcademy';
import SoftwareHouse from './Pages/Institute/SoftwareHouse';

function App() {

  return (
    <div className="">

      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/school' element={<School/>} />
          {/* <Route path='/:institute/:formName/form' element={<Form/>} /> */}
          <Route path='/form' element={<Form/>} />
          <Route path='/language' element={<Language/>} />
          <Route path='/computer-institute' element={<ComputerScience/>} />
          <Route path='/tuition-academy' element={<TuitionAcademy/>} />
          <Route path='/software-house' element={<SoftwareHouse/>} />


        </Routes>
      </Router>

    </div>
  )
}

export default App
