import { Inter } from 'next/font/google'
import HelloSection from './_components/HelloSection'
import AboutMeSection from './_components/AboutMeSection'
import pfp from '@/jpg/pfp.jpeg'
import ProjectsSection from './_components/ProjectsSection'
import Link from 'next/link'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400'],
})

const Home = () => {
  return (
    <div className="">
      <main
        style={{
          backgroundColor: 'hsla(152,100%,50%,1)',
          backgroundImage:
            'radial-gradient(at 40% 20%, hsla(188,100%,74%,1) 0px, transparent 50%),radial-gradient(at 80% 0%, hsla(189,100%,56%,1) 0px, transparent 50%),radial-gradient(at 0% 100%, hsla(309,100%,75%,1) 0px, transparent 50%),radial-gradient(at 64% 4%, hsla(61,100%,76%,1) 0px, transparent 50%),radial-gradient(at 0% 100%, hsla(178,100%,50%,1) 0px, transparent 50%),radial-gradient(at 100% 95%, hsla(200,100%,70%,1) 0px, transparent 50%),radial-gradient(at 0% 0%, hsla(113,100%,79%,1) 0px, transparent 50%)',
        }}
        className="flex h-full w-full flex-col"
      >
        <HelloSection />
        <AboutMeSection
          name="I'm 404"
          description={
            <div
              className={`${inter.className} flex flex-col gap-2 rounded-md bg-gradient-to-r from-[hsla(171,83%,32%,1)] to-[rgba(0,0,0,0.3)] p-3 leading-5 text-[rgba(255,255,255,0.7)] shadow-[0_0px_15px_3px_rgba(0,0,0,0.2)]`}
            >
              <div className="flex flex-row items-start gap-2 pb-4">
                <Link
                  className="flex bg-[#ffffff8a] p-1 font-[900] text-[#00000074] hover:opacity-60"
                  href="https://github.com/404nnotfoundddd"
                >
                  GitHub
                </Link>
                <Link
                  className="flex bg-[#ffffff8a] p-1 font-[900] text-[#00000074] hover:opacity-60"
                  href="https://www.linkedin.com/in/samet-alpdeger-291a132b5/"
                >
                  Linkledin
                </Link>
              </div>

              <div>{`Hi i'm 18 years old and full-stack web developer. I live in turkey. I don't go to school, I just learn from home.`}</div>
              <div className="pb-2 pt-5 font-[900]">{`Qualifications:`}</div>
              <div>{`- A minimum of 2-3 years of experience in the web`}</div>
              <div>{`- HTML, CSS, Reactjs, Nextjs Typescript, TRPC api Tailwind, Prisma, Drizzle, Nextauth, LuciaAuth, Jotai, Zod, PostgreSQL, MySQL, experience`}</div>
              <div className="pb-2 pt-5 font-[900]">{`I'm learning now:`}</div>
              <div>{`- React spring, pusher websockets`}</div>
              <div className="pb-2 pt-5 font-[900]">{`Technologies that I have had experience with in the past but don't remember now`}</div>
              <div>{`- PHP, Laravel, MangoDB, Mangoose`}</div>
            </div>
          }
          hobbies={
            <div className="w-full">
              <div
                className={`${inter.className} flex flex-col gap-1 rounded-md bg-gradient-to-r  from-[hsla(171,83%,32%,1)] to-[rgba(0,0,0,0.3)]  p-3 leading-5 text-[rgba(255,255,255,0.7)] shadow-[0_0px_15px_3px_rgba(0,0,0,0.2)]`}
              >
                <div className="pb-2 pt-2 font-[900]">{`My Hobbies:`}</div>
                <div>{`- Watching film`}</div>
                <div>{`- Playing video games`}</div>
                <div>{`- Learning new things`}</div>
                <div>{`- Reading book`}</div>
                <div>{`- Drawing picture and so on :P`}</div>
              </div>
            </div>
          }
          pfp="https://avatars.githubusercontent.com/u/145053429?v=4"
        />
        <ProjectsSection />
      </main>
    </div>
  )
}

export default Home
