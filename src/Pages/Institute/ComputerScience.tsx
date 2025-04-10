import Header from "../../Components/Header/Header"
import CsData from "../../../public/Json/ComputerInstitute/ComputerInstitute.json"
import InstituteCard from "../../../src/Components/InstituteCard/InstituteCard"

const ComputerScience:React.FC = () => {
    return (
     <>
     <Header/>
     <div className="flex w-full  p-5 justify-evenly  flex-wrap">
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
