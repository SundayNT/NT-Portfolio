import MySkill from "./MySkill";
import ToolsUse from "./ToolsUse";


export default function SkillandTools() {
  return (
    <div className="flex flex-col items-center md:flex-row justify-center gap-10 mb-10">
      <MySkill />
      <ToolsUse />
    </div>
  )
}
