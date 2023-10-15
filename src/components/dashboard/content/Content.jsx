import { useEffect, useState } from 'react';
import './content.scss';

function Lector(props) {
  return (
    <li>
      {props.name}, {props.surname}, {props.email}
    </li>
  );
}

const LECTORS = [
  {
    id: 1,
    name: 'Name1',
    surname: 'Surname1',
    email: 'email1@mail.com',
  },
  {
    id: 2,
    name: 'Name2',
    surname: 'Surname2',
    email: 'email2@mail.com',
  },
  {
    id: 3,
    name: 'Name3',
    surname: 'Surname3',
    email: 'email3@mail.com',
  },
];

export default function Content(props) {
  const [lectors, setLectors] = useState([]);
  useEffect(() => {
    setLectors(LECTORS);
  }, []);

  return (
    <main className="main">
      <button
        onClick={(e) => {
          setLectors([
            ...lectors,
            {
              id: 4,
              name: 'Name4',
              surname: 'Surname4',
              email: 'email3@mail.com',
            },
          ]);
          console.log(lectors);
        }}
      >
        Creat Lector
      </button>
      <ul>
        <li>Name, Surname, Email</li>
        {lectors.map((lector) => (
          <Lector
            key={lector.id}
            name={lector.name}
            surname={lector.surname}
            email={lector.email}
          />
        ))}
      </ul>
    </main>
  );
}
