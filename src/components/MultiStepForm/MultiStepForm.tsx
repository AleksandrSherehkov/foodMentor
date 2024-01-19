import { useState } from 'react';
import { Goal } from '../Goal/Goal';
import { MeasureYourself } from '../MeasureYourself/MeasureYourself';
import { Behaviors } from '../Behaviors/Behaviors';
import { PhysicalExercise } from '../PhysicalExercise/PhysicalExercise';

const initialState = {
  goal: '',
  height: 0,
  weight: 0,
  destructiveBehaviors: {},
  activity: '',
};

export const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(initialState);

  const nextStep = () => {
    setStep(prevStep => prevStep + 1);
  };

  const prevStep = () => {
    setStep(prevStep => prevStep - 1);
  };

  const resetForm = () => {
    setFormData(initialState);
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
        <MeasureYourself
          onNext={nextStep}
          onBack={prevStep}
          formData={formData}
          setFormData={setFormData}
        />
      )}
      {step === 3 && (
        <Behaviors
          onNext={nextStep}
          onBack={prevStep}
          formData={formData}
          setFormData={setFormData}
        />
      )}
      {step === 4 && (
        <PhysicalExercise
          onBack={prevStep}
          formData={formData}
          setFormData={setFormData}
          resetForm={resetForm}
        />
      )}
    </div>
  );
};
