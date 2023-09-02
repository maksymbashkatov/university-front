import './index.scss';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './components/auth/main-page/MainPage';
import SignIn from './components/auth/sign-in/SignIn';
import SignUp from './components/auth/sign-up/SignUp';
import ForgotPassword from './components/auth/forgot-password/ForgotPassword';
import ResetPassword from './components/auth/reset-password/ResetPassword';
import NoPage from './components/no-page/NoPage';

function App() {
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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
