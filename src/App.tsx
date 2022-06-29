import { Sidebar } from "./components/Sidebar/Sidebar"
import { LoadingScreen } from "./Pages/LoadingScreen"


function App() {
  return (
    <main className="md:flex">
      <Sidebar />
      <LoadingScreen />
    </main>
  
  )
}

export default App
