import './input.scss';
import { useState } from 'react';

export default function Input(props) {
  const [focused, setFocused] = useState(false);
  const { onChange, error, id, name, title, type, value, placeholder } = props;

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
          outline: focused
            ? '2px solid #0101ff'
            : error
            ? '1px solid #da1b41'
            : '',
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
