import Header from "../../Components/Header/Header"
import CsData from "../../../public/Json/ComputerInstitute/ComputerInstitute.json"
import InstituteCard from "../../../src/Components/InstituteCard/InstituteCard"

const ComputerScience:React.FC = () => {
    return (
     <>
     <Header/>
      <div className="flex w-full lg:w-[1200px] p-5 gap-2 mx-auto mt-5 flex-wrap ">
      {CsData.map((data,index)=>(
          <div className="" key={index}>
           <InstituteCard
               institute="Computer Science"
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
  

export default ComputerScience
