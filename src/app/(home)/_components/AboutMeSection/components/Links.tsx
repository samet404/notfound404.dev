import { Svg } from '@/src/components/Svg'
import { ProfileLink } from './ProfileLink'

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
                <ProfileLink href="tel:+90505-502-0559">
                    <Svg src='phone' className='w-7 h-7' alt='stackoverflow logo' />
                </ProfileLink>
                |
                <ProfileLink href="https://github.com/404nnotfoundddd">
                    <Svg src='github' className='w-6 h-6' alt='github logo' />
                </ProfileLink>
                |
                <ProfileLink
                    href="https://www.linkedin.com/in/samet-alpdeger-291a132b5"
                >
                    <Svg src='linkedin' className='w-6 h-6' alt='linkedin logo' />
                </ProfileLink>
                |
                <ProfileLink href="https://stackoverflow.com/users/22740544/404nnotfoundd">
                    <Svg src='stack-overflow' className='w-7 h-7' alt='stackoverflow logo' />
                </ProfileLink>
                |
                <ProfileLink href="https://www.upwork.com/freelancers/~01627b457e8f4797b7">
                    <Svg src='upwork' className='w-7 h-7' alt='stackoverflow logo' />
                </ProfileLink>
            </div>
        </div>
    )
}