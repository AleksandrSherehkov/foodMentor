import { FC, MouseEventHandler } from 'react';

interface ButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  text: string;
  type?: 'button' | 'submit' | 'reset';
  isDisabled?: boolean;
}

export const Button: FC<ButtonProps> = ({ onClick, text, type = 'button', isDisabled }) => {
  const disabledClass = isDisabled ? 'opacity-30' : null;
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      className={`${disabledClass} disabledClass flex justify-center items-center bg-disableGreen w-full p-3 text-[18px] font-bold  leading-[26px] tracking-[0.2px] rounded-xl`}
    >
      {text}
    </button>
  );
};
