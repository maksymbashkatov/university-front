import '../auth.scss';
import './forgot-password.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../header/Header';
import Input from '../../common/input/Input';
import Submit from '../../common/submit/Submit';
import Button from '../../common/button/Button';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/');
  };

  return (
    <div className="authContainer">
      <div className="authContent">
        <Header h1="Reset Password" />
        <p className="forgot-password-p">
          Don't worry, happens to the best of us. Enter the email address
          associated with your account and we'll send you a link to reset.
        </p>
        <form>
          <Input
            title="Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@mail.com"
          />
          <div className="forgot-password-buttons">
            <Submit value="Reset" />
            <Button
              onClick={navigateToHome}
              className="reg-log-button"
              value="Cancel"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
