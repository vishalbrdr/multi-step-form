import { useId } from "react";
import { UseFormRegister } from "react-hook-form";

type TextInputProps = {
  label: "name" | "emailAddress" | "phoneNumber";
  register: UseFormRegister<{
    name: string;
    emailAddress: string;
    phoneNumber: string;
  }>;
  error: string | undefined;
  placeholder: string | undefined;
};

function TextInput({ label, register, error, placeholder }: TextInputProps) {
  const id = useId();
  return (
    <div
      id={id}
      className={`grid text-primary-marine-blue gap-2 ${
        error && "animate-wiggle"
      }`}
    >
      <label htmlFor={id} className="flex">
        <span className="capitalize">{label}</span>
        <span className="text-primary-strawberry-red ml-auto">{error}</span>
      </label>
      <input
        {...register(label, { required: true })}
        placeholder={placeholder}
        className={`font-medium placeholder:font-normal outline-none outline outline-neutral-lightGray placeholder:text-neutral-lightGray focus:outline-primary-purplish-blue py-1 px-2 rounded ${
          error && "outline-primary-strawberry-red"
        }`}
        type="text"
        id={id}
      />
    </div>
  );
}

export default TextInput;
