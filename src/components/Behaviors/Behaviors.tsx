import { FC, FormEvent } from 'react';
import { Description } from '../Description/Description';
import { Title } from '../Title/Title';
import { FormData } from '../../utils/definitions';
import { Button } from '../Button/Button';
import { behaviorsOptions } from '../../data/formOptions';

interface BehaviorsProps {
  onNext: () => void;
  formData: FormData;
  setFormData: (formData: FormData) => void;
}

export const Behaviors: FC<BehaviorsProps> = ({ onNext, formData, setFormData }) => {
  const handleCheckboxChange = (checked: boolean, name: string) => {
    const newDestructiveBehaviors = name === 'none' ? {} : { ...formData.destructiveBehaviors };
    if (name !== 'none') {
      delete newDestructiveBehaviors.none;
    }

    setFormData({
      ...formData,
      destructiveBehaviors: {
        ...newDestructiveBehaviors,
        [name]: checked,
      },
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isDisabled) {
      onNext();
    }
  };

  const isDisabled = !Object.values(formData.destructiveBehaviors).some(value => value);

  return (
    <div className="mx-auto max-w-[360px]">
      <Title text="Destructive behaviors" />
      <Description text="We all have them! Which are yours?" />
      <form onSubmit={handleSubmit} className="mt-[15px]">
        <fieldset className="flex flex-wrap gap-[15px] mb-[129px]">
          <legend className="sr-only mb-[15px] text-generalBlack text-sm font-bold leading-[24px] tracking-[0.2px] text-center">
            Disadvantages:
          </legend>
          {behaviorsOptions.map(behavior => (
            <label
              key={behavior.name}
              className={`flex items-center py-3 pl-[15px] pr-6 min-w-[172px] border rounded-[15px] border-separatorLight transition duration-300 ease-in-out ${
                formData.destructiveBehaviors[behavior.name]
                  ? 'border-blue-300 shadow-lg'
                  : 'hover:border-green-500 hover:shadow-md'
              } focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500`}
            >
              <input
                className="sr-only"
                type="checkbox"
                name={behavior.name}
                onChange={e => handleCheckboxChange(e.target.checked, behavior.name)}
                checked={formData.destructiveBehaviors[behavior.name] || false}
              />
              <p className="whitespace-pre-line text-generalBlack text-xs font-normal  leading-[18px] tracking-[0.3px]">
                {behavior.label}
              </p>
            </label>
          ))}
        </fieldset>
        <Button type="submit" text="Continue" isDisabled={isDisabled} />
      </form>
    </div>
  );
};
