import { create } from "zustand";

type FormData = {
  personalInfo: {
    name: string;
    emailAddress: string;
    phoneNumber: string;
  };
  plan: {
    name: "arcade" | "advanced" | "pro";
    period: "monthly" | "yearly";
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
    period: "monthly",
  },
  addons: {
    onlineService: false,
    largerStorage: false,
    customizableProfile: false,
  },
};

export const useFormDataStore = create<FormData & Actions>((set) => ({
  ...INITIAL_STATE,
  setFormData: (data: Partial<FormData>) =>
    set((state) => ({ ...state, ...data })),
}));
