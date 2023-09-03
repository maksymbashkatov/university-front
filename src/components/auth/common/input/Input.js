import './input.scss';
import { useState } from 'react';

export default function Input(props) {
  const [focused, setFocused] = useState(false);
  const { onChange, error, id, name, title, type, value, placeholder } = props;

  const inputOutlineStyle = () => {
    if (focused) {
      return '2px solid #0101ff';
    } else if (error) {
      return '1px solid #da1b41';
    }
  };

  return (
    <div className="form-control">
      <label
        for={id || name}
        style={{ color: focused ? '#0101ff' : error ? '#da1b41' : '' }}
      >
        {title}
      </label>
      <input
        // required
        style={{
          outline: inputOutlineStyle(),
        }}
        id={id || name}
        type={type || name}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={placeholder || ''}
      />
    </div>
  );
}
