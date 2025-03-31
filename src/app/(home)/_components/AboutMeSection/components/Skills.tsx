import { Spinner } from '@/src/components/Spinner'
import dynamic from 'next/dynamic'

const Content = dynamic(() => import('./SkillsContent').then(m => m.SkillsContent), {
    loading: () => <div className='flex w-full justify-center items-center'>
        <Spinner />
    </div>
})

export const Skills = () => {
    return (
        <div className='flex flex-col gap-2 items-center'>

            <div className='flex flex-col items-center'>
                <h2 className='text-center px-4'>My skills</h2>
                <p className='text-center xxs:max-w-[18rem] md:max-w-[23rem] lg:max-w-[30rem]'>Hover or click on the icons to see more information about them. Each border color represents it's type.</p>
            </div>
            <Content />
        </div>
    )
}