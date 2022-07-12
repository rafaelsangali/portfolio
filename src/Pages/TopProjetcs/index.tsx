import CardTopProject from "../../components/CardTopProject";
import TransitionMain from "../../components/TransitionMain";
import { projects } from "./objectProjects";

export default function TopProjetcs() {
  return (
    <TransitionMain className=" ml-[80px] flex flex-wrap">
      {projects.map((project, index) => (
        <CardTopProject
          key={project.title + index}
          title={project.title}
          text={project.text}
          img={project.img}
          urlWeb={project.urlWeb}
          urlGit={project.urlGit}
        />
      ))}
    </TransitionMain>
  );
}
