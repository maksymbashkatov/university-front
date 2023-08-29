import './sign-up.scss';
import { useState } from 'react';
import Header from '../../headers/RegLogHeader';
import Input from '../../input/Input';
import Checkbox from '../../checkbox/Checkbox';
import Submit from '../../submit/RegLogSubmit';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [passwordInputType, setPasswordInputType] = useState('password');
  const [confirmPasswordLabelColor, setConfirmPasswordLabelColor] =
    useState('');
  const [confirmPasswordBorder, setConfirmPasswordBorder] = useState('');
  // '1px solid #da1b41'

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
              setConfirmPasswordLabelColor('#da1b41');
              setConfirmPasswordBorder('1px solid #da1b41');
            }
          }}
        >
          <Input
            title="Email"
            name="email"
            value={email}
            onChangeFunc={(e) => setEmail(e.target.value)}
            placeholder="name@mail.com"
          />
          <Input
            type={passwordInputType}
            title="Password"
            name="password1"
            value={password1}
            onChangeFunc={(e) => {
              setPassword1(e.target.value);
            }}
          />
          <Input
            type={passwordInputType}
            title="Confirm Password"
            name="password2"
            value={password2}
            onChangeFunc={(e) => {
              setPassword2(e.target.value);
            }}
            labelColor={confirmPasswordLabelColor}
            inputBorderColor={confirmPasswordBorder}
          />
          <Checkbox onClickFunc={() => changePasswordInputType()} />
          <Submit value="Register" />
        </form>
      </div>
    </div>
  );
}
