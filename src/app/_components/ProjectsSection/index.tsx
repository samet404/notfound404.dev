import { Inter } from 'next/font/google'
import ProjectBox from './components/ProjectBox'
import thumbail from '@/png/logo.png'

const inter = Inter({
  subsets: ['latin'],
  weight: ['600'],
})

const ProjectsSection = () => {
  return (
    <div className="flex w-full animate-fade-up flex-col gap-6 pt-4 ">
      <div className=" flex items-center justify-center ">
        <div
          className={`${inter.className} rounded-lg bg-[rgba(255,255,255,0.59)] text-2xl shadow-[0_0px_15px_5px_rgba(0,0,0,0.1)]`}
        >
          <div className=" bg-gradient-to-tl  from-cyan-600 to-emerald-500  bg-clip-text  px-3 py-1 text-transparent ">
            {'Here are my projects'}
          </div>
        </div>
      </div>
      <div className="grid h-[40rem] w-full justify-center gap-3 overflow-y-auto  bg-[rgba(255,255,255,0.3)] px-3 py-20 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <ProjectBox
          name={'PIXGU'}
          description={'Web based online sketch game'}
          thumbnail={thumbail}
          link={'https://pixgu.com'}
        />
      </div>
    </div>
  )
}

export default ProjectsSection
