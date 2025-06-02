import React, { useState } from 'react'
import Sidebar from '../components/Sidebar';
import ContentSection from '../components/ContentSection';
import ChooseTemplate from '../components/ChooseTemplete';

function ResumeBuilder() {
  const [selected, setSelected] = useState("About me");
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Menu Icon for mobile */}
      <button
        onClick={() => setSidebarOpen(!isSidebarOpen)}
        className="md:hidden absolute top-5 left-4 z-50 text-2xl bg-white p-2 rounded shadow"
      >
        <i className="ri-menu-line"></i>
      </button>

      {/* Add min-h-screen here to fix sidebar height */}
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Sidebar */}
        <div className="md:w-1/5 z-40">
          <Sidebar selected={selected} setSelected={setSelected} isOpen={isSidebarOpen} />
        </div>

        {/* Content section */}
        <div className="md:w-3/5 px-4 py-6">
          <ContentSection selected={selected} />
        </div>

        {/* Choose Template */}
        <div className="md:w-1/5 px-4 py-6 flex justify-center items-center bg-gray-100">
          <ChooseTemplate />
        </div>
      </div>
    </div>
  );
}

export default ResumeBuilder;
