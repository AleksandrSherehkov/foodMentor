export interface FormData {
  goal: string;
  measurements: string;
  height: string;
  weight: string;
  destructiveBehaviors: Record<string, boolean>;
  activity: string;
}

export interface Behavior {
  label: string;
  name: string;
  icon: string;
}
