type CardProps = {
    image: string;
    name: string;
    occupation: string;
    description: string;
  };
  
  const Card: React.FC<CardProps> = ({ image, name, occupation, description }) => {
    return (
      <div className="border border-white rounded overflow-hidden shadow-lg bg-white">
        <div className="overflow-hidden">
          <img
            className="w-full h-64 object-cover"
            src={image}
            alt={name}
          />
        </div>
        <div className="p-3 text-center">
          <h2 className="text-xl font-bold ">{occupation}</h2>
          <h3 className="text-xl font-bold ">{name}</h3>
          <p className="p-3 text-start text-gray-700 text-base">
            {description}
          </p>
        </div>
      </div>
    );
  };
  
  export default Card;