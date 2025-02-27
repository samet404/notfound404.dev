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
                />

                <SkillIcon
                    icon={<Svg src='laravel' className='w-10 h-10' alt='TypeScript logo' />}
                    title="Laravel"
                />

                <SkillIcon
                    icon={<Svg src='mongodb' className='w-10 h-10' alt='TypeScript logo' />}
                    title="Mangodb"
                />

                <SkillIcon
                    icon={<Svg src='scss' className='w-10 h-10' alt='TypeScript logo' />}
                    title="SCSS"
                />

            </div>
        </div >
    )
}