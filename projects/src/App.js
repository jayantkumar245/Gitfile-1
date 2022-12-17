import Layout from "./components/pages/Layout";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import LoginReg from "./components/pages/auth/LoginReg";
import SendPasswordResetPassword from "./components/pages/auth/SendPasswordResetEmail";
import ResetPassword from "./components/pages/auth/ResetPassword";
import DashBoard from "./components/pages/DashBoard"
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="login" element={<LoginReg/>}/>
        <Route path="sendpasswordresetemail" element={<SendPasswordResetPassword/>}/>
        <Route path="resetpassword" element={<ResetPassword/>}/>
      </Route>
      <Route path="/dashboard" element={<DashBoard/>}/>
      <Route path="*" element={<h1>404 Page Not Found!!!</h1>}/>
    </Routes>
    </BrowserRouter> 
  );
}

export default App;
