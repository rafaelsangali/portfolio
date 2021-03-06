import { icons } from "../../assets";
import TabContent from "../../components/Tabs/TabContent";
import TabNav from "../../components/Tabs/TabNav";
import TransitionMain from "../../components/TransitionMain";
import { TabsProvider } from "../../contexts/TabsContext";
import { about, skills } from "./objectTextSkills";

export default function About() {
  return (
    <TransitionMain className="flex">
      <div className="flex-col w-screen ml-[80px] mr-2 md:mr-7 md:flex md:flex-row">
        <section className="py-8 px-4 container">
          <div className="flex py-5 items-center">
            <h2 className="font-extrabold text-2xl my-5 mr-2">{about.title}</h2>
            <span className="flex-grow border-t border-gray-300"></span>
          </div>
          <p className="my-2">
            <span className="font-bold">{about.subtitle}</span>
            {about.firstText}
          </p>
          <p className="my-2">{about.secondText}</p>
          <p className="my-2">{about.thirdText}</p>
        </section>
        <section className="py-8 px-4 container">
          <div className="flex py-5 items-center">
            <h2 className="font-extrabold text-2xl my-5 mr-2">Skills</h2>
            <span className="flex-grow border-t border-gray-300"></span>
          </div>
          <div>
            <TabsProvider>
              <>
                <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500">
                  {skills.map((nav, index) => (
                    <TabNav
                      key={nav.title + index}
                      index={index}
                      img={nav.img}
                    />
                  ))}
                </ul>
                {skills.map((content, index) => (
                  <TabContent
                    key={content.title + index}
                    title={content.title}
                    index={index}
                    text={content.text}
                  />
                ))}
              </>
            </TabsProvider>
          </div>
        </section>
      </div>
    </TransitionMain>
  );
}
