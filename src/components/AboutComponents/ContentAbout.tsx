import { about, skills } from "../../utils/AboutContent"


export default function ContentAbout() {
  return (
    <div className="flex-col w-screen ml-[80px] mr-2 md:mx-7 md:flex md:flex-row">
      <section className="py-8 px-4 container">
          <div className="relative flex py-5 items-center">
            <h2 className="font-extrabold text-2xl my-5 mr-2">{about.title}</h2>
            <span className="flex-grow border-t border-gray-300"></span>
          </div>
          <p className="my-2">
            <span className="font-bold">
              {about.subtitle}
            </span>
            {about.firstText}
          </p>
          <p className="my-2">
            {about.secondText}
          </p>
          <p className="my-2">
            {about.thirdText}
          </p>
      </section>
      <section className="py-8 px-4 container">
        <div className="relative flex py-5 items-center">
            <h2 className="font-extrabold text-2xl my-5 mr-2">Skills</h2>
            <span className="flex-grow border-t border-gray-300"></span>
        </div>
          { skills.map((element)=> (
            
            <div key={element.key} className="my-5">
              <span className="text-lg gap-2">{element.skillTitle}</span>
              <div  className="w-full bg-gray-200 rounded-full h-[2px] dark:bg-gray-700">
                <div className={`bg-blue-600 h-[2px] rounded-full  w-${element.percent}`}></div>
              </div>
            </div>
            
          ) 
        )}
      </section>
    </div>

  )
}

{/* <span className="text-lg">React</span>
          <div className="w-full bg-gray-200 rounded-full h-[2px] dark:bg-gray-700">
            <div className="bg-red-600 h-[2px] rounded-full w-[45%]"></div>
          </div> */}