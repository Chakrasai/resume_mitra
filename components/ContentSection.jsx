import AboutmeInput from "./AboutmeInput";
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
      {selected === "Education" && <p>This section will contain education details.</p>}
      {selected === "Skill" && <p>This section will contain skill inputs.</p>}
      {selected === "Appreciation" && <p>This section will contain appreciation details.</p>}
    </div>
  );
}
 
export default ContentSection;
