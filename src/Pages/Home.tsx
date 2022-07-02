import { ContentHome } from "../components/HomeComponents/ContentHome";
import { Sidebar } from "../components/Sidebar";


export function Home() {
  return (
    <main className="flex" >
      <Sidebar />
      <ContentHome />
    </main>
  )
}
