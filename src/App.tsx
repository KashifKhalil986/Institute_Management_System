
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './Pages/Home/Home';
import School from './Pages/School/School';
import Language from './Pages/Language/Language';
import Form from './Components/Form/Form';

function App() {

  return (
    <div className="">

      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/school' element={<School/>} />
          <Route path='/Language' element={<Language/>} />
          <Route path='/form' element={<Form/>} />


        </Routes>
      </Router>

    </div>
  )
}

export default App
