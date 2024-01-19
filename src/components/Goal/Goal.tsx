import { FC } from 'react';
import { Title } from '../Title/Title';
import { Description } from '../Description/Description';
interface GoalProps {
  onNext: (value: string) => void;
  goal: string;
}

const options = [
  { label: 'Lose\n Weight', value: 'Lose Weight', bg: 'goalBgA' },
  { label: 'Gain\n Muscle', value: 'Gain Muscle', bg: 'goalBgB' },
  { label: 'Develop\n healthy\n habits', value: 'Develop healthy habits', bg: 'goalBgC' },
  { label: 'Increase\n Energy\n Levels', value: 'Increase Energy Levels', bg: 'goalBgD' },
];

export const Goal: FC<GoalProps> = ({ onNext, goal }) => {
  const handleSelection = (value: string) => {
    onNext(value);
  };

  return (
    <div className="mx-auto max-w-[360px]">
      <Title text="The Goals" />
      <Description
        text={
          'Focus on the health benefits you need.\nBalanced nutrition will let you achieve them'
        }
      />
      <form>
        <fieldset className="flex flex-wrap gap-4">
          <legend className="mb-[15px] text-generalBlack text-sm font-bold leading-[24px] tracking-[0.2px] text-center">
            What are your goals?
          </legend>
          {options.map(option => (
            <label
              key={option.value}
              className={`flex items-center pl-[10px] size-[172px] border rounded-[20px] border-separatorLight bg-${option.bg} bg-content bg-no-repeat bg-right`}
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
