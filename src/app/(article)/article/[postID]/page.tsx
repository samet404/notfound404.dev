'use server'

import { SetScrollContainer } from '@/src/components/SetScrollContainer'
import { notFound } from 'next/navigation'
import { Scroll } from './_components/Scroll'
import { Prose } from './_components/Prose'
import type { Metadata, ResolvingMetadata } from 'next'

const postsJson = (await import('../../posts.json')).default

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // read route params
  const { postID } = await params

  // fetch data
  const title = postsJson.find((post) => post.id === postID)?.title

  return {
    title,
    openGraph: {
      images: ['/images/article/' + postID],
    },
  }
}

const Post = async ({ params }: Props) => {
  const { postID } = await params

  try {
    const Content = (await import(`./posts/${postID}.mdx`)).default
    return (
      <Scroll>
        <SetScrollContainer />

        <div className="items-center justify-center md:flex">
          <Prose>
            <Content />
          </Prose>
        </div>
      </Scroll>
    )
  } catch (error) {
    notFound()
  }
}

export default Post

type Props = {
  params: Promise<{
    postID: string
  }>
  searchParams: Record<string, string>
}
