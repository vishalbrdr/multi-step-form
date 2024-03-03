import { useMultiStepFormStore } from "../../store/multiStepformStore";

type PlanName = "arcade" | "advanced" | "pro";

type RadioSelectProps = {
  plan: {
    name: PlanName;
    price: { perYear: string; perMonth: string };
    icon: string;
  };
};

function RadioSelect({ plan }: RadioSelectProps) {
  const {
    plan: { name: planName, billing },
    setFormData,
  } = useMultiStepFormStore();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value as PlanName;
    setFormData({ plan: { name: value, billing } });
  };

  return (
    <label className="cursor-pointer">
      <input
        type="radio"
        value={plan.name}
        checked={plan.name === planName}
        className="peer hidden"
        onChange={handleChange}
      />
      <div className="border w-[8rem] grid gap-6 rounded-md pl-3 py-3 border-neutral-lightGray peer-hover:border-primary-marine-blue peer-checked:border-primary-marine-blue peer-checked:bg-neutral-magnolia">
        <div>
          <img src={plan.icon} alt="plan-icon" />
        </div>
        <div>
          <p className="text-primary-marine-blue font-medium capitalize">
            {plan.name}
          </p>
          <p className="text-neutral-lightGray">
            {billing === "monthly" ? plan.price.perMonth : plan.price.perYear}
          </p>
          {billing === "yearly" && (
            <p className="text-xs text-primary-marine-blue">2 months free</p>
          )}
        </div>
      </div>
    </label>
  );
}

export default RadioSelect;
