import Card from "../../Components/Card/Card";
import CardData from "../../../public/Json/CardJson/CardData.json";
import bgImage from '../../../public/images/institute-bgg.avif'

const Hero: React.FC = () => {
  return (
    <>
     <div className="">
   <div className="relative">
   <div
  className={` bg-div w-full min-h-screen bg-cover bg-center relative`} 
  style={{backgroundImage:`url(${bgImage})`}}
>
</div>
<div className="absolute z-50 top-36 right-20 p-2">
  <div className="">

  <h3 className="text-4xl text-white font-semibold">All About Farabi Institute</h3>
  </div>
  <div className="mt-5">
  <a className="border hover:bg-blue-500 rounded p-2 text-white font-semibold" href="/contact">Lets Contact</a>
  <p className="mt-3.5 w-[420px] text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui distinctio deleniti,ipsum dolor sit nam minus harum rem.</p>
  </div>

  </div>
   </div>

     <div className="flex w-full justify-center mt-10">
        <div className="flex flex-wrap justify-start gap-5 w-full sm:w-11/12 md:w-3/4 lg:w-[90%]">
          {CardData.map((person, index) => (
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-[23%] p-2" key={index}>
              <Card
                image={person.image}
                name={person.name}
                occupation={person.occupation}
                description={person.description}
              />
            </div>
          ))}
        </div>
      </div>
     </div>
    </>
  );
};


export default Hero;
