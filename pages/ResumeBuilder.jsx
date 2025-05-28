import React, { useState } from 'react'
import Sidebar from '../components/Sidebar';
import ContentSection from '../components/ContentSection';
import ChooseTemplate from '../components/ChooseTemplete';


function ResumeBuilder() {
  const [selected, setSelected] = useState("About me");

  return (
    <div className="flex min-h-screen bg-gray-50">
     
      <div className="sticky top-0 h-screen">
        <Sidebar selected={selected} setSelected={setSelected} />
      </div>

        <ContentSection selected={selected} />
        <ChooseTemplate />
      

    </div>
  );
}

export default ResumeBuilder
