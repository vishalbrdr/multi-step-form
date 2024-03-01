import { StepProps } from "../hooks/useMultiStepForm";

function FormFooter({ multiStepForm }: { multiStepForm: StepProps }) {
  const { currentStepIndex, stepsCount, back } = multiStepForm;
  return (
    <div className="flex">
      {currentStepIndex !== 0 && (
        <button onClick={back} className="text-neutral-lightGray">
          Go Back
        </button>
      )}
      <button
        type="submit"
        className="ml-auto bg-primary-marine-blue text-neutral-white px-3 py-1 rounded"
      >
        {currentStepIndex === stepsCount - 1 ? "Confirm" : "Next Step"}
      </button>
    </div>
  );
}

export default FormFooter;
