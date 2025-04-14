import Header from "../../Components/Header/Header"

const About:React.FC = () => {
  return (
   <>
   <Header/>
   <div className="flex flex-col mt-5 w-[1200px] mx-auto ">
    <div className="flex flex-col items-center p-2 border-2 border-gray-200 rounded-lg  shadow-md">
<h3 className="text-2xl font-semibold ">
    All About Farabi
</h3>
<p className="w-[900px] text-center p-2">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero incidunt nisi magni quae, nihil debitis? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius provident dicta eum sit? Nisi sint in blanditiis soluta rem ut. Dicta, soluta. Dignissimos excepturi est, consequatur dolores aliquid deserunt modi, voluptatum exercitationem ipsum ducimus commodi odio. Minima tempore sit eos qui unde.</p>
    </div>
    <div className="flex flex-col items-center p-2 border-2 border-gray-200 rounded-lg  shadow-md mt-5">
<h3 className="text-2xl font-semibold">
   Why Choose us?
</h3>
<p className="w-[900px] text-center p-2">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, libero illum labore eos voluptate iste. Eius provident dicta eum sit? Nisi sint in blanditiis soluta rem ut. Dicta, soluta. Dignissimos excepturi est, consequatur dolores aliquid deserunt modi, voluptatum exercitationem ipsum ducimus commodi odio. Minima tempore sit eos qui unde.</p>
    </div>
   </div>
   </>
  )
}

export default About
