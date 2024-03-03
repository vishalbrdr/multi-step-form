import FormWrapper from "../FormWrapper";
import FormFooter from "../FormFooter";
import { StepProps } from "../../hooks/useMultiStepForm";
import RadioSelect from "../inputs/RadioSelect";
import ArcadeIcon from "../../assets/images/icon-arcade.svg";
import AdvancedIcon from "../../assets/images/icon-advanced.svg";
import ProIcon from "../../assets/images/icon-pro.svg";
import BillingSwitch from "../inputs/BillingSwitch";

const planOptions = [
  {
    name: "arcade",
    price: { perYear: "$90/yr", perMonth: "$9/mo" },
    icon: ArcadeIcon,
  },
  {
    name: "advanced",
    price: { perYear: "$120/yr", perMonth: "$12/mo" },
    icon: AdvancedIcon,
  },
  {
    name: "pro",
    price: { perYear: "$150/yr", perMonth: "$15/mo" },
    icon: ProIcon,
  },
] as const;

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
