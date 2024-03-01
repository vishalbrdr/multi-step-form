import { ReactElement } from "react";

type FormWrapperProps = {
  heading: string;
  subText: string;
  children: ReactElement;
};
function FormWrapper({ heading, subText, children }: FormWrapperProps) {
  return (
    <div className="gap-10 flex flex-col py-8">
      <header className="">
        <h1 className="text-xl font-bold text-primary-marine-blue">
          {heading}
        </h1>
        <p className="text-neutral-lightGray">{subText}</p>
      </header>
      <div className="w-full grow">{children}</div>
    </div>
  );
}

export default FormWrapper;
