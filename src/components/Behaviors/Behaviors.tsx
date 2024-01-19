import { FC, FormEvent } from 'react';
import { Description } from '../Description/Description';
import { Title } from '../Title/Title';

// Определение структуры одного поведения
interface Behavior {
  label: string;
  name: string;
  icon: string;
}

const behaviors: Behavior[] = [
  { label: "I don't rest enough", name: 'dontRestEnough', icon: 'icon-rest' },
  { label: 'I have a sweet tooth', name: 'sweetTooth', icon: 'icon-sweet' },
  { label: 'I have too much soda', name: 'tooMuchSoda', icon: 'icon-soda' },
  { label: 'I eat many salty foods', name: 'saltyFoods', icon: 'icon-salty' },
  { label: 'I enjoy midnight snacks', name: 'midnightSnacks', icon: 'icon-snacks' },
  { label: 'None of the above', name: 'none', icon: 'icon-none' },
];

interface BehaviorsProps {
  onNext: () => void;
  onBack: () => void;
  formData: { destructiveBehaviors: Record<string, boolean> };
  setFormData: (formData: any) => void;
}

export const Behaviors: FC<BehaviorsProps> = ({ onNext, onBack, formData, setFormData }) => {
  const handleCheckboxChange = (checked: boolean, name: string) => {
    // Если выбрано 'None of the above', то сбросить все другие
    const newDestructiveBehaviors = name === 'none' ? {} : { ...formData.destructiveBehaviors };
    if (name !== 'none') {
      // Сбросить 'None of the above', если выбрано другое поведение
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
            <label key={behavior.name} className="block">
              <input
                type="checkbox"
                onChange={e => handleCheckboxChange(e.target.checked, behavior.name)}
                checked={formData.destructiveBehaviors[behavior.name] || false}
              />
              {behavior.label}
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
