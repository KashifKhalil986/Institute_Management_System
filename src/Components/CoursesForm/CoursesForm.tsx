
import { useState, ChangeEvent, FormEvent } from "react";
import Header from "../Header/Header";
import { useLocation, useNavigate, Location } from "react-router-dom";
interface FormData {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    address: string;
    cnic: string;
    age: string;
    phoneNo: string;



}

const CoursesForm: React.FC = () => {

    const location: Location = useLocation();
    const courseName = location.state ||{};
    console.log("courses form location", location.state);
    const navigate = useNavigate()

    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        address: "",
        cnic: "",
        age: "",
        phoneNo: "",


    });


    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
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
                    <h2 className="text-xl font-bold mt-5 text-center">Applied for {courseName} in Courses</h2>
                    <div>

                        <form onSubmit={handleSubmit} className="mt-5 shadow-lg rounded-lg p-6 w-full lg:w-[450px] border border-gray-300">
                        
                            <div className="flex flex-col lg:flex-row gap-5">
                    <div className="w-full lg:w-[200px]">
                      <label htmlFor="name" className="block text-sm font-medium">
                      Course Name 
                      </label>
                      <input
                        type="text"
                        name="institute"
                        id="institute"
                        value={courseName}
                        className="w-full mt-2 px-2 py-1 border rounded-md focus:outline-none bg-gray-200"
                        placeholder="Institute"
                        disabled
                      />
                    </div>

                    {/* <div className="w-full lg:w-[180px]">
                      <label htmlFor="email" className="block text-sm font-medium">
                        Level 
                      </label>
                      <input
                        type="text"
                        name="level"
                        id="level"
                        value={level.level}
                        className="w-full mt-2 px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200
"
                        placeholder="Level"
                      />
                    </div> */}
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

                                <div className="w-full lg:w-[200px]">
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


                            <div className="w-full flex justify-end gap-2 mt-5">
                                <button type="button"
                                    onClick={() => navigate(-1)}
                                    className="px-2 py-1 rounded border border-gray-500 bg-blue-500 hover:cursor-pointer">
                                    Close
                                </button>

                                <button type="submit" className="px-2 py-1 rounded border border-gray-500 bg-blue-500 hover:cursor-pointer">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CoursesForm
