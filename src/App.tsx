import SideBar from "./components/SideBar";
import PersonalInfoForm from "./components/steps/PersonalInfoForm";
import useMultiStepForm from "./hooks/useMultiStepForm";

export default function App() {
  const { step, currentStepIndex } = useMultiStepForm([<PersonalInfoForm />]);
  return (
    <div className="relative bg-neutral-white flex p-2 rounded-xl h-[35rem]">
      <SideBar currentStepIndex={currentStepIndex} />
      <div className="max-w-[50rem] flex">{step}</div>
    </div>
  );
}
