import { Title } from '../Title/Title';

export const Goal = ({ onNext, selectedOption }) => {
  const handleSelection = value => {
    onNext(value);
  };

  return (
    <div className="mx-auto max-w-[360px]">
      <Title text="The Goal" />
      <p className="mb-[15px] text-darkGray text-sm font-normal leading-[24px] tracking-[0.25px] text-center">
        Focus on the health benefits you need. Balanced nutrition will let you achieve them
      </p>
      <form>
        <fieldset className="flex flex-wrap gap-4">
          <legend className="mb-[15px] text-generalBlack text-sm font-bold leading-[24px] tracking-[0.2px] text-center">
            What are your goals?
          </legend>
          <label className="flex items-center pl-[10px] size-[172px] border rounded-[20px] border-separatorLight bg-goalBgA bg-content bg-no-repeat bg-right">
            <input
              className="sr-only"
              type="radio"
              name="option"
              value="Lose Weight"
              onChange={() => handleSelection('option1')}
              checked={selectedOption === 'option1'}
            />
            <p className="w-[83px] text-generalBlack text-[17px] font-medium  leading-[23px] tracking-[0.21px]">
              Lose Weight
            </p>
          </label>

          <label className="flex items-center pl-[10px] size-[172px] border rounded-[20px] border-separatorLight bg-goalBgB bg-content bg-no-repeat bg-right">
            <input
              className="sr-only"
              type="radio"
              name="option"
              value="Gain Muscle"
              onChange={() => handleSelection('option2')}
              checked={selectedOption === 'option2'}
            />
            <p className="w-[83px] text-generalBlack text-[17px] font-medium  leading-[23px] tracking-[0.21px]">
              Gain Muscle
            </p>
          </label>
          <label className="flex items-center pl-[10px] size-[172px] border rounded-[20px] border-separatorLight bg-goalBgC bg-content bg-no-repeat bg-right">
            <input
              className="sr-only"
              type="radio"
              name="option"
              value="Develop healthy habits"
              onChange={() => handleSelection('option3')}
              checked={selectedOption === 'option3'}
            />
            <p className="w-[83px] text-generalBlack text-[17px] font-medium  leading-[23px] tracking-[0.21px]">
              Develop healthy habits
            </p>
          </label>
          <label className="flex items-center pl-[10px] size-[172px] border rounded-[20px] border-separatorLight bg-goalBgD bg-content bg-no-repeat bg-right">
            <input
              className="sr-only"
              type="radio"
              name="option"
              value="Increase Energy Levels"
              onChange={() => handleSelection('option4')}
              checked={selectedOption === 'option4'}
            />
            <p className="w-[83px] text-generalBlack text-[17px] font-medium  leading-[23px] tracking-[0.21px]">
              Increase Energy Levels
            </p>
          </label>
        </fieldset>
      </form>
    </div>
  );
};
