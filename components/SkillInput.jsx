import React, { useState } from 'react';
import "remixicon/fonts/remixicon.css";

const iconOptions = [
  'ri-code-line',
  'ri-brush-line',
  'ri-database-line',
  'ri-smartphone-line',
  'ri-terminal-line',
  'ri-tools-line'
];

function SkillsInput() {
  const [skills, setSkills] = useState([]);
  const [icon, setIcon] = useState('ri-tools-line');
  const [skillTitle, setSkillTitle] = useState('');
  const [skillItems, setSkillItems] = useState('');
  const [showIconPicker, setShowIconPicker] = useState(false);

  const addSkill = () => {
    if (skillTitle.trim() && skillItems.trim()) {
      setSkills([...skills, { icon, title: skillTitle, items: skillItems.split(',').map(item => item.trim()) }]);
      setSkillTitle('');
      setSkillItems('');
      setIcon('ri-tools-line');
    }
  };

  const removeSkill = (index) => {
    const updated = [...skills];
    updated.splice(index, 1);
    setSkills(updated);
  };

  return (
    <div className="p-6 font-semibold border rounded-md bg-white space-y-6 max-w-5xl mx-auto w-full" style={{ maxHeight: '80vh', overflowY: 'auto' }}>
      <h3 className="text-xl font-semibold mb-4 text-gray-800">Skills</h3>

      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4 flex-wrap">
        <div className="relative">
          <i
            className={`${icon} text-2xl cursor-pointer px-3 py-2 border border-teal-500 rounded-md bg-white`}
            onClick={() => setShowIconPicker(!showIconPicker)}
          ></i>

          {showIconPicker && (
            <div className="absolute top-12 left-0 bg-white border shadow-md rounded p-2 grid grid-cols-3 gap-2 z-50 w-48">
              {iconOptions.map((iconClass) => (
                <i
                  key={iconClass}
                  className={`${iconClass} text-xl cursor-pointer hover:text-teal-600 p-1 rounded transition-colors`}
                  onClick={() => {
                    setIcon(iconClass);
                    setShowIconPicker(false);
                  }}
                ></i>
              ))}
            </div>
          )}
        </div>

        <input
          type="text"
          value={skillTitle}
          onChange={(e) => setSkillTitle(e.target.value)}
          placeholder="Skill Title (e.g., Programming Languages)"
          className="border border-teal-500 rounded-md px-4 py-2 w-full md:w-1/4"
        />

        <input
          type="text"
          value={skillItems}
          onChange={(e) => setSkillItems(e.target.value)}
          placeholder="Skill Items (comma separated)"
          className="border border-teal-500 rounded-md px-4 py-2 w-full md:w-1/2"
        />

        <button
          onClick={addSkill}
          className="bg-teal-500 text-white px-4 py-2 rounded-md shadow hover:bg-teal-600 w-full md:w-auto"
        >
          + Add Skill
        </button>
      </div>

      {/* Display Skills */}
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="flex items-start justify-between bg-gray-100 border border-gray-300 px-4 py-2 rounded-md"
          >
            <div>
              <i className={`${skill.icon} mr-2`}></i>
              <strong>{skill.title}:</strong> {skill.items.join(', ')}
            </div>
            <button
              onClick={() => removeSkill(index)}
              className="text-red-500 hover:text-red-700"
            >
              <i className="ri-delete-bin-fill"></i>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SkillsInput;
