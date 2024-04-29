// Importing packages
import React from 'react';

interface IBookButton {
  className: string;
  type: 'submit';
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
}

interface IBookInput {
  placeholder: string;
  className?: string;
  value: string;
  name: string;
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface IBookCard {
  children: React.ReactNode;
  className?: string;
}

export type { IBookButton, IBookInput, IBookCard };
