import { Behavior } from '../utils/definitions';

export const goalOptions = [
  {
    label: 'Lose\n Weight',
    value: 'Lose Weight',
    bg: '/src/assets/images/goalA.svg',
  },
  {
    label: 'Gain\n Muscle',
    value: 'Gain Muscle',
    bg: '/src/assets/images/goalB.svg',
  },
  {
    label: 'Develop\n healthy\n habits',
    value: 'Develop healthy habits',
    bg: '/src/assets/images/goalC.svg',
  },
  {
    label: 'Increase\n Energy\n Levels',
    value: 'Increase Energy Levels',
    bg: '/src/assets/images/goalD.svg',
  },
];

export const behaviorsOptions: Behavior[] = [
  { label: "I don't rest\n enough", name: 'dontRestEnough', icon: 'moon' },
  { label: 'I have a sweet\n tooth', name: 'sweetTooth', icon: 'sweet' },
  { label: 'I have too\n much soda', name: 'tooMuchSoda', icon: 'soda' },
  { label: 'I eat many\n salty foods', name: 'saltyFoods', icon: 'salt' },
  { label: 'I enjoy\n midnight\n snacks', name: 'midnightSnacks', icon: 'snacks' },
  { label: 'None of the\n above', name: 'none', icon: 'rest' },
];

export const physicalExerciseOptions = [
  { label: 'Hardly at all', value: 'Hardly at all' },
  { label: 'Fitness 1-2\n times a week', value: 'Fitness 1-2 times a week' },
  { label: 'Fitness 3-5\n times a week', value: 'Fitness 3-5 times a week' },
  { label: 'Fitness 5-7\n times a week', value: 'Fitness 5-7 times a week' },
];
