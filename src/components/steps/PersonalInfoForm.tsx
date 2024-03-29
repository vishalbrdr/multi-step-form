import { useForm } from "react-hook-form";
import FormWrapper from "../FormWrapper";
import TextInput from "../inputs/TextInput";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import FormFooter from "../FormFooter";
import { StepProps } from "../../hooks/useMultiStepForm";
import { useMultiStepFormStore } from "../../store/multiStepformStore";

const personalInfoSchema = z.object({
  name: z.string().min(2, "This field is required"),
  emailAddress: z.string().email("Invalid email address"),
  phoneNumber: z.string().min(10, "This field is required"),
});

type PersonalInfo = z.infer<typeof personalInfoSchema>;

function PersonalInfoForm({ multiStepForm }: { multiStepForm: StepProps }) {
  const heading = "Personal Info";
  const subText = "Please provide your name, email, and phone number.";
  const { setFormData, personalInfo } = useMultiStepFormStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PersonalInfo>({
    defaultValues: personalInfo,
    resolver: zodResolver(personalInfoSchema),
  });
  function onSubmit(data: PersonalInfo) {
    setFormData({ personalInfo: data });
    multiStepForm.next();
  }
  return (
    <FormWrapper heading={heading} subText={subText}>
      <form
        className="h-full flex flex-col justify-between"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="grid gap-4">
          <TextInput
            label={"name"}
            error={errors.name?.message}
            register={register}
            placeholder="e.g. Vishal Biradar"
          />
          <TextInput
            label={"emailAddress"}
            error={errors.emailAddress?.message}
            register={register}
            placeholder="e.g. vishalbiradar.dev@gmail.com"
          />
          <TextInput
            label={"phoneNumber"}
            error={errors.phoneNumber?.message}
            register={register}
            placeholder="e.g. +91 987 6543 210"
          />
        </div>
        <FormFooter multiStepForm={multiStepForm} />
      </form>
    </FormWrapper>
  );
}

export default PersonalInfoForm;
