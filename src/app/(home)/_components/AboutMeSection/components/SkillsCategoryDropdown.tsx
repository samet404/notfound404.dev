"use client"

import { useAtom } from 'jotai'
import { skillsCategoryAtom } from './atoms'
import useIsDarkTheme from '@/src/store/isDarkTheme'

export const SkillsCategoryDropdown = () => {
    const [category, setCategory] = useAtom(skillsCategoryAtom)
    const isDarkTheme = useIsDarkTheme((state) => state.value)

    const categories = ['All', 'Language', 'Library-framework', 'Service', 'Tool', 'Database', 'API', 'Dev tool'] as const

    const getCategoryColor = (cat: typeof categories[number]) => {
        switch (cat) {
            case 'Language':
                return '#ffb1f7ff'
            case 'Library-framework':
                return '#fffab1ff'
            case 'Service':
                return '#9785ffff'
            case 'Tool':
                return '#1184ffff'
            case 'Database':
                return '#42fba5bc'
            case 'API':
                return '#ffbe4dbc'
            default:
                return '#ffffff80'
        }
    }

    return (
        <div className='pl-4'>
            <select
                value={category}
                onChange={(e) => setCategory(e.target.value as typeof category)}
                className={`
                ${isDarkTheme ? 'bg-[#ffffff90]' : 'bg-[#ffffff90]'}
                px-3 py-1.5
                rounded-lg
                border-2
                outline-none
                transition-all
                duration-200
                hover:shadow-[0_0px_20px_1px_rgba(0,0,0,0.2)]
            `}
                style={{
                    borderColor: getCategoryColor(category)
                }}
            >
                {categories.map((cat) => (
                    <option
                        key={cat}
                        value={cat}
                        className="bg-white text-black"
                    >
                        {cat.replace('-', '/')}
                    </option>
                ))}
            </select>
        </div>
    )
}