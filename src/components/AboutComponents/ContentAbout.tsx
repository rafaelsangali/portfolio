import { about } from "../../utils/AboutContent"
import { skills } from "../../utils/AboutContent"

export default function ContentAbout() {
  return (
    <div className="flex-col w-screen ml-[80px] mr-2 md:mr-7 md:flex md:flex-row">
      <section className="py-8 px-4 container">
          <div className="flex py-5 items-center">
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
        <div className="flex py-5 items-center">
            <h2 className="font-extrabold text-2xl my-5 mr-2">Skills</h2>
            <span className="flex-grow border-t border-gray-300"></span>
        </div>
          { skills.map((element,index)=> (
            
            <div key={element.skillTitle+index} className="my-5">
              <span className="text-lg gap-2">{element.skillTitle}</span>
              <div  className=" bg-gray-200 rounded-full h-[5px]">
                <div className={`${element.percent} ${element.color} h-[5px] rounded-full`}></div>
              </div>
            </div>
            
          ) 
        )}
      </section>
    </div>

  )
}