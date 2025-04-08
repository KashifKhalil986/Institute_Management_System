import Header from "../../Components/Header/Header"
import LanguageCard from "../../Components/LanguageCard/LanguageCard"
import LanguageData from "../../../public/Json/Language/Language.json"

const Language :React.FC = () => {
  return (
   <>
   <Header/>
   <div className="flex w-full  p-5 justify-evenly  flex-wrap">
    {LanguageData.map((data,index)=>(
        <div className="" key={index}>
            <LanguageCard
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
