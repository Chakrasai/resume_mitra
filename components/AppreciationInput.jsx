import React, { useState } from 'react';
import InputFeild from './InputFeild';

function AppreciationInput() {
  const [certificate, setCertificate] = useState('');
  const [certificates, setCertificates] = useState([]);

  const handleInputChange = (e) => {
    setCertificate(e.target.value);
  };

  const addCertificate = () => {
    if (certificate.trim()) {
      setCertificates([...certificates, certificate.trim()]);
      setCertificate('');
    }
  };

  const removeCertificate = (index) => {
    const updated = [...certificates];
    updated.splice(index, 1);
    setCertificates(updated);
  };

  return (
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2 text-gray-800">Certifications and Licenses</h3>
      <p className="text-sm text-gray-600 mb-4">
        If the job requires you to have certain certifications or licenses, mention them below.
      </p>

      <div className="flex flex-col md:flex-row gap-4 items-start mb-4">
        {/* Wrapper div for controlled input logic */}
        <div className="w-full md:w-2/3">
          <InputFeild
            name=""
            type="text"
            iconClass="ri-certificate-line"
            placeholder="Enter certification or license"
          />
          <input
            type="text"
            value={certificate}
            onChange={handleInputChange}
            className="mt-[-2.5rem] opacity-0 absolute"
          />
        </div>

        <button
          onClick={addCertificate}
          className="flex items-center gap-2 bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600"
        >
          <i className="ri-add-circle-fill text-lg" />
          <span>Add Certificate</span>
        </button>
      </div>

      {/* Display certificate list */}
      <ul className="space-y-2">
        {certificates.map((cert, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-gray-100 border border-gray-300 px-4 py-2 rounded-md"
          >
            <span>{cert}</span>
            <button
              onClick={() => removeCertificate(index)}
              className="text-red-500 hover:text-red-700"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AppreciationInput;
