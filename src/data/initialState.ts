import {  behaviorsOptions } from './formOptions';

export const initialState = {
  goal: '',
  measurements: 'imperial',
  height: '',
  weight: '',
  destructiveBehaviors: behaviorsOptions.reduce<Record<string, boolean>>((acc, behavior) => {
    acc[behavior.name] = false;
    return acc;
  }, {}),
  activity: '',
};
