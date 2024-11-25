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
              className={`${inter.className} flex flex-col gap-2 rounded-md bg-gradient-to-r from-[hsla(171,83%,32%,1)] to-[rgba(0,0,0,0.3)] p-3 text-[0.9rem] leading-5 text-[rgba(255,255,255,0.7)] shadow-[0_0px_15px_3px_rgba(0,0,0,0.2)]`}
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
                  href="https://www.linkedin.com/in/samet-alpdeger-291a132b5"
                  target="_blank"
                >
                  LinkedIn
                </Link>

                <Link
                  className="flex bg-[#ffffff8a] p-1 font-[900] text-[#00000074] hover:opacity-60"
                  href="mailto:sametalpdeger9@gmail.com"
                  target="_blank"
                >
                  Email: sametalpdeger9@gmail.com
                </Link>
              </div>
              <div>{`Hi i'm 18 years old and full-stack web developer. I live in turkey. I don't go to school, I just learn from home. I like to create things and learn new things.`}</div>
              <div className="pb-2 pt-5 font-[900]">{`Qualifications:`}</div>
              <div>{`- A minimum of 4 years of experience in the web`}</div>
              <div className="flex flex-col gap-2 py-1 pl-6 leading-4">
                <div className="pb-1 pt-1 font-[900]">{`Languages:`}</div>
                <div className="flex flex-col gap-1">
                  <div>Typescript (2 yrs 9/10)</div>
                  <div>Javascript (4 yrs)</div>
                  <div>HTML (4 yrs 10/10)</div>
                  <div>CSS (4 yrs 10/10)</div>
                  <div>PostgreSQL (1 yrs 4/10)</div>
                  <div>MySQL (1 yrs 5/10)</div>
                </div>
              </div>

              <div className="flex flex-col gap-2 py-1 pl-6 leading-4">
                <div className="pb-1 pt-1 font-[900]">{`Frameworks:`}</div>
                <div className="flex flex-col gap-1">
                  <div>Reactjs (2 yrs 9/10)</div>
                  <div>Nextjs (2 yrs 9/10)</div>
                </div>
              </div>
              <div className="flex flex-col gap-2 py-1 pl-6 leading-4">
                <div className="pb-1 pt-1 font-[900]">{`Packages And Libraries:`}</div>
                <div className="flex flex-col gap-1">
                  <div>NodeJS (4 yrs 7/10)</div>
                  <div>TRPC (2 yrs 8/10)</div>
                  <div>Tailwind (3 yrs 9.5/10)</div>
                  <div>Drizzle ORM (2 yrs 10/10)</div>
                  <div>
                    Nextauth ({`I not used so much because didn't like it`})
                    (8/10)
                  </div>
                  <div>LuciaAuth (10/10)</div>
                  <div>Jotai (10/10)</div>
                  <div>React-Query (10/10)</div>
                  <div>Zustand (10/10)</div>
                  <div>Zod (10/10)</div>
                  <div>React Spring (5/10)</div>
                  <div>Pusher realtime (10/10)</div>
                  <div>Ably realtime (10/10)</div>
                  <div>Soketi (10/10)</div>
                  <div>simple-peer (8/10)</div>
                </div>
              </div>
              <div className="flex flex-col gap-2 py-1 pl-6 leading-4">
                <div className="pb-1 pt-1 font-[900]">{`Third party services i used:`}</div>
                <div className="flex flex-col gap-1">
                  <div>Vercel</div>
                  <div>Planetscale</div>
                  <div>Hetzner</div>
                  <div>Upstash redis</div>
                  <div>Porkbun</div>
                  <div>Neon database</div>
                  <div>XATA database</div>
                  <div>Pusher realtime</div>
                  <div>Ably realtime</div>
                  <div>Maxmind</div>
                </div>
              </div>
              <div className="pb-2 pt-5 font-[900]">{`Technologies that I have had experience with in the past but don't remember now`}</div>
              <div className="flex flex-col gap-1">
                <div>{`PHP - Because I don't like PHP`}</div>
                <div>Laravel - {`I think it's a bad framework`}</div>
                <div>{`MangoDB - I don't like it`}</div>
                <div>Mangoose - same</div>
                <div>Prisma ORM - SO SLOW</div>
              </div>
            </div>
          }
          hobbies={
            <div className="w-full">
              <div
                className={`${inter.className} flex flex-col gap-1 rounded-md bg-gradient-to-r  from-[hsla(171,83%,32%,1)] to-[rgba(0,0,0,0.3)]  p-3 leading-5 text-[rgba(255,255,255,0.7)] shadow-[0_0px_15px_3px_rgba(0,0,0,0.2)]`}
              >
                <div className="pb-2 pt-2 font-[900]">{`My Hobbies:`}</div>
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
