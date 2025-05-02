import { Spinner } from '@/src/components/Spinner'
import dynamic from 'next/dynamic'
import { SkillsCategoryDropdown } from './SkillsCategoryDropdown'

const Content = dynamic(() => import('./SkillsContent').then(m => m.SkillsContent), {
    loading: () => <div className='flex w-full justify-center items-center'>
        <Spinner />
    </div>
})

export const Skills = () => {
    return (
        <div className='flex flex-col gap-5 '>

            <div className='flex flex-col p-2'>
                <h2>My skills</h2>
                <p className='xxs:max-w-[25rem] md:max-w-[26rem] lg:max-w-[30rem]'>Maybe you can think like, I listed everything even if I used just 4 minutes of them but no! I used at least 10 hours of each technology. There is even so much things I don't wanna put in this list.</p>
                <p className='xxs:max-w-[25rem] md:max-w-[26rem] lg:max-w-[30rem]'>Hover or click on the icons to see more information about them. Each border color represents it's type. You can see how much I know about each skill by the skill level. </p>
            </div>
            <div className='flex flex-col gap-5 items-start'>
                <SkillsCategoryDropdown />
                <Content />
            </div>
        </div>
    )
}