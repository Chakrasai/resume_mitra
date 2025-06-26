import React, { useState, useEffect } from 'react';
import "remixicon/fonts/remixicon.css";

const lineIcons = [
  'ri-code-line', 'ri-brush-line', 'ri-database-line',
  'ri-smartphone-line', 'ri-terminal-line', 'ri-tools-line',
  'ri-pencil-line', 'ri-server-line', 'ri-settings-line'
];

const fillIcons = [
  'ri-code-s-fill', 'ri-brush-fill', 'ri-database-2-fill',
  'ri-smartphone-fill', 'ri-terminal-box-fill', 'ri-tools-fill',
  'ri-pencil-fill', 'ri-server-fill', 'ri-settings-5-fill'
];

function SkillsInput() {
  const [skills, setSkills] = useState([]);
  const [icon, setIcon] = useState('ri-tools-line');
  const [skillTitle, setSkillTitle] = useState('');
  const [skillItems, setSkillItems] = useState('');
  const [showIconPicker, setShowIconPicker] = useState(false);
  const [iconTab, setIconTab] = useState('line');
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const res = await fetch('https://itn-dev-rm-be-35683800078.us-west1.run.app/121/13');
        const data = await res.json();
        if (data.skills) {
          const formatted = data.skills.map(skill => ({
            icon: skill.icon || 'ri-tools-line',
            title: skill.title || '',
            items: skill.items.split(',').map(i => i.trim())
          }));
          setSkills(formatted);
        }
      } catch (error) {
        console.error("Error loading skills:", error);
      }
    };
    fetchSkills();
  }, []);

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

  const filteredIcons = search
    ? [...lineIcons, ...fillIcons].filter(ic =>
        ic.toLowerCase().includes(search.toLowerCase())
      )
    : (iconTab === 'line' ? lineIcons : fillIcons);

  return (
    <div className="p-6 font-semibold border rounded-md bg-white space-y-6 max-w-5xl mx-auto w-full">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">Skills</h3>

      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4 flex-wrap">
        <div className="relative">
          <i
            className={`${icon} text-2xl cursor-pointer px-3 py-2 border border-teal-500 rounded-md bg-white`}
            onClick={() => setShowIconPicker(true)}
          ></i>
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

      {/* Skill List */}
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

      {/* Icon Picker Modal */}
      {showIconPicker && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
          <div className="bg-white w-96 max-h-[80vh] p-4 rounded-lg shadow-xl overflow-y-auto relative">
            <div className="flex justify-between items-center mb-3">
              <div className="flex gap-2">
                <button
                  onClick={() => setIconTab('line')}
                  className={`px-3 py-1 rounded-md ${iconTab === 'line' ? 'bg-teal-500 text-white' : 'bg-gray-200 text-gray-800'}`}
                >
                  Line Icon
                </button>
                <button
                  onClick={() => setIconTab('fill')}
                  className={`px-3 py-1 rounded-md ${iconTab === 'fill' ? 'bg-teal-500 text-white' : 'bg-gray-200 text-gray-800'}`}
                >
                  Fill Icon
                </button>
              </div>
              <button onClick={() => setShowIconPicker(false)} className="text-gray-500 hover:text-black">
                <i className="ri-close-line text-2xl"></i>
              </button>
            </div>

            {/* Search */}
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search icon..."
              className="w-full border border-gray-300 rounded-md px-3 py-2 mb-3"
            />

            {/* Icons */}
            <div className="grid grid-cols-4 gap-3">
              {filteredIcons.map((iconClass) => (
                <i
                  key={iconClass}
                  className={`${iconClass} text-xl p-2 border rounded cursor-pointer hover:bg-teal-100`}
                  onClick={() => {
                    setIcon(iconClass);
                    setShowIconPicker(false);
                    setSearch('');
                  }}
                ></i>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SkillsInput;
