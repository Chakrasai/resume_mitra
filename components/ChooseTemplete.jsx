import React from 'react';

function ChooseTemplate() {
  return (
    <div className="flex flex-col items-center justify-center p-6">
      <img src="/choose.png" alt="Choose Template" className="w-64 h-auto mb-4" />
      <h3 className="text-xl font-semibold text-gray-700">
        Choose Template
      </h3>
    </div>
  );
}

export default ChooseTemplate;
