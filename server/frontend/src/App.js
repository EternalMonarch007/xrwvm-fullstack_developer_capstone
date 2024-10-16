import LoginPanel from "./components/Login/Login"
import { Routes, Route } from "react-router-dom";
import Registration from "./components/Register/Register"
import Dealers from './components/Dealers/Dealers';
function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPanel />} />
      <Route path="/register" element={<Registration />} />
      <Route path="/dealers" element={<Dealers/>} />
    </Routes>
  );
}
export default App;
