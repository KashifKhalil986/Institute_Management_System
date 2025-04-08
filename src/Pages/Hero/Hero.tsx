import Card from "../../Components/Card/Card";
import CardData from "../../../public/Json/CardJson/CardData.json";

const Hero: React.FC = () => {
  return (
    <>
      <div className="flex w-full justify-center">
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
    </>
  );
};


export default Hero;
