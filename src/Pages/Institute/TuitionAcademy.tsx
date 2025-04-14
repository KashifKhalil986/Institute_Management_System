import Header from "../../Components/Header/Header"
import TaData from "../../../public/Json/TuitionAcademy/TuitionAcademy.json"
import InstituteCard from "../../../src/Components/InstituteCard/InstituteCard"

const TuitionAcademy:React.FC = () => {
    return (
     <>
     <Header/>
     <div className="flex w-full lg:w-[1200px] p-5 gap-2  mx-auto mt-5 flex-wrap ">
     {TaData.map((data,index)=>(
          <div className="" key={index}>
           <InstituteCard
           institute="Tuition Academy"
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
