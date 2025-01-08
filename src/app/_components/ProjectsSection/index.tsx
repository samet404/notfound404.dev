import ProjectBox from './components/ProjectBox'
import thumbail from '@/png/logo.png'

export const ProjectsSection = () => {
  return (
    <div className="flex w-full flex-col gap-6 pt-4 ">
      <div className=" flex items-center justify-center ">
        <div
          className='rounded-lg bg-[rgba(255,255,255,0.59)] text-2xl shadow-[0_0px_15px_5px_rgba(0,0,0,0.1)]'
        >
          <div className=" bg-gradient-to-tl font-[700]  from-cyan-600 to-emerald-500  bg-clip-text  px-3 py-1 text-transparent ">
            {'Here are my projects :3'}
          </div>
        </div>
      </div>
      <div className='bg-[rgba(255,255,255,0.3)] flex flex-col gap-16 items-center pb-8'>
        <div className="flex flex-row w-full justify-center gap-3 px-3 py-20">
          <ProjectBox
            name={'PIXGU'}
            description={'Real-time multiplayer drawing and guessing game built with Next.js 15 and React 19. Features peer-to-peer connections via WebRTC, WebSocket for real-time communication, and Web Workers for optimal performance. Implements advanced canvas manipulation techniques and optimizations for smooth drawing experience. Inspired by popular games like Gartic.io and Skribbl.io.'}
            thumbnail={thumbail}
            link={'https://pixgu.com'}
          />
        </div>
        <div className='text-center drop-shadow-[0_0px_50px_rgba(0,0,0,0.7)] font-[700] rounded-md px-2 py-1 text-white'>{`Made with <3 by 404`}</div>
      </div>
    </div>
  )
}
