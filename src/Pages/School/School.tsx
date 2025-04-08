import Header from "../../Components/Header/Header"
import bgImage from "../../../public/images/school.jpeg"

const School:React.FC = () => {
  return (
   <>
   <Header/>
   <div
        className="min-h-screen w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
   </div>
   </>
  )
}

export default School
