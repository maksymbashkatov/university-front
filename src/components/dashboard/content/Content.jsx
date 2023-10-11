import './content.scss';

export default function Content(props) {
  const { h1, personPhotoSrc } = props;

  return (
    <main className="main">
      <ul>
        <li>List Title</li>
        <li>List Item1</li>
        <li>List Item2</li>
        <li>List Item3</li>
      </ul>
    </main>
  );
}
