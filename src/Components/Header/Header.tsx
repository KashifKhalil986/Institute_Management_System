import { useState } from "react";
import MarqueeText from "../Marquee/MarqueeText";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [dropDownOpen, setDropdownOpen] = useState<boolean>(false);
const [academicsOpen,setAcademicsOpen]= useState<boolean>(false);

const academicsDropDown = ():void=>{
  setAcademicsOpen(!academicsOpen)
}
  const instituteDropdown = (): void => {
    setDropdownOpen(!dropDownOpen)
  }


  
  return (
    <header className="w-full bg-blue-500">
      <div className="w-full  p-6 text-center">
        <h1 className="text-white text-3xl font-bold">Welcome to Ims the HUB of Knowledge</h1>
      </div>

      <div className="w-full  py-2 px-4 text-center">
        <ul className="flex justify-center space-x-6 text-white text-xl">
        <li>
            <Link to="/" className="hover:underline">Home</Link>
          </li>
          <li>
            <a href="/about" className="hover:underline">About</a>
          </li>
          <li className="relative">
            <a  className="hover:underline" onClick={instituteDropdown}>
              Institute
              <span className={`ml-1  inline-block transition-transform duration-300 ${dropDownOpen ? 'rotate-180' : 'rotate-0'}`}>^</span>
            </a>
            <ul className={`absolute w-72 ${dropDownOpen ? 'block' : 'hidden'} border bg-blue-500 text-white py-2 px-5 text-[15px] rounded shadow-lg left-[-80px] z-50`}>
              <li ><Link to="/school" className="block py-1 hover:bg-blue-600 cursor-pointer">Farabi First School and Collage</Link></li>
              <li data-page="language"><Link to="/language" className="block py-1 hover:bg-blue-600 cursor-pointer">Farabi English Language Center</Link></li>
              <li data-page="computerScience"><Link to="/computer-institute" className="block py-1 hover:bg-blue-600 cursor-pointer">Farabi Computer Institute</Link></li>
              <li data-page="tuitionAcademy"><Link to="/tuition-academy" className="block py-1 hover:bg-blue-600 cursor-pointer">Farabi Tuition Academy</Link></li>
              <li data-page="softwareHouse"><Link to="/software-house" className="block py-1 hover:bg-blue-600 cursor-pointer">Farabi Fast Software House</Link></li>
            </ul>

          </li>

          <li className="relative">
            <a className="hover:underline" onClick={academicsDropDown}>
            Academics
              <span className={`ml-1  inline-block transition-transform duration-300 ${academicsOpen ? 'rotate-180' : 'rotate-0'}`}>^</span>
            </a>
            <ul className={`absolute w-72 ${academicsOpen ? 'block' : 'hidden'} border bg-blue-500 text-white py-2 px-5 text-[15px] rounded shadow-lg left-[-80px] z-50`}>
              <li><Link to="/director&principle-message" className="block py-1 hover:bg-blue-600 cursor-pointer">Director and Principal Message</Link></li>
              <li><Link to="/courses" className="block py-1 hover:bg-blue-600 cursor-pointer">Courses/Services</Link></li>
              <li><Link to="/teaching-staff" className="block py-1 hover:bg-blue-600 cursor-pointer">Teaching Staff</Link></li>
            </ul>

          </li>
          <li>
            <a href="/fee-form" className="hover:underline">Fee Payment</a>
          </li>
          {/* <li>
            <a href="#" className="hover:underline">Online Test</a>
          </li> */}
          {/* <li>
            <a href="#" className="hover:underline">Form Submission</a>
          </li> */}
          <li>
            <a href="/contact" className="hover:underline">Contact</a>
          </li>
        </ul>
      </div>

      <MarqueeText />
    </header>
  );
};

export default Header;
