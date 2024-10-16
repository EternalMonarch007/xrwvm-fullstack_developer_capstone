import LoginPanel from "./components/Login/Login"
import { Routes, Route } from "react-router-dom";
import Registration from "./components/Register/Register"
import Dealers from './components/Dealers/Dealers';
import Dealer from "./components/Dealers/Dealer"
import PostReview from "./components/Dealers/PostReview"
function App() {
  return (
    <Routes>
      <Route path="/postreview/:id" element={<PostReview/>} />
      <Route path="/dealer/:id" element={<Dealer/>} />
      <Route path="/login" element={<LoginPanel />} />
      <Route path="/register" element={<Registration />} />
      <Route path="/dealers" element={<Dealers/>} />
    </Routes>
  );
}
export default App;
