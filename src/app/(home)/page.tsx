import { SetScrollContainer } from '@/src/components/SetScrollContainer'
import { AboutMeSection } from './_components/AboutMeSection'
import { ProjectsSection } from './_components/ProjectsSection'
import { BackgroundColor } from './_components/BackgroundColor'
import ScrollProgressBar from './_components/Scrollprogrressbar'


const Home = () => {
  return (
    <div style={{
      scrollbarWidth: 'none',
    }}
      id='scroll-container'
      className='overflow-y-scroll w-screen h-screen'>
      <BackgroundColor>
        <SetScrollContainer />
        <ScrollProgressBar />

        <div className=''>
          <AboutMeSection />
          <ProjectsSection />
        </div>
      </BackgroundColor>
    </div>


  )
}

export default Home