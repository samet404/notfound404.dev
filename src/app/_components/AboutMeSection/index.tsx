import { FirstPart } from './components/FirstPart'
import { Links } from './components/Links'
import Content from './content.mdx'

export const AboutMeSection = () => {
  return (
    <div className="flex w-full flex-col items-center px-2 py-2 animate-fade">
      <div className="flex flex-col gap-3 max-w-[40rem] items-start">
        <FirstPart />
        <div className="flex flex-col 1 gap-4 ">
          <div className='flex flex-col gap-10 rounded-md  bg-gradient-to-b from-[#00000072] to-[#0000003f] text-[0.9rem] leading-5 text-[rgba(255,255,255,0.7)] shadow-[0_0px_15px_3px_rgba(0,0,0,0.2)]'>
            <Links />

            <div className="prose prose-headings:text-[#ffffffc0] p-3 prose-strong:text-[#ffffffc0] prose-p:text-[#ffffffa0] prose-li:text-[#ffffffa0]">
              <Content />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
