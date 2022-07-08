import {
  BrowserRouter,
  Route as RouteWrapper,
  Routes as RoutesWrapper,
} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import About from "./Pages/About";
import AllProjetcs from "./Pages/AllProjetcs";
import Home from "./Pages/Home";
import TopProjetcs from "./Pages/TopProjetcs";

export function Routes() {
  return (
    <BrowserRouter>
      <Sidebar />
      <RoutesWrapper>
        <RouteWrapper path="/" element={<Home />} />
        <RouteWrapper path="/about" element={<About />} />
        <RouteWrapper path="/top-projects" element={<TopProjetcs />} />
        <RouteWrapper path="/all-projects" element={<AllProjetcs />} />
      </RoutesWrapper>
    </BrowserRouter>
  );
}
