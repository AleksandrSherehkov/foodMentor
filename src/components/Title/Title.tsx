import { FC } from 'react';

interface TitleProps {
  text: string;
}

export const Title: FC<TitleProps> = ({ text }) => {
  return (
    <h1 className=" text-generalBlack text-2xl leading-[36px] tracking-[0.25px] font-bold text-center">
      {text}
    </h1>
  );
};
