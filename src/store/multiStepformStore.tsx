import { create } from "zustand";

type FormData = {
  personalInfo: {
    name: string;
    emailAddress: string;
    phoneNumber: string;
  };
  plan: {
    name: "arcade" | "advanced" | "pro";
    price: { yearly: string; monthly: string };
    billing: "monthly" | "yearly";
  };
  addons: {
    name: string;
    description: string;
    price: { yearly: string; monthly: string };
    isSelected: boolean;
  }[];
};

type Actions = {
  setFormData: (data: Partial<FormData>) => void;
};

export const plans = [
  { name: "arcade", price: { yearly: "$90/yr", monthly: "$9/mo" } },
  { name: "advanced", price: { yearly: "$120/yr", monthly: "$12/mo" } },
  { name: "pro", price: { yearly: "$150/yr", monthly: "$15/mo" } },
] as const;

const INITIAL_STATE: FormData = {
  personalInfo: {
    name: "",
    emailAddress: "",
    phoneNumber: "",
  },
  plan: {
    ...plans[0],
    billing: "monthly",
  },
  addons: [
    {
      name: "Online service",
      description: "Access to multiplayer games",
      price: { yearly: "$10/yr", monthly: "$1/mo" },
      isSelected: false,
    },
    {
      name: "Larger storage",
      description: "Extra 1TB of cloud save",
      price: { yearly: "$20/yr", monthly: "$2/mo" },
      isSelected: false,
    },
    {
      name: "Customizable profile",
      description: "Custom theme on your profile",
      price: { yearly: "$20/yr", monthly: "$2/mo" },
      isSelected: false,
    },
  ],
};

export const useMultiStepFormStore = create<FormData & Actions>((set) => {
  return {
    ...INITIAL_STATE,
    setFormData: (data: Partial<FormData>) =>
      set((state) => ({ ...state, ...data })),
  };
});
