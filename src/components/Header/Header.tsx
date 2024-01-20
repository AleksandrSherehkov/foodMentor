import { FC } from 'react';
import { IoIosArrowBack } from 'react-icons/io';

interface HeaderProps {
  onBack: () => void;
  canGoBack: boolean;
}

export const Header: FC<HeaderProps> = ({ onBack, canGoBack }) => {
  return (
    <header className="w-full flex justify-center items-center gap-x-4 py-2 px-5">
      {canGoBack && (
        <button
          type="button"
          onClick={onBack}
          className="hover:bg-gray-200 focus:outline-none focus:ring focus:ring-gray-300 active:bg-gray-300 transition duration-200 ease-in-out transform hover:scale-105"
        >
          <IoIosArrowBack size={26} />
        </button>
      )}
      <img src="/icons/avocado.svg" alt="Avocado" width="19" height="25" />
      <p className="text-2xl font-bold leading-9 tracking-[0.25px] text-depGray">Food Mentor</p>
    </header>
  );
};
