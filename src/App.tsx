import { useState } from 'react';
import { Header } from './components/Header/Header';
import { MultiStepForm } from './components/MultiStepForm/MultiStepForm';
import { initialState } from './data/initialState';

export const App = () => {
  const [formData, setFormData] = useState(initialState);
  const [step, setStep] = useState(1);

  const prevStep = () => {
    if (step === 2) {
      setFormData({ ...formData, goal: '' });
    }
    if (step > 1) setStep(step - 1);
  };

  return (
    <>
      <Header onBack={prevStep} canGoBack={step > 1} />
      <main>
        <MultiStepForm
          step={step}
          setStep={setStep}
          formData={formData}
          setFormData={setFormData}
        />
      </main>
    </>
  );
};
