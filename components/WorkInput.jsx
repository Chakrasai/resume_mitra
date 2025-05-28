import React from "react";
import InputFeild from "./InputFeild"; // Assuming you already created this reusable component

function WorkInput() {
  return (
    <div className="flex flex-col gap-6">

      {/* Displayed Work Experience Summary */}
      <div className="border border-[#20B2AA] p-4 rounded-lg">
        <div className="flex justify-between items-start">
          <ul>
            <li className="flex items-center text-[#303030] font-semibold">
              <i className="ri-briefcase-4-fill mr-2 text-[#20B2AA]" />
              UI/UX Designer
            </li>
            <li className="flex items-center text-[#303030] font-semibold">
              <i className="ri-building-fill mr-2 text-[#20B2AA]" />
              InTechNative
            </li>
          </ul>
          <ul className="text-right">
            <li className="text-[#303030]/90">Noida, Uttar Pradesh</li>
            <li className="text-[#303030]/90">Jan 2025 - Present</li>
          </ul>
        </div>
        <p className="text-[#6D6868] mt-3 text-sm">
          Results-driven professional with a strong background in [your field, e.g., marketing, software development, finance]. Skilled in [key skills], with a proven track record of Adept at solving complex problems and delivering value in fast-paced environments.
        </p>
      </div>

      {/* Work Experience Form Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InputFeild type="text" placeholder="UI/UX Designer" iconClass="ri-briefcase-4-line" />
        <InputFeild type="text" placeholder="InTechNative" iconClass="ri-building-line" />
        <InputFeild type="text" placeholder="Noida" iconClass="ri-map-pin-line" />
      </div>

      {/* Date Range & Checkbox */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex gap-2">
          <InputFeild type="text" placeholder="Month" iconClass="ri-calendar-line" />
          <InputFeild type="text" placeholder="Year" iconClass="ri-calendar-line" />
        </div>
        <div className="flex gap-2">
          <InputFeild type="text" placeholder="Month" iconClass="ri-calendar-line" />
          <InputFeild type="text" placeholder="Year" iconClass="ri-calendar-line" />
        </div>
      </div>

      <label className="flex items-center gap-2 text-sm text-[#303030]/90 mt-2">
        <input type="checkbox" className="accent-[#20B2AA]" />
        I'm Currently working
      </label>

      {/* Description TextArea */}
      <div className="border border-[#20B2AA] rounded-lg p-3 card-shadow">
        <textarea
          rows={4}
          placeholder="Describe your role and accomplishments..."
          className="w-full outline-none text-[16px] text-[#303030]/90 resize-none"
        />
      </div>

    </div>
  );
}

export default WorkInput;
