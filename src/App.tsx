import { useState } from 'react';

import { MultiStepForm } from './components/MultiStepForm/MultiStepForm';

import { Header } from './components/Header/Header';
import { initialState } from './data/initialState';
import { Modal } from './components/Modal/Modal';

export const App = () => {
  const [formData, setFormData] = useState(initialState);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [step, setStep] = useState(1);

  const prevStep = () => {
    if (step === 2) {
      setFormData({ ...formData, goal: '' });
    }
    if (step > 1) setStep(step - 1);
  };

  const handleFinish = () => {
    setIsModalOpen(true);
  };

  const resetForm = () => {
    setFormData(initialState);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    resetForm();
    setStep(1);
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
          handleFinish={handleFinish}
        />
        {isModalOpen && (
          <Modal
            onClose={handleCloseModal}
            formData={formData}
            resetForm={resetForm}
            setStep={setStep}
          />
        )}
      </main>
    </>
  );
};
