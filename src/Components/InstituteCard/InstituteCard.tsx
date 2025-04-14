// import { Link, useLocation, Location } from "react-router-dom";
import { Link } from "react-router-dom";

type InstituteProps = {
  institute: string;
  level: string;
  name: string;
  description: string;
};

const InstituteCard: React.FC<InstituteProps> = ({ level, name, description,institute }) => {
  // const location: Location = useLocation();
  // console.log("location",location)

  return (
    <div>
      <div className="w-56 text-center mb-3 bg-white rounded-lg shadow-md p-5 border border-gray-200">
        <div className="card-body">
          <h5 className="text-xl font-bold mb-2">{institute}</h5>
          <h5 className="text-xl font-bold mb-2">{level}</h5>
          <h5 className="text-xl font-bold mb-2">{name}</h5>
          <p className="text-gray-600 mb-4 text-center">{description}</p>

          <Link
            // to={`${location?.pathname}/${level}/form`}
            to={`/form`}
            className="text-blue-700 underline underline-offset-2 hover:underline-opacity-100 opacity-75 hover:opacity-100 transition duration-200"
          state={{institute,level}}
          >
            Apply
          </Link>

        </div>
      </div>

    </div>
  )
}

export default InstituteCard
