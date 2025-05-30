import React, { useState } from 'react';
import InputFeild from './InputFeild';

function EducationInput() {
    const [education, setEducation] = useState({
        degree: '',
        institute: '',
        startDate: '',
        endDate: '',
        isPresent: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setEducation((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
            ...(type === 'checkbox' && checked ? { endDate: '' } : {})
        }));
    };

    const handleAddEducation = () => {
        console.log('Education Added:', education);
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Enter The Education Details:</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="text-sm font-medium text-gray-700">Degree Name</label>
                    <InputFeild
                        type="text"
                        name="degree"
                        value={education.degree}
                        onChange={handleChange}
                        placeholder="e.g. B.Sc Computer Science"
                        className="w-full border border-gray-300 rounded px-3 py-2"
                    />
                </div>

                <div>
                    <label className="text-sm font-medium text-gray-700">Institute</label>
                    <InputFeild
                        type="text"
                        name="institute"
                        value={education.institute}
                        onChange={handleChange}
                        placeholder="e.g. XYZ University"
                        className="w-full border border-gray-300 rounded px-3 py-2"
                    />
                </div>

                <div>
                    <label className="text-sm font-medium text-gray-700">Starting Date</label>
                    <InputFeild
                        type="date"
                        name="startDate"
                        value={education.startDate}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded px-3 py-2"
                    />
                </div>

                <div>
                    <label className="text-sm font-medium text-gray-700">Ending Date</label>
                    <InputFeild
                        type="date"
                        name="endDate"
                        value={education.endDate}
                        onChange={handleChange}
                        disabled={education.isPresent}
                        className={`w-full border px-3 py-2 rounded ${
                            education.isPresent ? 'bg-gray-100 cursor-not-allowed' : 'border-gray-300'
                        }`}
                    />
                </div>
            </div>

            <div className="mt-4 flex items-center space-x-2">
                <input
                type="checkbox"
                name="isPresent"
                checked={education.isPresent}
                onChange={handleChange}
                id="present"
                className="mr-2"
                />
                <label htmlFor="present" className="text-sm text-gray-700">I currently study here</label>
            </div>

            <button
                onClick={handleAddEducation}
                className="mt-6 bg-teal-500 hover:bg-teal-600 text-white font-semibold px-5 py-2 rounded"
            >
                Add Education
            </button>
        </div>
    );
}

export default EducationInput;
