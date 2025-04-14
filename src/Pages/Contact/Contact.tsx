import { useNavigate } from "react-router-dom"
import Header from "../../Components/Header/Header"
import { ChangeEvent, FormEvent, useState } from "react";

interface formData{
    name:string;
    email:string;
    phoneNumber:string;
    address:string;
    message:string;

}

const Contact:React.FC = () => {
const navigate = useNavigate();
const [formData,setFormData]=useState<formData>({
    name:"",
    email:"",
    phoneNumber:"",
    address:"",
    message:""

})

const handleChange = (e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>):void=>{
    const {name,value}=e.target
    setFormData({...formData,[name]:[value]})
}
const handleSubmit = async (e:FormEvent<HTMLFormElement>):Promise<void> =>{
    e.preventDefault();
    console.log("submitted",formData)
}
  return (
    <>
    <Header/>
    <div className="flex flex-col lg:flex-row">
        <div className="flex flex-col items-center mx-auto  h-screen">
          <h2 className="text-xl font-bold mt-7 text-center">Contact </h2>
          <div>
          
                <form onSubmit={handleSubmit} className="mt-2 shadow-lg rounded-lg p-6 w-full lg:w-[450px] border border-gray-300">
                  
                  <div className="flex flex-col lg:flex-row gap-5">
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
                        className="w-full mt-2 px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#013D29]"
                        placeholder="Enter your name"
                        
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
                        className="w-full mt-2 px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#013D29]"
                        placeholder="Enter email address"
                        
                      />
                    </div>
                  </div>

             

                  <div className="flex flex-col lg:flex-row gap-5 mt-5">
                  <div className="w-full lg:w-[200px]">
                  <label htmlFor="cnic" className="block text-sm font-medium">
                        Phone Number
                      </label>
                      <input
                        type="number"
                        name="phoneNumber"
                        id="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                        className="w-full mt-2 px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#013D29]"
                        placeholder="Enter Phone Number"
                      />
                    </div>
                    <div className="w-full lg:w-[200px]">
                      <label htmlFor="age" className="block text-sm font-medium">
                        Address
                      </label>
                      <input
                        type="text"
                        name="address"
                        id="address"
                        onChange={handleChange}
                        className="w-full mt-2 px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#013D29]"
                        placeholder="Enter address"
                      />
                    </div>
                   

                  </div>
                  <div className="mt-5 w-full lg:w-[400px]">
                  <label htmlFor="cnic" className="block text-sm font-medium">
                        Message
                      </label>
                      <textarea
                        name="message"
                        id="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={2}
                        className="w-full mt-2 px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#013D29]"
                        placeholder="Enter Message"
                      />
                    </div>
              

                  <div className="w-full flex justify-end gap-2 mt-5">
                    <button type="button" 
                    onClick={()=>navigate(-1)}
                    className="px-2 py-1 rounded border border-gray-500 bg-blue-500 hover:cursor-pointer">
                      Back
                    </button>

                    <button type="submit" className="px-2 py-1 rounded border border-gray-500 bg-blue-500 hover:cursor-pointer">
                      Send Message
                    </button>
                  </div>
                </form>
                </div>

                </div>

                </div>
                
                </>
    );
}
export default Contact
