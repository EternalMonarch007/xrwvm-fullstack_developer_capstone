import LoginPanel from "./components/Login/Login"
import { Routes, Route } from "react-router-dom";
import Registration from "./components/Register/Register"
function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPanel />} />
      <Route path="/register" element={<Registration />} />
    </Routes>
  );
}
export default App;
