import React, { useContext } from "react";
import ButtonNav from "../../features/plan/ButtonNav";
import { SubmitHandler, useForm } from "react-hook-form";
import { useHookFormMask } from "use-mask-input";
import { AppContext } from "../../context/AppContext";

export interface FormInputs {
  name: string;
  email: string;
  phone: string;
  phone2: string;
}

const PersonalInfo: React.FC = () => {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<FormInputs>();

  const registerWithMask = useHookFormMask(register);

  const { setCurrentStep } = useContext(AppContext);
  const onSubmit: SubmitHandler<FormInputs> = (data: FormInputs) => {
    if (data) {
      setCurrentStep(2);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col mb-4 md:mb-6">
        <div className="flex flex-row justify-between">
          <label
            className="font-regular text-sm mb-1 inline-block"
            htmlFor="name"
          >
            Name
          </label>
          {errors && errors.name && (
            <span className="block text-sm font-bold text-error">
              {errors.name.message}
            </span>
          )}
        </div>
        <input
          type="text"
          className={`border ${
            errors && errors.name
              ? "border-error focus:border-error focus:border-2"
              : "hover:border-deep-purple border-gray-300 focus:font-bold focus:text-primary"
          } text-medium-gray rounded-[4px] p-2 h-[44px] hover:cursor-pointer`}
          placeholder="e.g. Stephen King"
          {...register("name", {
            required: "Name is required",
          })}
        />
      </div>
      <div className="flex flex-col mb-4 md:mb-6">
        <div className="flex flex-row justify-between">
          <label
            className="font-regular text-sm mb-1 inline-block"
            htmlFor="email"
          >
            Email
          </label>
          {errors && errors.email && (
            <span className="block text-sm font-bold text-error">
              {errors.email.message}
            </span>
          )}
        </div>
        <input
          type="email"
          className={`border ${
            errors && errors.email
              ? "border-error focus:border-error focus:border-2"
              : "hover:border-deep-purple border-gray-300 focus:font-bold focus:text-primary"
          } text-medium-gray rounded-[4px] p-2 h-[44px] hover:cursor-pointer`}
          placeholder="e.g. stephenking@lorem.com"
          {...register("email", {
            required: "Email is required",
          })}
        />
      </div>
      <div className="flex flex-col mb-4 md:mb-6">
        <div className="flex flex-row justify-between">
          <label
            className="font-regular text-sm mb-1 inline-block"
            htmlFor="phone"
          >
            Phone
          </label>
          {errors && errors.phone && (
            <span className="block text-sm font-bold text-error">
              {errors.phone.message}
            </span>
          )}
        </div>
        <input
          type="phone"
          className={`border ${
            errors && errors.phone
              ? "border-error focus:border-error focus:border-2"
              : "hover:border-deep-purple border-gray-300 focus:font-bold focus:text-primary"
          } text-medium-gray rounded-[4px] p-2 h-[44px] hover:cursor-pointer`}
          placeholder="e.g. +1 234 567 890"
          {...registerWithMask("phone", ["+1 999 999 999"], {
            required: "Phone is required",
          })}
        />
      </div>
      <ButtonNav />
    </form>
  );
};

export default PersonalInfo;
