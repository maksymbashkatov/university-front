import '../common/styles/auth.scss';
import { useState } from 'react';
import Header from '../common/header/Header';
import Input from '../common/input/Input';
import Checkbox from '../common/checkbox/Checkbox';
import Submit from '../common/submit/Submit';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordInputType, setPasswordInputType] = useState('password');

  const changePasswordInputType = () => {
    if (passwordInputType === 'password') {
      setPasswordInputType('text');
    } else {
      setPasswordInputType('password');
    }
  };

  return (
    <div className="authContainer">
      <div className="authContent">
        <Header h1="Welcome!" />
        <form>
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
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Checkbox onClick={(e) => changePasswordInputType()} />
          <Submit value="Login" />
        </form>
      </div>
    </div>
  );
}
