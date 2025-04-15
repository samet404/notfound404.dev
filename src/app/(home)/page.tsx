import { SetScrollContainer } from '@/src/components/SetScrollContainer'
import { AboutMeSection } from './_components/AboutMeSection'
import { ProjectsSection } from './_components/ProjectsSection'
import { BackgroundColor } from './_components/BackgroundColor'


const Home = () => {
  return (
    <div style={{
      scrollbarWidth: 'none',
    }}
      id='scroll-container'
      className='overflow-y-scroll w-screen h-screen'>
      <BackgroundColor>
        <SetScrollContainer />

        <div className=''>
          <AboutMeSection />
          <ProjectsSection />
        </div>
      </BackgroundColor>
    </div>


  )
}

export default Home