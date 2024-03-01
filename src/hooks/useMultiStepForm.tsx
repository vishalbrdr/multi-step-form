import { ReactElement, useState } from "react";

export type StepProps = {
  currentStepIndex: number;
  stepsCount: number;
  next: () => void;
  back: () => void;
};

function useMultiStepForm(
  steps: ((props: { multiStepForm: StepProps }) => ReactElement)[]
) {
  const [currentStepIndex, setCurrentStepIndex] = useState(1);

  const next = () => {
    if (currentStepIndex >= steps.length - 1) return;
    setCurrentStepIndex((prev: number) => prev + 1);
  };

  const back = () => {
    if (currentStepIndex <= 0) return;
    setCurrentStepIndex((i: number) => i - 1);
  };

  return {
    currentStepIndex,
    Step: steps[currentStepIndex],
    steps,
    stepsCount: steps.length,
    next,
    back,
  };
}

export default useMultiStepForm;
