
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './Pages/Home/Home';
import School from './Pages/School/School';
import Language from './Pages/Language/Language';

function App() {

  return (
    <div className="">

      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/school' element={<School/>} />
          <Route path='/Language' element={<Language/>} />


        </Routes>
      </Router>

    </div>
  )
}

export default App
