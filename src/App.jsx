import Form from "./components/Form";
import Tabel from "./components/Tabel";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/form" element={<Form />} />
          <Route path="/" element={<Tabel />} />
        </Routes>
      </BrowserRouter>

      {/* ✅ Add ToastContainer here */}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default App;
