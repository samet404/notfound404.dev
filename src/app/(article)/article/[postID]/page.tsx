"use server"

import { SetScrollContainer } from '@/src/components/SetScrollContainer'
import { notFound } from 'next/navigation'

const Post = async ({ params }: Props) => {
    const { postID } = await params

    try {
        const Content = (await import(`./posts/${postID}.mdx`)).default
        return <div
            id='scroll-container'
            style={{
                scrollbarWidth: 'none',
            }}
            className='w-full p-3 h-full bg-[#fffdd7] selection:bg-[#00000072] selection:text-[#fefed8] overflow-y-scroll'>
            <SetScrollContainer />

            <div className='flex w-full items-center flex-col pt-[7rem] pb-11'>
                <div className='prose'>
                    <Content />
                </div>
            </div>
        </div>
    } catch (error) {
        notFound()
    }
}

export default Post

type Props = {
    params: Promise<{
        postID: string
    }>
}

// {
//     "id": "just-google-it",
//         "title": "Just Google It",
//             "description": "Most people think that they need to learn things before learning things. Well, I'm not so sure.",
//                 "date": "2023-03-01"
// }