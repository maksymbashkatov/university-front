import '../common/styles/auth.scss';
import '../reset-password/reset-password.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../common/header/Header';
import Input from '../common/input/Input';
import Checkbox from '../common/checkbox/Checkbox';
import Submit from '../common/submit/Submit';
import Button from '../common/button/Button';

export default function SignIn() {
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [passwordInputType, setPasswordInputType] = useState('password');
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const navigateToLogIn = () => {
    navigate('/sign-in');
  };

  const changePasswordInputType = () => {
    if (passwordInputType === 'password') {
      setPasswordInputType('text');
    } else {
      setPasswordInputType('password');
    }
  };

  const isPasswordConfirmed = (password1, password2) => {
    return password1 === password2;
  };

  return (
    <div className="authContainer">
      <div className="authContent">
        {!success ? (
          <>
            <Header h1="Reset Your Password" />
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (!isPasswordConfirmed(password1, password2)) {
                  setError(true);
                  return;
                }
                setSuccess(true);
              }}
            >
              <Input
                type={passwordInputType}
                title="New Password"
                name="password1"
                value={password1}
                onChange={(e) => setPassword1(e.target.value)}
              />
              <Input
                type={passwordInputType}
                title="Confirm Password"
                name="password2"
                value={password2}
                onChange={(e) => {
                  setError(false);
                  setPassword2(e.target.value);
                }}
                error={error}
              />
              <Checkbox onClick={(e) => changePasswordInputType()} />
              <Submit value="Reset" />
            </form>
          </>
        ) : (
          <>
            <Header h1="Password Changed" />
            <p className="reset-password-p">
              You can use your new password to log into your account
            </p>
            <form onSubmit={navigateToLogIn}>
              <div className="reset-password-buttons">
                <Submit value="Log In" />
                <Button value="Go to Home" />
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
