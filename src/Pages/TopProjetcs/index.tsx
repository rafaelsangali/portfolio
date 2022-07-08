import { icons } from "../../assets";
import CardTopProjects from "../../components/CardTopProject";

export default function TopProjetcs() {
  return (
    <main className="flex">
      <section className="pl-[80px] mx-auto my-6 flex flex-wrap justify-center">
        <CardTopProjects
          img={""}
          title={""}
          description={""}
          iconGlobe={icons.iconGlobe}
          iconGithub={icons.iconGithub}
        />
      </section>
    </main>
  );
}
