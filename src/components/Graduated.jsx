import { useState } from 'react'
import SundayCV from "/CV/SundayCV.pdf"


export default function Graduated() {
  const [switchTopic, setSwitchTopic] = useState('Experience');

  return (
    <div>
        <ul className="flex justify-around">
        <li className="text-2xl text-white font-semibold mb-8 text-center active:text-teal-300"><button className="hover:underline underline-offset-8 decoration-teal-300 decoration-2" onClick={() => setSwitchTopic('Experience')}>Experience</button></li>
        <li className="text-2xl text-white font-semibold mb-8 text-center active:text-teal-300"><button className='hover:underline underline-offset-8 decoration-teal-300 decoration-2' onClick={() => setSwitchTopic('Education')}>Education</button></li>
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
            <li className="text-lg text-slate-200 mb-5">Junior Software Developer (Cohort 8) at Generation Thailand Bootcamp <br />
            (September 2024 - December 2024)</li>
            <li className="text-lg text-slate-200 mb-5">Medical technologist at FACULTY OF ALLIED HEALTH SCIENCES, 
            CHULALONGKORN UNIVERSITY <br />(2021 - 2022)</li>
      </ul>
      <a href={SundayCV} target='_blank' className='text-slate-200 hover:text-teal-500 active:text-teal-600 text-lg font-semibold '> ➯ Click for more details</a>
      </div>
    </div>
  )
}
export function Education() {
  return (
    <div>
      <ul className="list-disc list-inside">
            <li className="text-lg text-slate-200">Bachelor Degree of Science in Medical Technology at Rangsit University</li>
      </ul>
    </div>
  )
}

