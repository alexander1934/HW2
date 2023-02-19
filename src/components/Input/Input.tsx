import React from 'react';
import './Input.css';

export type InputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'onChange' | 'value'
> & {
  /** Значение поля */
  value: string;
  /** Callback, вызываемый при вводе данных в поле */
  onChange: (value: any) => void;
};

export const Input: React.FC<InputProps> = ({ className, ...props }) => {
  let inputClass = 'input';

  if (props.disabled) {
    inputClass += ' input_disabled';
  }
  if (className !== undefined) {
    inputClass += ` ${className}`;
  }
  return <input
  {...props}
  className={inputClass}
  type="text"
  value={props.value}
  onChange={(e) => {
    props.onChange(e.target.value);
  }}
/>;
};
