import { FC } from 'react';

interface HeaderProps {
  onBack: () => void;
  canGoBack: boolean;
}

export const Header: FC<HeaderProps> = ({ onBack, canGoBack }) => {
  return (
    <header className="w-full flex justify-center items-center py-2 px-5">
      {canGoBack && (
        <button type="button" onClick={onBack}>
          Back
        </button>
      )}
      <p className="text-2xl font-bold leading-9 tracking-[0.25px] text-depGray">Food Mentor</p>
    </header>
  );
};
