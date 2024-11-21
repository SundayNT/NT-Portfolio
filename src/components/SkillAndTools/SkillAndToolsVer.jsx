import Graduated from "../Graduated";
import MySkill from "./MySkill";
import ToolsUse from "./ToolsUse";

export default function SkillAndToolsVer() {
    return (
    <div className="flex flex-col items-center gap-28 mb-[150px] md:flex-row justify-center">
        <div className="border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f] text-neutral-content w-[400px] h-[500px] overflow-auto  p-8 rounded-2xl md:w-[600px]">
            <Graduated />
        </div>
        <div className="flex flex-col items-center gap-32">
            <MySkill />
            <ToolsUse />
        </div>
    </div>
    )
}
