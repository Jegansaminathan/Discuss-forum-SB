import React from 'react';

import { IBookButton } from '../../../types/props.type';

const BookButton: React.FC<IBookButton> = ({ className, onClick, children, type }) => {
  return (
    <button className={className} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default BookButton;
