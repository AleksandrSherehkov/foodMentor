import { FC } from 'react';

import { FormData } from '../../utils/definitions';

import { Goal } from '../Goal/Goal';
import { MeasureYourself } from '../MeasureYourself/MeasureYourself';
import { Behaviors } from '../Behaviors/Behaviors';
import { PhysicalExercise } from '../PhysicalExercise/PhysicalExercise';

interface MultiStepFormProps {
  step: number;
  setStep: (step: number) => void;
  formData: FormData;
  setFormData: (formData: FormData) => void;
  handleFinish: () => void;
}
export const MultiStepForm: FC<MultiStepFormProps> = ({
  step,
  setStep,
  formData,
  setFormData,
  handleFinish,
}) => {
  const nextStep = () => {
    setStep(step + 1);
  };

  return (
    <div className="container mx-auto p-4">
      {step === 1 && (
        <Goal
          onNext={value => {
            setFormData({ ...formData, goal: value });
            nextStep();
          }}
          goal={formData.goal}
        />
      )}
      {step === 2 && (
        <MeasureYourself onNext={nextStep} formData={formData} setFormData={setFormData} />
      )}
      {step === 3 && <Behaviors onNext={nextStep} formData={formData} setFormData={setFormData} />}
      {step === 4 && (
        <PhysicalExercise
          formData={formData}
          setFormData={setFormData}
          handleFinish={handleFinish}
        />
      )}
    </div>
  );
};
