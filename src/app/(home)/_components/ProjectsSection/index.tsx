import Image from 'next/image'
import ProjectBox from './components/ProjectBox'
import pixgulogo from '@/png/logo.png'
import { Svg } from '@/src/components/Svg'
import dynamic from 'next/dynamic'
import { Spinner } from '@/src/components/Spinner'
import { constants } from '@/src/constants'

const Repos = dynamic(() => import('./components/Repos').then(m => m.Repos), { loading: () => <div className='w-full flex items-center justify-center'><Spinner /></div> })

export const ProjectsSection = () => {
  return (
    <div className="flex w-full flex-col gap-6 pt-4 ">
      <div className=" flex items-center justify-center ">
        <div
          className='rounded-lg bg-[rgba(255,255,255,0.59)] text-2xl shadow-[0_0px_15px_5px_rgba(0,0,0,0.1)]'
        >
          <div className=" bg-gradient-to-tl font-[700]  from-blue-600 via-blue-400 to-blue-500  bg-clip-text  px-3 py-1 text-transparent ">
            {"Projects I'm working on"}
          </div>
        </div>
      </div>
      <div className='bg-[rgba(255,255,255,0.3)] flex flex-col gap-5 items-center pb-8'>
        <div className="flex flex-row w-full flex-wrap justify-center items-start gap-10 xxs:px-1 md:px-3 py-20">
          <ProjectBox
            name={'PIXGU'}
            description={'Real-time multiplayer drawing and guessing game built with Next.js 15 and React 19. Using peer-to-peer connections via WebRTC, WebSocket for real-time communication, and Web Workers for optimal performance. Inspired by popular games like Gartic.io and Skribbl.io.'}
            thumbnail={<Image
              src={pixgulogo}
              alt="project"
              className="rounded-lg w-[9rem] "
              placeholder="blur"
            />}
            tags={['personal project']}
            link={'https://pixgu.com'}
          />

          <ProjectBox
            name={'Aspect'}
            tags={['under development', 'personal project']}
            description={'Aspect, a decentralized peer-to-peer (P2P) chat application designed to work across Android devices. This project currently under development and represents my commitment to creating privacy-focused communication solutions using modern technologies.'}
            thumbnail={<Svg src={'aspectus'} className='w-[7rem]' alt='Aspectus logo' />}
            link={`https://github.com/${constants.githubUsername}/Aspect`}
          />


          <ProjectBox
            name={'Jetmark'}
            tags={['under development', 'personal project']}
            description={'Jetmark is a Markdown Editor UI library for jetpack compose. Provides highly customizable and extensible UI composable text input that has markdown syntax highlighting, code highlighting, and more. Jetmark uses java functions instead of regex to improve performance. Jetmark also will work on ios, android, web, macos, linux and windows.'}
            thumbnail={<Svg src={'jetmark'} className='w-[7rem]' alt='Jetmark logo' />}
            link={`https://github.com/${constants.githubUsername}/jetmark`}
          />

          <ProjectBox
            name={'Bloomy'}
            tags={['under development', 'personal project']}
            description={'Bloomy is compeletly free, fast and open source AI powered note taking app. It is built with Jetpack Compose and Kotlin Multiplatform. AI training (rag, fine tunning) is done with personal gemini API key.'}
            thumbnail={null}
            link={`https://github.com/${constants.githubUsername}/bloomy`}
          />


          {/* <ProjectBox
            thumbnail={null}
            name={'Synoon'}
            tags={['personal project']}
            description={"The biggest project plan in my mind. I'm currently in planning stages for this project. Synoon will be a website that have a big database of fictional planet information, allowing users to explore, discover and create new worlds."}
            link={'https://synoon.app/'}
          /> */}
        </div>
        <Repos />
        <div className='text-center drop-shadow-[0_0px_50px_rgba(0,0,0,0.7)] font-[400] rounded-md px-2 py-1 text-white'>{`Made with <3 by sametalpdeger/404`}</div>
      </div>
    </div>
  )
}
