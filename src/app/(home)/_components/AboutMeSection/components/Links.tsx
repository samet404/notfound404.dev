import { Svg } from '@/src/components/Svg'
import { ProfileLink } from './ProfileLink'
import { constants } from '@/src/constants'
import Link from 'next/link'
import codepen from '@/png/codepen.png'
import Image from 'next/image'

export const Links = () => {
  return (
    <div className="flex flex-col flex-wrap items-center justify-center gap-4 rounded-lg  text-[0.8rem] text-[white]">
      <div className="flex flex-row flex-wrap justify-center gap-3">
        {/*
        bg-[#f3be00]
        drop-shadow-[0_0px_4px_#f3be00d7]
        */}
        <div className="flex rounded-md bg-[#ef45d3d7]  px-2 py-1 font-[600]  drop-shadow-[0_0px_24px_#ff45e0d7] ">
          Working full-time
        </div>

        <Link
          href="mailto:hi@notfound404.dev"
          className="flex rounded-md bg-pink-500 px-2 py-1 font-[600] drop-shadow-[0_0px_4px_#e73c99] duration-200 hover:opacity-60  "
        >
          Click to send an mail
        </Link>
      </div>

      <div className="flex flex-row flex-wrap items-center justify-center gap-3 rounded-lg px-10  text-[0.8rem] text-[white]">
        <ProfileLink href="mailto:hi@notfound404.dev">
          <Svg src="mail" className="h-7 w-7" alt="email logo" />
        </ProfileLink>
        <Divider />
        <ProfileLink href={`https://github.com/${constants.githubUsername}`}>
          <Svg src="github" className="h-6 w-6" alt="github logo" />
        </ProfileLink>
        <Divider />
        <ProfileLink href="https://stackoverflow.com/users/22740544/404nnotfoundd">
          <Svg
            src="stack-overflow"
            className="h-7 w-7"
            alt="stackoverflow logo"
          />
        </ProfileLink>
        <Divider />
        <ProfileLink href="https://codepen.io/samet404">
          <Image
            src={codepen}
            placeholder="blur"
            sizes="calc(0.7vw + 26px)"
            className="h-7 w-7"
            alt="codepen"
          />
        </ProfileLink>
        <Divider />
        <ProfileLink href="https://leetcode.com/u/samet404/">
          <Svg src="leetcode" className="h-7 w-7" alt="stackoverflow logo" />
        </ProfileLink>
        <Divider />
        <ProfileLink href="https://x.com/404nnotfounddd">
          <Svg src="xtwitter" className="h-6 w-6" alt="stackoverflow logo" />
        </ProfileLink>
        <Divider />
        <ProfileLink href="https://www.youtube.com/@404nnotfoundd">
          <Svg src="youtube" className="h-8 w-8" alt="youtube logo" />
        </ProfileLink>
      </div>
    </div>
  )
}

const Divider = () => {
  return <span className="hidden md:block">|</span>
}
