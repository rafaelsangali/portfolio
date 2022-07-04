import { icons } from "../../assets"
import { CardTopProjects } from "./CardTopProjects"

export function TopProjectsContent(){
 return(
  <section className="pl-[80px] mx-auto my-6 flex flex-wrap justify-center">
  
  <CardTopProjects
  img={""}
  title={""}
  description={""}   
  iconGlobe={icons.iconGlobe}
  iconGithub={icons.iconGithub}
  />
 
  </section>
 )
}