import Header from "../../Components/Header/Header"
import ShData from "../../../public/Json/SoftwareHouse/SoftwareHouse.json"
import InstituteCard from "../../../src/Components/InstituteCard/InstituteCard"

const SoftwareHouse:React.FC = () => {
    return (
     <>
     <Header/>
     <div className="flex w-full lg:w-[1200px] p-5 gap-2  mx-auto mt-5 flex-wrap ">
     {ShData.map((data,index)=>(
          <div className="" key={index}>
           <InstituteCard
           institute="Software House"
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
