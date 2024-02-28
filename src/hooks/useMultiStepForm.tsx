import { ReactElement, useState } from "react";

function useMultiStepForm(steps: ReactElement[]) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const next = () => {
    if (currentStepIndex >= steps.length - 1) return;
    setCurrentStepIndex((prev: number) => prev + 1);
  };

  const back = () => {
    if (currentStepIndex <= 0) return;
    setCurrentStepIndex((i: number) => i - 1);
  };

  const goto = (index: number) => {
    setCurrentStepIndex(index);
  };

  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    steps,
    next,
    back,
    goto,
  };
}

export default useMultiStepForm;
