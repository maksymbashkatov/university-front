import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './sign-in.scss';
import Checkbox from '../../checkbox/Checkbox';
import Submit from '../../submit/Submit';
import Header from '../../header/Header';
import Input from '../../input/Input';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordInputType, setPasswordInputType] = useState('password');

  const changePasswordInputType = (e) => {
    if (passwordInputType === 'password') {
      setPasswordInputType('text');
    } else {
      setPasswordInputType('password');
    }
  };

  return (
    <div className="signInContainer">
      <div className="signInContent">
        <Header />
        <form>
          <Input
            title="Email"
            name="email"
            value={email}
            onChangeFunc={(e) => setEmail(e.target.email)}
            placeholder="name@mail.com"
          />
          <Input
            type={passwordInputType}
            title="Password"
            name="password"
            value={password}
            onChangeFunc={(e) => setPassword(e.target.password)}
          />
          <Checkbox
            onClickFunc={(e) =>
              changePasswordInputType(e.target.passwordInputType)
            }
          />
          <Submit />
        </form>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SignIn />);

export default SignIn;
