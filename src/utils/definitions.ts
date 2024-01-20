export interface FormData {
  goal: string;
  measurements: string;
  height: string;
  weight: string;
  destructiveBehaviors: Record<string, boolean>;
  activity: string;
}

export interface GoalOption {
  label: string;
  value: string;
  bg: string;
}

export interface Behavior {
  label: string;
  name: string;
  icon: string;
}

export interface PhysicalExerciseOption {
  label: string;
  value: string;
}
