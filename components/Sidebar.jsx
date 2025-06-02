import React from 'react';
import {
  RiUserLine,
  RiBriefcaseLine,
  RiGraduationCapLine,
  RiAwardLine,
  RiToolsLine,
} from "react-icons/ri";

const menuItems = [
  { label: "About me", icon: <RiUserLine /> },
  { label: "Work Experience", icon: <RiBriefcaseLine /> },
  { label: "Education", icon: <RiGraduationCapLine /> },
  { label: "Skill", icon: <RiToolsLine /> },
  { label: "Appreciation", icon: <RiAwardLine /> },
];

function Sidebar({ selected, setSelected, isOpen }) {
  return (
    <div
      className={`
        bg-teal-600 text-white p-6 flex flex-col gap-6 w-64
        fixed md:static top-16 left-0 z-40 h-[calc(100vh-4rem)]
        rounded-r-lg
        transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0
  `}
>
      {menuItems.map((item) => (
        <button
          key={item.label}
          onClick={() => setSelected(item.label)}
          className={`flex items-center gap-3 p-3 rounded-md text-left transition ${
            selected === item.label
              ? "bg-white text-teal-600 font-semibold"
              : "hover:bg-teal-700"
          }`}
        >
          {item.icon}
          <span>{item.label}</span>
        </button>
      ))}
    </div>
  );
}

export default Sidebar;
