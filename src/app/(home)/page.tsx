import { SetScrollContainer } from '@/src/components/SetScrollContainer'
import { ProjectsSection } from './_components/ProjectsSection'
import { BackgroundColor } from './_components/BackgroundColor'
import ScrollProgressBar from './_components/Scrollprogrressbar'
import { FirstPart } from './_components/FirstPart'
import { Links } from './_components/Links'
import { DialogLoader } from './_components/DialogLoader'
import { Description } from './_components/Description'
import { Skills } from './_components/Skills'

const Home = () => {
  return (
    <div
      style={{
        scrollbarWidth: 'none',
      }}
      id="scroll-container"
      className="h-screen w-screen overflow-y-scroll"
    >
      <BackgroundColor>
        <SetScrollContainer />
        <ScrollProgressBar />

        <div className="">
          <div className="flex w-full flex-col items-center ">
            <div className="flex w-full flex-col  items-center  px-2 py-2 justify-center gap-5  rounded-lg p-3 lg:justify-between">
              <FirstPart />
              <Links />
            </div>
            <DialogLoader />
            <div className="prose  px-2 py-2 w-full max-w-[40rem] pt-10 text-[0.9rem] leading-5 text-[rgba(255,255,255,0.7)] prose-headings:text-[#ffffffdd] prose-p:text-[#ffffffc1] prose-strong:text-[#ffffffc0] prose-li:text-[#ffffffa0]">
              <Description />
            </div>
            {/* <div className="flex  flex-col items-start bg-[#ffffff42] p-4 w-full skew-y-6">
              <div className='bg-black px-2 -skew-x-12'>
                <h2 className='expose-font text-white text-[3rem]'>JOB EXPERIENCES</h2>
              </div>
            
            </div> */}
            <div className="prose w-full  px-2 py-2 max-w-[40rem] pb-10  text-[0.9rem] leading-5 text-[rgba(255,255,255,0.7)] prose-headings:text-[#ffffffdd] prose-p:text-[#ffffffc1] prose-strong:text-[#ffffffc0] prose-li:text-[#ffffffa0]">
              <Skills />
            </div>
          </div>

          <ProjectsSection />
        </div>
      </BackgroundColor>
    </div>
  )
}

export default Home
