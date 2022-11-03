import Home from "./Home/Home";
import Thread from "./Thread/Thread";
import AuthModule from "./Auth/Auth.js";
import AuthRegister from "./Auth/AuthRegister";
import AuthLogin from "./Auth/AuthLogin";
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';

export default function Components() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/auth" element={<AuthModule />} />
      <Route path="/auth/register" element={<AuthRegister />} />
      <Route path="/auth/login" element={<AuthLogin />} />
      <Route index element={<AuthModule />} />
      <Route path="thread" element={<Thread />} />
      <Route path="home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}