import { Svg } from '@/src/components/Svg'
import { SkillIcon } from './SkillIcon'

export const HavntUsedL = () => {
    return (
        <div className='flex flex-col gap-2 items-center'>
            <h2 className='text-center w-[90%]'>Technologies I haven't used for a long time</h2>
            <div className='gap-2 flex flex-row flex-wrap justify-center'>
                <SkillIcon
                    icon={<Svg src='php' className='w-10 h-10' alt='TypeScript logo' />}
                    title="PHP"
                    skillLevel={5}
                    type='low-skill'
                />

                <SkillIcon
                    icon={<Svg src='laravel' className='w-10 h-10' alt='TypeScript logo' />}
                    title="Laravel"
                    skillLevel={4}
                    type='low-skill'
                />

                <SkillIcon
                    icon={<Svg src='mongodb' className='w-10 h-10' alt='TypeScript logo' />}
                    title="Mangodb"
                    skillLevel={20}
                    type='low-skill'

                />

                <SkillIcon
                    icon={<Svg src='scss' className='w-10 h-10' alt='TypeScript logo' />}
                    title="SCSS"
                    skillLevel={90}
                    type='low-skill'
                />

            </div>
        </div >
    )
}