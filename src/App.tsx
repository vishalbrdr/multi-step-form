import SideBar from "./components/SideBar";
import useMultiStepForm from "./hooks/useMultiStepForm";
import { useStore } from "./hooks/useStore";

export default function App() {
  const { formData } = useStore();
  const { step, currentStepIndex } = useMultiStepForm([<div></div>]);
  return (
    <div className="relative border p-2 rounded-xl h-[35rem]">
      <SideBar currentStepIndex={currentStepIndex} />
      <form>{step}</form>
    </div>
  );
}
