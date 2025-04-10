import Header from "../../Components/Header/Header"
import ShData from "../../../public/Json/SoftwareHouse/SoftwareHouse.json"
import InstituteCard from "../../../src/Components/InstituteCard/InstituteCard"

const SoftwareHouse:React.FC = () => {
    return (
     <>
     <Header/>
     <div className="flex w-full  p-5 justify-evenly  flex-wrap">
      {ShData.map((data,index)=>(
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
  

export default SoftwareHouse
