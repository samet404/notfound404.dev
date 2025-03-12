import { Svg } from '@/src/components/Svg'
import { SkillIcon } from './SkillIcon'
import Image from 'next/image'
import drizzle from '@/png/drizzle.png'
import neon from '@/png/neon.png'
import nextjs from '@/png/nextjs.png'
import coolify from '@/png/coolify.png'
import trpc from '@/png/trpc.png'
import kmp from '@/png/kmp.png'
import ktor from '@/png/ktor.png'
import koin from '@/png/koin.png'

export const TechIUse = () => {
    return (
        <div className='flex flex-col gap-2 items-center'>

            <div className='flex flex-col items-center'>
                <h2 className='text-center xxs:w-[80%] md:w-full'>Technologies & Services I Use</h2>
                <p className='text-center'>Hover or click on the icons to see more information.</p>
            </div>
            <div className='gap-2 flex flex-row flex-wrap justify-center'>
                <SkillIcon
                    title='Kotlin'
                    description="Kotlin is a modern programming language that is fully interoperable with Java. Kotlin makes easier to develop java applications."
                    icon={<Svg src="kotlin" alt='kotlin' className='w-8 h-8' />}
                    skillLevel={34}
                    learning={true}
                />

                <SkillIcon
                    icon={<Image loading='lazy' sizes='calc(1vw + 37px)' placeholder='blur' src={kmp} className='w-10 h-10 rounded-md' alt='Kotlin Multiplatform' />}
                    title="Kotlin Multiplatform"
                    description="Kotlin Multiplatform is a framework for building cross-platform applications with Kotlin."
                    skillLevel={20}
                    learning={true}
                />

                <SkillIcon
                    icon={<Image loading='lazy' sizes='calc(1vw + 37px)' placeholder='blur' src={ktor} className='w-10 h-10 rounded-md' alt='Ktor' />}
                    title="Ktor"
                    description="Kotlin server framework for building server applications with Kotlin. Very similar to express.js."
                    skillLevel={23}
                    learning={true}
                />

                <SkillIcon
                    icon={<Image loading='lazy' sizes='calc(1vw + 37px)' placeholder='blur' src={koin} className='w-10 h-10 rounded-md' alt='Ktor' />}
                    title="Koin"
                    description="Simple way to handle dependency injection in kotlin and kmp."
                    skillLevel={100}
                />

                <SkillIcon
                    title='Jetpack Compose'
                    description="I'm using jetpack compose for building modern android applications."
                    icon={<Svg src="jetpackcompose" alt='jetpack compose' className='w-8 h-8' />}
                    skillLevel={54}
                />

                <SkillIcon
                    icon={<Svg src='c' className='w-10 h-10' alt='C logo' />}
                    title="C"
                    description="Mother of all programming languages."
                    skillLevel={10}
                    learning={true}
                />


                <SkillIcon
                    icon={<Svg src='typescript' className='w-10 h-10' alt='TypeScript logo' />}
                    title="TypeScript"
                    description="My preferred language for web development. I choose TypeScript whenever possible."
                    skillLevel={100}
                />
                <SkillIcon
                    icon={<Svg src='javascript' className='w-10 h-10' alt='JavaScript logo' />}
                    title="JavaScript"
                    description="While I can work with plain JavaScript, I prefer TypeScript for its added type safety and tooling"
                    skillLevel={100}
                />

                <SkillIcon
                    icon={<Svg src='html-5' className='w-10 h-10' alt='HTML5 logo' />}
                    title="HTML5"
                    description="Markup language for creating the user interface of my websites and applications"
                    skillLevel={100}
                />
                <SkillIcon
                    icon={<Svg src='css-3' className='w-10 h-10' alt='CSS3 logo' />}
                    title="CSS3"
                    description="Web design language for styling and layouting html pages."
                    skillLevel={100}
                />

                <SkillIcon
                    icon={<Svg src='tailwind' className='w-9 h-9' alt='Tailwind CSS logo' />}
                    title="Tailwind CSS"
                    description="My preferred CSS library for building responsive and maintainable user interfaces with utility-first approach."
                    skillLevel={100}
                />

                <SkillIcon
                    icon={<Svg src='react' className='w-10 h-10' alt='React logo' />}
                    title="React"
                    description="My primary web frontend library for building dynamic user interfaces."
                    skillLevel={100}
                />

                <SkillIcon
                    icon={<Svg src='react' className='w-10 h-10' alt='React logo' />}
                    title="React Native"
                    description="Simple way to build basic mobile applications with React."
                    skillLevel={70}
                />

                <SkillIcon
                    icon={<Svg src='expo' className='w-10 h-10' alt='Expo logo' />}
                    title="Expo"
                    description="A powerful framework built around React Native that simplifies mobile app development."
                    skillLevel={70}
                />

                <SkillIcon
                    icon={<Image loading='lazy' sizes='calc(1vw + 37px)' placeholder='blur' src={nextjs} className='w-10 h-10 rounded-md' alt='Next.js logo' />}
                    title="Next.js"
                    description="Full-stack React framework for applications with features like server-side rendering, API routes, and optimized performance."
                    skillLevel={100}
                />

                <SkillIcon
                    icon={<Svg src='react-query' className='w-10 h-10' alt='React Query logo' />}
                    title="React Query"
                    description="Powerful data-fetching library for React that handles caching, synchronization, and server state management with features like automatic background updates and optimistic updates."
                    skillLevel={64}
                />

                <SkillIcon
                    icon={<Svg src='jotai' className='w-10 h-10' alt='Jotai logo' />}
                    title="Jotai"
                    description="Atomic state management library for React applications focusing on simplicity and performance."
                    skillLevel={100}
                />

                <SkillIcon
                    icon={<Svg src='zustand' className='w-10 h-10' alt='Zustand logo' />}
                    title="Zustand"
                    description="Simple, fast and scalable state management solution for React applications."
                    skillLevel={100}
                />

                <SkillIcon
                    icon={<Svg src='nodejs' className='w-10 h-10' alt='Node.js logo' />}
                    title="Node.js"
                    description="Cross-platform JavaScript runtime environment and library"
                    skillLevel={100}
                />

                <SkillIcon
                    icon={<Svg src='websocket' className='w-8 h-8' alt='WebSocket logo' />}
                    title="WebSocket"
                    description="Protocol for full-duplex communication channels over TCP connection."
                    skillLevel={100}
                />
                <SkillIcon
                    icon={<Svg src='socket' className='w-8 h-8' alt='Socket.io logo' />}
                    title="Socket.io"
                    description="Library for real-time bidirectional event-based communication."
                    skillLevel={100}

                />
                <SkillIcon
                    icon={<Svg src='webrtc' className='w-9 h-9' alt='WebRTC logo' />}
                    title="WebRTC"
                    description="Technology for real-time communication of audio, video, and data in web browsers."
                    skillLevel={60}
                />

                <SkillIcon
                    icon={<Image loading='lazy' sizes='calc(1vw + 37px)' placeholder='blur' src={trpc} className='w-10 h-10 rounded-md' alt='tRPC logo' />}
                    title="tRPC"
                    description="End-to-end typesafe API layer, perfect for full-stack TypeScript projects. Best when client and server code live together for maximum type safety."
                    skillLevel={100}
                />

                <SkillIcon
                    icon={<Svg src='graphql' className='w-10 h-10' alt='Express.js logo' />}
                    title="GraphQL"
                    description="Query language for APIs, ideal when client and server are separate. Provides type safety data fetching and mutations."
                    skillLevel={90}
                />

                <SkillIcon
                    icon={<Svg src='express' className='w-10 h-10' alt='Express.js logo' />}
                    title="Express.js"
                    description="Creating RESTful APIs and web applications using Express.js framework."
                    skillLevel={100}
                />

                <SkillIcon
                    icon={<Svg src='fastify' className='w-8 h-8' alt='Fastify logo' />}
                    title="Fastify"
                    description="Alternative to Express.js. Since Express.js is no longer actively maintained, I prefer using Fastify as my Node.js framework"
                    skillLevel={100}
                />

                <SkillIcon
                    icon={<Svg src='postgresql' className='w-9 h-9' alt='PostgreSQL logo' />}
                    title="PostgreSQL"
                    description="Powerfull relational database. I'm using it for complex queries, data structres."
                    skillLevel={50}
                />

                <SkillIcon
                    icon={<Svg src='sqlite' className='w-9 h-9' alt='Sqlite logo' />}
                    title="SQLite"
                    description="Light, SQL database engine. I'm usually using for mobile applications."
                    skillLevel={50}
                />

                <SkillIcon
                    icon={<Image loading='lazy' sizes='calc(1vw + 37px)' placeholder='blur' src={drizzle} className='w-9 h-9 rounded-md' alt='Drizzle ORM logo' />}
                    title="Drizzle ORM"
                    description="TypeScript ORM for SQL databases with a focus on type safety and developer experience. I prefer using drizzle instead of Prisma because it's more lightweight."
                    skillLevel={55}
                />

                <SkillIcon
                    icon={<Svg src='prisma' className='w-8 h-8' alt='Prisma logo' />}
                    title="Prisma"
                    description="Modern ORM for Node.js and TypeScript, providing type-safe database access and migrations."
                    skillLevel={30}
                />

                <SkillIcon
                    icon={<Image loading='lazy' sizes='calc(1vw + 37px)' placeholder='blur' src={neon} className='w-10 h-10 rounded-md bg-black p-[0.3rem]' alt='Neon DB logo' />}
                    title="Neon"
                    description="Serverless Postgres database platform for modern applications."
                    skillLevel={null}
                />

                <SkillIcon
                    icon={<Svg src='redis' className='w-9 h-9' alt='Redis logo' />}
                    title="Redis"
                    description="In-memory database for caching, non persistent data storage and real-time data processing."
                    skillLevel={90}
                />

                <SkillIcon
                    icon={<Svg src='keydb' className='w-9 h-9' alt='KeyDB logo' />}
                    title="KeyDB"
                    description="Multithreaded fork of Redis focusing on high performance and lower latency.."
                    skillLevel={null}
                />

                <SkillIcon
                    icon={<Svg src='xata' className='w-8 h-8' alt='Xata logo' />}
                    title="Xata"
                    description="Serverless database platform with built-in search and analytics capabilities."
                    skillLevel={null}
                />

                <SkillIcon
                    icon={<Svg src='git' className='w-10 h-10' alt='Git logo' />}
                    title="Git"
                    description="Version control system for tracking changes and collaborating on code projects."
                    skillLevel={60}
                />
                <SkillIcon
                    icon={<Svg src='vscode' className='w-10 h-10' alt='VS Code logo' />}
                    title="VS Code"
                    description="I'm using VS Code for coding web applications."
                    skillLevel={null}
                />
                <SkillIcon
                    title='Android studio'
                    description="I'm using Android studio for developing kotlin-java applications. It's a powerful IDE with a wide range of features and plugins."
                    icon={<Svg src='androidstudio' className='w-9 h-9' alt='android studio' />}
                    skillLevel={null}
                />

                <SkillIcon
                    title='IntelliJ IDEA'
                    description="I'm using IntelliJ for developing Kotlin applications."
                    icon={<Svg src='intellij' className='w-9 h-9' alt='IntelliJ' />}
                    skillLevel={null}
                />

                <SkillIcon
                    icon={<Svg src='supermaven' className='w-9 h-9' alt='Supermaven logo' />}
                    title="Supermaven"
                    description="AI-powered development assistant for enhanced coding productivity."
                    skillLevel={null}
                />

                <SkillIcon
                    icon={<Svg src='figma' className='w-10 h-10' alt='Figma logo' />}
                    title="Figma"
                    description="Design tool for creating and implementing user interfaces and design systems."
                    skillLevel={40}
                />

                <SkillIcon
                    icon={<Svg src='vite' className='w-9 h-9' alt='Vite logo' />}
                    title="Vite"
                    description="Next-generation frontend build tool offering lightning-fast development experience."
                    skillLevel={null}
                />
                <SkillIcon
                    icon={<Svg src='webpack' className='w-9 h-9' alt='Webpack logo' />}
                    title="Webpack"
                    description="Module bundler for JavaScript applications with extensive configuration options."
                    skillLevel={null}
                />
                <SkillIcon
                    icon={<Image loading='lazy' sizes='calc(1vw + 37px)' placeholder='blur' src={coolify} className='w-12 h-12 rounded-md' alt='Coolify logo' />}
                    title="Coolify"
                    description="Self-hosted Heroku/Vercel alternative for deploying applications, databases, and services. Used for managing personal infrastructure and hosting projects."
                    skillLevel={null}
                />

                <SkillIcon
                    icon={<Svg src='vercel' className='w-8 h-8' alt='Vercel logo' />}
                    title="Vercel"
                    description="Platform for deploying and hosting web applications with automatic CI/CD."
                    skillLevel={null}
                />
                <SkillIcon
                    icon={<Svg src='cloudflare' className='w-10 h-10' alt='Cloudflare logo' />}
                    title="Cloudflare"
                    description="Web infrastructure and security services including CDN, DNS, and DDoS protection."
                    skillLevel={null}
                />
                <SkillIcon
                    icon={<Svg src='docker' className='w-10 h-10' alt='Docker logo' />}
                    title="Docker"
                    description="I'm using Docker for containerizing applications, ensuring consistent development environments, and simplifying deployment processes."
                    skillLevel={30}
                />
                <SkillIcon
                    icon={<Svg src='porkbun' className='w-10 h-10' alt='Porkbun logo' />}
                    title="Porkbun"
                    description="Domain registrar service for managing and purchasing domain names."
                    skillLevel={null}
                />




            </div>
        </div>)
}