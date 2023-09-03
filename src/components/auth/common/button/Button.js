import './button.scss';
import { useNavigate } from 'react-router-dom';

export default function Submit(props) {
  const { value } = props;
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/');
  };

  return (
    <button
      onClick={navigateToHome}
      className="reg-log-button"
      type="button"
      value={value}
    >
      {value}
    </button>
  );
}
