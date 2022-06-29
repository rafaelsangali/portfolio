import { Sidebar } from "./components/Sidebar/Sidebar"
import { Home } from "./Pages/Home"


function App() {
  return (
    <main className="md:flex">
      <Sidebar />
      <Home />
    </main>
  
  )
}

export default App
