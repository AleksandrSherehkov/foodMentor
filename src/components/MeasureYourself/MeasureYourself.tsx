import { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react';

import { FormData } from '../../utils/definitions';
import { convertMeasurements } from '../../utils/convertMeasurements';

import { Title } from '../Title/Title';
import { Description } from '../Description/Description';
import { Button } from '../Button/Button';
import { ErrorMassage } from '../ErrorMassage/ErrorMassage';

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
  const { height, weight } = formData;
  const isDisabled = !height || !weight;
  const heightPlaceholder = formData.measurements === 'imperial' ? 'Height (ft)' : 'Height (cm)';
  const weightPlaceholder = formData.measurements === 'imperial' ? 'Weight (lbs)' : 'Weight (kg)';

  const validateValue = (
    value: string,
    name: 'height' | 'weight',
    measurementSystem: 'metric' | 'imperial'
  ) => {
    let regex;

    if (measurementSystem === 'metric') {
      regex = /^\d{0,3}$/; // Для метрической системы ограничение до 3 цифр
    } else {
      if (name === 'height') {
        regex = /^\d{0,3}$/; // Для имперской системы и роста ограничение до 3 цифр
      } else {
        regex = /^\d{0,4}$/; // Для имперской системы и веса ограничение до 4 цифр
      }
    }

    return regex.exec(value) !== null && Number(value) >= 0;
  };

  const handleHeightChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (validateValue(value, 'height', formData.measurements)) {
      setFormData({ ...formData, height: value });
    }
  };

  const handleWeightChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (validateValue(value, 'weight', formData.measurements)) {
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
          type="number"
          placeholder={heightPlaceholder}
          name="height"
          value={height}
          onChange={handleHeightChange}
        />
        <input
          className={`placeholder:text-darkGray placeholder:text-sm placeholder:font-normal placeholder:leading-6 placeholder:tracking-[0.25px] w-full border py-5 px-[15px]  rounded-[10px] border-separatorLight outline-none transition duration-300 ease-in-out hover:border-blue-300 focus:border-blue-500 ${
            !showError ? 'mb-[45px]' : ''
          }`}
          type="number"
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
