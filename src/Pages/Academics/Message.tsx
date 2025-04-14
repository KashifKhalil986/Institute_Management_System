import Header from "../../Components/Header/Header"

const Message:React.FC = () => {
  return (
    <div>
        <Header/>
            <h3 className="text-2xl font-semibold text-center mt-5">Director and Principle Message</h3>
        <div className="flex flex-col lg:flex-row w-full lg:w-[1200px] mx-auto justify-between  mt-5">
            <div className="flex flex-col w-full lg:w-[590px] p-2  justify-center items-center border-2 border-blue-200 rounded shadow">
                <div className="">
                    <h3 className="text-xl font-semibold ">Director Message</h3>
                    </div>
                <div className="mt-3 w-[560px] p-2">
                    <p className="text-start ">Lorem, ipsum dolor sit consectetur adipisicing elit. Non ducimus magni fugit optio cumque eius praesentium consectetur accusamus natus incidunt culpa, dolor molestiae fugiat vel, dignissimos voluptas reprehenderit ratione voluptates asperiores iure pariatur, facilis quasi omnis dolore. Magnam, quis, velit natus quae in modi ratione praesentium explicabo ipsa voluptas deleniti similique perspiciatis? Odio molestias placeat a laborum veritatis cum vel!</p>
                </div>
             
            </div>
            <div className="flex flex-col w-full lg:w-[590px] p-2  justify-center items-center border-2 border-blue-200 rounded shadow">
                <div className="">
                    <h3 className="text-xl font-semibold">Principle Message</h3>
                    </div>
                <div className="mt-3 w-[560px] p-2">
                    <p className="text-start ">Lorem, ipsum dolor sit consectetur adipisicing elit. Non ducimus magni fugit optio cumque eius praesentium consectetur accusamus natus incidunt culpa, dolor molestiae fugiat vel, dignissimos voluptas reprehenderit ratione voluptates asperiores iure pariatur, facilis quasi omnis dolore. Magnam, quis, velit natus quae in modi ratione praesentium explicabo ipsa voluptas deleniti similique perspiciatis? Odio molestias placeat a laborum veritatis cum vel!</p>
                </div>
             
            </div>
        </div>
    </div>
  )
}

export default Message
