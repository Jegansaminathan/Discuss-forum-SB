import React from 'react';

import { IBookInput } from '../../../types/props.type';

const BookInput: React.FC<IBookInput> = ({ placeholder, className, value, onChange, name, type }) => {
  return (
    <input
      type={type}
      className={`${className}`}
      placeholder={placeholder}
      value={value}
      name={name}
      onChange={onChange}
    />
  );
};

export default BookInput;
