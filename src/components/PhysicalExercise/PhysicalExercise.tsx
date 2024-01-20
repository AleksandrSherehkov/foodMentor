import { FC, FormEvent } from 'react';
import { FormData } from '../../utils/definitions';
import { Description } from '../Description/Description';
import { Title } from '../Title/Title';
import { Button } from '../Button/Button';
import { physicalExerciseOptions } from '../../data/formOptions';

interface PhysicalExerciseProps {
  formData: FormData;
  setFormData: (formData: FormData) => void;
  resetForm: () => void;
}

export const PhysicalExercise: FC<PhysicalExerciseProps> = ({
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
      <Title text="Physical exercise" />
      <Description
        text={
          'Physical exercise means a lot for a woman who\nwants to lose kilos and works at the office'
        }
      />
      <form onSubmit={handleSubmit} className="mt-[15px] mt=[15px]">
        <fieldset className="flex flex-col items-end mb-3 gap-[15px] bg-physicalExercise bg-content bg-no-repeat bg-[left_bottom_53px]">
          <legend className="mb-[15px] text-generalBlack text-sm font-bold leading-[24px] tracking-[0.2px] text-center">
            How active are you during the day?
          </legend>
          {physicalExerciseOptions.map(option => (
            <label
              key={option.value}
              className={`flex items-center  p-2 min-w-[172px] min-h-20 border rounded-[20px] border-separatorLight transition duration-300 ease-in-out ${
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
