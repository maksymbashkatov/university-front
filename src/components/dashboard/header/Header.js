import './header.scss';

export default function Header(props) {
  const { h1, personPhotoSrc } = props;

  return (
    <header className="header">
      <h1>{h1}</h1>
      <div className="header__images container">
        <img src="/images/notification.png" alt="notification" />
        <img src="/images/personExample.png" alt="personPhoto" />
      </div>
    </header>
  );
}
