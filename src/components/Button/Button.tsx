import { FC, MouseEventHandler } from 'react';

interface ButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  text: string;
  type?: 'button' | 'submit' | 'reset';
  isDisabled?: boolean;
}

export const Button: FC<ButtonProps> = ({ onClick, text, type = 'button', isDisabled }) => {
  const baseClasses =
    'flex justify-center items-center w-full p-3 text-[18px] font-bold leading-[26px] tracking-[0.2px] rounded-xl';
  const enabledClasses =
    'bg-disableGreen transition duration-300 ease-in-out hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500';
  const disabledClasses = 'opacity-30 bg-disableGreen';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      className={`${baseClasses} ${isDisabled ? disabledClasses : enabledClasses}`}
    >
      {text}
    </button>
  );
};
