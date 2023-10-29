import './content.scss';
import { useEffect, useState } from 'react';
import { getCourses, createCourse } from '../../../services/CoursesService';
import Input from '../../common/input/Input';
import Submit from '../../common/submit/Submit';
import Button from '../../common/button/Button';
import Modal from 'react-modal';
import Header from '../header/Header';

function Course(props) {
  const { name, description, hours } = props;
  return (
    <li>
      {name} | {description} | {hours}
    </li>
  );
}

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [hours, setHours] = useState('');

  useEffect(() => {
    getCourses()
      .then((response) => {
        console.log(response.data.result);
        setCourses(response.data.result);
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
      <h1>Add new course</h1>
      <form
        onSubmit={(e) => {
          createCourse({
            name,
            description,
            hours,
          })
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
          title="Description"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="description"
        />
        <Input
          title="Hours"
          name="hours"
          value={hours}
          onChange={(e) => setHours(e.target.value)}
          placeholder="00"
        />
        <Submit value="Create" />
      </form>
    </div>
  );

  return (
    <>
      <Header h1="Courses" />
      <main className="main">
        <Button
          onClick={openModal}
          className="reg-log-submit"
          value="+ Add new course"
        />
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
          {modalContent}
        </Modal>
        <ul>
          <li>Name | Description | Hours</li>
          {courses.map((course) => (
            <Course
              key={course.id}
              name={course.name}
              description={course.description}
              hours={course.hours}
            />
          ))}
        </ul>
      </main>
    </>
  );
}
