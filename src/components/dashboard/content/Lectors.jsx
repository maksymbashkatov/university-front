import './content.scss';
import { useEffect, useState } from 'react';
import { getLectors, createLector } from '../../../services/LectorsService';
import Input from '../../common/input/Input';
import Checkbox from '../../common/checkbox/Checkbox';
import Submit from '../../common/submit/Submit';
import Button from '../../common/button/Button';
import Modal from 'react-modal';
import Header from '../header/Header';

function Lector(props) {
  const { name, email } = props;
  return (
    <li>
      {name} | {email}
    </li>
  );
}

export default function Lectors() {
  const [lectors, setLectors] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [passwordInputType, setPasswordInputType] = useState('password');
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

  const [error, setError] = useState(false);

  useEffect(() => {
    getLectors()
      .then((response) => {
        console.log(response.data.result);
        setLectors(response.data.result);
      })
      .catch(console.log);
  }, []);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const modalContent = (
    <div>
      <h1>Add new lector</h1>
      <form
        onSubmit={(e) => {
          if (!isPasswordConfirmed(password1, password2)) {
            e.preventDefault();
            setError(true);
          }
          createLector({ name, email, password: password1 })
            .then(console.log)
            .catch(console.log);
        }}
      >
        <Input
          title="Name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="name"
        />
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
        <Submit value="Create" />
      </form>
    </div>
  );

  return (
    <>
      <Header h1="Lectors" />
      <main className="main">
        <Button
          onClick={openModal}
          className="reg-log-submit"
          value="+ Add new lector"
        />
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
          {modalContent}
        </Modal>
        <ul>
          <li>Name | Email</li>
          {lectors.map((lector) => (
            <Lector key={lector.id} name={lector.name} email={lector.email} />
          ))}
        </ul>
      </main>
    </>
  );
}
