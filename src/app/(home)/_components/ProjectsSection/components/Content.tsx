'use client'

import Image from 'next/image'
import ProjectBox from './ProjectBox'
import pixgulogo from '@/png/logo.png'
import dysphoria from '@/png/dysphoria.png'
import bloomia from '@/png/bloomia.png'
import { Svg } from '@/src/components/Svg'
import { FinalWordsDisplay } from './FinalWordsDisplay'
import { Repos } from './Repos'

export const Content = () => {
  return (
    <div className="flex w-full flex-col gap-6 pt-4 ">
      <div className=" flex items-center justify-center ">
        <div className="rounded-lg bg-[rgba(255,255,255,0.59)] text-2xl shadow-[0_0px_15px_5px_rgba(0,0,0,0.1)]">
          <div className=" bg-gradient-to-tl from-blue-700  via-blue-400 to-blue-600 bg-clip-text  px-3  py-1 font-[700] text-transparent ">
            {"Projects I'm working on"}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-5 bg-[rgba(255,255,255,0.3)] pb-8">
        <div className="flex w-full flex-col flex-wrap items-center justify-center gap-8 px-4 pt-10">
          <ProjectBox
            name={'PIXGU'}
            description={
              'Real-time multiplayer drawing and guessing game built with Next.js 15 and React 19. Using peer-to-peer connections via WebRTC, WebSocket for real-time communication, and Web Workers for optimal performance. Inspired by popular games like Gartic.io and Skribbl.io.'
            }
            thumbnail={[
              <Image
                key={0}
                src={pixgulogo}
                alt="project"
                className="w-[9rem] rounded-lg pt-4"
                placeholder="blur"
                sizes="calc(3.48vw + 136px)"
              />,
            ]}
            videoPath="/videos/pixgu.mp4"
            tags={[
              'personal project',
              'Typescript',
              'Next.js',
              'React',
              'WebRTC',
              'WebSocket',
              'Web Workers',
              'HTML',
              'CSS',
              'JavaScript',
            ]}
            link={'https://github.com/samet404/pixgu'}
          />

          <ProjectBox
            thumbnail={
              <Image
                key={0}
                src={bloomia}
                alt="project"
                className="h-full rounded-lg bg-[rgba(255,255,255,0.3)] object-contain"
                placeholder="blur"
                sizes="(min-width: 500px) calc(9.64vw + 370px), calc(90vw - 18px)"
              />
            }
            name={'Bloomia'}
            tags={[
              'under development',
              'personal project',
              'Kotlin',
              'Kotlin Multiplatform',
              'Jetpack Compose',
              'Python',
              'Pytorch',
              'Milvus',
              'SQLite',
              'Dragonflydb',
              'Nginx',
              'Docker',
              'Next.js',
              'React',
              'Websockets',
              'Typescript',
              'Flask',
              'Node.JS',
              'Hono',
              'tRPC',
              'Cloudflare',
              'SQLDelight',
              'Ktor',
              'Koin DI',
              'PostgreSQL',
              'Gradle',
              'Better-auth',
            ]}
            description={
              'Bloomia is a note taking AI editor. It is built with Jetpack Compose and Kotlin Multiplatform. Unlike traditional AI apps, Bloomia has so many advanced features like Embedding Model selection, Multiple AI providers, more clear RAG customizations...'
            }
            link={`https://bloomia.app`}
          />
          {/* 
          <ProjectBox
            name={'doyoufeelbad'}
            description={'doyoufeelbad helps you to keep track of your mood using personal AI. Basically you click on the button everytime you feel bad and AI asks you a question about your feelings then based on your answer it gives you a score.'}
            thumbnail={[<Image
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
            description={
              'Story based pixel art game. Uses C programming language and raylib engine.'
            }
            thumbnail={[
              <Image
                src={dysphoria}
                key={0}
                alt="project"
                className="h-full rounded-lg bg-[rgba(255,255,255,0.3)] object-contain "
                placeholder="blur"
                sizes="(min-width: 540px) calc(10.49vw + 403px), calc(93.64vw - 29px)"
              />,
            ]}
            videoPath="/videos/dysphoria.mp4"
            tags={['personal project', 'C', 'raylib', 'meson', 'cmake']}
            link={`https://github.com/HellowStudios/Dysphoria`}
          />

          <ProjectBox
            name={'Aspect'}
            tags={[
              'under development',
              'personal project',
              'Kotlin',
              'Haskell',
              'Jetpack Compose',
            ]}
            description={
              'Aspect - Fork of simplex-chat, anonymous, user-friendly messaging platform with privacy-first design. Decentralized, encrypted, and identifier-free. Available on Linux, Windows and Android.'
            }
            thumbnail={
              <Svg
                key={0}
                src={'aspect'}
                className="w-[7rem] pt-4"
                alt="Aspect logo"
              />
            }
            link={`https://github.com/aspect-chat`}
          />
        </div>
        <Repos />
        <FinalWordsDisplay />
      </div>
    </div>
  )
}
