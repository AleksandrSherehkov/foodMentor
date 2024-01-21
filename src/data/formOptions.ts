import { Behavior, GoalOption, PhysicalExerciseOption } from '../utils/definitions';

export const goalOptions: GoalOption[] = [
  {
    label: 'Lose\n Weight',
    value: 'Lose Weight',
    bg: '/icons/goalA.svg',
  },
  {
    label: 'Gain\n Muscle',
    value: 'Gain Muscle',
    bg: '/icons/goalB.svg',
  },
  {
    label: 'Develop\n healthy\n habits',
    value: 'Develop healthy habits',
    bg: '/icons/goalC.svg',
  },
  {
    label: 'Increase\n Energy\n Levels',
    value: 'Increase Energy Levels',
    bg: '/icons/goalD.svg',
  },
];

export const behaviorsOptions: Behavior[] = [
  { label: "I don't rest\n enough", name: "I don't rest enough", icon: '/icons/moon.svg' },
  { label: 'I have a sweet\n tooth', name: 'I have a sweet tooth', icon: '/icons/sweet.svg' },
  { label: 'I have too\n much soda', name: 'I have too much soda', icon: '/icons/soda.svg' },
  { label: 'I eat many\n salty foods', name: 'I eat many salty foods', icon: '/icons/salt.svg' },
  {
    label: 'I enjoy\n midnight\n snacks',
    name: 'I enjoy midnight snacks',
    icon: '/icons/snacks.svg',
  },
  { label: 'None of the\n above', name: 'none', icon: '/icons/rest.svg' },
];

export const physicalExerciseOptions: PhysicalExerciseOption[] = [
  { label: 'Hardly at all', value: 'Hardly at all' },
  { label: 'Fitness 1-2\n times a week', value: 'Fitness 1-2 times a week' },
  { label: 'Fitness 3-5\n times a week', value: 'Fitness 3-5 times a week' },
  { label: 'Fitness 5-7\n times a week', value: 'Fitness 5-7 times a week' },
];
