import CoursesData from "../../../public/Json/CoursesJson/Courses.json"
import CoursesCard from "../../Components/CoursesCard/CoursesCard"
import Header from "../../Components/Header/Header"

const Courses: React.FC = () => {
  return (
    <>
      <Header />
      <div className="flex w-full lg:w-[1200px] p-5 gap-2  mx-auto mt-5 flex-wrap ">
        {CoursesData.map((data, index) => (
          <div className="" key={index}>
            <CoursesCard
              courseName={data.courseName}
              duration={data.duration}
              description={data.description}
            />
          </div>
        ))}
      </div>

    </>
  )
}

export default Courses
