const steps = ["Your Info", "Select Plan", "Add-Ons", "Summary"];

type SideBarProps = { currentStepIndex: number };

function SideBar({ currentStepIndex }: SideBarProps) {
  return (
    <div className="pt-6 rounded-xl bg-sidebar-desktop space-y-4 bg-no-repeat bg-cover h-full bg-bottom w-[17rem] pl-6">
      {steps.map((step, index) => (
        <div key={step} className="flex gap-3 items-center">
          <div
            className={` h-10 w-10 rounded-full flex items-center border justify-center text-neutral-white font-bold ${
              currentStepIndex === index &&
              "bg-primary-pastel-blue border-none text-primary-marine-blue"
            }`}
          >
            {index + 1}
          </div>
          <div className="uppercase ">
            <p className="text-primary-light-blue">step {index + 1}</p>
            <p className="text-neutral-white font-medium">{step}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SideBar;
