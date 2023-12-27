export interface PersonalInfoForm {
  [index: string]: {
    value: string;
    isValid: boolean;
  };
}

export const initialState: PersonalInfoForm = {
  name: {
    value: "",
    isValid: false,
  },
  email: {
    value: "",
    isValid: false,
  },
  phone: {
    value: "",
    isValid: false,
  },
};

export type FieldType = "name" | "email" | "phone";
