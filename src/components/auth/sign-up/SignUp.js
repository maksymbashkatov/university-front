import './sign-up.scss';
import { useState } from 'react';
import Header from '../common/header/Header';
import Input from '../common/input/Input';
import Checkbox from '../common/checkbox/Checkbox';
import Submit from '../common/submit/Submit';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [passwordInputType, setPasswordInputType] = useState('password');
  const [error, setError] = useState(false);

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
    <div className="signUpContainer">
      <div className="signUpContent">
        <Header h1="Register your account" />
        <form
          onSubmit={(e) => {
            if (!isPasswordConfirmed(password1, password2)) {
              e.preventDefault();
              setError(true);
            }
          }}
        >
          <Input
            title="Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@mail.com"
          />
          <Input
            type={passwordInputType}
            title="Password"
            name="password1"
            value={password1}
            onChange={(e) => {
              setPassword1(e.target.value);
            }}
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
          <Checkbox onClick={() => changePasswordInputType()} />
          <Submit value="Register" />
        </form>
      </div>
    </div>
  );
}
