import { SetScrollContainer } from '@/src/components/SetScrollContainer'
import Link from 'next/link'

const Article = async () => {
    const posts: ({
        id: string
        title: string
        description: string
        date: string
        done: boolean
    } | {
        title: string
        done: boolean
    })[] = (await import('../posts.json')).default

    return (
        <div
            id='scroll-container'
            className='w-full h-full overflow-y-scroll bg-[#9b004c]'>
            <SetScrollContainer />
            <div className='pt-[5rem] pb-5 w-full justify-center items-center flex flex-col gap-10'>

                <div className='bg-white shadow-[0_0px_15px_5px_rgba(0,0,0,0.1)] flex flex-col gap-10 p-5 md:w-[40rem] xxs:w-[90%] rounded-lg'>
                    {posts.length > 0 ? posts.map(post => {
                        if (post.done === true && 'id' in post && 'description' in post && 'date' in post) {
                            return <Link href={`/article/${post.id}`} key={post.id} className=' hover:text-gray-700 text-gray-500 flex flex-col gap-3'>
                                <div className='flex flex-col gap-4'>
                                    <div className='text-[1.2rem] font-bold'>{post.title}</div>
                                    <p className='text-sm'>{post.description}</p>
                                </div>


                                <div className='text-sm flex flex-row gap-2'>
                                    <div>{post.date}</div>
                                </div>
                            </Link>
                        } else if ('title' in post) {
                            return <div className=' hover:text-gray-700 text-gray-500 flex flex-col gap-3'>{post.title}
                                <div className='text-pink-700'>Still in progress</div>
                            </div>
                        }
                        return null
                    }) : <div className='text-center text-[#0000008f]'>Looks like there are no posts yet :P</div>}
                </div>
            </div>
        </div>
    )
}

export default Article