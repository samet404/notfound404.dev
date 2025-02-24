import Image from 'next/image'
import ProjectBox from './components/ProjectBox'
import pixgulogo from '@/png/logo.png'
import { Svg } from '@/src/components/Svg'

export const ProjectsSection = () => {
  return (
    <div className="flex w-full flex-col gap-6 pt-4 ">
      <div className=" flex items-center justify-center ">
        <div
          className='rounded-lg bg-[rgba(255,255,255,0.59)] text-2xl shadow-[0_0px_15px_5px_rgba(0,0,0,0.1)]'
        >
          <div className=" bg-gradient-to-tl font-[700]  from-blue-600 via-blue-400 to-blue-500  bg-clip-text  px-3 py-1 text-transparent ">
            {'Here are my projects :3'}
          </div>
        </div>
      </div>
      <div className='bg-[rgba(255,255,255,0.3)] flex flex-col gap-16 items-center pb-8'>
        <div className="flex flex-row w-full flex-wrap justify-center gap-10 px-3 py-20">
          <ProjectBox
            name={'PIXGU'}
            description={'Real-time multiplayer drawing and guessing game built with Next.js 15 and React 19. Using peer-to-peer connections via WebRTC, WebSocket for real-time communication, and Web Workers for optimal performance. Inspired by popular games like Gartic.io and Skribbl.io.'}
            thumbnail={<Image
              src={pixgulogo}
              alt="project"
              className="rounded-lg w-[9rem] "
              placeholder="blur"
            />}
            link={'https://pixgu.com'}
          />

          <ProjectBox
            name={'Aspect - Under development'}
            description={'Aspect, a decentralized peer-to-peer (P2P) chat application designed to work across Android devices. This project represents my commitment to creating privacy-focused communication solutions using modern technologies.'}
            thumbnail={<Svg src={'aspectus'} className='w-[7rem]' alt='Aspectus logo' />}
            link={'https://github.com/404nnotfoundddd/Aspect'}
          />
        </div>
        <div className='text-center drop-shadow-[0_0px_50px_rgba(0,0,0,0.7)] font-[400] rounded-md px-2 py-1 text-white'>{`Made with <3 by 404`}</div>
      </div>
    </div>
  )
}
