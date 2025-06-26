import React, { useState, useEffect } from 'react';
import InputFeild from './InputFeild';

function EducationInput() {
  const [educations, setEducations] = useState([
    {
      degree: '',
      institute: '',
      startDate: '',
      endDate: '',
      isPresent: false
    }
  ]);

  useEffect(() => {
    const fetchEducation = async () => {
      try {
        const res = await fetch('https://itn-dev-rm-be-35683800078.us-west1.run.app/121/13');
        const data = await res.json();
        if (data.education && data.education.length > 0) {
          const mappedEducation = data.education.map((edu) => ({
            degree: edu.degree || '',
            institute: edu.institution || '',
            startDate: edu.start_date || '',
            endDate: edu.end_date || '',
            isPresent: edu.is_currently === 1
          }));
          setEducations(mappedEducation);
        }
      } catch (error) {
        console.error('Error fetching education data:', error);
      }
    };

    fetchEducation();
  }, []);

  const handleChange = (index, field, value) => {
    const updated = [...educations];
    updated[index][field] = value;
    if (field === 'isPresent' && value) {
      updated[index]['endDate'] = '';
    }
    setEducations(updated);
  };

  const addEducation = () => {
    setEducations([
      ...educations,
      {
        degree: '',
        institute: '',
        startDate: '',
        endDate: '',
        isPresent: false
      }
    ]);
  };

  const removeEducation = (index) => {
    const updated = educations.filter((_, i) => i !== index);
    setEducations(updated);
  };

  return (
    <div style={{ maxHeight: "80vh", overflowY: "auto" }}>
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Enter The Education Details:</h2>

      {educations.map((edu, index) => (
        <div key={index} className="mb-6 border p-4 rounded-lg relative">
          <button
            onClick={() => removeEducation(index)}
            className="absolute top-2 right-2 text-red-500 hover:text-red-700 text-sm"
            style={{ fontSize: '1.5rem' }}
          >
            <i className="ri-delete-bin-line"></i>
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700">Degree Name</label>
              <InputFeild
                type="text"
                name="degree"
                value={edu.degree}
                onChange={(e) => handleChange(index, 'degree', e.target.value)}
                placeholder="e.g. B.Sc Computer Science"
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">Institute</label>
              <InputFeild
                type="text"
                name="institute"
                value={edu.institute}
                onChange={(e) => handleChange(index, 'institute', e.target.value)}
                placeholder="e.g. XYZ University"
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">Starting Date</label>
              <InputFeild
                type="date"
                name="startDate"
                value={edu.startDate}
                onChange={(e) => handleChange(index, 'startDate', e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">Ending Date</label>
              <InputFeild
                type="date"
                name="endDate"
                value={edu.endDate}
                onChange={(e) => handleChange(index, 'endDate', e.target.value)}
                disabled={edu.isPresent}
                className={`w-full border px-3 py-2 rounded ${
                  edu.isPresent ? 'bg-gray-100 cursor-not-allowed' : 'border-gray-300'
                }`}
              />
            </div>
          </div>

          <div className="mt-4 flex items-center space-x-2">
            <input
              type="checkbox"
              name="isPresent"
              checked={edu.isPresent}
              onChange={(e) => handleChange(index, 'isPresent', e.target.checked)}
              className="mr-2"
            />
            <label htmlFor="present" className="text-sm text-gray-700">I currently study here</label>
          </div>
        </div>
      ))}

      <button
        onClick={addEducation}
        className="mt-6 bg-teal-500 hover:bg-teal-600 text-white font-semibold px-5 py-2 rounded"
      >
        + Add Education
      </button>
    </div>
  );
}

export default EducationInput;
