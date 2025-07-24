import { Svg } from '@/src/components/Svg'
import { ProfileLink } from './ProfileLink'
import { constants } from '@/src/constants'
import Link from 'next/link'

export const Links = () => {
    return (
        <div className='flex rounded-lg text-[0.8rem] flex-col items-center justify-center text-[white]  flex-wrap gap-4'>
            <div className='flex flex-row flex-wrap justify-center gap-3'>
            <div className="flex bg-[#f3be00] drop-shadow-[0_0px_4px_#f3be00d7] px-2 py-1 font-[600] rounded-md  ">
                Open to work
            </div>

            <Link href="mailto:hi@notfound404.dev" className="flex hover:opacity-60 duration-200 bg-pink-500 drop-shadow-[0_0px_4px_#e73c99] px-2 py-1 font-[600] rounded-md  ">
                Click to send an mail
            </Link>
            </div>


            <div className='flex rounded-lg text-[0.8rem] flex-row items-center justify-center text-[white]  flex-wrap gap-3'>
                <ProfileLink
                    href="mailto:hi@notfound404.dev"
                >
                    <Svg src='mail' className='w-7 h-7' alt='email logo' />
                </ProfileLink>
                |
                <ProfileLink href={`https://github.com/${constants.githubUsername}`}>
                    <Svg src='github' className='w-6 h-6' alt='github logo' />
                </ProfileLink>
                |
                <ProfileLink href="https://stackoverflow.com/users/22740544/404nnotfoundd">
                    <Svg src='stack-overflow' className='w-7 h-7' alt='stackoverflow logo' />
                </ProfileLink>
            </div>
        </div>
    )
}
