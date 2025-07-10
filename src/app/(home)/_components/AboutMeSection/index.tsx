import { FirstPart } from './components/FirstPart'
import { Links } from './components/Links'
import { Skills } from './components/Skills'
import { Description } from './components/Description'
import { DialogLoader } from './components/DialogLoader'

export const AboutMeSection = () => {
  return (
    <div className="flex w-full flex-col items-center px-2 py-2 ">
      <div className="flex flex-col  max-w-[40rem] w-full items-start">
        <div className='flex flex-col gap-5  w-full justify-center items-center  rounded-lg p-3 lg:justify-between'>
          <FirstPart />
          <Links />
        </div>
        <DialogLoader />

        <div className='flex flex-col gap-4 rounded-lg w-full text-[0.9rem] leading-5 text-[rgba(255,255,255,0.7)]'>
          <div className="prose w-full prose-headings:text-[#ffffffdd] pt-10 pb-10 prose-strong:text-[#ffffffc0] prose-p:text-[#ffffffc1] prose-li:text-[#ffffffa0]">
            <Description />
            <Skills />
          </div>
        </div>
      </div>
    </div>
  )
}
