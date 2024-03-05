import FormWrapper from "../FormWrapper";
import FormFooter from "../FormFooter";
import { StepProps } from "../../hooks/useMultiStepForm";
import RadioSelect from "../inputs/RadioSelect";

import BillingSwitch from "../inputs/BillingSwitch";
import { planOptions } from "../../store/plans";

function PlanSelectionForm({ multiStepForm }: { multiStepForm: StepProps }) {
  const heading = "Select your plan";
  const subText = "You have the option of monthly or yearly billing.";

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    multiStepForm.next();
  }
  return (
    <FormWrapper heading={heading} subText={subText}>
      <form
        className="h-full w-fit flex flex-col justify-between"
        onSubmit={handleSubmit}
      >
        <div className="grid gap-4">
          <div className="flex gap-4">
            {planOptions.map((p) => (
              <RadioSelect plan={p} key={p.name} />
            ))}
          </div>
          <div>
            <BillingSwitch />
          </div>
        </div>
        <FormFooter multiStepForm={multiStepForm} />
      </form>
    </FormWrapper>
  );
}

export default PlanSelectionForm;
