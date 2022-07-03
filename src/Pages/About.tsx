import  ContentAbout  from "../components/AboutComponents/ContentAbout";
import { Sidebar } from "../components/Sidebar";

export function About() {
  return (
    <main className="flex" >
      <Sidebar />
      <ContentAbout />  
    </main>
  )
}
