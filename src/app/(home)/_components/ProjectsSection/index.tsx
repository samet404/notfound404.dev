import Image from 'next/image'
import ProjectBox from './components/ProjectBox'
import pixgulogo from '@/png/logo.png'
import dysphoria from '@/png/dysphoria.png'
import bloomy from '@/png/bloomy.png'
import doyoufeelbad from '@/png/doyoufeelbad.png'

import { Svg } from '@/src/components/Svg'
import dynamic from 'next/dynamic'
import { Spinner } from '@/src/components/Spinner'
import { constants } from '@/src/constants'
import { FinalWordsDisplay } from './components/FinalWordsDisplay'

const Repos = dynamic(() => import('./components/Repos').then(m => m.Repos), { loading: () => <div className='w-full flex items-center justify-center'><Spinner /></div> })

export const ProjectsSection = () => {
  return (
    <div className="flex w-full flex-col gap-6 pt-4 ">
      <div className=" flex items-center justify-center ">
        <div
          className='rounded-lg bg-[rgba(255,255,255,0.59)] text-2xl shadow-[0_0px_15px_5px_rgba(0,0,0,0.1)]'
        >
          <div className=" bg-gradient-to-tl font-[700]  from-blue-700 via-blue-400 to-blue-600  bg-clip-text  px-3 py-1 text-transparent ">
            {"Projects I'm working on"}
          </div>
        </div>
      </div>
      <div className='bg-[rgba(255,255,255,0.3)] flex flex-col gap-5 items-center pb-8'>
        <div className="flex flex-col w-full flex-wrap justify-center items-center gap-8 pt-10 px-4">
          <ProjectBox
            name={'PIXGU'}
            description={'Real-time multiplayer drawing and guessing game built with Next.js 15 and React 19. Using peer-to-peer connections via WebRTC, WebSocket for real-time communication, and Web Workers for optimal performance. Inspired by popular games like Gartic.io and Skribbl.io.'}
            thumbnails={[<Image
              src={pixgulogo}
              alt="project"
              className="rounded-lg w-[9rem] pt-4"
              placeholder="blur"
              sizes="calc(3.48vw + 136px)"
            />]}
            videoPath='/videos/pixgu.mp4'
            tags={['personal project', 'Typescript', 'Next.js', 'React', 'WebRTC', 'WebSocket', 'Web Workers', 'HTML', 'CSS', 'JavaScript']}
            link={'https://pixgu.com'}
          />

          <ProjectBox
            thumbnails={[<Image
              src={bloomy}
              alt="project"
              className="rounded-lg object-contain h-full bg-[rgba(255,255,255,0.3)]"
              placeholder="blur"
              sizes="(min-width: 500px) calc(9.64vw + 370px), calc(90vw - 18px)"
            />]}
            videoPath='/videos/bloomia.mp4'
            name={'Bloomia'}
            tags={['under development', 'personal project', 'Kotlin', 'Kotlin Multiplatform', 'Jetpack Compose', 'Python', 'Pytorch', 'Milvus', 'SQLite', 'Dragonflydb', 'Nginx', 'Docker', 'Next.js', 'React', 'Websockets', 'Typescript', 'Flask', 'Node.JS', 'Hono', 'tRPC', 'Cloudflare', 'SQLDelight', 'Ktor', 'Koin DI', 'PostgreSQL', 'Gradle', 'Better-auth']}
            description={'Bloomia is a note taking AI editor. It is built with Jetpack Compose and Kotlin Multiplatform. Unlike traditional AI apps, Bloomia has so many advanced features like Embedding Model selection, Multiple AI providers, more clear RAG customizations...'}
            link={`https://github.com/${constants.githubUsername}/bloomy`}
          />
          {/* 
          <ProjectBox
            name={'doyoufeelbad'}
            description={'doyoufeelbad helps you to keep track of your mood using personal AI. Basically you click on the button everytime you feel bad and AI asks you a question about your feelings then based on your answer it gives you a score.'}
            thumbnails={[<Image
              src={doyoufeelbad}
              alt="project"
              className="rounded-lg h-full object-contain bg-[rgba(255,255,255,0.3)]"
              placeholder="blur"
              sizes='(min-width: 540px) calc(10.49vw + 403px), calc(93.64vw - 29px)'
            />]}
            tags={['personal project', 'Typescript', 'Next.js', 'React', 'WebRTC', 'WebSocket', 'Web Workers', 'HTML', 'CSS', 'JavaScript']}
            link={''}
          /> */}


          <ProjectBox
            name={'Dysphoria'}
            description={'Story based pixel art game. Uses C programming language and raylib engine.'}
            thumbnails={[<Image
              src={dysphoria}
              alt="project"
              className="rounded-lg h-full object-contain bg-[rgba(255,255,255,0.3)] "
              placeholder="blur"
              sizes="(min-width: 540px) calc(10.49vw + 403px), calc(93.64vw - 29px)"
            />]}
            videoPath='/videos/dysphoria.mp4'
            tags={['personal project', 'C', 'raylib', 'meson', 'cmake']}
            link={`https://github.com/HellowStudios/Dysphoria`}
          />


          <ProjectBox
            name={'Aspect'}
            tags={['under development', 'personal project', 'Kotlin', 'Haskell', 'Jetpack Compose']}
            description={'Aspect - Fork of simplex-chat, anonymous, user-friendly messaging platform with privacy-first design. Decentralized, encrypted, and identifier-free. Available on Linux, Windows and Android.'}
            thumbnails={[<Svg src={'aspect'} className='w-[7rem] pt-4' alt='Aspect logo' />]}
            link={`https://github.com/aspect-chat`}
          />




          {/* <ProjectBox
            name={'Vigilant'}
            tags={['under development', 'personal project', 'Spring', 'Flask', 'Python', 'Kotlin', 'Java', 'Moondream', 'Google Gemini']}
            description={''}
            thumbnail={null}
            link={`https://github.com/${constants.githubUsername}/vigilant`}
          /> */}


          {/* <ProjectBox
            thumbnail={null}
            name={'Synoon'}
            tags={['personal project']}
            description={"The biggest project plan in my mind. I'm currently in planning stages for this project. Synoon will be a website that have a big database of fictional planet information, allowing users to explore, discover and create new worlds."}
            link={'https://synoon.app/'}
          /> */}
        </div>
        <Repos />
      <FinalWordsDisplay />

      </div>
    </div>
  )
}
