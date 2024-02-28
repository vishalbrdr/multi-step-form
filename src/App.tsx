import SideBar from "./components/SideBar";
import useMultiStepForm from "./hooks/useMultiStepForm";

export default function App() {
  const { step, currentStepIndex } = useMultiStepForm([<div></div>]);
  return (
    <div className="relative p-2 rounded-md h-[35rem]">
      <SideBar currentStepIndex={currentStepIndex} />
      <form>{step}</form>
    </div>
  );
}
