import AboutmeInput from "./AboutmeInput";
import AppreciationInput from "./AppreciationInput";
import EducationInput from "./EducationInput";
import SkillsInput from "./SkillInput";
import WorkInput from "./WorkInput";

function ContentSection({ selected }) {
return (
    <div className="flex-1 p-8">
      <h2 className="text-2xl font-semibold mb-4">{selected}</h2>
      {selected === "About me" && (
        <AboutmeInput />
      )}
      {selected === "Work Experience" && (
        <WorkInput />
      )}
      {selected === "Education" && <EducationInput />}
      {selected === "Skill" && <SkillsInput />}
      {selected === "Appreciation" && <AppreciationInput />}
    </div>
  );
}
 
export default ContentSection;
