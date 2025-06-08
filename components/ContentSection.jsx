import AboutmeInput from "./AboutmeInput";
import AppreciationInput from "./AppreciationInput";
import EducationInput from "./EducationInput";
import SkillsInput from "./SkillInput";
import WorkInput from "./WorkInput";

function ContentSection({ selected }) {
return (
  <div className="flex-1 p-3 bg-white rounded-lg shadow-md h-full overflow-y-auto" style={{ scrollBehavior: "smooth" }}>

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
