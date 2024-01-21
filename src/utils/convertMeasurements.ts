import { FormData } from './definitions';

export const convertMeasurements = (
  measurementSystem: string,
  formData: FormData,
  setFormData: (formData: FormData) => void
) => {
  const heightNumber = formData.height ? parseFloat(formData.height) : 0;
  const weightNumber = formData.weight ? parseFloat(formData.weight) : 0;

  const newHeight = measurementSystem === 'metric' ? heightNumber * 30.48 : heightNumber / 30.48;
  const newWeight =
    measurementSystem === 'metric' ? weightNumber * 0.453592 : weightNumber / 0.453592;

  setFormData({
    ...formData,
    height: newHeight ? newHeight.toFixed(2) : '',
    weight: newWeight ? newWeight.toFixed(2) : '',
    measurements: measurementSystem,
  });
};
