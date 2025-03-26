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
            className='w-full pt-[7rem] pb-11 h-full bg-[#fffdd7] selection:bg-[#0000004b]  overflow-y-scroll'>
            <SetScrollContainer />

            <div className='md:flex items-center justify-center'>
                <div className='px-3 prose-code:selection:bg-[#9f004c]  prose prose-li:marker:text-[#000000] text-[#000000a2]'>
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