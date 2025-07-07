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
import hetzner from '@/webp/hetzner.webp'
import neon from '@/png/neon.png'
import dragonflydb from '@/png/dragonflydb.png'
import lemonsqueezy from '@/jpg/lemonsquezzy.jpg'
import sqldelight from '@/png/sqldelight.png'
import pgbackrest from '@/png/pgbackrest.png'

// import chaquopy from '@/png/chaquopy.png'
import milvus from '@/png/milvus.png'

const imageSizes = 'calc(1vw + 37px)'

export const SkillsContent = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-2">
      <SkillIcon
        title="Kotlin"
        description="Kotlin is a modern programming language that is fully interoperable with Java. Kotlin makes easier to develop java applications."
        icon={<Svg src="kotlin" alt="kotlin" className="h-8 w-8" />}
        skillLevel={100}
        type="Language"
      />

      <SkillIcon
        title="Java"
        description="Java is a popular programming language for building enterprise applications. It is a high-level, class-based, object-oriented language. Java is first designed to be make easy to develop platform-independent application GUIs."
        icon={<Svg src="java" alt="Java" className="h-10 w-10" />}
        skillLevel={40}
        type="Language"
      />

      <SkillIcon
        title="JNI (Java Native Interface)"
        description="Java Native Interface is a way to call native code from Java. It allows you to write code in C, C++ and call it from Java."
        icon={<Svg src="java" alt="Java" className="h-10 w-10" />}
        skillLevel={35}
        learning
        type="API"
      />

      <SkillIcon
        icon={
          <Image
            loading="lazy"
            sizes={imageSizes}
            placeholder="blur"
            src={kmp}
            className="h-10 w-10 rounded-md"
            alt="Kotlin Multiplatform"
          />
        }
        title="Kotlin Multiplatform (Android, Desktop)"
        description="Kotlin Multiplatform is a framework for building cross-platform applications with Kotlin."
        skillLevel={100}
        type="Library-framework"
      />

      <SkillIcon
        icon={<Svg src="spring" className="h-9 w-9" alt="Spring logo" />}
        title="Spring IoC Container"
        description="Spring IoC is a way to manage lifecycle and dependencies of objects in Java applications."
        skillLevel={50}
        type="Library-framework"
      />

      <SkillIcon
        icon={<Svg src="spring" className="h-9 w-9" alt="Spring logo" />}
        title="Spring Boot"
        description="Spring Boot is a Java based backend framework. Allows us to build fast and scalable backend applications using IoC container and other features."
        skillLevel={10}
        type="Library-framework"
      />

      <SkillIcon
        icon={<Svg src="rabbitmq" className="h-9 w-9" alt="RabbitMQ logo" />}
        title="RabbitMQ"
        skillLevel={20}
        type="Library-framework"
      />

      <SkillIcon
        icon={
          <Image
            loading="lazy"
            sizes={imageSizes}
            placeholder="blur"
            src={ktor}
            className="h-10 w-10 rounded-md"
            alt="Ktor"
          />
        }
        title="Ktor"
        description="Kotlin server framework for building server applications with Kotlin. Very similar to express.js."
        skillLevel={57}
        learning
        type="Library-framework"
      />

      <SkillIcon
        icon={
          <Image
            loading="lazy"
            sizes={imageSizes}
            placeholder="blur"
            src={koin}
            className="h-10 w-10 rounded-md"
            alt="Ktor"
          />
        }
        title="Koin"
        description="Simple way to handle dependency injection in kotlin and kmp."
        skillLevel={100}
        type="Library-framework"
      />

      <SkillIcon
        title="Dagger hilt"
        icon={<Svg src="android" className="h-10 w-10" alt="Android logo" />}
        description="Dependency injection library for kotlin and android."
        skillLevel={70}
        type="Library-framework"
      />

      <SkillIcon
        title="Android NDK"
        icon={<Svg src="android" className="h-10 w-10" alt="Android logo" />}
        description="Android Native Development Kit (NDK) is a set of tools that allows you to use C and C++ code with Android."
        skillLevel={20}
        learning
        type="Other"
      />

      <SkillIcon
        title="Room database"
        icon={<Svg src="android" className="h-10 w-10" alt="Android logo" />}
        description="SQLite database ORM library for Android developed by Google."
        skillLevel={40}
        type="Database"
      />

      <SkillIcon
        title="SQLDelight"
        icon={
          <Image
            loading="lazy"
            sizes={imageSizes}
            placeholder="blur"
            src={sqldelight}
            className="h-10 w-10 rounded-md"
            alt="SQLDelight logo"
          />
        }
        description="SQLDelight is a type-safe SQL library for Kotlin. It does the opposite of ORMs does. Instead of generating SQL from your code models, it generates models from your SQL AND I LOVE IT. I THINK  THAT SO MUCH BETTER THAN ORM CONCEPT."
        skillLevel={100}
        type="Database"
      />

      {/* <SkillIcon
                title="Chaquopy"
                icon={<Image loading='lazy' sizes={imageSizes} placeholder='blur' src={chaquopy} className='w-12 h-12 rounded-md' alt='Chaquopy logo' />}
                description="Chaquopy allows us to run Python code in Android applications."
                type='Library-framework'
            /> */}

      <SkillIcon
        title="Jetpack Compose"
        description="Jetpack compose is a modern UI library for building native java/kotlin applications."
        icon={
          <Svg src="jetpackcompose" alt="jetpack compose" className="h-8 w-8" />
        }
        skillLevel={100}
        type="Library-framework"
      />

      <SkillIcon
        icon={<Svg src="gradle" className="h-10 w-10" alt="Gradle logo" />}
        title="Gradle"
        description="Package manager and build tool for Java and Kotlin projects."
        skillLevel={100}
        type="Tool"
      />

      <SkillIcon
        icon={<Svg src="maven" className="h-10 w-10" alt="Maven logo" />}
        title="Maven"
        description="Package manager and build tool for Java and Kotlin projects."
        skillLevel={100}
        type="Tool"
      />

      <SkillIcon
        icon={<Svg src="npm" className="h-10 w-10" alt="Npm logo" />}
        title="Npm"
        description="Package manager for JavaScript and TypeScript projects."
        skillLevel={100}
        type="Tool"
      />

      <SkillIcon
        icon={<Svg src="c" className="h-10 w-10" alt="C logo" />}
        title="C"
        description="Mother of most programming languages."
        skillLevel={65}
        type="Language"
      />

      <SkillIcon
        icon={
          <Svg src="makefile" className="h-12 w-12 pl-1" alt="Makefile logo" />
        }
        title="Makefile"
        description="Makefile is a build automation tool to automate the build process of C and C++ projects."
        skillLevel={9}
        type="Tool"
      />

      <SkillIcon
        icon={<Svg src="meson" className="h-12 w-12" alt="Meson logo" />}
        title="meson"
        description="Meson is a user friendly build automation tool to automate the build process of C and C++ projects."
        skillLevel={80}
        type="Tool"
      />

      <SkillIcon
        icon={<Svg src="clang" className="h-12 w-12" alt="C logo" />}
        title="Clang"
        skillLevel={5}
        type="Tool"
      />

      <SkillIcon
        icon={<Svg src="cmake" className="h-10 w-10" alt="C logo" />}
        title="CMake"
        skillLevel={10}
        type="Tool"
      />

      <SkillIcon
        icon={
          <Image
            loading="lazy"
            sizes={imageSizes}
            placeholder="blur"
            src={raylib}
            className="h-9 w-9 rounded-md"
            alt="Raylib logo"
          />
        }
        title="Raylib"
        learning
        description="Raylib is a simple and easy-to-use library to enjoy videogames programming."
        skillLevel={40}
        type="Library-framework"
      />

      <SkillIcon
        icon={
          <Svg src="typescript" className="h-10 w-10" alt="TypeScript logo" />
        }
        title="TypeScript"
        description="My preferred language for web development. I choose TypeScript whenever possible."
        skillLevel={100}
        type="Language"
      />
      <SkillIcon
        icon={
          <Svg src="javascript" className="h-10 w-10" alt="JavaScript logo" />
        }
        title="JavaScript"
        description="While I can work with plain JavaScript, I prefer TypeScript for its added type safety and tooling"
        skillLevel={100}
        type="Language"
      />

      <SkillIcon
        icon={
          <Svg src="wasm" className="h-11 w-11 rounded-md" alt="Wasm logo" />
        }
        title="Web Assembly"
        description="Web assembly allows to run low-level code directly in the browser."
        skillLevel={100}
        type="Language"
      />

      <SkillIcon
        title="Python"
        skillLevel={100}
        icon={<Svg src="python" className="h-10 w-10" alt="Python logo" />}
        type="Language"
      />

      <SkillIcon
        title="Gemini API"
        icon={<Svg src="gemini" className="h-10 w-10" alt="Gemini logo" />}
        type="API"
        description="I can use gemini API efficently by using fine tunning and applying Retrieval-augmented generation (RAG) techniques."
      />

      <SkillIcon
        title="lua"
        icon={<Svg src="lua" alt="lua logo" className="h-10 w-10" />}
        skillLevel={3}
        type="Language"
      />

      <SkillIcon
        title="Haskell"
        icon={<Svg src="haskell" alt="haskell logo" className="h-10 w-10" />}
        skillLevel={1}
        type="Language"
      />

      <SkillIcon
        icon={<Svg src="flask" className="h-10 w-10" alt="Flask logo" />}
        title="Flask"
        description="Python web framework for building web applications and APIs. Similar to express.js, fastify and ktor."
        skillLevel={40}
        type="Library-framework"
      />

      <SkillIcon
        icon={
          <Svg
            src="jupyter"
            className="h-10 w-10"
            alt="jupyter notebook logo"
          />
        }
        title="Jupyter Notebook"
        description="Web-based interactive computing environment for huge computational python tasks."
        type="Service"
      />

      <SkillIcon
        icon={<Svg src="numpy" className="h-9 w-9" alt="Numpy logo" />}
        title="Numpy"
        description="Python library for fast array computations than original Python lists."
        skillLevel={100}
        type="Library-framework"
      />

      <SkillIcon
        icon={<Svg src="colab" className="h-10 w-10" alt="Colab logo" />}
        title="Google Colab"
        description="Google Colab is a free Jupyter notebook environment."
        type="Dev tool"
      />

      <SkillIcon
        icon={
          <Svg src="matplotlib" className="h-10 w-10" alt="Matplotlib logo" />
        }
        title="Matplotlib"
        description="Python library for creating graphs and charts."
        skillLevel={10}
        type="Library-framework"
      />

      <SkillIcon
        icon={<Svg src="pandas" className="h-10 w-10" alt="Pandas logo" />}
        title="Pandas"
        description="Python library for data analysis and manipulation."
        skillLevel={5}
        type="Library-framework"
      />

      <SkillIcon
        icon={<Svg src="pytorch" className="h-9 w-9" alt="Pytorch logo" />}
        title="PyTorch"
        description="Most popular machine learning library for Python."
        skillLevel={6}
        type="Library-framework"
      />

      <SkillIcon
        icon={<Svg src="html-5" className="h-10 w-10" alt="HTML5 logo" />}
        title="HTML5"
        description="Standart markup language for creating the structres."
        skillLevel={100}
        type="Language"
      />

      <SkillIcon
        icon={<Svg src="xml" className="h-10 w-10" alt="HTML5 logo" />}
        title="XML"
        description="Standart markup language for creating the structres."
        skillLevel={100}
        type="Language"
      />
      {/* 
            <SkillIcon
                icon={<Svg src='latex' className='w-11 h-11' alt='Latex logo' />}
                title="Latex"
                description="Latex is an advanced markdown language for creating complex and scientific documents."
                skillLevel={4}
                type='Language'
            /> */}

      <SkillIcon
        icon={<Svg src="css-3" className="h-10 w-10" alt="CSS3 logo" />}
        title="CSS3"
        description="Web design language for styling and layouting html pages."
        skillLevel={100}
        type="Language"
      />

      <SkillIcon
        icon={<Svg src="scss" className="h-10 w-10" alt="Scss logo" />}
        title="SCSS"
        skillLevel={90}
        type="Language"
      />

      <SkillIcon
        icon={
          <Svg src="tailwind" className="h-9 w-9" alt="Tailwind CSS logo" />
        }
        title="Tailwind CSS"
        description="My preferred CSS library for building responsive and maintainable user interfaces with utility-first approach."
        skillLevel={100}
        type="Library-framework"
      />

      <SkillIcon
        icon={<Svg src="react" className="h-10 w-10" alt="React logo" />}
        title="React"
        description="My primary web frontend library for building dynamic user interfaces."
        skillLevel={100}
        type="Library-framework"
      />

      <SkillIcon
        icon={<Svg src="vue" className="h-9 w-9" alt="Vue logo" />}
        title="Vue"
        description="Web frontend library for building user interfaces."
        skillLevel={8}
        type="Library-framework"
      />

      {/* 
            <SkillIcon
                icon={<Svg src='pinia' className='w-9 h-9' alt='Vue logo' />}
                title="Pinia"
                description="Pinia is state-management solution for Vue applications."
                skillLevel={6}
                type='Library-framework'
            /> */}

      <SkillIcon
        icon={<Svg src="react" className="h-10 w-10" alt="React logo" />}
        title="React Native"
        description="Simple way to build basic mobile applications with React."
        skillLevel={70}
        type="Library-framework"
      />
      <SkillIcon
        icon={<Svg src="expo" className="h-10 w-10" alt="Expo logo" />}
        title="Expo"
        description="A powerful framework built around React Native that simplifies mobile app development."
        skillLevel={70}
        type="Library-framework"
      />
      <SkillIcon
        icon={
          <Image
            loading="lazy"
            sizes={imageSizes}
            placeholder="blur"
            src={nextjs}
            className="h-10 w-10 rounded-md"
            alt="Next.js logo"
          />
        }
        title="Next.js"
        description="Full-stack React framework for applications with features like server-side rendering, API routes, and optimized performance."
        skillLevel={100}
        type="Library-framework"
      />

      <SkillIcon
        icon={
          <Image
            loading="lazy"
            sizes={imageSizes}
            placeholder="blur"
            src={turbo}
            className="h-10 w-10 rounded-md"
            alt="Turborepo logo"
          />
        }
        title="Turborepo"
        description="Monorepo management tool for JavaScript and TypeScript projects."
        type="Library-framework"
      />

      <SkillIcon
        icon={
          <Svg src="react-query" className="h-10 w-10" alt="React Query logo" />
        }
        title="React Query"
        description="Powerful data-fetching library for React that handles caching, synchronization, and server state management with features like automatic background updates and optimistic updates."
        skillLevel={100}
        type="Library-framework"
      />
      <SkillIcon
        icon={<Svg src="jotai" className="h-10 w-10" alt="Jotai logo" />}
        title="Jotai"
        description="Atomic state management library for React applications focusing on simplicity and performance."
        skillLevel={100}
        type="Library-framework"
      />

      <SkillIcon
        icon={<Svg src="php" className="h-10 w-10" alt="Php logo" />}
        title="PHP"
        skillLevel={3}
        type="Language"
      />

      <SkillIcon
        icon={<Svg src="laravel" className="h-10 w-10" alt="Laravel logo" />}
        title="Laravel"
        skillLevel={2}
        type="Library-framework"
      />

      <SkillIcon
        icon={<Svg src="vitest" className="h-10 w-10" alt="Vitest logo" />}
        title="vitest"
        description="Testing library for Javascript/Typescript applications."
        skillLevel={100}
        type="Library-framework"
      />

      <SkillIcon
        icon={<Svg src="jest" className="h-9 w-9" alt="Jest logo" />}
        title="Jest"
        description="Jest is an unit testing library for Javascript/Typescript applications."
        skillLevel={100}
        type="Library-framework"
      />

      <SkillIcon
        icon={<Svg src="cypress" className="h-9 w-9" alt="Cypress logo" />}
        title="Cypress"
        description="E2E Testing library for Javascript/Typescript applications."
        skillLevel={100}
        type="Library-framework"
      />

      <SkillIcon
        icon={<Svg src="junit" className="h-9 w-9" alt="Junit logo" />}
        title="Junit"
        description="Unit testing library for Java."
        type="Library-framework"
      />

      <SkillIcon
        icon={<Svg src="zustand" className="h-10 w-10" alt="Zustand logo" />}
        title="Zustand"
        description="Simple, fast and scalable state management solution for React applications."
        skillLevel={100}
        type="Library-framework"
      />

      <SkillIcon
        icon={
          <Svg
            src="better-auth"
            className="h-10 w-10 rounded-md"
            alt="Better-auth logo"
          />
        }
        title="Better Auth"
        description="Typesafe, customizable and easy authentication library for Typescript and Javascript applications."
        skillLevel={100}
        type="Library-framework"
      />

      <SkillIcon
        icon={
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-black p-1">
            <Svg src="jwt" className="h-full w-full" alt="JWT logo" />
          </div>
        }
        title="JWT"
        skillLevel={100}
        description="JSON Web Token (JWT) is an encryption method for generating authentication tokens. These tokens can be used to verify the identity of a user and grant access to protected resources."
        type="Other"
      />

      <SkillIcon
        icon={
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-black p-1">
            <Svg src="key" className="h-full w-full" alt="Key logo" />
          </div>
        }
        title="Encryption algorithms I used"
        skillLevel={100}
        description="AES 256, RSA, GCM, TIGER, SHA-256, SHA-512, PADDING, HMAC, PBKDF2, Bcrypt, Argon2, and more."
        type="Other"
      />

      <SkillIcon
        icon={<Svg src="hcaptcha" className="h-10 w-10" alt="HCaptcha logo" />}
        title="HCaptcha"
        description="HCaptcha is a bot protection, human verification, and CAPTCHA service."
        type="Service"
      />

      <SkillIcon
        icon={<Svg src="nodejs" className="h-10 w-10" alt="Node.js logo" />}
        title="Node.js"
        description="Cross-platform JavaScript runtime environment and library"
        skillLevel={100}
        type="Library-framework"
      />
      <SkillIcon
        icon={<Svg src="websocket" className="h-8 w-8" alt="WebSocket logo" />}
        title="WebSocket"
        description="Protocol for full-duplex communication channels over TCP connection."
        skillLevel={100}
        type="API"
      />
      <SkillIcon
        icon={<Svg src="socket" className="h-8 w-8" alt="Socket.io logo" />}
        title="Socket.io"
        description="Library for creating websocket server using node.js."
        skillLevel={100}
        type="API"
      />
      <SkillIcon
        icon={<Svg src="webrtc" className="h-9 w-9" alt="WebRTC logo" />}
        title="WebRTC"
        description="Technology for real-time communication of audio, video, and data in web browsers."
        skillLevel={60}
        type="API"
      />
      <SkillIcon
        icon={
          <Image
            loading="lazy"
            sizes={imageSizes}
            placeholder="blur"
            src={trpc}
            className="h-10 w-10 rounded-md"
            alt="tRPC logo"
          />
        }
        title="tRPC"
        description="End-to-end typesafe API layer, perfect for full-stack TypeScript projects. Best when client and server code live together for maximum type safety."
        skillLevel={100}
        type="API"
      />
      <SkillIcon
        icon={<Svg src="graphql" className="h-10 w-10" alt="Express.js logo" />}
        title="GraphQL"
        description="Query language for APIs, ideal when client and server are separate. Provides type safety data fetching and mutations."
        skillLevel={90}
        type="API"
      />
      <SkillIcon
        icon={<Svg src="express" className="h-10 w-10" alt="Express.js logo" />}
        title="Express.js"
        description="Creating RESTful APIs and web applications using Express.js framework."
        skillLevel={100}
        type="Library-framework"
      />

      <SkillIcon
        icon={<Svg src="hono" className="h-9 w-9" alt="Express.js logo" />}
        title="Hono"
        description="Hono is a simple web framework for Node.js."
        skillLevel={100}
        type="Library-framework"
      />

      <SkillIcon
        icon={<Svg src="fastify" className="h-8 w-8" alt="Fastify logo" />}
        title="Fastify"
        description="Alternative to Express.js. Since Express.js is no longer actively maintained, I prefer using Fastify as my Node.js framework"
        skillLevel={100}
        type="Library-framework"
      />

      <SkillIcon
        icon={
          <Svg src="postgresql" className="h-9 w-9" alt="PostgreSQL logo" />
        }
        title="PostgreSQL"
        description="Powerfull relational database. I'm using it for complex queries, data structres."
        skillLevel={100}
        learning
        type="Database"
      />

      <SkillIcon
        icon={
          <Image
            loading="lazy"
            sizes={imageSizes}
            placeholder="blur"
            src={pgbackrest}
            className="h-9 w-9 rounded-md pr-1"
            alt="Pgbackrest logo"
          />
        }
        learning
        skillLevel={30}
        title="Pgbackrest"
        description="Pgbackrest is a command-line tool for backing up PostgreSQL databases."
        type="Dev tool"
      />

      <SkillIcon
        icon={
          <Image
            loading="lazy"
            sizes={imageSizes}
            placeholder="blur"
            src={clerk}
            className="h-9 w-9 rounded-md pr-1"
            alt="Clerk logo"
          />
        }
        title="Clerk"
        description="Easiest way to add authentication to your app with just a few lines of code."
        type="Service"
      />

      <SkillIcon
        icon={
          <Image
            loading="lazy"
            sizes={imageSizes}
            placeholder="blur"
            src={neon}
            className="h-8 w-8 rounded-md"
            alt="Neon logo"
          />
        }
        title="Neon"
        description="Postgres database provider service."
        type="Service"
      />

      <SkillIcon
        icon={<Svg src="xata" className="h-8 w-8 rounded-md" alt="Xata logo" />}
        title="Xata"
        description="Postgres database provider service."
        type="Service"
      />

      <SkillIcon
        icon={
          <Svg
            src="upstash"
            className="h-8 w-8 rounded-md"
            alt="Upstash logo"
          />
        }
        title="upstash"
        description="I've used their redis service for a while. It's a great service."
        type="Service"
      />

      <SkillIcon
        icon={<Svg src="mysql" className="h-9 w-9" alt="PostgreSQL logo" />}
        title="MySQL"
        description="One of the most popular relational databases."
        skillLevel={90}
        type="Database"
      />

      <SkillIcon
        icon={<Svg src="chroma" className="h-9 w-9" alt="Chroma logo" />}
        title="Chroma"
        description="Vector database for storing and querying vector data. Vector databases are used for machine learning and data analysis."
        skillLevel={50}
        type="Database"
      />

      <SkillIcon
        icon={
          <Image
            loading="lazy"
            sizes={imageSizes}
            placeholder="blur"
            src={milvus}
            className="h-10 w-10 rounded-md"
            alt="Milvus Db logo"
          />
        }
        title="Milvus"
        description="Compared to Chroma, Milvus is more advanced vector database for building complex applications using machine learning, data analysis, search, and recommendation systems."
        skillLevel={70}
        learning
        type="Database"
      />

      <SkillIcon
        icon={<Svg src="sqlite" className="h-9 w-9" alt="Sqlite logo" />}
        title="SQLite"
        description="Light, SQL database engine. I'm usually using for mobile applications."
        skillLevel={100}
        type="Database"
      />
      <SkillIcon
        icon={
          <Image
            loading="lazy"
            sizes={imageSizes}
            placeholder="blur"
            src={drizzle}
            className="h-10 w-10 rounded-md"
            alt="Drizzle ORM logo"
          />
        }
        title="Drizzle ORM"
        description="TypeScript ORM for SQL databases with a focus on type safety and developer experience. I prefer using drizzle instead of Prisma because it's more lightweight."
        skillLevel={100}
        type="Database"
      />
      <SkillIcon
        icon={<Svg src="prisma" className="h-8 w-8" alt="Prisma logo" />}
        title="Prisma"
        description="Modern ORM for Node.js and TypeScript, providing type-safe database access and migrations."
        skillLevel={30}
        type="Database"
      />

      <SkillIcon
        icon={<Svg src="redis" className="h-9 w-9" alt="Redis logo" />}
        title="Redis"
        description="In-memory database for caching, non persistent data storage and real-time data processing."
        skillLevel={90}
        type="Database"
      />

      <SkillIcon
        icon={<Svg src="keydb" className="h-9 w-9" alt="KeyDB logo" />}
        title="KeyDB"
        description="Multithreaded fork of Redis focusing on high performance and lower latency.."
        skillLevel={null}
        type="Database"
      />

      <SkillIcon
        icon={
          <Image
            loading="lazy"
            sizes={imageSizes}
            placeholder="blur"
            src={dragonflydb}
            className="h-12 w-12 rounded-md"
            alt="Dragonflydb logo"
          />
        }
        title="Dragonflydb"
        description="Alternative to Redis and keydb with a focus on performance and simplicity. Dragonflydb claims that it's 25x faster than Redis"
        skillLevel={null}
        type="Database"
      />

      <SkillIcon
        icon={<Svg src="git" className="h-10 w-10" alt="Git logo" />}
        title="Git"
        description="Version control system for tracking changes and collaborating on code projects."
        skillLevel={100}
        type="Tool"
      />

      <SkillIcon
        icon={<Svg src="linux" className="h-10 w-10" alt="Linux logo" />}
        title="Linux"
        description="I hate windows."
        type="Tool"
      />
      <SkillIcon
        icon={<Svg src="blender" className="h-10 w-10" alt="Blender logo" />}
        title="Blender"
        description="Blender is a free 3D modelling software for creating 3D models, animations, and simulations."
        skillLevel={8}
        learning
        type="Dev tool"
      />
      <SkillIcon
        icon={<Svg src="vscode" className="h-10 w-10" alt="VS Code logo" />}
        title="VS Code"
        description="I'm using VS Code for coding web applications."
        skillLevel={null}
        type="Dev tool"
      />
      <SkillIcon
        title="Android studio"
        description="I'm using Android studio for developing kotlin-java applications. It's a powerful IDE with a wide range of features and plugins."
        icon={
          <Svg src="androidstudio" className="h-9 w-9" alt="android studio" />
        }
        skillLevel={null}
        type="Dev tool"
      />
      <SkillIcon
        title="IntelliJ IDEA"
        description="I'm using IntelliJ for developing Kotlin applications."
        icon={<Svg src="intellij" className="h-9 w-9" alt="IntelliJ" />}
        skillLevel={null}
        type="Dev tool"
      />

      <SkillIcon
        title="Pycharm"
        description="I'm using Pycharm for developing Python applications."
        icon={<Svg src="pycharm" className="h-9 w-9" alt="Pycharm" />}
        skillLevel={null}
        type="Dev tool"
      />

      <SkillIcon
        title="Clion"
        description="Clion is a powerfull IDE for developing C/C++ applications."
        icon={<Svg src="clion" className="h-10 w-10" alt="Clion" />}
        skillLevel={null}
        type="Dev tool"
      />

      <SkillIcon
        icon={
          <Svg src="supermaven" className="h-9 w-9" alt="Supermaven logo" />
        }
        title="Supermaven"
        description="AI-powered development assistant for enhanced coding productivity."
        skillLevel={null}
        type="Dev tool"
      />

      <SkillIcon
        icon={<Svg src="figma" className="h-10 w-10" alt="Figma logo" />}
        title="Figma"
        description="Design tool for creating and implementing user interfaces and design systems."
        skillLevel={100}
        type="Tool"
      />
      <SkillIcon
        icon={<Svg src="vite" className="h-9 w-9" alt="Vite logo" />}
        title="Vite"
        description="Next-generation frontend build tool offering lightning-fast development experience."
        type="Library-framework"
      />
      <SkillIcon
        icon={<Svg src="webpack" className="h-9 w-9" alt="Webpack logo" />}
        title="Webpack"
        description="Module bundler for JavaScript applications with extensive configuration options."
        type="Library-framework"
      />
      <SkillIcon
        icon={
          <Image
            loading="lazy"
            sizes={imageSizes}
            placeholder="blur"
            src={coolify}
            className="h-12 w-12 rounded-md"
            alt="Coolify logo"
          />
        }
        title="Coolify"
        description="Self-hosted Heroku/Vercel alternative for deploying applications, databases, and services. Used for managing personal infrastructure and hosting projects."
        type="Tool"
      />
      <SkillIcon
        icon={<Svg src="vercel" className="h-8 w-8" alt="Vercel logo" />}
        title="Vercel"
        description="Platform for deploying and hosting web applications with automatic CI/CD."
        skillLevel={null}
        type="Service"
      />
      <SkillIcon
        icon={
          <Image
            loading="lazy"
            sizes={imageSizes}
            placeholder="blur"
            src={lemonsqueezy}
            className="h-12 w-12 rounded-md"
            alt="Coolify logo"
          />
        }
        title="Lemonsquezzy"
        description="Lemonsquezzy is a payment system similar to Stripe. It's a great way to accept payments online. I'm also trying to use it because of supporting Turkey."
        learning
        skillLevel={3}
        type="Service"
      />
      <SkillIcon
        icon={
          <Image
            loading="lazy"
            sizes={imageSizes}
            placeholder="blur"
            src={hetzner}
            className="h-10 w-10 rounded-md"
            alt="Hetzner logo"
          />
        }
        title="Hetzner"
        description="Hetzner is a cloud hosting provider that offers a range of services including virtual servers, managed databases, and managed DNS. I'm using it for VPS."
        skillLevel={null}
        type="Service"
      />
      <SkillIcon
        icon={
          <Svg src="cloudflare" className="h-10 w-10" alt="Cloudflare logo" />
        }
        title="Cloudflare"
        description="Web infrastructure and security services including CDN, DNS, and DDoS protection."
        skillLevel={null}
        type="Service"
      />
      <SkillIcon
        icon={<Svg src="docker" className="h-10 w-10" alt="Docker logo" />}
        title="Docker"
        description="I'm using Docker for containerizing applications, ensuring consistent development environments, and simplifying deployment processes."
        skillLevel={40}
        type="Tool"
      />
      <SkillIcon
        icon={
          <Svg src="kubernetes" className="h-10 w-10" alt="Kubernetes logo" />
        }
        title="Kubernetes"
        description="Kubernetes is open source, docker ochestration system developed by google. It makes it easy to manage multiple docker containers."
        skillLevel={4}
        learning
        type="Tool"
      />
      <SkillIcon
        icon={<Svg src="nginx" className="h-10 w-10" alt="Docker logo" />}
        title="Nginx"
        skillLevel={40}
        type="Tool"
        description="Nginx is a reverse proxy server that sits in front of servers to handle incoming requests and distribute them to the appropriate servers. It can improve security, performance, and scalability."
        learning
      />

      <SkillIcon
        icon={<Svg src="porkbun" className="h-10 w-10" alt="Porkbun logo" />}
        title="Porkbun"
        description="Domain registrar service for managing and purchasing domain names."
        skillLevel={null}
        type="Service"
      />

      <SkillIcon
        icon={<Svg src="mongodb" className="h-10 w-10" alt="Mangodb logo" />}
        title="Mangodb"
        skillLevel={9}
        type="Database"
      />
    </div>
  )
}
