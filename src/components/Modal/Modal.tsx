import { FC, KeyboardEvent, MouseEvent, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import { FormData } from '../../utils/definitions';
import { getMeasurementUnits } from '../../utils/getMeasurementUnits';
import { getTrueDestructiveBehaviors } from '../../utils/getTrueDestructiveBehaviors';

import { Title } from '../Title/Title';
import { Button } from '../Button/Button';

interface ModalProps {
  onClose: () => void;
  formData: FormData;
  resetForm: () => void;
  setStep: (step: number) => void;
}

export const Modal: FC<ModalProps> = ({ onClose, formData, resetForm, setStep }) => {
  const [modalContainer, setModalContainer] = useState<Element | null>(null);
  const { goal, destructiveBehaviors, height, weight, activity } = formData;
  const { unitHeight, unitWeight } = getMeasurementUnits(formData.measurements);

  const trueBehaviors = getTrueDestructiveBehaviors(destructiveBehaviors);

  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  useEffect(() => {
    setModalContainer(document.getElementById('modal-root'));
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setStep(1);
        resetForm();
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscape as unknown as EventListener);
    return () => {
      document.removeEventListener('keydown', handleEscape as unknown as EventListener);
    };
  }, [onClose, resetForm, setStep]);

  if (!modalContainer) return null;

  const handleBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setStep(1);
      resetForm();
      onClose();
    }
  };

  return createPortal(
    <div
      onClick={handleBackdropClick}
      className="flex items-center justify-center min-h-screen fixed inset-0 z-50 overflow-auto bg-black bg-opacity-40"
    >
      <div className="relative  rounded-[20px] px-6 py-8 w-[360px] bg-emerald-100">
        <Title text="Your personal parameters:" />
        <p className="mt-3 mb-1 text-generalBlack text-sm font-bold leading-[24px] tracking-[0.2px] text-center">
          Height:{' '}
          <span className="font-normal text-darkGray">
            {height} {unitHeight}
          </span>
        </p>
        <p className="mb-1 text-generalBlack text-sm font-bold leading-[24px] tracking-[0.2px] text-center">
          Weight:{' '}
          <span className="font-normal text-darkGray">
            {weight} {unitWeight}
          </span>
        </p>
        <p className="mb-1 text-generalBlack text-sm font-bold leading-[24px] tracking-[0.2px] text-center">
          Goal: <span className="font-normal text-darkGray">{goal}</span>
        </p>
        <p className="mb-1 text-generalBlack text-sm font-bold leading-[24px] tracking-[0.2px] text-center">
          Activity: <span className="font-normal text-darkGray">{activity}</span>
        </p>
        <p className="mb-1 text-generalBlack text-sm font-bold leading-[24px] tracking-[0.2px] text-center">
          Destructive behaviors:
        </p>
        <ul className="mb-6">
          {trueBehaviors.map(item => (
            <li key={item} className="text-center font-normal text-darkGray">
              - {item} -
            </li>
          ))}
        </ul>
        <Button type="submit" text="Close" onClick={onClose} />
      </div>
    </div>,
    modalContainer
  );
};
