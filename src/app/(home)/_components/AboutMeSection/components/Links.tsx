import { ProfileLink } from './ProfileLink'

export const Links = () => {
    return (
        <div className="flex flex-col rounded-t-md rounded-b-lg">
            <div className='p-3 flex flex-row items-center xxs:justify-start md:justify-center  flex-wrap gap-2 pb-4  bg-[#ffc4003a]'>
                <ProfileLink
                    href="mailto:sametalpdeger9@gmail.com"
                    text="sametalpdeger9@gmail.com"
                />
                <ProfileLink
                    href="https://www.linkedin.com/in/samet-alpdeger-291a132b5"
                    text="LinkedIn"
                />
                <ProfileLink href="https://github.com/404nnotfoundddd" text="GitHub" />
                <div className="flex bg-[#ffffff8a] px-2 py-1 font-[600] rounded-md text-[#00000074]">
                    Discord: 404nnotfoundd
                </div>
            </div>
            <div className='px-2 py-1 font-[600] text-white bg-yellow-500 w-full rounded-b-lg'>Contact me!</div>
        </div>
    )
}