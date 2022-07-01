import { Content } from "../components/HomeComponents/Content";
import { Sidebar } from "../components/Sidebar";


export function Home() {
  return (
    <main className="flex" >
      <Sidebar />
      <Content />
      
    </main>
  )
}
