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

// interface Data {
//   name: FieldType;
//   label: string;
//   hasMask: boolean;
//   placeholder: string;
//   mask?: string;
//   maskReplacement?: string;
//   type?: string;
//   validate: (input: string) => boolean;
// }

// export const infoData: Data[] = [
//   {
//     name: "name",
//     label: "Name",
//     hasMask: false,
//     placeholder: "e.g. Stephen King",
//     validate: (input) => input.length > 1,
//   },
//   {
//     name: "email",
//     label: "Email",
//     hasMask: false,
//     placeholder: "e.g. stephenking@lorem.com",
//     validate: (input) =>
//       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
//         String(input).toLowerCase()
//       ),
//   },
//   {
//     name: "phone",
//     label: "Phone",
//     hasMask: true,
//     placeholder: "e.g. (999) 999-9999",
//     mask: "(___) ___-____",
//     maskReplacement: "_",
//     type: "number",
//     validate: (input) =>
//       /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im.test(
//         String(input).toLowerCase()
//       ),
//   },
// ];
