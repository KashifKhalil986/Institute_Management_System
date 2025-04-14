import Header from "../../Components/Header/Header"
import StaffCard from "../../Components/StaffCard/StaffCard"
import staffData from "../../../public/Json/StaffJson/StaffCard.json"
const Staff:React.FC = () => {
  return (
    <>
      <Header />
      <div className="flex w-full lg:w-[1200px] p-5 gap-2 mx-auto mt-5 flex-wrap ">
        {staffData.map((data, id) => (
          <div className="" key={id}>
            <StaffCard
            image={data.image}
              teacherName={data.name}
              occupation={data.occupation}
              description={data.description}
            />
          </div>
        ))}
      </div>

    </>
  )
}

export default Staff
