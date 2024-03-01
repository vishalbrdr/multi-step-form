import { create } from "zustand";

type FormData = {
  personalInfo: {
    name: string;
    emailAddress: string;
    phoneNumber: string;
  };
  plan: {
    name: "arcade" | "advanced" | "pro";
    billing: "monthly" | "yearly";
  };
  addons: {
    onlineService: boolean;
    largerStorage: boolean;
    customizableProfile: boolean;
  };
};

type Actions = {
  setFormData: (data: Partial<FormData>) => void;
};

const INITIAL_STATE: FormData = {
  personalInfo: {
    name: "",
    emailAddress: "",
    phoneNumber: "",
  },
  plan: {
    name: "arcade",
    billing: "monthly",
  },
  addons: {
    onlineService: false,
    largerStorage: false,
    customizableProfile: false,
  },
};

export const useMultiStepFormStore = create<FormData & Actions>((set) => {
  return {
    ...INITIAL_STATE,
    setFormData: (data: Partial<FormData>) =>
      set((state) => ({ ...state, ...data })),
  };
});
