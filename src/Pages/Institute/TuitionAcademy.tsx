import Header from "../../Components/Header/Header"
import TaData from "../../../public/Json/TuitionAcademy/TuitionAcademy.json"
import InstituteCard from "../../../src/Components/InstituteCard/InstituteCard"

const TuitionAcademy:React.FC = () => {
    return (
     <>
     <Header/>
     <div className="flex w-full  p-5 justify-evenly  flex-wrap">
      {TaData.map((data,index)=>(
          <div className="" key={index}>
           <InstituteCard
               level={data.level}
               name={data.name}
               description={data.description}
               />
           
              
          </div>
      ))}
   
     </div>
     </>
    )
  }
  

export default TuitionAcademy
