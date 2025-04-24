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

            <div className='flex flex-col items-center'>
                <h2 className='text-center px-4'>My skills</h2>
                <p className='text-center xxs:max-w-[25rem] md:max-w-[26rem] lg:max-w-[30rem]'>Hover or click on the icons to see more information about them. Each border color represents it's type. You can see how much I know about each skill by the skill level.</p>
            </div>
            <div className='flex flex-col gap-5 items-center justify-center'>
                <SkillsCategoryDropdown />
                <Content />
            </div>
        </div>
    )
}