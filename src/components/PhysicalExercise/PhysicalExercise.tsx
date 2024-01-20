import { FC, FormEvent } from 'react';
import { FormData } from '../../utils/definitions';
import { Description } from '../Description/Description';
import { Title } from '../Title/Title';
import { Button } from '../Button/Button';

const physicalExerciseOptions = [
  { label: 'Hardly at all', value: 'Hardly at all' },
  { label: 'Fitness 1-2\n times a week', value: 'Fitness 1-2 times a week' },
  { label: 'Fitness 3-5\n times a week', value: 'Fitness 3-5 times a week' },
  { label: 'Fitness 5-7\n times a week', value: 'Fitness 5-7 times a week' },
];

interface PhysicalExerciseProps {
  onBack: () => void;
  formData: FormData;
  setFormData: (formData: FormData) => void;
  resetForm: () => void;
}

export const PhysicalExercise: FC<PhysicalExerciseProps> = ({
  onBack,
  formData,
  setFormData,
  resetForm,
}) => {
  const handleSelection = (value: string) => {
    setFormData({ ...formData, activity: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Final FormData:', formData);
    resetForm();
  };

  return (
    <div className="mx-auto max-w-[360px]">
      <button type="button" className="p-2 bg-gray-500 text-white" onClick={onBack}>
        Back
      </button>
      <Title text="Physical exercise" />
      <Description
        text={
          'Physical exercise means a lot for a woman who\nwants to lose kilos and works at the office'
        }
      />
      <form onSubmit={handleSubmit} className="mt-[15px]">
        <fieldset className="flex flex-col items-end  gap-[15px] bg-physicalExercise bg-content bg-no-repeat bg-[left_bottom_53px]">
          <legend className="mb-[15px] text-generalBlack text-sm font-bold leading-[24px] tracking-[0.2px] text-center">
            How active are you during the day?
          </legend>
          {physicalExerciseOptions.map(option => (
            <label
              key={option.value}
              className={`flex items-center min-w-[172px] py-[18px] pl-[15px] max-w-[172px] border rounded-[20px] border-separatorLight transition duration-300 ease-in-out ${
                formData.activity === option.value
                  ? 'border-blue-500 shadow-lg scale-105'
                  : 'hover:border-green-500 hover:shadow-md hover:scale-105'
              } focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500`}
            >
              <input
                className="sr-only"
                type="radio"
                name="exercise"
                value={option.value}
                onChange={() => handleSelection(option.value)}
                checked={formData.activity === option.value}
              />
              <p className="whitespace-pre-line text-generalBlack text-base font-medium  leading-[22px] tracking-[0.2px]">
                {option.label}
              </p>
            </label>
          ))}
        </fieldset>
        <Button type="submit" text="Finish" isDisabled={formData.activity === ''} />
      </form>
    </div>
  );
};
