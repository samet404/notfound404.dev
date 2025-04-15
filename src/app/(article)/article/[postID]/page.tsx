"use server"

import { SetScrollContainer } from '@/src/components/SetScrollContainer'
import { notFound } from 'next/navigation'
import { Scroll } from './_components/Scroll'
import { Prose } from './_components/Prose'

const Post = async ({ params }: Props) => {
    const { postID } = await params

    try {
        const Content = (await import(`./posts/${postID}.mdx`)).default
        return <Scroll>
            <SetScrollContainer />

            <div className='md:flex items-center justify-center'>
                <Prose>
                    <Content />
                </Prose>
            </div>
        </Scroll>
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