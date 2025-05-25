import { Svg } from '@/src/components/Svg'
import { ProfileLink } from './ProfileLink'
import { constants } from '@/src/constants'

export const Links = () => {
    return (
        <div className='flex rounded-lg text-[0.8rem] flex-col items-center justify-center text-[white]  flex-wrap gap-4'>
            <div className="flex bg-[#f3be00] drop-shadow-[0_0px_4px_#f3be00d7] px-2 py-1 font-[600] rounded-md  ">
                Open to work
            </div>

            <div className='flex rounded-lg text-[0.8rem] flex-row items-center justify-center text-[white]  flex-wrap gap-3'>
                <ProfileLink
                    href="mailto:sametalpdeger9@gmail.com"
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
