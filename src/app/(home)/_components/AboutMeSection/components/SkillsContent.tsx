import { Svg } from '@/src/components/Svg'
import { SkillIcon } from './SkillIcon'
import Image from 'next/image'
import drizzle from '@/png/drizzle.png'
import nextjs from '@/png/nextjs.png'
import trpc from '@/png/trpc.png'
import kmp from '@/png/kmp.png'
import ktor from '@/png/ktor.png'
// import koin from '@/png/koin.png'
import raylib from '@/png/raylib.png'
import turbo from '@/png/turbo.png'
import clerk from '@/webp/clerk.webp'
import hetzner from '@/webp/hetzner.webp'
import neon from '@/png/neon.png'
import dragonflydb from '@/png/dragonflydb.png'
import sqldelight from '@/png/sqldelight.png'
import pydantic from '@/png/pydantic.png'
import milvus from '@/png/milvus.png'
import openrouter from '@/png/openrouter.png'

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
        skillLevel={100}
        type="Library-framework"
      />

      <SkillIcon
        title="Jetpack Compose"
        description="Jetpack compose is a modern UI library for building native java/kotlin applications."
        icon={
          <Svg src="jetpackcompose" alt="jetpack compose" className="h-9 w-9" />
        }
        skillLevel={100}
        type="Library-framework"
      />

      <SkillIcon
        title="Java"
        description="Java is a popular programming language for building enterprise applications. It is a high-level, class-based, object-oriented language. Java is first designed to be make easy to develop platform-independent application GUIs."
        hideWhenShrinked
        icon={<Svg src="java" alt="Java" className="h-10 w-10" />}
        skillLevel={40}
        type="Language"
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
        title="Webflow"
        icon={<Svg src="webflow" className="h-8 w-8" alt="Webflow logo" />}
        type="Tool"
        description="Webflow is a website builder for creating basic, designer-friendly websites. It is a great tool for beginners and small businesses."
        skillLevel={100}
        learning
      />

      <SkillIcon
        title="Client-first"
        icon={<Svg src="client-first" className="h-9 w-9" alt="Client-first logo" />}
        type="Other"
        description='Client-first is a style guide for building Webflow applications.'
        skillLevel={100}
        learning
      />

      <SkillIcon
        title="GSAP"
        icon={<Svg src="gsap" className="h-10 w-10" alt="GSAP logo" />}
        type="Library-framework"
        learning
        description="GSAP is a highly customizable Javascript animation library."
        skillLevel={80}
      />

      <SkillIcon
        title="Three.js"
        icon={<Svg src="threejs" className="h-9 w-9" alt="Three.js logo" />}
        type="Library-framework"
        description="Three.js is a popular Javascript library for creating 3D scenes using html canvas. Its simple, basic, and easy to use."
        skillLevel={38}
      />

      {/* <SkillIcon
        title="WebGL (GLSL)"
        icon={<Svg src="webgl" className="h-10 w-10" alt="Webgl logo" />}
        type="API"
        learning
        hideWhenShrinked
        skillLevel={1}
      />

      <SkillIcon
        title="GLSL"
        icon={<Svg src="opengl" className="h-10 w-10" alt="Opengl logo" />}
        type="Language"
        learning
        hideWhenShrinked
        skillLevel={2}
      /> */}

      {/* <SkillIcon
        title="JNI (Java Native Interface)"
        description="Java Native Interface is a way to call native code from Java. It allows you to write code in C, C++ and call it from Java."
        icon={<Svg src="java" alt="Java" className="h-10 w-10" />}
        skillLevel={35}
        learning
        type="API"
      /> */}

      {/* <SkillIcon
        icon={
          <Image
            loading="lazy"
            sizes={imageSizes}
            placeholder="blur"
            src={koin}
            className="h-10 w-10 rounded-md"
            alt="Koin"
          />
        }
        hideWhenShrinked
        title="Koin"
        description="Simple way to handle dependency injection in kotlin and kmp."
        skillLevel={100}
        type="Library-framework"
      /> */}

      {/* <SkillIcon
        title="Dagger hilt"
        icon={<Svg src="android" className="h-10 w-10" alt="Android logo" />}
        description="Dependency injection library for kotlin and android."
        skillLevel={70}
        hideWhenShrinked
        type="Library-framework"
      /> */}

      {/* <SkillIcon
        title="Android NDK"
        icon={<Svg src="android" className="h-10 w-10" alt="Android logo" />}
        description="Android Native Development Kit (NDK) is a set of tools that allows you to use C and C++ code with Android."
        skillLevel={1}
        hideWhenShrinked
        type="Other"
      /> */}

      <SkillIcon
        title="Room database"
        hideWhenShrinked
        icon={<Svg src="android" className="h-10 w-10" alt="Android logo" />}
        description="SQLite database ORM library for Android developed by Google."
        skillLevel={0}
        forgotButCanRelearnIn="2 days"
        reachedSkillLevel={50}
        type="Database"
      />

      <SkillIcon
        title="SQLDelight"
        hideWhenShrinked
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
        description="SQLDelight is a type-safe SQL library for Kotlin. It does the opposite of ORMs does. Instead of generating SQL from your code models, it generates type-safe kotlin models from your SQL code."
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
        icon={<Svg src="gradle" className="h-10 w-10" alt="Gradle logo" />}
        title="Gradle"
        description="Package manager and build tool for Java and Kotlin projects."
        hideWhenShrinked
        type="Tool"
      />

      <SkillIcon
        icon={<Svg src="maven" className="h-10 w-10" alt="Maven logo" />}
        title="Maven"
        description="Package manager and build tool for Java and Kotlin projects."
        hideWhenShrinked
        type="Tool"
      />

      <SkillIcon
        icon={<Svg src="npm" className="h-10 w-10" alt="Npm logo" />}
        title="Npm"
        description="Package manager for JavaScript and TypeScript projects."
        hideWhenShrinked
        type="Tool"
      />

      <SkillIcon
        icon={<Svg src="c" className="h-10 w-10" alt="C logo" />}
        title="C"
        description="Mother of most high-level programming languages."
        skillLevel={65}
        learning
        type="Language"
      />

      {/* <SkillIcon
        icon={<Svg src="c++" className="h-10 w-10" alt="C logo" />}
        title="C++"
        skillLevel={2}
        learning
        type="Language"
      /> */}

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
        learning
        hideWhenShrinked
        title="Raylib"
        description="Raylib is a simple and easy-to-use library to enjoy videogames programming."
        skillLevel={44}
        type="Library-framework"
      />

      <SkillIcon
        icon={<Svg src="meson" className="h-12 w-12" alt="Meson logo" />}
        title="meson"
        hideWhenShrinked
        description="Meson is a user friendly build automation tool to automate the build process of C and C++ projects."
        skillLevel={32}
        type="Tool"
      />

      <SkillIcon
        icon={
          <Svg src="wasm" className="h-11 w-11 rounded-md" alt="Wasm logo" />
        }
        hideWhenShrinked
        title="Web Assembly"
        description="Web assembly allows to run low-level code directly in the browser."
        skillLevel={20}
        reachedSkillLevel={100}
        forgotButCanRelearnIn="1 day"
        type="Language"
      />

      <SkillIcon
        title="Python"
        skillLevel={100}
        description="Very basic, high-level, not-scalable, educational programming language."
        icon={<Svg src="python" className="h-10 w-10" alt="Python logo" />}
        type="Language"
      />

      <SkillIcon
        title="Pydantic"
        skillLevel={100}
        hideWhenShrinked
        icon={
          <Image
            loading="lazy"
            sizes={imageSizes}
            placeholder="blur"
            src={pydantic}
            className="h-12 w-12 rounded-md"
            alt="Pydantic logo"
          />
        }
        type="Library-framework"
      />

      <SkillIcon
        title="Gemini API"
        icon={<Svg src="gemini" className="h-10 w-10" alt="Gemini logo" />}
        type="API"
        hideWhenShrinked
        description="I can use gemini API efficently by using fine tunning and applying Retrieval-augmented generation (RAG) techniques."
      />

      <SkillIcon
        title="Openrouter"
        icon={
          <Image
            loading="lazy"
            sizes={imageSizes}
            placeholder="blur"
            src={openrouter}
            className="h-10 w-10 rounded-md"
            alt="Operouter logo"
          />
        }
        type="API"
        description="Openrouter is a very good API service which gives you accesss to all the AI models with one API call. Without openrouter, its really hard to maintain multiple Cloud service providers to use different models at the same time."
        skillLevel={100}
      />

      <SkillIcon
        icon={<Svg src="flask" className="h-10 w-10" alt="Flask logo" />}
        title="Flask"
        description="Python web framework for building web applications and APIs. Similar to express.js, fastify and ktor."
        skillLevel={80}
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
        hideWhenShrinked
        title="Jupyter Notebook"
        description="Web-based interactive computing environment for huge computational python tasks."
        type="Service"
      />

      <SkillIcon
        icon={<Svg src="colab" className="h-10 w-10" alt="Colab logo" />}
        title="Google Colab"
        hideWhenShrinked
        description="Google Colab is a free Jupyter notebook environment."
        type="Dev tool"
      />

      <SkillIcon
        icon={<Svg src="html-5" className="h-10 w-10" alt="HTML5 logo" />}
        title="HTML5"
        description="Standart markup language for creating the structres."
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
        skillLevel={10}
        forgotButCanRelearnIn="4 days"
        reachedSkillLevel={100}
        type="Library-framework"
      />
      <SkillIcon
        icon={<Svg src="expo" className="h-10 w-10" alt="Expo logo" />}
        title="Expo"
        description="A powerful framework built around React Native that simplifies mobile app development."
        skillLevel={10}
        forgotButCanRelearnIn="4 days"
        reachedSkillLevel={100}
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
        hideWhenShrinked
        skillLevel={30}
        forgotButCanRelearnIn="3 hours"
        reachedSkillLevel={100}
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
        hideWhenShrinked
        description="Atomic state management library for React applications focusing on simplicity and performance."
        skillLevel={100}
        type="Library-framework"
      />

      <SkillIcon
        icon={<Svg src="vitest" className="h-10 w-10" alt="Vitest logo" />}
        title="vitest"
        hideWhenShrinked
        description="Testing library for Javascript/Typescript applications."
        skillLevel={100}
        type="Library-framework"
      />

      <SkillIcon
        icon={<Svg src="jest" className="h-9 w-9" alt="Jest logo" />}
        title="Jest"
        hideWhenShrinked
        description="Jest is an unit testing library for Javascript/Typescript applications."
        skillLevel={100}
        type="Library-framework"
      />

      <SkillIcon
        icon={<Svg src="cypress" className="h-9 w-9" alt="Cypress logo" />}
        title="Cypress"
        hideWhenShrinked
        description="E2E Testing library for Javascript/Typescript applications."
        skillLevel={5}
        forgotButCanRelearnIn="5 hours"
        reachedSkillLevel={100}
        type="Library-framework"
      />

      <SkillIcon
        icon={<Svg src="zustand" className="h-10 w-10" alt="Zustand logo" />}
        title="Zustand"
        hideWhenShrinked
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
        hideWhenShrinked
        description="HCaptcha is a bot protection, human verification, and CAPTCHA service."
        type="Service"
      />

      <SkillIcon
        icon={<Svg src="nodejs" className="h-10 w-10" alt="Node.js logo" />}
        title="Node.js"
        description="Node.js is a Javascript backend runtime for building server-side applications."
        skillLevel={100}
        type="Library-framework"
      />
      <SkillIcon
        icon={<Svg src="websocket" className="h-8 w-8" alt="WebSocket logo" />}
        title="WebSocket"
        description="Protocol for full-duplex communication channels over TCP connection."
        skillLevel={100}
        hideWhenShrinked
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
        hideWhenShrinked
        description="Hono is a simple web framework for Node.js."
        skillLevel={100}
        type="Library-framework"
      />

      <SkillIcon
        icon={<Svg src="fastify" className="h-8 w-8" alt="Fastify logo" />}
        title="Fastify"
        hideWhenShrinked
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
        type="Database"
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
        hideWhenShrinked
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
        hideWhenShrinked
        title="Neon"
        description="Postgres database provider service."
        type="Service"
      />

      <SkillIcon
        icon={<Svg src="xata" className="h-8 w-8 rounded-md" alt="Xata logo" />}
        title="Xata"
        hideWhenShrinked
        description="Postgres database provider service."
        type="Service"
      />
      <SkillIcon
        icon={<Svg src="vercel" className="h-8 w-8" alt="Vercel logo" />}
        title="Vercel"
        hideWhenShrinked
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
            src={hetzner}
            className="h-10 w-10 rounded-md"
            alt="Hetzner logo"
          />
        }
        hideWhenShrinked
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
        hideWhenShrinked
        description="Web infrastructure and security services including CDN, DNS, and DDoS protection."
        skillLevel={null}
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
        hideWhenShrinked
        title="upstash"
        description="I've used their redis service for a while. It's a great service."
        type="Service"
      />

      <SkillIcon
        icon={<Svg src="mysql" className="h-9 w-9" alt="PostgreSQL logo" />}
        title="MySQL"
        hideWhenShrinked
        description="One of the most popular relational databases."
        skillLevel={40}
        type="Database"
      />

      <SkillIcon
        icon={<Svg src="chroma" className="h-9 w-9" alt="Chroma logo" />}
        title="Chroma"
        description="Vector database for storing and querying vector data. Vector databases are used for machine learning and data analysis."
        hideWhenShrinked
        skillLevel={60}
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
        skillLevel={10}
        reachedSkillLevel={100}
        useReachedSkillLevelAsOpacityFactorFirst={false}
        forgotButCanRelearnIn="4 days"
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
        hideWhenShrinked
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
        hideWhenShrinked
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
        hideWhenShrinked
        description="I hate windows."
        type="Tool"
      />
      <SkillIcon
        icon={<Svg src="blender" className="h-10 w-10" alt="Blender logo" />}
        title="Blender"
        description="Blender is a free 3D modelling software for creating 3D models, animations, and simulations."
        skillLevel={8}
        hideWhenShrinked
        type="Dev tool"
      />

	 <SkillIcon 
	 	icon={<Svg src="vim" className="h-10 w-10" alt="Vim Logo" />}
		title="Vim"
		description="Vim is a terminal based highly advanced file editor. It really speeds up my coding speed because of its super useful keybindings and performance."
		skillLevel={6}
		hideWhenShrinked
		type="Dev tool"
		learning

	  />


	
		

      <SkillIcon
        icon={<Svg src="vscode" className="h-10 w-10" alt="VS Code logo" />}
        title="VS Code"
        description="I'm using VS Code for coding web applications."
        skillLevel={null}
        hideWhenShrinked
        type="Dev tool"
      />
      <SkillIcon
        title="Android studio"
        description="I'm using Android studio for developing kotlin-java applications. It's a powerful IDE with a wide range of features and plugins."
        icon={
          <Svg src="androidstudio" className="h-9 w-9" alt="android studio" />
        }
        hideWhenShrinked
        skillLevel={null}
        type="Dev tool"
      />
      <SkillIcon
        title="IntelliJ IDEA"
        description="I'm using IntelliJ for developing Kotlin applications."
        icon={<Svg src="intellij" className="h-9 w-9" alt="IntelliJ" />}
        hideWhenShrinked
        skillLevel={null}
        type="Dev tool"
      />

      <SkillIcon
        title="Pycharm"
        description="I'm using Pycharm for developing Python applications."
        icon={<Svg src="pycharm" className="h-9 w-9" alt="Pycharm" />}
        skillLevel={null}
        hideWhenShrinked
        type="Dev tool"
      />

      <SkillIcon
        title="Clion"
        description="Clion is a powerfull IDE for developing C/C++ applications."
        icon={<Svg src="clion" className="h-10 w-10" alt="Clion" />}
        skillLevel={null}
        hideWhenShrinked
        type="Dev tool"
      />

      <SkillIcon
        icon={
          <Svg src="supermaven" className="h-9 w-9" alt="Supermaven logo" />
        }
        title="Supermaven"
        description="AI-powered development assistant for enhanced coding productivity."
        skillLevel={null}
        hideWhenShrinked
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
        hideWhenShrinked
      />
      <SkillIcon
        icon={<Svg src="webpack" className="h-9 w-9" alt="Webpack logo" />}
        title="Webpack"
        description="Module bundler for JavaScript applications with extensive configuration options."
        type="Library-framework"
        hideWhenShrinked
      />

      <SkillIcon
        icon={<Svg src="nginx" className="h-10 w-10" alt="Docker logo" />}
        title="Nginx"
        skillLevel={40}
        type="Tool"
        description="Nginx is a reverse proxy server that sits in front of servers to handle incoming requests and distribute them to the appropriate servers. It can improve security, performance, and scalability."
      />

      <SkillIcon
        icon={<Svg src="docker" className="h-10 w-10" alt="Docker logo" />}
        title="Docker"
        description="I'm using Docker for containerizing applications, ensuring consistent development environments, and simplifying deployment processes."
        skillLevel={100}
        type="Tool"
      />

      <SkillIcon
        icon={
          <Svg src="kubernetes" className="h-10 w-10" alt="Kubernetes logo" />
        }
        title="Kubernetes"
        description="Kubernetes is open source, docker ochestration system developed by google. It makes it easy to manage multiple docker containers."
        hideWhenShrinked
        skillLevel={0}
        reachedSkillLevel={4}
        type="Tool"
      />

      <SkillIcon
        icon={<Svg src="clang" className="h-12 w-12" alt="C logo" />}
        title="Clang"
        reachedSkillLevel={5}
        skillLevel={0}
        hideWhenShrinked
        type="Tool"
      />

      <SkillIcon
        icon={<Svg src="cmake" className="h-10 w-10" alt="C logo" />}
        title="CMake"
        skillLevel={0}
        forgotButCanRelearnIn="2 weeks"
        useReachedSkillLevelAsOpacityFactorFirst={false}
        reachedSkillLevel={15}
        hideWhenShrinked
        type="Tool"
      />
      {/* 
      <SkillIcon
        title="Godot"
        hideWhenShrinked
        icon={<Svg src="godot" alt="Godot logo" className="h-10 w-10" />}
        skillLevel={1}
        type="Other"
      /> */}

      <SkillIcon
        icon={<Svg src="php" className="h-10 w-10" alt="Php logo" />}
        title="PHP"
        skillLevel={0}
        reachedSkillLevel={100}
        useReachedSkillLevelAsOpacityFactorFirst={false}
        hideWhenShrinked
        type="Language"
      />

      <SkillIcon
        icon={<Svg src="laravel" className="h-10 w-10" alt="Laravel logo" />}
        title="Laravel"
        skillLevel={0}
        reachedSkillLevel={100}
        useReachedSkillLevelAsOpacityFactorFirst={false}
        hideWhenShrinked
        type="Library-framework"
      />

      <SkillIcon
        icon={<Svg src="pytorch" className="h-9 w-9" alt="Pytorch logo" />}
        title="PyTorch"
        description="Most popular machine learning library for Python. I tried to learn it for 20 hours or something but my math skills are not good enough for pytorch. Maybe I'll try it again later."
        reachedSkillLevel={7}
        skillLevel={0}
        hideWhenShrinked
        type="Library-framework"
      />

      <SkillIcon
        icon={<Svg src="spring" className="h-9 w-9" alt="Spring logo" />}
        title="Spring IoC Container"
        description="Spring IoC is a way to manage lifecycle and dependencies of objects in Java applications."
        skillLevel={0}
        reachedSkillLevel={50}
        forgotButCanRelearnIn="7 days"
        hideWhenShrinked
        type="Library-framework"
      />

      <SkillIcon
        icon={<Svg src="spring" className="h-9 w-9" alt="Spring logo" />}
        title="Spring Boot"
        description="Spring Boot is a Java based backend framework. Allows us to build fast and scalable backend applications using IoC container and other features."
        skillLevel={0}
        reachedSkillLevel={10}
        hideWhenShrinked
        type="Library-framework"
      />

      <SkillIcon
        icon={<Svg src="rabbitmq" className="h-9 w-9" alt="RabbitMQ logo" />}
        title="RabbitMQ"
        reachedSkillLevel={30}
        skillLevel={5}
        forgotButCanRelearnIn="3 days"
        hideWhenShrinked
        type="Library-framework"
      />

      <SkillIcon
        icon={
          <Svg src="makefile" className="h-12 w-12 pl-1" alt="Makefile logo" />
        }
        title="Makefile"
        description="Makefile is a build automation tool to automate the build process of C and C++ projects."
        reachedSkillLevel={12}
        skillLevel={0}
        forgotButCanRelearnIn="4 days"
        useReachedSkillLevelAsOpacityFactorFirst={false}
        hideWhenShrinked
        type="Language"
      />

      <SkillIcon
        title="lua"
        icon={<Svg src="lua" alt="lua logo" className="h-10 w-10" />}
        reachedSkillLevel={8}
        skillLevel={0}
        forgotButCanRelearnIn="7 days"
        hideWhenShrinked
        type="Language"
      />

      <SkillIcon
        title="Haskell"
        icon={<Svg src="haskell" alt="haskell logo" className="h-10 w-10" />}
        skillLevel={0}
        reachedSkillLevel={2}
        hideWhenShrinked
        type="Language"
      />

      <SkillIcon
        icon={<Svg src="mongodb" className="h-10 w-10" alt="Mangodb logo" />}
        title="Mangodb"
        skillLevel={9}
        reachedSkillLevel={100}
        useReachedSkillLevelAsOpacityFactorFirst={false}
        hideWhenShrinked
        type="Database"
      />
    </div>
  )
}
