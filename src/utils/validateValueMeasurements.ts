import {
  heightSchema,
  weightSchemaImperial,
  weightSchemaMetric,
} from './validation/measurementsThema';

export const validateValue = (
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
