import { useState } from 'react'
import SundayCV from "/CV/SundayCV.pdf"

export default function Graduated() {
  const [switchTopic, setSwitchTopic] = useState('Experience');

  return (
    <div>
        <ul className="flex justify-around">
        <li className="text-2xl text-white font-semibold mb-8 text-center"><button onClick={() => setSwitchTopic('Experience')}>Experience</button></li>
        <li className="text-2xl text-white font-semibold mb-8 text-center"><button onClick={() => setSwitchTopic('Education')}>Education</button></li>
        </ul>
        {switchTopic === 'Experience' && <Experience />}
        {switchTopic === 'Education' && <Education />}
    </div>
  )
}

export function Experience() {
  return (
    <div>
      <div>
      <ul className="list-disc list-inside mb-16">
            <li className="text-xl text-slate-200 mb-5">Junior Software Developer (Cohort 8) at Generation Thailand Bootcamp <br /><br />
            (September 2024 - December 2024)</li>
            <li className="text-xl text-slate-200 mb-5">Medical technologist at FACULTY OF ALLIED HEALTH SCIENCES, 
            CHULALONGKORN UNIVERSITY <br /><br />(2021 - 2022)</li>
      </ul>
      <a href={SundayCV} target='_blank' className='text-teal-400 hover:text-teal-500 active:text-teal-600  text-lg font-semibold underline'>Click for more details</a>
      </div>
    </div>
  )
}
export function Education() {
  return (
    <div>
      <ul className="list-disc list-inside">
            <li className="text-xl text-slate-200">Bachelor Degree of Science in Medical Technologist at Rangsit University</li>
      </ul>
    </div>
  )
}

