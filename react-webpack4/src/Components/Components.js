import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Routes,
  Route
} from "react-router-dom";

import Home from "./Home/Home";
import AuthModule from "./Auth/Auth.js";
import AuthRegister from "./Auth/AuthRegister";
import AuthLogin from "./Auth/AuthLogin";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute.js";
import Thread from "./Thread/Thread";

export default function Components() {
  return (
    <Router>
      <Routes>
        <Route 
          path="/home" 
          element={<ProtectedRoute element={Home} />} 
        />
        <Route path="/auth" element={<AuthModule />} /> {/*i dont think this line is necessary...*/}
        <Route path="/auth/register" element={<AuthRegister />} />
        <Route path="/auth/login" element={<AuthLogin />} />
        <Route path="/thread" element={<Thread />} />
        <Route index element={<AuthModule />} />
        {/* <Route
          path="/"
          element={<ProtectedRoute path="/" element={MainList} />}
        /> */}
        {/* <Route path="*" element={<Navigate to="/auth" replace />} /> */}
      </Routes>
    </Router>
  );
}


// import Home from "./Home/Home";
// import Thread from "./Thread/Thread";
// import AuthModule from "./Auth/Auth.js";
// import AuthRegister from "./Auth/AuthRegister";
// import AuthLogin from "./Auth/AuthLogin";
// import ProtectedRoute from "./ProtectedRoute/ProtectedRoute.js"
// import {
//   BrowserRouter,
//   Route,
//   Routes,
//   Navigate
// } from 'react-router-dom';

// export default function Components() {
//   return (
//     <BrowserRouter>
//       <Routes>
//       <Route path="/auth" element={<AuthModule />} />
//       <Route path="/auth/register" element={<AuthRegister />} />
//       <Route path="/auth/login" element={<AuthLogin />} />
//       <Route index element={<AuthModule />} />
//       <Route path="/thread" element={<Thread />} />
//       <Route path="/home" element={<ProtectedRoute path="/home" element={Home} />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }