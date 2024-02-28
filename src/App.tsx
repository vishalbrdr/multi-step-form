import SideBar from "./components/SideBar";
import useMultiStepForm from "./hooks/useMultiStepForm";

export default function App() {
  const { step, currentStepIndex } = useMultiStepForm([]);
  return (
    <div className="relative border">
      <SideBar currentStepIndex={currentStepIndex} />
      <form>{step}</form>
    </div>
  );
}
