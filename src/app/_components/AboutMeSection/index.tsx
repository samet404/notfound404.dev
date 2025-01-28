import { Svg } from '@/src/components/Svg'
import { FirstPart } from './components/FirstPart'
import { Links } from './components/Links'
import { SkillIcon } from './components/SkillIcon'
import Content from './content.mdx'
import Image from 'next/image'
import drizzle from '@/png/drizzle.png'
import neon from '@/png/neon.png'
import nextjs from '@/png/nextjs.png'
import coolify from '@/png/coolify.png'
import trpc from '@/png/trpc.png'
import bun from '@/png/bun.png'

export const AboutMeSection = () => {
  return (
    <div className="flex w-full flex-col items-center px-2 py-2 animate-fade">
      <div className="flex flex-col gap-3 max-w-[40rem] items-start">
        <FirstPart />
        <div className="flex flex-col gap-4 ">
          <div className='flex flex-col gap-10 rounded-md  bg-gradient-to-b from-[#00000072] to-[#0000003f] text-[0.9rem] leading-5 text-[rgba(255,255,255,0.7)] shadow-[0_0px_15px_3px_rgba(0,0,0,0.2)]'>
            <Links />

            <div className="prose prose-headings:text-[#ffffffc0] px-3 pt-3 pb-6  prose-strong:text-[#ffffffc0] prose-p:text-[#ffffffa0] prose-li:text-[#ffffffa0]">
              <Content />


              <div className='flex flex-col gap-2 items-center'>
                <h2 className='text-center w-[90%]'>Technologies & Services I Use</h2>
                <div className='gap-2 flex flex-row flex-wrap justify-center'>
                  <SkillIcon
                    icon={<Svg src='typescript' className='w-10 h-10' alt='TypeScript logo' />}
                    title="TypeScript"
                    description="My primary programming language. I use TypeScript to build type-safe, scalable applications with enhanced developer experience and reduced runtime errors."
                  />
                  <SkillIcon
                    icon={<Svg src='javascript' className='w-10 h-10' alt='JavaScript logo' />}
                    title="JavaScript"
                    description="Proficient in modern JavaScript (ES6+) features and best practices for both frontend and backend development."
                  />

                  <SkillIcon
                    icon={<Svg src='html-5' className='w-10 h-10' alt='HTML5 logo' />}
                    title="HTML5"
                    description="Experienced in writing semantic HTML5 markup with accessibility and SEO best practices in mind."
                  />
                  <SkillIcon
                    icon={<Svg src='css-3' className='w-10 h-10' alt='CSS3 logo' />}
                    title="CSS3"
                    description="Strong knowledge of modern CSS including Flexbox, Grid, animations, and responsive design principles."
                  />
                  <SkillIcon
                    icon={<Svg src='tailwind' className='w-9 h-9' alt='Tailwind CSS logo' />}
                    title="Tailwind CSS"
                    description="My preferred CSS framework for building responsive and maintainable user interfaces with utility-first approach."
                  />
                  <SkillIcon
                    icon={<Svg src='react' className='w-10 h-10' alt='React logo' />}
                    title="React"
                    description="My primary frontend library for building dynamic user interfaces. Experienced in React patterns, hooks, context, and performance optimization."
                  />

                  <SkillIcon
                    icon={<Image src={nextjs} className='w-9 h-9 rounded-md' alt='Next.js logo' />}
                    title="Next.js"
                    description="Full-stack React framework for production-grade applications with features like server-side rendering, API routes, and optimized performance."
                  />

                  <SkillIcon
                    icon={<Svg src='react-query' className='w-10 h-10' alt='React Query logo' />}
                    title="React Query"
                    description="Powerful data-fetching library for React that handles caching, synchronization, and server state management with features like automatic background updates and optimistic updates."
                  />

                  <SkillIcon
                    icon={<Svg src='jotai' className='w-10 h-10' alt='Jotai logo' />}
                    title="Jotai"
                    description="Atomic state management library for React applications focusing on simplicity and performance."
                  />
                  <SkillIcon
                    icon={<Svg src='zustand' className='w-10 h-10' alt='Zustand logo' />}
                    title="Zustand"
                    description="Simple, fast and scalable state management solution for React applications."
                  />
                  {/* <SkillIcon
                    icon={<Svg src='redux' className='w-10 h-10' alt='Redux logo' />}
                    title="Redux"
                    description="Experience with Redux and Redux Toolkit for managing complex application state."
                  /> */}



                  <SkillIcon
                    icon={<Svg src='nodejs' className='w-10 h-10' alt='Node.js logo' />}
                    title="Node.js"
                    description="Building scalable backend services and APIs using Node.js runtime environment."
                  />
                  <SkillIcon
                    icon={<Image src={bun} className='w-10 h-10 rounded-md' alt='Bun logo' />}
                    title="Bun"
                    description="All-in-one JavaScript runtime and toolkit with incredible speed. Used for running, testing, and bundling JavaScript & TypeScript projects with superior performance."
                  />

                  <SkillIcon
                    icon={<Image src={trpc} className='w-10 h-10 rounded-md' alt='tRPC logo' />}
                    title="tRPC"
                    description="End-to-end typesafe API layer for TypeScript applications. Enables seamless client-server communication with full type inference and zero runtime overhead."
                  />
                  <SkillIcon
                    icon={<Svg src='express' className='w-10 h-10' alt='Express.js logo' />}
                    title="Express.js"
                    description="Creating RESTful APIs and web applications using Express.js framework."
                  />
                  <SkillIcon
                    icon={<Svg src='fastify' className='w-8 h-8' alt='Fastify logo' />}
                    title="Fastify"
                    description="High-performance web framework for Node.js, focused on providing the best developer experience."
                  />
                  <SkillIcon
                    icon={<Svg src='prisma' className='w-8 h-8' alt='Prisma logo' />}
                    title="Prisma"
                    description="Modern ORM for Node.js and TypeScript, providing type-safe database access and migrations."
                  />

                  <SkillIcon
                    icon={<Svg src='postgresql' className='w-9 h-9' alt='PostgreSQL logo' />}
                    title="PostgreSQL"
                    description="Advanced open-source relational database with strong reliability, feature robustness, and performance. Experienced in complex queries, indexing, and optimization."
                  />

                  <SkillIcon
                    icon={<Image src={drizzle} className='w-9 h-9 rounded-md' alt='Drizzle ORM logo' />}
                    title="Drizzle ORM"
                    description="TypeScript ORM for SQL databases with a focus on type safety and developer experience."
                  />
                  <SkillIcon
                    icon={<Image src={neon} className='w-10 h-10 rounded-md bg-black p-[0.3rem]' alt='Neon DB logo' />}
                    title="Neon"
                    description="Serverless Postgres database platform for modern applications."
                  />
                  <SkillIcon
                    icon={<Svg src='redis' className='w-9 h-9' alt='Redis logo' />}
                    title="Redis"
                    description="In-memory data structure store used as a database, cache, message broker, and queue. Experienced in implementing real-time features and optimizing application performance."
                  />

                  <SkillIcon
                    icon={<Svg src='keydb' className='w-9 h-9' alt='KeyDB logo' />}
                    title="KeyDB"
                    description="Multithreaded fork of Redis focusing on high performance and lower latency. Used for handling high-throughput caching and real-time data processing."
                  />

                  <SkillIcon
                    icon={<Svg src='xata' className='w-8 h-8' alt='Xata logo' />}
                    title="Xata"
                    description="Serverless database platform with built-in search and analytics capabilities."
                  />

                  <SkillIcon
                    icon={<Svg src='git' className='w-10 h-10' alt='Git logo' />}
                    title="Git"
                    description="Version control system for tracking changes and collaborating on code projects."
                  />
                  <SkillIcon
                    icon={<Svg src='vscode' className='w-10 h-10' alt='VS Code logo' />}
                    title="VS Code"
                    description="My primary code editor with extensive customization for optimal development workflow."
                  />
                  <SkillIcon
                    icon={<Svg src='supermaven' className='w-9 h-9' alt='Supermaven logo' />}
                    title="Supermaven"
                    description="AI-powered development assistant for enhanced coding productivity."
                  />

                  <SkillIcon
                    icon={<Svg src='figma' className='w-10 h-10' alt='Figma logo' />}
                    title="Figma"
                    description="Design tool for creating and implementing user interfaces and design systems."
                  />

                  <SkillIcon
                    icon={<Svg src='vite' className='w-9 h-9' alt='Vite logo' />}
                    title="Vite"
                    description="Next-generation frontend build tool offering lightning-fast development experience."
                  />
                  <SkillIcon
                    icon={<Svg src='webpack' className='w-9 h-9' alt='Webpack logo' />}
                    title="Webpack"
                    description="Module bundler for JavaScript applications with extensive configuration options."
                  />
                  <SkillIcon
                    icon={<Image src={coolify} className='w-12 h-12 rounded-md' alt='Coolify logo' />}
                    title="Coolify"
                    description="Self-hosted Heroku/Vercel alternative for deploying applications, databases, and services. Used for managing personal infrastructure and hosting projects."
                  />

                  <SkillIcon
                    icon={<Svg src='vercel' className='w-8 h-8' alt='Vercel logo' />}
                    title="Vercel"
                    description="Platform for deploying and hosting web applications with automatic CI/CD."
                  />
                  <SkillIcon
                    icon={<Svg src='cloudflare' className='w-10 h-10' alt='Cloudflare logo' />}
                    title="Cloudflare"
                    description="Web infrastructure and security services including CDN, DNS, and DDoS protection."
                  />
                  <SkillIcon
                    icon={<Svg src='porkbun' className='w-10 h-10' alt='Porkbun logo' />}
                    title="Porkbun"
                    description="Domain registrar service for managing and purchasing domain names."
                  />

                  <SkillIcon
                    icon={<Svg src='websocket' className='w-8 h-8' alt='WebSocket logo' />}
                    title="WebSocket"
                    description="Protocol for full-duplex communication channels over TCP connection."
                  />
                  <SkillIcon
                    icon={<Svg src='socket' className='w-8 h-8' alt='Socket.io logo' />}
                    title="Socket.io"
                    description="Library for real-time bidirectional event-based communication."
                  />
                  <SkillIcon
                    icon={<Svg src='webrtc' className='w-9 h-9' alt='WebRTC logo' />}
                    title="WebRTC"
                    description="Technology for real-time communication of audio, video, and data in web browsers."
                  />


                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
