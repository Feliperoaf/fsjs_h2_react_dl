import "./App.css";
import Footer from "./componentes/Footer";
import Home from "./pages/Home";
import Navbar from "./componentes/Navbar";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  return (
    <div className="bg-gray-100">
      <Navbar />
      {/* <Home /> */}
      {/* <Register /> */}
      <Login />
      <Footer />
    </div>
  );
}

export default App;
