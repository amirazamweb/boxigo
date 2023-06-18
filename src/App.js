import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MoveDetails from "./pages/MoveDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/move-details" element={<MoveDetails />} />
    </Routes>
  );
}

export default App;
