import { FirstPart } from './components/FirstPart'
import { Links } from './components/Links'
import { TechIUse } from './components/TechIUse'
import { Description } from './components/Description'
import { DialogLoader } from './components/DialogLoader'

export const AboutMeSection = () => {
  return (
    <div className="flex w-full flex-col items-center px-2 py-2 ">
      <div className="flex flex-col gap-3 max-w-[40rem] items-start">
        <div className='flex lg:flex-row xxs:flex-col gap-9  w-full xxs:justify-center xxs:items-center lg:items-start rounded-lg p-3 lg:justify-between'>
          <FirstPart />
          <Links />
        </div>
        <DialogLoader />

        <div className='flex flex-col gap-4 rounded-lg relative text-[0.9rem] leading-5 text-[rgba(255,255,255,0.7)]'>
          <div className="prose prose-headings:text-[#ffffffdd] pt-10 pb-10 prose-strong:text-[#ffffffc0] prose-p:text-[#ffffffc1] prose-li:text-[#ffffffa0]">
            <Description />
            <TechIUse />
          </div>
        </div>
      </div>
    </div>
  )
}
