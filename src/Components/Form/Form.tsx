import { useState, ChangeEvent, FormEvent } from "react";
import Header from "../Header/Header";
import { useLocation, useNavigate , Location } from "react-router-dom";
interface FormData {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    address: string;
    cnic: string;
    age: string;
    phoneNo: string;
    post: string;
    qualification: string;
    subjects:string[];
    shift:string; 

  
}

const Form: React.FC = () => {
  
  const location:Location = useLocation();
  const institute =location.state || {};
  const level =location.state || {};
  console.log("form location" , location);
    const navigate =useNavigate()
  const [next, setNext] = useState<number>(0);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
    cnic: "",
    age: "",
    phoneNo: "",
    post:"",
    qualification: "",
    subjects:[],
    shift:"",
   
  });
const handleNext = (e:FormEvent<HTMLFormElement>):void =>{
e.preventDefault();
setNext((prevNext)=>prevNext+1)
}

const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
  const { name, value, type, checked } = e.target;

  if (type === "checkbox") {
    setFormData((prevState) => {
      const updatedSubjects = checked
        ? [...prevState.subjects, value]
        : prevState.subjects.filter((subject) => subject !== value);

      return { ...prevState, subjects: updatedSubjects };
    });
  } else {
    // Handles text, email, password, number, etc.
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }
};


  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    console.log("form submit");
  };
  return (
    <>
      <Header />
      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-col items-center mx-auto  h-screen">
          <h2 className="text-xl font-bold mt-5 text-center">Applied for {level.level} in {institute.institute}</h2>
          <div>
            {next === 0 ? (
              <>
                <form onSubmit={handleNext} className="mt-5 shadow-lg rounded-lg p-6 w-full lg:w-[450px] border border-gray-300">
                  
                <div className="flex flex-col lg:flex-row gap-5">
                    <div className="w-full lg:w-[200px]">
                      <label htmlFor="name" className="block text-sm font-medium">
                        Institute 
                      </label>
                      <input
                        type="text"
                        name="institute"
                        id="institute"
                        value={institute.institute}
                        className="w-full mt-2 px-2 py-1 border rounded-md focus:outline-none bg-gray-200"
                        placeholder="Institute"
                        disabled
                      />
                    </div>

                    <div className="w-full lg:w-[180px]">
                      <label htmlFor="email" className="block text-sm font-medium">
                        Level 
                      </label>
                      <input
                        type="text"
                        name="level"
                        id="level"
                        value={level.level}
                        className="w-full mt-2 px-2 py-1 border rounded-md bg-gray-200"
                        placeholder="Level"
                        disabled
                      />
                    </div>
                  </div>
                  <div className="flex flex-col lg:flex-row gap-5 mt-5">
                    <div className="w-full lg:w-[200px]">
                      <label htmlFor="name" className="block text-sm font-medium">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full mt-2 px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200
"
                        placeholder="Enter your name"
                        required
                      />
                    </div>

                    <div className="w-full lg:w-[180px]">
                      <label htmlFor="email" className="block text-sm font-medium">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full mt-2 px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200
"
                        placeholder="Enter email address"
                        required
                      />
                    </div>
                  </div>

                  <div className="flex flex-col lg:flex-row gap-5 mt-5">
                  <div className="w-full lg:w-[200px]">
                  <label htmlFor="password" className="block text-sm font-medium">
                        Password <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full mt-2 px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200
"
                        placeholder="Enter password"
                        
                      />
                    </div>

                    <div className="w-full lg:w-[200px]">
                      <label htmlFor="confirmPassword" className="block text-sm font-medium">
                        Confirm Password <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="w-full mt-2 px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200
"
                        placeholder="Confirm password"
                        
                      />
                    </div>
                  </div>

                  <div className="flex flex-col lg:flex-row gap-5 mt-5">
                  <div className="w-full lg:w-[200px]">
                  <label htmlFor="cnic" className="block text-sm font-medium">
                        CNIC
                      </label>
                      <input
                        type="text"
                        name="cnic"
                        id="cnic"
                        value={formData.cnic}
                        onChange={handleChange}
                        className="w-full mt-2 px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200
"
                        placeholder="Enter CNIC"
                      />
                    </div>
                    <div className="w-full lg:w-[200px]">
                      <label htmlFor="age" className="block text-sm font-medium">
                        Age
                      </label>
                      <input
                        type="number"
                        name="age"
                        id="age"
                        value={formData.age}
                        onChange={handleChange}
                        className="w-full mt-2 px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200
"
                        placeholder="Enter age"
                      />
                    </div>
                   

                  </div>

              

                  <div className="w-full flex justify-end gap-2 mt-5">
                    <button type="button" 
                    onClick={()=>navigate(-1)}
                    className="px-2 py-1 rounded border border-gray-500 bg-blue-500 hover:cursor-pointer">
                      Close
                    </button>

                    <button type="submit" className="px-2 py-1 rounded border border-gray-500 bg-blue-500 hover:cursor-pointer">
                      Next
                    </button>
                  </div>
                </form>
              </>
            ) : next === 1 ? (
              <>
                              <form onSubmit={handleNext} className={`  mt-5 shadow-lg rounded-lg p-6 w-full lg:w-[450px]  border border-gray-300`}>


                              <div className="flex flex-col lg:flex-row gap-5 mt-5">
                  <div className="w-full lg:w-[200px]">
                      <label htmlFor="address" className="block text-sm font-medium">
                        Address
                      </label>
                      <input
                        type="text"
                        name="address"
                        id="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full mt-2 px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200
"
                        placeholder="Enter address"
                      />
                    </div>

                    <div className="w-full lg:w-[200px]">
                      <label htmlFor="phoneNo" className="block text-sm font-medium">
                        Phone Number
                      </label>
                      <input
                        type="number"
                        name="phoneNo"
                        id="phoneNo"
                        value={formData.phoneNo}
                        onChange={handleChange}
                        className="w-full mt-2 px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200
"
                        placeholder="Enter phone number"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col lg:flex-row gap-5 mt-5">
                    <div className="w-full lg:w-[200px]">
                      <label htmlFor="subjects" className="block text-sm font-medium">
                        Post
                      </label>
                      <input
                        type="text"
                        name="subjects"
                        id="subjects"
                        value={formData.subjects}
                        onChange={handleChange}
                        className="w-full mt-2 px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200
"
                        placeholder="Enter subjects"
                      />
                    </div>

                    <div className="w-full lg:w-[200px]">
                      <label htmlFor="qualification" className="block text-sm font-medium">
                        Qualification
                      </label>
                      <input
                        type="text"
                        name="qualification"
                        id="qualification"
                        value={formData.qualification}
                        onChange={handleChange}
                        className="w-full mt-2 px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200
"
                        placeholder="Enter qualification"
                      />
                    </div>
                  </div>
                  <div className="w-full flex justify-end gap-2 mt-5">
                    <button type="button" 
                    onClick={()=>navigate(-1)}
                    className="px-2 py-1 rounded border border-gray-500 bg-blue-500 hover:cursor-pointer">
                      Close
                    </button>

                    <button type="submit" className="px-2 py-1 rounded border border-gray-500 bg-blue-500 hover:cursor-pointer">
                      Next
                    </button>
                  </div>
              

               </form>
              
               </>
            ) : next ===2 ? (
                <form onSubmit={handleSubmit} className={`  mt-5 shadow-lg rounded-lg p-6 w-full lg:w-[450px]  border border-gray-300`}>

                <div className="flex flex-col lg:flex-row justify-between mt-5">
                <div className="w-full lg:w-[350px]">
                <label className="block text-sm font-medium mb-2">Applied For:</label>
    <div className="space-y-2">
      {["Mathematics/Rs12000", "Physics/Rs12000", "Chemistry/Rs12000", "Bio/Rs12000"].map((subject) => (
        <label key={`subjects-${subject}`} className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="subjects"
            value={subject}
            checked={formData.subjects.includes(subject)}
            onChange={handleChange}
            className="w-4 h-4 text-green-600 border-gray-300 focus:ring-green-500"
          />
          <span className="text-sm">{subject}</span>
        </label>
      ))}
    </div>
                </div>

                <div className="w-full lg:w-[350px]">
                <label className="block text-sm font-medium mb-2">Shift:</label>
    <div className="space-y-2">
      {["Morning", "Evening"].map((shifts) => (
        <label key={`shift-${shifts}`} className="flex items-center space-x-2">
          <input
            type="radio"
            name="shift"
            value={shifts}
            checked={formData.shift === shifts}
            onChange={handleChange}
            className="w-4 h-4 text-green-600 border-gray-300 focus:ring-green-500"
          />
          <span className="text-sm">{shifts}</span>
        </label>
      ))}
    </div>
                </div>
                
              </div>
              <div className="w-full flex justify-end gap-2 mt-5">
                    <button type="button" 
                    onClick={()=>navigate(-1)}
                    className="px-2 py-1 rounded border border-gray-500 bg-blue-500 hover:cursor-pointer">
                      Close
                    </button>

                    <button type="submit" className="px-2 py-1 rounded border border-gray-500 bg-blue-500 hover:cursor-pointer">
                      Submit
                    </button>
                  </div> 
              </form>
   
            )
        :null
        }
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
