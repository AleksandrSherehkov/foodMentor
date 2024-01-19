export interface FormData {
  goal: string;
  measurements: string;
  height: number;
  weight: number;
  destructiveBehaviors: Record<string, boolean>;
  activity: string;
}
