export function getMeasurementUnits(measurements: string) {
  return {
    unitHeight: measurements === 'imperial' ? 'ft' : 'cm',
    unitWeight: measurements === 'imperial' ? 'lbs' : 'kg',
  };
}
