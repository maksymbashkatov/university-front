import './content.scss';
import { useEffect, useState } from 'react';
import { getGroups, createGroup } from '../../../services/GroupsService';
import Input from '../../common/input/Input';
import Submit from '../../common/submit/Submit';
import Button from '../../common/button/Button';
import Modal from 'react-modal';
import Header from '../header/Header';

function Group(props) {
  const { name } = props;
  return <li>{name}</li>;
}

export default function Groups() {
  const [groups, setGroups] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => {
    getGroups()
      .then((response) => {
        console.log(response.data.result);
        setGroups(response.data.result);
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
      <h1>Add new group</h1>
      <form
        onSubmit={(e) => {
          createGroup({
            name,
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
        <Submit value="Create" />
      </form>
    </div>
  );

  return (
    <>
      <Header h1="Groups" />
      <main className="main">
        <Button
          onClick={openModal}
          className="reg-log-submit"
          value="+ Add new group"
        />
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
          {modalContent}
        </Modal>
        <ul>
          <li>Name</li>
          {groups.map((group) => (
            <Group key={group.id} name={group.name} />
          ))}
        </ul>
      </main>
    </>
  );
}
