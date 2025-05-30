import React, { useState } from 'react';

function SkillsInput() {
  const [skillName, setSkillName] = useState('');
  const [skillLevel, setSkillLevel] = useState('Beginner');
  const [skills, setSkills] = useState([]);

  const addSkill = () => {
    if (skillName.trim()) {
      setSkills([...skills, { name: skillName, level: skillLevel }]);
      setSkillName('');
      setSkillLevel('Beginner');
    }
  };

  const removeSkill = (index) => {
    const updatedSkills = [...skills];
    updatedSkills.splice(index, 1);
    setSkills(updatedSkills);
  };

  return (
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">Skills</h3>

      <div className="flex flex-col md:flex-row gap-4 items-start mb-4">
        <input
          type="text"
          value={skillName}
          onChange={(e) => setSkillName(e.target.value)}
          placeholder="Enter skill name"
          className="border border-teal-500 rounded-md px-4 py-2 w-full md:w-1/2"
          style={{ boxShadow: "0 6px 8px rgba(0, 0, 0, 0.2)" }}
        />

        <select
          value={skillLevel}
          onChange={(e) => setSkillLevel(e.target.value)}
          className="border border-teal-500 rounded-md px-4 py-2 w-full md:w-1/3"
          style={{ boxShadow: "0 6px 8px rgba(0, 0, 0, 0.2)" }}
        >
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Advanced</option>
        </select>

        <button
          onClick={addSkill}
          className="bg-teal-500 text-white px-4 py-2 rounded-md shadow hover:bg-teal-600"
        >
          Add Skill
        </button>
      </div>

      {/* Display Skill List */}
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="flex items-center justify-between bg-gray-100 border border-gray-300 px-4 py-2 rounded-md"
          >
            <span>{skill.name} - <span className="italic text-gray-600">{skill.level}</span></span>
            <button
              onClick={() => removeSkill(index)}
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

export default SkillsInput;
