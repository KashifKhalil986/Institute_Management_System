import Header from "../../Components/Header/Header"
import LanguageData from "../../../public/Json/Language/Language.json"
import InstituteCard from "../../../src/Components/InstituteCard/InstituteCard"

const Language :React.FC = () => {
  return (
   <>
   <Header/>
   <div className="flex w-full  p-5 justify-evenly  flex-wrap">
    {LanguageData.map((data,index)=>(
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

export default Language
