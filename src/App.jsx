import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Home/Navbar";
import Footer from "./components/Home/Footer";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default App;
