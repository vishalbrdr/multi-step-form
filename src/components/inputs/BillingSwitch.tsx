import { useMultiStepFormStore } from "../../store/multiStepformStore";

function BillingSwitch() {
  const { plan, setFormData } = useMultiStepFormStore();
  const isChecked = plan.billing === "yearly";
  const handleCheckboxChange = () => {
    setFormData({
      plan: {
        ...plan,
        billing: isChecked ? "monthly" : "yearly",
      },
    });
  };
  return (
    <div className="flex py-2 font-medium bg-neutral-magnolia justify-center gap-8">
      <div className={isChecked ? "text-neutral-lightGray" : ""}>Monthly</div>
      <label className="flex cursor-pointer select-none items-center">
        <div className="relative">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            className="sr-only"
          />
          <div className="block h-6 w-12 rounded-full bg-primary-marine-blue"></div>
          <div
            className={`absolute top-1 size-4 bg-neutral-white rounded-full bg-white transition 
            ${!isChecked ? "left-1" : "translate-x-full"}
            `}
          ></div>
        </div>
      </label>
      <div className={!isChecked ? "text-neutral-lightGray" : ""}>Yearly</div>
    </div>
  );
}

export default BillingSwitch;
