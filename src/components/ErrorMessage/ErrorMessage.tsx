import { FC } from 'react';

interface ErrorMassageProps {
  text: string;
}

export const ErrorMassage: FC<ErrorMassageProps> = ({ text }) => {
  return <p className="mb-[45px] text-red-500 text-center text-xs">{text}</p>;
};
