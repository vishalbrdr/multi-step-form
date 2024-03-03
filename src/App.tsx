import SideBar from "./components/SideBar";
import PersonalInfoForm from "./components/steps/PersonalInfoForm";
import PlanSelectionForm from "./components/steps/PlanSelection";
import useMultiStepForm from "./hooks/useMultiStepForm";

export default function App() {
  const multiStepForm = useMultiStepForm([PersonalInfoForm, PlanSelectionForm]);

  return (
    <div className="relative bg-neutral-white flex p-3 rounded-3xl h-[35rem]">
      <div>
        <SideBar currentStepIndex={multiStepForm.currentStepIndex} />
      </div>
      <div className="flex w-[50vw] min-w-[30rem] px-4 max-w-[35rem] justify-center">
        <multiStepForm.Step multiStepForm={multiStepForm} />
      </div>
    </div>
  );
}
