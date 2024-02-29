import { create } from "zustand";

type FormData = {
  formData: {
    name: string;
    email: string;
    password: string;
  };
};

type Actions = {
  setFormData: (data: Partial<FormData>) => void;
};

const INITIAL_STATE = {
  name: "",
  email: "",
  password: "",
};

export const useStore = create<FormData & Actions>((set) => ({
  formData: INITIAL_STATE,
  setFormData: (data: Partial<FormData>) =>
    set((state) => ({
      formData: { ...state.formData, ...data },
    })),
}));
