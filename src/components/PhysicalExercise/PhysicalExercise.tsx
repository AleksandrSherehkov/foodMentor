import { Description } from '../Description/Description';
import { Title } from '../Title/Title';

const physicalExerciseOptions = [
  { label: 'Hardly at all', value: 'Hardly at all' },
  { label: 'Fitness 1-2\n times a week', value: 'Fitness 1-2 times a week' },
  { label: 'Fitness 3-5\n times a week', value: 'Fitness 3-5 times a week' },
  { label: 'Fitness 5-7\n times a week', value: 'Fitness 5-7 times a week' },
];

export const PhysicalExercise = ({ onBack, formData, setFormData, resetForm }) => {
  const handleSelection = value => {
    setFormData({ ...formData, activity: value });
  };

  const handleSubmit = e => {
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
      <form>
        <fieldset className="flex flex-col items-end  gap-[15px] bg-physicalExercise bg-content bg-no-repeat bg-[left_bottom_53px]">
          <legend className="mb-[15px] text-generalBlack text-sm font-bold leading-[24px] tracking-[0.2px] text-center">
            How active are you during the day?
          </legend>
          {physicalExerciseOptions.map(option => (
            <label
              key={option.value}
              className="flex  items-center min-w-[172px] py-[18px] pl-[15px] max-w-[172px] border rounded-[20px] border-separatorLight"
            >
              <input
                className="sr-only"
                type="radio"
                name="goal"
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
        <button type="submit" className="p-2 bg-blue-500 text-white" onClick={handleSubmit}>
          Finish
        </button>
      </form>
    </div>
  );
};
