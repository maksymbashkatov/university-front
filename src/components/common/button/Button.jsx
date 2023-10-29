import './button.scss';

export default function Submit(props) {
  const { onClick, className, value } = props;

  return (
    <button onClick={onClick} className={className} type="button" value={value}>
      {value}
    </button>
  );
}
