export function getTrueDestructiveBehaviors(behaviors: Record<string, boolean>) {
  return Object.keys(behaviors).filter(key => behaviors[key]);
}
