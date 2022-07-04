import { Sidebar } from "../components/Sidebar";
import { TopProjectsContent } from "../components/TopProjectsComponents/TopProjectsContent";

export function TopProjetcs() {
  return (
    <main className="flex" >
      <Sidebar />
      <TopProjectsContent />
    </main>
  )
}
