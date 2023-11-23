import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Formula from "./Components/Formula";
import Report from "./Components/Report";
import Footer from "./Components/Footer";
import ScrollToTopBtn from "./Components/ScrollToTopBtn";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          limit={3}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/formula" element={<Formula />} />
          <Route path="/report" element={<Report />} />
        </Routes>
        <Footer />
        <ScrollToTopBtn />
      </BrowserRouter>
    </>
  );
}

export default App;
