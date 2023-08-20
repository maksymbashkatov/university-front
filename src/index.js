import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.scss";
import SignIn from "./components/pages/sign-in/SignIn";
import SignUp from "./components/pages/sign-up/SignUp";
import ForgotPassword from "./components/pages/forgot-password/ForgotPassword";
import ResetPassword from "./components/pages/reset-password/ResetPassword";
import MainPage from "./components/pages/main-page/MainPage";
import NoPage from "./components/pages/no-page/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
