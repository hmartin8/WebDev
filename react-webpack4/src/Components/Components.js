import Home from "./Home/Home";
import Thread from "./Thread/Thread";
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';

export default function Components() {
  return (
    <BrowserRouter>
      <Routes>
      <Route index element={<Home />} />
      <Route path="thread" element={<Thread />} />
      </Routes>
    </BrowserRouter>
  );
}