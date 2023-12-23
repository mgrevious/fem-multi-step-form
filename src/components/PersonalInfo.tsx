import React from "react";
import ButtonNav from "./ButtonNav";

const PersonalInfo: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col mb-4 md:mb-6">
        <label className="font-light text-xs mb-1" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          className="border border-gray-300 text-medium-gray rounded-[4px] p-2 hover:border-deep-purple"
          placeholder="e.g. Stephen King"
          name="name"
        />
      </div>
      <div className="flex flex-col mb-4 md:mb-6">
        <label className="font-light text-xs mb-1" htmlFor="email">
          Email Address
        </label>
        <input
          type="text"
          className="border border-gray-300 text-medium-gray rounded-[4px] p-2 hover:border-deep-purple"
          placeholder="e.g. stephen-king@lorem.com"
          name="email"
        />
      </div>
      <div className="flex flex-col">
        <label className="font-light text-xs mb-1" htmlFor="phone">
          Phone Number
        </label>
        <input
          type="text"
          className="border border-gray-300 text-medium-gray rounded-[4px] p-2 hover:border-deep-purple"
          placeholder="e.g. +1 234 567 890"
          name="phone"
        />
      </div>
      <ButtonNav />
    </div>
  );
};

export default PersonalInfo;
