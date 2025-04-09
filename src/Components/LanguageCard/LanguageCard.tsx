import { Link } from "react-router-dom";

type LanguageProps = {
    level:string;
    name:string;
    description:string;

}
const LanguageCard :React.FC<LanguageProps>= ({level,name,description}) => {
  return (
    <div>
      <div className="w-56 text-center mb-3 bg-white rounded-lg shadow-md p-5 border border-gray-200">
  <div className="card-body">
    <h5 className="text-2xl font-bold mb-2">{level}</h5>
    <h5 className="text-xl font-bold mb-2">{name}</h5>
    <p className="text-gray-600 mb-4 text-center">{description}</p>
    
  <Link
    to="/form"
    className="text-blue-700 underline underline-offset-2 hover:underline-opacity-100 opacity-75 hover:opacity-100 transition duration-200"
  >
    Apply
  </Link>

  </div>
</div>

    </div>
  )
}

export default LanguageCard
