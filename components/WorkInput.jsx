import React, { useState } from "react";
import InputFeild from "./InputFeild";

function WorkInput() {
  const [experiences, setExperiences] = useState([
    {
      profile: "",
      company: "",
      fromDate: "",
      toDate: "",
      isPresent: false,
      summary: ""
    }
  ]);

  const handleDateChange = (e, index, type) => {
    const value = e.target.value;
    const dateObj = new Date(value);
    const formatted = dateObj.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
    });
    const updated = [...experiences];
    updated[index][type] = formatted;
    setExperiences(updated);
  };

  const handleChange = (index, field, value) => {
    const updated = [...experiences];
    updated[index][field] = value;
    setExperiences(updated);
  };

  const addExperience = () => {
    setExperiences([
      ...experiences,
      {
        profile: "",
        company: "",
        fromDate: "",
        toDate: "",
        isPresent: false,
        summary: ""
      }
    ]);
  };

  const removeExperience = (index) => {
    const updated = experiences.filter((_, i) => i !== index);
    setExperiences(updated);
  };

  return (
    <div className="flex flex-col gap-6" style={{ maxHeight: "80vh", overflowY: "auto" }}>
      {experiences.map((exp, index) => (
        <div key={index} className="border p-4 rounded-lg space-y-4 relative">
          <button
            onClick={() => removeExperience(index)}
            className="absolute top-2 right-2 text-red-500 hover:text-red-700 text-sm"
          >
            Remove
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="flex flex-col gap-1 text-sm text-[#303030]/90">
              Profile
              <InputFeild
                type="text"
                placeholder="Enter The Profile"
                iconClass="ri-briefcase-4-line"
                value={exp.profile}
                onChange={(e) => handleChange(index, "profile", e.target.value)}
              />
            </label>
            <label className="flex flex-col gap-1 text-sm text-[#303030]/90">
              Company
              <InputFeild
                type="text"
                placeholder="Enter The Company"
                iconClass="ri-building-line"
                value={exp.company}
                onChange={(e) => handleChange(index, "company", e.target.value)}
              />
            </label>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="flex flex-col gap-1 text-sm text-[#303030]/90">
                From
                <input
                  type="month"
                  onChange={(e) => handleDateChange(e, index, "fromDate")}
                  style={{ boxShadow: "0 6px 8px rgba(0, 0, 0, 0.2)" }}
                  className="p-2 border rounded outline-none border-[#20B2AA]"
                />
                {exp.fromDate && <p className="text-xs mt-1 text-gray-600">{exp.fromDate}</p>}
              </label>
            </div>

            {!exp.isPresent && (
              <div>
                <label className="flex flex-col gap-1 text-sm text-[#303030]/90">
                  To
                  <input
                    type="month"
                    onChange={(e) => handleDateChange(e, index, "toDate")}
                    style={{ boxShadow: "0 6px 8px rgba(0, 0, 0, 0.2)" }}
                    className="p-2 border rounded outline-none border-[#20B2AA]"
                  />
                  {exp.toDate && <p className="text-xs mt-1 text-gray-600">{exp.toDate}</p>}
                </label>
              </div>
            )}
          </div>

          <label className="flex items-center gap-2 text-sm text-[#303030]/90 mt-2">
            <input
              type="checkbox"
              className="accent-[#20B2AA]"
              checked={exp.isPresent}
              onChange={(e) => handleChange(index, "isPresent", e.target.checked)}
            />
            I'm currently working
          </label>

          <div>
            <label className="text-sm font-medium text-gray-700">Summary</label>
            <textarea
              placeholder="Summary"
              rows={4}
              style={{ boxShadow: "0 6px 8px rgba(0, 0, 0, 0.2)" }}
              className="w-full p-4 border border-[#20B2AA] rounded-lg text-sm shadow-sm outline-none text-[#303030]/90 resize-none"
              value={exp.summary}
              onChange={(e) => handleChange(index, "summary", e.target.value)}
            />
          </div>
        </div>
      ))}

      <button
        onClick={addExperience}
        className="mt-6 bg-teal-500 hover:bg-teal-600 text-white font-semibold px-5 py-2 rounded"
      >
        + Add Experience
      </button>
    </div>
  );
}

export default WorkInput;
