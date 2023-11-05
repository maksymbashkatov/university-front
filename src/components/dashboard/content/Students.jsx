import './content.scss';
import { useEffect, useState } from 'react';
import { getStudents, createStudent } from '../../../services/StudentsService';
import Input from '../../common/input/Input';
import Submit from '../../common/submit/Submit';
import Button from '../../common/button/Button';
import Modal from 'react-modal';
import Header from '../header/Header';

function Student(props) {
  const { name, surname, email, age, group } = props;
  return (
    <li>
      <p>{name}</p>
      <p>{surname}</p>
      <p>{email}</p>
      <p>{age}</p>
      <p>{group}</p>
    </li>
  );
}

export default function Students() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');

  useEffect(() => {
    getStudents()
      .then((response) => {
        console.log(response.data.result);
        setStudents(response.data.result);
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
      <h1>Add new student</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createStudent({
            name,
            surname,
            email,
            age,
            imagePath: 'testImagePath',
          })
            .then((response) => {
              setStudents([...students, response.data.result]);
              closeModal();
            })
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
          title="Surname"
          name="surname"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          placeholder="surname"
        />
        <Input
          title="Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="name@mail.com"
        />
        <Input
          title="Age"
          name="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="age"
        />
        <Submit value="Create" />
      </form>
    </div>
  );

  return (
    <>
      <Header h1="Students" />
      <main className="main">
        <Button
          onClick={openModal}
          className="reg-log-submit"
          value="+ Add new student"
        />
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
          {modalContent}
        </Modal>
        <ul className="container">
          <li className="container ul-header">
            <p>Name</p>
            <p>Surname</p>
            <p>Email</p>
            <p>Age</p>
            <p>Group</p>
          </li>
          {students.map((student) => (
            <Student
              key={student.id}
              name={student.name}
              surname={student.surname}
              email={student.email}
              age={student.age}
              group={student.groupName || 'not group'}
            />
          ))}
        </ul>
      </main>
    </>
  );
}
