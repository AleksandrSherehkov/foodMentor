import { FC } from 'react';

import { goalOptions } from '../../data/formOptions';

import { Title } from '../Title/Title';
import { Description } from '../Description/Description';

interface GoalProps {
  onNext: (value: string) => void;
  goal: string;
}

export const Goal: FC<GoalProps> = ({ onNext, goal }) => {
  const handleSelection = (value: string) => {
    onNext(value);
  };

  return (
    <div className="mx-auto max-w-[360px] mt-[15px]">
      <Title text="The Goals" />
      <Description
        text={
          'Focus on the health benefits you need.\nBalanced nutrition will let you achieve them'
        }
      />
      <form className="mt-[15px]">
        <fieldset className="flex  justify-center item-center flex-wrap gap-4">
          <legend className="mb-[15px] text-generalBlack text-sm font-bold leading-[24px] tracking-[0.2px] text-center">
            What are your goals?
          </legend>
          {goalOptions.map(option => (
            <label
              key={option.value}
              style={{
                backgroundImage: `url(${option.bg}), linear-gradient(214deg, #F1F1F1 12.33%, #FFF 69.93%)`,
              }}
              className={`flex items-center cursor-pointer pl-[10px] size-[172px] border rounded-[20px] border-separatorLight bg-content bg-no-repeat bg-right transition duration-300 ease-in-out ${
                goal === option.value
                  ? 'border-blue-500 shadow-lg scale-105'
                  : 'hover:border-green-500 hover:shadow-md hover:scale-105'
              } focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500`}
            >
              <input
                className="sr-only"
                type="radio"
                name="goal"
                value={option.value}
                onChange={() => handleSelection(option.value)}
                checked={goal === option.value}
              />
              <p className="whitespace-pre-line text-generalBlack text-[17px] font-medium  leading-[23px] tracking-[0.21px]">
                {option.label}
              </p>
            </label>
          ))}
        </fieldset>
      </form>
    </div>
  );
};
