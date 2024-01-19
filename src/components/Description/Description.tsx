import { FC } from 'react';

interface DescriptionProps {
  text: string;
}

export const Description: FC<DescriptionProps> = ({ text }) => {
  return (
    <p className="whitespace-pre-line mb-[15px] text-darkGray text-sm font-normal leading-[24px] tracking-[0.25px] text-center">
      {text}
    </p>
  );
};
