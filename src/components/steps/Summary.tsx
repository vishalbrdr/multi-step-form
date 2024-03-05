import { StepProps } from "../../hooks/useMultiStepForm";
import { useMultiStepFormStore } from "../../store/multiStepformStore";
import FormWrapper from "../FormWrapper";

function Summary({ multiStepForm }: { multiStepForm: StepProps }) {
  const { back } = multiStepForm;
  const heading = "Finishing up";
  const subtext = "Double-check everything looks OK before you confirming.";
  const { plan } = useMultiStepFormStore();
  return (
    <FormWrapper heading={heading} subText={subtext}>
      <form>
        <div>
          <header>
            <div>
              <p className="capitalize">
                {plan.name} ({plan.billing})
              </p>
              <button
                role="button"
                onClick={() => {
                  back();
                  back();
                }}
              >
                Change
              </button>
            </div>
          </header>
          <div></div>
        </div>
      </form>
    </FormWrapper>
  );
}

export default Summary;
