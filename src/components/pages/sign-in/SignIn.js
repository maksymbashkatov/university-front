import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './sign-in.scss';
import Checkbox from '../../checkbox/Checkbox';
import Submit from '../../submit/RegLogSubmit';
import Header from '../../headers/RegLogHeader';
import Input from '../../input/Input';

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
    <div className="signInContainer">
      <div className="signInContent">
        <Header h1="Welcome!" />
        <form>
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
            name="password"
            value={password}
            onChangeFunc={(e) => setPassword(e.target.value)}
          />
          <Checkbox onClickFunc={(e) => changePasswordInputType()} />
          <Submit value="Login" />
        </form>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SignIn />);
