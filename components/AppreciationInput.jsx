import React, { useState } from "react";
import InputFeild from "./InputFeild";

function AppreciationInput() {
  const [certificate, setCertificate] = useState("");
  const [certificates, setCertificates] = useState([]);

  const handleInputChange = (e) => {
    setCertificate(e.target.value);
  };

  const addCertificate = () => {
    if (certificate.trim()) {
      setCertificates((prev) => [...prev, certificate.trim()]);
      setCertificate("");
    }
  };

  const removeCertificate = (index) => {
    const updated = certificates.filter((_, i) => i !== index);
    setCertificates(updated);
  };

  return (
    <div className="flex flex-col gap-6" style={{ maxHeight: "80vh", overflowY: "auto" }}>
      <div className="border p-4 rounded-lg space-y-4 relative">
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-800">Certifications and Licenses</h3>
          <p className="text-sm text-gray-600">
            If the job requires you to have certain certifications or licenses, mention them below.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 items-start mb-4">
          <div className="w-full md:w-2/3">
            <div className="relative">
              <i className="ri-certificate-line absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                name="certificate"
                value={certificate}
                onChange={handleInputChange}
                placeholder="Enter certification or license"
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded"
              />
            </div>
          </div>

          <button
            onClick={addCertificate}
            className="flex items-center gap-2 bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600"
          >
            <i className="ri-add-circle-fill text-lg" />
            <span>Add Certificate</span>
          </button>
        </div>

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
                <i className="ri-delete-bin-line"></i>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AppreciationInput;
