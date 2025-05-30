import { useState } from 'react';

import AboutmeInput from './AboutmeInput';
import EducationInput from './EducationInput';
import SkillsInput from './SkillsInput';
import AppreciationInput from './AppreciationInput';

function FormNavigator() {
  const sections = [
    { name: 'About Me', component: <AboutmeInput /> },
    { name: 'Education', component: <EducationInput /> },
    { name: 'Skills', component: <SkillsInput /> },
    { name: 'Appreciation', component: <AppreciationInput /> }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSection = (index) => setCurrentIndex(index);
  const goNext = () => currentIndex < sections.length - 1 && setCurrentIndex(currentIndex + 1);
  const goBack = () => currentIndex > 0 && setCurrentIndex(currentIndex - 1);

  return (
    <div className="p-4">
      
      <div className="flex flex-wrap gap-4 mb-4">
        {sections.map((section, index) => (
          <button
            key={index}
            onClick={() => goToSection(index)}
            className={`px-4 py-2 rounded-full border ${
              index === currentIndex
                ? 'bg-teal-500 text-white'
                : 'bg-white text-gray-700 border-teal-500'
            }`}
          >
            {section.name}
          </button>
        ))}
      </div>

      
      <div className="mb-6">{sections[currentIndex].component}</div>

      
      <div className="flex justify-between">
        <button
          onClick={goBack}
          disabled={currentIndex === 0}
          className="px-4 py-2 rounded bg-gray-300 text-gray-700 hover:bg-gray-400 disabled:opacity-50"
        >
          Back
        </button>

        <button
          onClick={goNext}
          disabled={currentIndex === sections.length - 1}
          className="px-4 py-2 rounded bg-teal-500 text-white hover:bg-teal-600 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default FormNavigator;
