
type CoursesProps ={
    teacherName:string;
    occupation:string;
    description:string;
    image :string;
}

const StaffCard:React.FC <CoursesProps> = ({teacherName,occupation,description,image})=> {
  return (
    <div>
       <div>
         <div className="w-56 text-center mb-2 bg-white rounded-lg shadow-md  border border-gray-200">
           <img className="w-full h-36" src={image} alt="" />
           <div className="card-body p-3">
             <h5 className=" font-semibold ">{teacherName}</h5>
             <h5 className=" font-semibold ">{occupation}</h5>
             <p className="text-gray-600 text-center">{description}</p>
   
   
           </div>
         </div>
   
       </div>
    </div>
  )
}

export default StaffCard
