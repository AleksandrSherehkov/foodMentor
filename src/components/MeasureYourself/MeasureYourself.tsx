import { FormEvent } from 'react';
import { Title } from '../Title/Title';
import { Description } from '../Description/Description';
import { Button } from '../Button/Button';

export const MeasureYourself = ({ onNext, onBack, formData, setFormData }) => {
  const { height, weight } = formData;
  const isDisabled = !height || !weight;

  const handleSelection = (value: string) => {
    setFormData({ ...formData, measurements: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isDisabled) {
      onNext();
    }
  };

  return (
    <div className="mx-auto max-w-[360px]">
      <button className="p-2 bg-gray-500 text-white" onClick={onBack}>
        Back
      </button>
      <form onSubmit={handleSubmit}>
        <fieldset className="flex  ">
          <legend className="sr-only mb-[15px] text-generalBlack text-sm font-bold leading-[24px] tracking-[0.2px] text-center">
            Measurement system:
          </legend>
          <label className="flex justify-center items-center w-1/2 py-[18px] pl-[15px] max-w-[172px] border-y border-l rounded-l-[10px] border-disableGreen">
            <input
              className="sr-only"
              type="radio"
              name="measurements"
              value="Imperial"
              onChange={() => handleSelection('Imperial')}
              checked={formData.measurements === 'Imperial'}
            />
            <p className=" uppercase text-disableGreen text-xs font-extrabold  leading-normal tracking-[2.5px]">
              Imperial
            </p>
          </label>
          <label className="flex justify-center items-center w-1/2 py-[18px] pl-[15px] max-w-[172px] border-y border-r rounded-r-[10px] border-disableGreen">
            <input
              className="sr-only"
              type="radio"
              name="measurements"
              value="Metric"
              onChange={() => handleSelection('Metric')}
              checked={formData.measurements === 'Metric'}
            />
            <p className=" uppercase text-disableGreen text-xs font-extrabold  leading-normal tracking-[2.5px]">
              Metric
            </p>
          </label>
        </fieldset>
        <input
          className="border p-2"
          type="number"
          placeholder="Height"
          value={height}
          onChange={e => setFormData({ ...formData, height: Number(e.target.value) })}
        />
        <input
          className="border p-2"
          type="number"
          placeholder="Weight"
          value={weight}
          onChange={e => setFormData({ ...formData, weight: Number(e.target.value) })}
        />
        <Title text="Measure Yourself" />
        <Description text="What are your height and body weight? " />
        <Button type="submit" text="Continue" isDisabled={isDisabled} />
      </form>
    </div>
  );
};
