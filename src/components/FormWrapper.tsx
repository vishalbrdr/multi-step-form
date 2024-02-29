import { ReactElement } from "react";

type FormWrapperProps = {
  heading: string;
  subText: string;
  children: ReactElement;
};
function FormWrapper({ heading, subText, children }: FormWrapperProps) {
  return (
    <div className="px-8 flex flex-col py-8">
      <header>
        <h1 className="text-xl font-bold text-primary-marine-blue">
          {heading}
        </h1>
        <p className="text-neutral-lightGray">{subText}</p>
      </header>
      <div className="pt-10  grow">{children}</div>
    </div>
  );
}

export default FormWrapper;
