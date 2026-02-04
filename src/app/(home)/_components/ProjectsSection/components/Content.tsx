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
    <div className="flex w-full flex-col gap-6 pt-4 px-2 py-2">
      <div className=" flex items-center justify-center ">
        <div className="rounded-lg bg-[rgba(255,255,255,0.59)] text-2xl shadow-[0_0px_15px_5px_rgba(0,0,0,0.1)]">
          <div className=" bg-gradient-to-tl from-blue-700  via-blue-400 to-blue-600 bg-clip-text  px-3  py-1 font-[700] text-transparent ">
            {'My unsuccessful projects'}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-5 bg-[rgba(255,255,255,0.3)] pb-8">
        <div className="flex w-full flex-col flex-wrap items-center justify-center gap-8 px-4 pt-10">
          <ProjectBox
            name={'PIXGU'}
            description={
              <div className="flex flex-col gap-2">
                <div>
                  I stopped working on this project after I realized that making
                  game with React and javascript is not a good idea but at least
                  I learned a lot.
                </div>

                <div>
                  'The idea was: Real-time multiplayer drawing and guessing game
                  built with Next.js 15 and React 19. Using peer-to-peer
                  connections via WebRTC, WebSocket for connecting Webrtc pairs,
                  and Web Workers for optimal performance. Inspired by popular
                  games like Gartic.io and Skribbl.io.'
                </div>
              </div>
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
              'DISCONTINUED',
              'personal project',
              'Kotlin',
              'Kotlin Multiplatform',
              'Opengl',
              'Raylib',
              'Jetpack Compose',
              'Python',
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
              <div className="flex flex-col gap-2">
                <div>
                  I stopped working on this project after realized I just
                  overhyped for AI. I made it open-source so you can look at the
                  code I wrote and understand how much kotlin I know.
                </div>
                <div>
                  The idea was: Bloomia creates a 3D virtual world from your
                  notes, diaries, or anything that can be transformed into AI
                  knowledge where you can move, play, talk, and interact. It's a
                  fully immersive experience that allows you to explore your
                  imagination and create something unique.
                </div>
              </div>
            }
            link={`https://github.com/samet404/Bloomia`}
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
        </div>
        <Repos />
        <FinalWordsDisplay />
      </div>
    </div>
  )
}
