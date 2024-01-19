import { FC, FormEvent } from 'react';
import { Description } from '../Description/Description';
import { Title } from '../Title/Title';
import { FormData } from '../../utils/definitions';

interface Behavior {
  label: string;
  name: string;
  icon: string;
}

const behaviors: Behavior[] = [
  { label: "I don't rest\n enough", name: 'dontRestEnough', icon: 'moon' },
  { label: 'I have a sweet\n tooth', name: 'sweetTooth', icon: 'sweet' },
  { label: 'I have too\n much soda', name: 'tooMuchSoda', icon: 'soda' },
  { label: 'I eat many\n salty foods', name: 'saltyFoods', icon: 'salt' },
  { label: 'I enjoy\n midnight\n snacks', name: 'midnightSnacks', icon: 'snacks' },
  { label: 'None of the\n above', name: 'none', icon: 'rest' },
];

interface BehaviorsProps {
  onNext: () => void;
  onBack: () => void;
  formData: FormData;
  setFormData: (formData: FormData) => void;
}

export const Behaviors: FC<BehaviorsProps> = ({ onNext, onBack, formData, setFormData }) => {
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
    onNext();
  };

  const isDisabled = !Object.values(formData.destructiveBehaviors).some(value => value);

  return (
    <div className="mx-auto max-w-[360px]">
      <button className="p-2 bg-gray-500 text-white" onClick={onBack}>
        Back
      </button>
      <Title text="Destructive behaviors" />
      <Description text="We all have them! Which are yours?" />
      <form onSubmit={handleSubmit}>
        <fieldset className="flex flex-wrap gap-[15px]">
          <legend className="sr-only mb-[15px] text-generalBlack text-sm font-bold leading-[24px] tracking-[0.2px] text-center">
            Disadvantages:
          </legend>
          {behaviors.map(behavior => (
            <label
              key={behavior.name}
              className="className={`flex items-center py-3 pl-[15px] pr-6 min-w-[172px] border rounded-[15px] border-separatorLight `}"
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
        <button type="submit" className="p-2 bg-blue-500 text-white" disabled={isDisabled}>
          Continue
        </button>
      </form>
    </div>
  );
};
