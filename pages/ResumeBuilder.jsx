import React, { useState } from 'react'
import Sidebar from '../components/Sidebar';
import ContentSection from '../components/ContentSection';
import ChooseTemplate from '../components/ChooseTemplete';

function ResumeBuilder() {
  const [selected, setSelected] = useState("About me");
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 relative">
      <div className="md:hidden bg-white border-b border-gray-200 px-4 py-3">
        <button
          onClick={() => setSidebarOpen(!isSidebarOpen)}
          className="md:hidden text-2xl bg-white p-2 rounded shadow"
        >
          <i className="ri-menu-line"></i>
        </button>
      </div>

      <div className="flex flex-col md:flex-row min-h-screen">
        <div className="md:w-1/5 z-30 md:relative md:pt-8 md:pl-4 flex justify-center items-center bg-gray-100 md:pr-6">
          <Sidebar selected={selected} setSelected={setSelected} isOpen={isSidebarOpen} setIsOpen={setSidebarOpen} />
        </div>

        <div className="md:w-3/5 px-4 py-8 md:py-10 md:px-8">
          <ContentSection selected={selected} />
        </div>

        <div className="md:w-1/5 px-4 py-8 md:py-10 flex justify-center items-center bg-gray-100 md:pr-6">
          <ChooseTemplate />
        </div>
      </div>
    </div>
  );
}

export default ResumeBuilder;
