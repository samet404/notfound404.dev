import { Svg } from '@/src/components/Svg'
import { SkillIcon } from './SkillIcon'
import Image from 'next/image'
import drizzle from '@/png/drizzle.png'
import nextjs from '@/png/nextjs.png'
import coolify from '@/png/coolify.png'
import trpc from '@/png/trpc.png'
import kmp from '@/png/kmp.png'
import ktor from '@/png/ktor.png'
import koin from '@/png/koin.png'
import raylib from '@/png/raylib.png'
import turbo from '@/png/turbo.png'
import clerk from '@/webp/clerk.webp'
import neon from '@/png/neon.png'
import dragonflydb from '@/png/dragonflydb.png'

const imageSizes = 'calc(1vw + 37px)'

export const SkillsContent = () => {
    return (
        <div className='gap-2 flex flex-row flex-wrap justify-center'>
            <SkillIcon
                title='Kotlin'
                description="Kotlin is a modern programming language that is fully interoperable with Java. Kotlin makes easier to develop java applications."
                icon={<Svg src="kotlin" alt='kotlin' className='w-8 h-8' />}
                skillLevel={100}
                type='Language'
            />

            <SkillIcon
                title='Java'
                icon={<Svg src="java" alt='Java' className='w-10 h-10' />}
                skillLevel={65}
                learning
                type='Language'
            />

            <SkillIcon
                icon={<Image loading='lazy' sizes={imageSizes} placeholder='blur' src={kmp} className='w-10 h-10 rounded-md' alt='Kotlin Multiplatform' />}
                title="Kotlin Multiplatform (Android, Desktop)"
                description="Kotlin Multiplatform is a framework for building cross-platform applications with Kotlin."
                skillLevel={100}
                type='Library-framework'
            />

            <SkillIcon
                icon={<Svg src='spring' className='w-9 h-9' alt='Spring logo' />}
                title="Spring"
                description="Spring is a Java based backend framework. Allows us to build fast and scalable backend applications using dependency injecton and other features."
                skillLevel={40}
                type='Library-framework'
                learning
            />

            <SkillIcon
                icon={<Image loading='lazy' sizes={imageSizes} placeholder='blur' src={ktor} className='w-10 h-10 rounded-md' alt='Ktor' />}
                title="Ktor"
                description="Kotlin server framework for building server applications with Kotlin. Very similar to express.js."
                skillLevel={27}
                type='Library-framework'
            />

            <SkillIcon
                icon={<Image loading='lazy' sizes={imageSizes} placeholder='blur' src={koin} className='w-10 h-10 rounded-md' alt='Ktor' />}
                title="Koin"
                description="Simple way to handle dependency injection in kotlin and kmp."
                skillLevel={100}
                type='Library-framework'
            />

            <SkillIcon
                title="Dagger hilt"
                icon={<Svg src='android' className='w-10 h-10' alt='Android logo' />}
                description="Dependency injection library for kotlin and android."
                skillLevel={70}
                type='Library-framework'
            />

            <SkillIcon
                title="Room database"
                icon={<Svg src='android' className='w-10 h-10' alt='Android logo' />}
                description="SQLite database library for Android developed by Google."
                skillLevel={40}
                type='Library-framework'
            />

            <SkillIcon
                title='Jetpack Compose'
                description="Jetpack compose is a modern UI library for building native java/kotlin applications."
                icon={<Svg src="jetpackcompose" alt='jetpack compose' className='w-8 h-8' />}
                skillLevel={100}
                type='Library-framework'
            />

            <SkillIcon
                icon={<Svg src='gradle' className='w-10 h-10' alt='Gradle logo' />}
                title="Gradle"
                description="Package manager and build tool for Java and Kotlin projects."
                skillLevel={100}
                type='Tool'
            />

            <SkillIcon
                icon={<Svg src='maven' className='w-10 h-10' alt='Maven logo' />}
                title="Maven"
                description="Package manager and build tool for Java and Kotlin projects."
                skillLevel={100}
                type='Tool'
            />

            <SkillIcon
                icon={<Svg src='npm' className='w-10 h-10' alt='Npm logo' />}
                title="Npm"
                description="Package manager for JavaScript and TypeScript projects."
                skillLevel={100}
                type='Tool'
            />

            <SkillIcon
                icon={<Svg src='c' className='w-10 h-10' alt='C logo' />}
                title="C"
                description="Mother of most programming languages."
                skillLevel={45}
                learning
                type='Language'
            />

            <SkillIcon
                icon={<Svg src='makefile' className='w-12 h-12 pl-1' alt='Makefile logo' />}
                title="Makefile"
                description="Makefile is a build automation tool to automate the build process of C and C++ projects."
                skillLevel={30}
                type='Tool'
            />

            <SkillIcon
                icon={<Svg src='meson' className='w-12 h-12' alt='Meson logo' />}
                title="meson"
                description="Meson is a user friendly build automation tool to automate the build process of C and C++ projects."
                skillLevel={40}
                learning
                type='Tool'
            />

            <SkillIcon
                icon={<Svg src='clang' className='w-12 h-12' alt='C logo' />}
                title="Clang"
                skillLevel={2}
                learning
                type='Tool'
            />

            <SkillIcon
                icon={<Svg src='cmake' className='w-10 h-10' alt='C logo' />}
                title="CMake"
                learning
                skillLevel={15}
                type='Tool'
            />

            <SkillIcon
                icon={<Image loading='lazy' sizes={imageSizes} placeholder='blur' src={raylib} className='w-9 h-9 rounded-md' alt='Raylib logo' />}
                title="Raylib (2D)"
                description="Raylib is a simple and easy-to-use library to enjoy videogames programming."
                skillLevel={30}
                learning
                type='Library-framework'
            />

            <SkillIcon
                icon={<Svg src='typescript' className='w-10 h-10' alt='TypeScript logo' />}
                title="TypeScript"
                description="My preferred language for web development. I choose TypeScript whenever possible."
                skillLevel={100}
                type='Language'
            />
            <SkillIcon
                icon={<Svg src='javascript' className='w-10 h-10' alt='JavaScript logo' />}
                title="JavaScript"
                description="While I can work with plain JavaScript, I prefer TypeScript for its added type safety and tooling"
                skillLevel={100}
                type='Language'
            />

            <SkillIcon
                icon={<Svg src='wasm' className='w-11 h-11 rounded-md' alt='Wasm logo' />}
                title='Web Assembly'
                description='Web assembly allows to run low-level code directly in the browser.'
                skillLevel={100}
                type='Language'
            />

            <SkillIcon
                title='Python'
                skillLevel={50}
                icon={<Svg src='python' className='w-10 h-10' alt='Python logo' />}
                type='Language'
            />

            <SkillIcon
                title='Gemini API'
                icon={<Svg src='gemini' className='w-10 h-10' alt='Gemini logo' />}
                type='API'
                description='I can use gemini API efficently by using fine tunning and applying Retrieval-augmented generation (RAG) techniques.'
            />


            <SkillIcon
                title='lua'
                icon={<Svg src="lua" alt='lua logo' className='w-10 h-10' />}
                skillLevel={3}
                type='Language'
            />


            <SkillIcon
                title='Haskell'
                icon={<Svg src="haskell" alt='haskell logo' className='w-10 h-10' />}
                skillLevel={1}
                type='Language'
            />

            <SkillIcon
                icon={<Svg src='flask' className='w-10 h-10' alt='Flask logo' />}
                title="Flask"
                description="Python web framework for building web applications and APIs. Similar to express.js, fastify and ktor."
                skillLevel={10}
                type='Library-framework'
            />

            <SkillIcon
                icon={<Svg src='jupyter' className='w-10 h-10' alt='jupyter notebook logo' />}
                title="Jupyter Notebook"
                description="Web-based interactive computing environment for huge computational python tasks."
                type='Service'
            />

            <SkillIcon
                icon={<Svg src='numpy' className='w-9 h-9' alt='Numpy logo' />}
                title="Numpy"
                description="Python library for fast array computations than original Python lists."
                skillLevel={100}
                type='Library-framework'
            />

            <SkillIcon
                icon={<Svg src='colab' className='w-10 h-10' alt='Colab logo' />}
                title="Google Colab"
                description="Google Colab is a free Jupyter notebook environment."
                type='Dev tool'
            />

            <SkillIcon
                icon={<Svg src='matplotlib' className='w-10 h-10' alt='Matplotlib logo' />}
                title="Matplotlib"
                description="Python library for creating graphs and charts."
                skillLevel={10}
                type='Library-framework'
            />


            <SkillIcon
                icon={<Svg src='pandas' className='w-10 h-10' alt='Pandas logo' />}
                title="Pandas"
                description="Python library for data analysis and manipulation."
                skillLevel={5}
                type='Library-framework'
            />

            <SkillIcon
                icon={<Svg src='pytorch' className='w-9 h-9' alt='Pytorch logo' />}
                title="PyTorch"
                description="Most popular machine learning library for Python."
                skillLevel={6}
                type='Library-framework'
            />

            <SkillIcon
                icon={<Svg src='html-5' className='w-10 h-10' alt='HTML5 logo' />}
                title="HTML5"
                description="Standart markup language for creating the structres."
                skillLevel={100}
                type='Language'
            />

            <SkillIcon
                icon={<Svg src='xml' className='w-10 h-10' alt='HTML5 logo' />}
                title="XML"
                description="Standart markup language for creating the structres."
                skillLevel={100}
                type='Language'
            />

            <SkillIcon
                icon={<Svg src='latex' className='w-11 h-11' alt='Latex logo' />}
                title="Latex"
                description="Latex is an advanced markdown language for creating complex and scientific documents."
                skillLevel={70}
                type='Language'
            />

            <SkillIcon
                icon={<Svg src='css-3' className='w-10 h-10' alt='CSS3 logo' />}
                title="CSS3"
                description="Web design language for styling and layouting html pages."
                skillLevel={100}
                type='Language'
            />

            <SkillIcon
                icon={<Svg src='scss' className='w-10 h-10' alt='Scss logo' />}
                title="SCSS"
                skillLevel={90}
                type='Language'
            />

            <SkillIcon
                icon={<Svg src='tailwind' className='w-9 h-9' alt='Tailwind CSS logo' />}
                title="Tailwind CSS"
                description="My preferred CSS library for building responsive and maintainable user interfaces with utility-first approach."
                skillLevel={100}
                type='Library-framework'
            />

            <SkillIcon
                icon={<Svg src='react' className='w-10 h-10' alt='React logo' />}
                title="React"
                description="My primary web frontend library for building dynamic user interfaces."
                skillLevel={100}
                type='Library-framework'
            />

            <SkillIcon
                icon={<Svg src='vue' className='w-9 h-9' alt='Vue logo' />}
                title="Vue"
                description="Web frontend library for building user interfaces."
                skillLevel={4}
                learning
                type='Library-framework'
            />

            <SkillIcon
                icon={<Svg src='react' className='w-10 h-10' alt='React logo' />}
                title="React Native"
                description="Simple way to build basic mobile applications with React."
                skillLevel={70}
                type='Library-framework'
            />
            <SkillIcon
                icon={<Svg src='expo' className='w-10 h-10' alt='Expo logo' />}
                title="Expo"
                description="A powerful framework built around React Native that simplifies mobile app development."
                skillLevel={70}
                type='Library-framework'
            />
            <SkillIcon
                icon={<Image loading='lazy' sizes={imageSizes} placeholder='blur' src={nextjs} className='w-10 h-10 rounded-md' alt='Next.js logo' />}
                title="Next.js"
                description="Full-stack React framework for applications with features like server-side rendering, API routes, and optimized performance."
                skillLevel={100}
                type='Library-framework'
            />

            <SkillIcon
                icon={<Image loading='lazy' sizes={imageSizes} placeholder='blur' src={turbo} className='w-10 h-10 rounded-md' alt='Turborepo logo' />}
                title="Turborepo"
                description="Monorepo management tool for JavaScript and TypeScript projects."
                type='Library-framework'
            />


            <SkillIcon
                icon={<Svg src='react-query' className='w-10 h-10' alt='React Query logo' />}
                title="React Query"
                description="Powerful data-fetching library for React that handles caching, synchronization, and server state management with features like automatic background updates and optimistic updates."
                skillLevel={64}
                type='Library-framework'
            />
            <SkillIcon
                icon={<Svg src='jotai' className='w-10 h-10' alt='Jotai logo' />}
                title="Jotai"
                description="Atomic state management library for React applications focusing on simplicity and performance."
                skillLevel={100}
                type='Library-framework'
            />

            <SkillIcon
                icon={<Svg src='vitest' className='w-10 h-10' alt='Vitest logo' />}
                title="vitest"
                description="Testing library for Javascript/Typescript applications."
                skillLevel={100}
                type='Library-framework'
            />

            <SkillIcon
                icon={<Svg src='php' className='w-10 h-10' alt='Php logo' />}
                title="PHP"
                learning
                skillLevel={7}
                type='Language'
            />

            <SkillIcon
                icon={<Svg src='laravel' className='w-10 h-10' alt='Laravel logo' />}
                title="Laravel"
                skillLevel={4}
                learning
                type='Library-framework'
            />

            <SkillIcon
                icon={<Svg src='cypress' className='w-9 h-9' alt='Cypress logo' />}
                title="Cypress"
                description="E2E Testing library for Javascript/Typescript applications."
                skillLevel={100}
                type='Library-framework'
            />


            <SkillIcon
                icon={<Svg src='zustand' className='w-10 h-10' alt='Zustand logo' />}
                title="Zustand"
                description="Simple, fast and scalable state management solution for React applications."
                skillLevel={100}
                type='Library-framework'
            />



            <SkillIcon
                icon={<Svg src='better-auth' className='w-10 h-10 rounded-md' alt='Better-auth logo' />}
                title="Better Auth"
                description="Typesafe, customizable and easy authentication library for Typescript and Javascript applications."
                type='Library-framework'
            />


            <SkillIcon
                icon={<Svg src='nodejs' className='w-10 h-10' alt='Node.js logo' />}
                title="Node.js"
                description="Cross-platform JavaScript runtime environment and library"
                skillLevel={100}
                type='Library-framework'
            />
            <SkillIcon
                icon={<Svg src='websocket' className='w-8 h-8' alt='WebSocket logo' />}
                title="WebSocket"
                description="Protocol for full-duplex communication channels over TCP connection."
                skillLevel={100}
                type='API'
            />
            <SkillIcon
                icon={<Svg src='socket' className='w-8 h-8' alt='Socket.io logo' />}
                title="Socket.io"
                description="Library for creating websocket server using node.js."
                skillLevel={100}
                type='API'
            />
            <SkillIcon
                icon={<Svg src='webrtc' className='w-9 h-9' alt='WebRTC logo' />}
                title="WebRTC"
                description="Technology for real-time communication of audio, video, and data in web browsers."
                skillLevel={60}
                type='API'
            />
            <SkillIcon
                icon={<Image loading='lazy' sizes={imageSizes} placeholder='blur' src={trpc} className='w-10 h-10 rounded-md' alt='tRPC logo' />}
                title="tRPC"
                description="End-to-end typesafe API layer, perfect for full-stack TypeScript projects. Best when client and server code live together for maximum type safety."
                skillLevel={100}
                type='API'
            />
            <SkillIcon
                icon={<Svg src='graphql' className='w-10 h-10' alt='Express.js logo' />}
                title="GraphQL"
                description="Query language for APIs, ideal when client and server are separate. Provides type safety data fetching and mutations."
                skillLevel={90}
                type='API'
            />
            <SkillIcon
                icon={<Svg src='express' className='w-10 h-10' alt='Express.js logo' />}
                title="Express.js"
                description="Creating RESTful APIs and web applications using Express.js framework."
                skillLevel={100}
                type='Library-framework'
            />
            <SkillIcon
                icon={<Svg src='fastify' className='w-8 h-8' alt='Fastify logo' />}
                title="Fastify"
                description="Alternative to Express.js. Since Express.js is no longer actively maintained, I prefer using Fastify as my Node.js framework"
                skillLevel={100}
                type='Library-framework'
            />

            <SkillIcon
                icon={<Svg src='postgresql' className='w-9 h-9' alt='PostgreSQL logo' />}
                title="PostgreSQL"
                description="Powerfull relational database. I'm using it for complex queries, data structres."
                skillLevel={100}
                type='Database'
            />

            <SkillIcon
                icon={<Image loading='lazy' sizes={imageSizes} placeholder='blur' src={clerk} className='w-9 pr-1 h-9 rounded-md' alt='Clerk logo' />}
                title="Clerk"
                description="Easiest way to add authentication to your app with just a few lines of code."
                type='Service'
            />

            <SkillIcon
                icon={<Image loading='lazy' sizes={imageSizes} placeholder='blur' src={neon} className='w-8 h-8 rounded-md' alt='Neon logo' />}
                title="Neon"
                description="Postgres database provider service."
                type='Service'
            />

            <SkillIcon
                icon={<Svg src='xata' className='w-8 h-8 rounded-md' alt='Xata logo' />}
                title="Xata"
                description="Postgres database provider service."
                type='Service'
            />

            <SkillIcon
                icon={<Svg src='upstash' className='w-8 h-8 rounded-md' alt='Upstash logo' />}
                title="upstash"
                description="I've used their redis service for a while. It's a great service."
                type='Service'
            />

            <SkillIcon
                icon={<Svg src='mysql' className='w-9 h-9' alt='PostgreSQL logo' />}
                title="MySQL"
                description="One of the most popular relational databases."
                skillLevel={90}
                type='Database'
            />

            <SkillIcon
                icon={<Svg src='chroma' className='w-9 h-9' alt='Chroma logo' />}
                title="Chroma"
                description="Vector database for storing and querying vector data. Vector databases are used for machine learning and data analysis."
                skillLevel={30}
                type='Database'
            />


            <SkillIcon
                icon={<Svg src='sqlite' className='w-9 h-9' alt='Sqlite logo' />}
                title="SQLite"
                description="Light, SQL database engine. I'm usually using for mobile applications."
                skillLevel={100}
                type='Database'
            />
            <SkillIcon
                icon={<Image loading='lazy' sizes={imageSizes} placeholder='blur' src={drizzle} className='w-10 h-10 rounded-md' alt='Drizzle ORM logo' />}
                title="Drizzle ORM"
                description="TypeScript ORM for SQL databases with a focus on type safety and developer experience. I prefer using drizzle instead of Prisma because it's more lightweight."
                skillLevel={55}
                type='Database'
            />
            <SkillIcon
                icon={<Svg src='prisma' className='w-8 h-8' alt='Prisma logo' />}
                title="Prisma"
                description="Modern ORM for Node.js and TypeScript, providing type-safe database access and migrations."
                skillLevel={30}
                type='Database'
            />

            <SkillIcon
                icon={<Svg src='redis' className='w-9 h-9' alt='Redis logo' />}
                title="Redis"
                description="In-memory database for caching, non persistent data storage and real-time data processing."
                skillLevel={90}
                type='Database'
            />

            <SkillIcon
                icon={<Svg src='keydb' className='w-9 h-9' alt='KeyDB logo' />}
                title="KeyDB"
                description="Multithreaded fork of Redis focusing on high performance and lower latency.."
                skillLevel={null}
                type='Database'
            />

            <SkillIcon
                icon={<Image loading='lazy' sizes={imageSizes} placeholder='blur' src={dragonflydb} className='w-12 h-12 rounded-md' alt='Dragonflydb logo' />}
                title="Dragonflydb"
                description="Alternative to Redis and keydb with a focus on performance and simplicity. Dragonflydb claims that it's 25x faster than Redis"
                skillLevel={null}
                type='Database'
            />

            <SkillIcon
                icon={<Svg src='git' className='w-10 h-10' alt='Git logo' />}
                title="Git"
                description="Version control system for tracking changes and collaborating on code projects."
                skillLevel={100}
                type='Tool'
            />

            <SkillIcon
                icon={<Svg src='linux' className='w-10 h-10' alt='Linux logo' />}
                title="Linux"
                description="I hate windows."
                type='Tool'
            />


            <SkillIcon
                icon={<Svg src='vscode' className='w-10 h-10' alt='VS Code logo' />}
                title="VS Code"
                description="I'm using VS Code for coding web applications."
                skillLevel={null}
                type='Dev tool'
            />
            <SkillIcon
                title='Android studio'
                description="I'm using Android studio for developing kotlin-java applications. It's a powerful IDE with a wide range of features and plugins."
                icon={<Svg src='androidstudio' className='w-9 h-9' alt='android studio' />}
                skillLevel={null}
                type='Dev tool'
            />
            <SkillIcon
                title='IntelliJ IDEA'
                description="I'm using IntelliJ for developing Kotlin applications."
                icon={<Svg src='intellij' className='w-9 h-9' alt='IntelliJ' />}
                skillLevel={null}
                type='Dev tool'
            />

            <SkillIcon
                title="Pycharm"
                description="I'm using Pycharm for developing Python applications."
                icon={<Svg src='pycharm' className='w-9 h-9' alt='Pycharm' />}
                skillLevel={null}
                type='Dev tool'
            />

            <SkillIcon
                icon={<Svg src='supermaven' className='w-9 h-9' alt='Supermaven logo' />}
                title="Supermaven"
                description="AI-powered development assistant for enhanced coding productivity."
                skillLevel={null}
                type='Dev tool'
            />

            <SkillIcon
                icon={<Svg src='figma' className='w-10 h-10' alt='Figma logo' />}
                title="Figma"
                description="Design tool for creating and implementing user interfaces and design systems."
                skillLevel={40}
                type='Dev tool'
            />
            <SkillIcon
                icon={<Svg src='vite' className='w-9 h-9' alt='Vite logo' />}
                title="Vite"
                description="Next-generation frontend build tool offering lightning-fast development experience."
                skillLevel={null}
                type='Library-framework'
            />
            <SkillIcon
                icon={<Svg src='webpack' className='w-9 h-9' alt='Webpack logo' />}
                title="Webpack"
                description="Module bundler for JavaScript applications with extensive configuration options."
                skillLevel={null}
                type='Library-framework'
            />


            <SkillIcon
                icon={<Image loading='lazy' sizes={imageSizes} placeholder='blur' src={coolify} className='w-12 h-12 rounded-md' alt='Coolify logo' />}
                title="Coolify"
                description="Self-hosted Heroku/Vercel alternative for deploying applications, databases, and services. Used for managing personal infrastructure and hosting projects."
                skillLevel={null}
                type='Tool'
            />
            <SkillIcon
                icon={<Svg src='vercel' className='w-8 h-8' alt='Vercel logo' />}
                title="Vercel"
                description="Platform for deploying and hosting web applications with automatic CI/CD."
                skillLevel={null}
                type='Service'
            />
            <SkillIcon
                icon={<Svg src='cloudflare' className='w-10 h-10' alt='Cloudflare logo' />}
                title="Cloudflare"
                description="Web infrastructure and security services including CDN, DNS, and DDoS protection."
                skillLevel={null}
                type='Service'
            />
            <SkillIcon
                icon={<Svg src='docker' className='w-10 h-10' alt='Docker logo' />}
                title="Docker"
                description="I'm using Docker for containerizing applications, ensuring consistent development environments, and simplifying deployment processes."
                skillLevel={30}
                type='Tool'
            />
            {/* <SkillIcon
                icon={<Svg src='nginx' className='w-10 h-10' alt='Docker logo' />}
                title="Nginx"
                skillLevel={2}
                type='Low-skill'
            /> */}
            <SkillIcon
                icon={<Svg src='porkbun' className='w-10 h-10' alt='Porkbun logo' />}
                title="Porkbun"
                description="Domain registrar service for managing and purchasing domain names."
                skillLevel={null}
                type='Service'
            />

            <SkillIcon
                icon={<Svg src='mongodb' className='w-10 h-10' alt='Mangodb logo' />}
                title="Mangodb"
                skillLevel={2}
                type='Database'

            />

            <SkillIcon
                icon={<Svg src='mongoose' className='w-10 h-10' alt='Mangoose logo' />}
                title="Mangoose"
                skillLevel={2}
                type='Database'

            />

            <SkillIcon
                icon={<Svg src='csharp' className='w-[2.5rem] h-[2.5rem]' alt='C# logo' />}
                title="C#"
                skillLevel={1}
                type='Language'
            />
        </div>
    )
}