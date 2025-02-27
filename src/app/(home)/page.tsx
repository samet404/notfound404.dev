import { SetScrollContainer } from '@/src/components/SetScrollContainer'
import { AboutMeSection } from './_components/AboutMeSection'
import { ProjectsSection } from './_components/ProjectsSection'


const Home = () => {
  return (
    <div style={{
      scrollbarWidth: 'none',
    }}
      id='scroll-container'
      className='overflow-y-scroll w-screen h-screen'>
      <div
        style={{
          backgroundColor: 'hsla(201, 100%, 50%, 1)',
          backgroundImage:
            'radial-gradient(at 20% 20%, hsla(188, 92%, 56%, 1) 0px, transparent 50%), radial-gradient(at 40% 20%, hsla(200, 92%, 56%, 1) 0px, transparent 50%)',
          scrollbarWidth: 'none',
        }}
        className="flex w-full flex-col gap-7 pt-[5rem] justify-center "
      >
        <SetScrollContainer />

        <div className=''>
          <AboutMeSection />
          <ProjectsSection />
        </div>
      </div>
    </div>


  )
}

export default Home