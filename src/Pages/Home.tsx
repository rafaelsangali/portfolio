import { ParticlesHome } from "../components/HomeComponents/ParticlesHome";
import { Sidebar } from "../components/Sidebar/Sidebar";


export function Home() {
  return (
    <main className="md:flex">
      <Sidebar />
      <ParticlesHome />
    </main>
  )
}
