import FormWrapper from "../FormWrapper";
import FormFooter from "../FormFooter";
import { StepProps } from "../../hooks/useMultiStepForm";
import { useMultiStepFormStore } from "../../store/multiStepformStore";
import checkBox from "../../assets/images/icon-checkmark.svg";

function AddOnsPickerForm({ multiStepForm }: { multiStepForm: StepProps }) {
  const heading = "Pick add-ons";
  const subText = "Add-ons help enhance your gaming experience.";
  console.log(checkBox);

  const {
    addons,
    plan: { billing },
    setFormData,
  } = useMultiStepFormStore();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const isSelected = e.target.checked;
    setFormData({
      addons: addons.map((addon) =>
        addon.name === name ? { ...addon, isSelected } : addon
      ),
    });
  };

  return (
    <FormWrapper heading={heading} subText={subText}>
      <form className="flex flex-col h-full">
        <div className="space-y-3 grow w-[25rem]">
          {addons.map((addon) => (
            <div key={addon.name}>
              <label
                className={`${
                  addon.isSelected
                    ? "border-primary-purplish-blue bg-neutral-magnolia"
                    : "border-neutral-lightGray"
                } border rounded-md flex cursor-pointer hover:border-primary-purplish-blue focus-within:border-primary-purplish-blue px-4 py-2 gap-4 items-center`}
              >
                <input
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  name={addon.name}
                  onChange={handleChange}
                  checked={addon.isSelected}
                />
                <div>
                  <strong className="text-primary-marine-blue font-medium">
                    {addon.name}
                  </strong>
                  <p className="text-neutral-lightGray">{addon.description}</p>
                </div>
                <div className="ml-auto text-sm text-primary-purplish-blue">
                  <span>+{addon.price[billing]}</span>
                </div>
              </label>
            </div>
          ))}
        </div>
        <FormFooter multiStepForm={multiStepForm} />
      </form>
    </FormWrapper>
  );
}

export default AddOnsPickerForm;
