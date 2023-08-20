import { Link } from "react-router-dom";

const ResetPassword = () => {
  return (
    <>
      <h1>Main Page</h1>
      <nav>
        <ul>
          <li>
            <Link to="/sign-in">SignIn</Link>
          </li>
          <li>
            <Link to="/sign-up">SignUp</Link>
          </li>
          <li>
            <Link to="/forgot-password">ForgotPassword</Link>
          </li>
          <li>
            <Link to="/reset-password">ResetPassword</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default ResetPassword;
