import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import SignIn from './components/auth/sign-in/SignIn';
import SignUp from './components/auth/sign-up/SignUp';
import ForgotPassword from './components/auth/forgot-password/ForgotPassword';
import ResetPassword from './components/auth/reset-password/ResetPassword';
import Dashboard from './components/dashboard/Dashboard';
import NoPage from './pages/no-page/NoPage';
import Lectors from '../src/components/dashboard/content/Lectors';
import Students from './components/dashboard/content/Students';
import Groups from './components/dashboard/content/Groups';
import Courses from './components/dashboard/content/Courses';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/dashboard" element={<Dashboard />}>
          {/* <Route index element={<Home />} /> */}
          <Route path="courses" element={<Courses />} />
          <Route path="lectors" element={<Lectors />} />
          <Route path="students" element={<Students />} />
          <Route path="groups" element={<Groups />} />
          <Route path="*" element={<NoPage />} />
        </Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}
