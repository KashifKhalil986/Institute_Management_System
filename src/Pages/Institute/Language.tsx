import Header from "../../Components/Header/Header"
import LanguageData from "../../../public/Json/Language/Language.json"
import InstituteCard from "../../../src/Components/InstituteCard/InstituteCard"

const Language :React.FC = () => {
  return (
   <>
   <Header/>
   <div className="flex w-full lg:w-[1200px] p-5 gap-2  mx-auto mt-5 flex-wrap ">
   {LanguageData.map((data,index)=>(
        <div className="" key={index}>
         <InstituteCard
         institute="Language"
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
