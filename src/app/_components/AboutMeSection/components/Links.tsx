import { ProfileLink } from './ProfileLink'

export const Links = () => {
    return (
        <div className="flex flex-row items-start flex-wrap gap-2 pb-4">
            <ProfileLink href="https://github.com/404nnotfoundddd" text="GitHub" />
            <ProfileLink
                href="https://www.linkedin.com/in/samet-alpdeger-291a132b5"
                text="LinkedIn"
            />
            <ProfileLink
                href="mailto:sametalpdeger9@gmail.com"
                text="Personal Email: sametalpdeger9@gmail.com"
            />
            <ProfileLink
                href="mailto:contact@pixgu.com"
                text="PIXGU Email: contact@pixgu.com"
            />
            <div className='px-2 py-1 font-[600] text-white bg-yellow-500 rounded-md'>You can hire me now!</div>
        </div>
    )
}