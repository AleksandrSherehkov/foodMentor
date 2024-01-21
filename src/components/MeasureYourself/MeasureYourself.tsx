import { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react';

import { FormData } from '../../utils/definitions';
import { convertMeasurements } from '../../utils/convertMeasurements';

import { Title } from '../Title/Title';
import { Description } from '../Description/Description';
import { Button } from '../Button/Button';
import { ErrorMassage } from '../ErrorMassage/ErrorMassage';
import {
  heightSchema,
  weightSchemaImperial,
  weightSchemaMetric,
} from '../../utils/validation/measurementsThema';

interface MeasureYourselfProps {
  onNext: () => void;
  formData: FormData;
  setFormData: (formData: FormData) => void;
}

export const MeasureYourself: FC<MeasureYourselfProps> = ({
  onNext,

  formData,
  setFormData,
}) => {
  const [showError, setShowError] = useState(false);
  const { height, weight, measurements } = formData;
  const isDisabled = !height || !weight;
  const heightPlaceholder = measurements === 'imperial' ? 'Height (ft)' : 'Height (cm)';
  const weightPlaceholder = measurements === 'imperial' ? 'Weight (lbs)' : 'Weight (kg)';

  const validateValue = (
    value: string,
    name: 'height' | 'weight',
    measurementSystem: 'metric' | 'imperial'
  ) => {
    try {
      if (name === 'height') {
        heightSchema.parse(value);
      } else if (measurementSystem === 'metric') {
        weightSchemaMetric.parse(value);
      } else {
        weightSchemaImperial.parse(value);
      }
      return true;
    } catch (error) {
      return false;
    }
  };

  const handleHeightChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (validateValue(value, 'height', measurements as 'imperial' | 'metric')) {
      setFormData({ ...formData, height: value });
    }
  };

  const handleWeightChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (validateValue(value, 'weight', measurements as 'imperial' | 'metric')) {
      setFormData({ ...formData, weight: value });
    }
  };

  const handleSelection = (value: string) => {
    if (value !== formData.measurements) {
      convertMeasurements(value, formData, setFormData);
    } else {
      setFormData({ ...formData, measurements: value });
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!height || !weight) {
      setShowError(true);
    } else {
      setShowError(false);
      onNext();
    }
  };

  useEffect(() => {
    setShowError(!height || !weight);
  }, [height, weight]);

  return (
    <div className="mx-auto max-w-[360px] mt-[90px]">
      <form onSubmit={handleSubmit}>
        <fieldset className="flex  mb-[10px]">
          <legend className="sr-only mb-[15px] text-generalBlack text-sm font-bold leading-[24px] tracking-[0.2px] text-center">
            Measurement system:
          </legend>
          <label
            className={`flex justify-center items-center cursor-pointer w-1/2 py-[6px] pl-3 border-y border-l rounded-l-[10px] border-disableGreen ${
              formData.measurements === 'imperial' ? 'bg-liteGreen' : ''
            }`}
          >
            <input
              className="sr-only"
              type="radio"
              name="measurements"
              value="imperial"
              onChange={() => handleSelection('imperial')}
              checked={formData.measurements === 'imperial'}
            />
            <p className=" uppercase text-disableGreen text-xs font-extrabold  leading-normal tracking-[2.5px]">
              Imperial
            </p>
          </label>
          <label
            className={`flex justify-center items-center cursor-pointer w-1/2 py-[6px] px-3 border-y border-r rounded-r-[10px] border-disableGreen ${
              formData.measurements === 'metric' ? 'bg-liteGreen' : ''
            }`}
          >
            <input
              className="sr-only"
              type="radio"
              name="measurements"
              value="metric"
              onChange={() => handleSelection('metric')}
              checked={formData.measurements === 'metric'}
            />
            <p className=" uppercase text-disableGreen text-xs font-extrabold  leading-normal tracking-[2.5px]">
              Metric
            </p>
          </label>
        </fieldset>
        <input
          className="placeholder:text-darkGray placeholder:text-sm placeholder:font-normal placeholder:leading-6 placeholder:tracking-[0.25px] w-full  mb-[10px] py-5 px-[15px] border rounded-[10px] border-separatorLight outline-none transition duration-300 ease-in-out hover:border-blue-300 focus:border-blue-500"
          type="string"
          placeholder={heightPlaceholder}
          name="height"
          value={height}
          onChange={handleHeightChange}
        />
        <input
          className={`placeholder:text-darkGray placeholder:text-sm placeholder:font-normal placeholder:leading-6 placeholder:tracking-[0.25px] w-full border py-5 px-[15px]  rounded-[10px] border-separatorLight outline-none transition duration-300 ease-in-out hover:border-blue-300 focus:border-blue-500 ${
            !showError ? 'mb-[45px]' : ''
          }`}
          type="string"
          name="weight"
          placeholder={weightPlaceholder}
          value={weight}
          onChange={handleWeightChange}
        />
        {showError && <ErrorMassage text="Enter your height and weight to continue.(number)" />}
        <Title text="Measure Yourself" />
        <Description text="What are your height and body weight? " />
        <div className="mt-[54px]">
          <Button type="submit" text="Continue" isDisabled={isDisabled} />
        </div>
      </form>
    </div>
  );
};
