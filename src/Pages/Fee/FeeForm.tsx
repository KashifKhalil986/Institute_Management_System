import { useNavigate } from "react-router-dom"
import Header from "../../Components/Header/Header"
import { useState } from "react";


const FeeForm: React.FC = () => {

    const navigate = useNavigate();
    const [file, setFile] = useState<File | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0])
        }
    }
    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault();
        if (file) {
            console.log("form Submited")
        }
        else {
            console.log("Please Select File")
        }
    }
    return (
        <div>
            <Header />
            <div className="flex flex-col mx-auto mt-10 w-96  border border-gray-200 shadow rounded p-5">
                <h3 className="text-2xl mx-auto underline">Fee Submission Form</h3>
                <div className="mt-10">
                    <form onSubmit={handleSubmit} >
                        <p className="font-semibold ">Pay your fee to any following accounts:</p>
                        <ul className="list-disc pl-5">
                            <li className="">EasyPaisa 0000000</li>
                            <li className="">Ubl 000000</li>
                            <li className="">Jazz Cash 000000</li>
                        </ul>
                        <div className="mt-10">
                            <label className="block font-medium mb-1">Upload Screenshot:</label>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleFileChange}
                                className="w-full border border-gray-300 rounded px-2 py-1"
                           required
                           />
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
    )
}

export default FeeForm
