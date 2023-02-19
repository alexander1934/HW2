import React, { useState } from 'react';
import './MultiDropdown.css';
import arrow from '../../styles/images/Vector.svg';

export type Option = {
  /** Ключ варианта, используется для отправки на бек/использования в коде */
  key: string;
  /** Значение варианта, отображается пользователю */
  value: string;
};

/** Пропсы, которые принимает компонент Dropdown */
export type MultiDropdownProps = {
  /** Массив возможных вариантов для выбора */
  options: Option[];
  /** Текущие выбранные значения поля, может быть пустым */
  value: Option[];
  /** Callback, вызываемый при выборе варианта */
  onChange: (value: Option[]) => void;
  /** Заблокирован ли дропдаун */
  disabled?: boolean;
  /** Преобразовать выбранные значения в строку. Отображается в дропдауне в качестве выбранного значения */
  pluralizeOptions: (value: Option[]) => string;
};

export const MultiDropdown: React.FC<MultiDropdownProps> = ({
  options,
  value,
  onChange,
  disabled = false,
  pluralizeOptions,
}) => {
  let [isOpen, openToggler] = React.useState(false);

  function openHandler() {
    return openToggler((prevValue) => !prevValue);
  }

  if (disabled) {
    isOpen = false;
  }

  let chosen = ' chosen';

  const handleOptionClick = (option: Option) => {
    console.log(option);
    if (!disabled) {
      const newValue = value.includes(option)
        ? value.filter((v) => v !== option)
        : [...value, option];
      onChange(newValue);
    }
  };

  return (
    <div className={`multi-dropdown${disabled ? ' disabled' : ''}`}>
      <div className="selected-value" onClick={openHandler}>
        {pluralizeOptions(value)}
        <div className="select-arrow">
          <img src={arrow} alt="" />
        </div>
      </div>
      {isOpen && (
        <div className="options">
          {options.map((option) => (
            <div
              key={option.key}
              className={`option${
                value.includes(option) ? ' selected' : '' + ` ${option.value}`
              }`}
              onClick={() => handleOptionClick(option)}
            >
              {option.value}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MultiDropdown;
