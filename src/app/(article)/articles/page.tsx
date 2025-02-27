import { SetScrollContainer } from '@/src/components/SetScrollContainer'
import Link from 'next/link'

const Article = async () => {
    const posts: {
        id: string
        title: string
        description: string
        date: string
    }[] | null = (await import('../posts.json')).default

    return (
        <div
            style={{
                backgroundColor: 'hsla(36, 100%, 50%, 1)',
                backgroundImage:
                    'radial-gradient(at 40% 20%, hsla(37, 100%, 63%, 1) 0px, transparent 50%)',
                scrollbarWidth: 'none',
            }}
            id='scroll-container'
            className='w-full h-full overflow-y-scroll bg-yellow-500'>
            <SetScrollContainer />
            <div className='pt-[5rem] pb-5 w-full justify-center items-center flex flex-col gap-10'>

                <div className='bg-white shadow-[0_0px_15px_5px_rgba(0,0,0,0.1)] flex flex-col gap-10 animate-fade-up p-5 w-[40rem] rounded-lg'>
                    {posts.length > 0 ? posts.map(post => {
                        return <Link href={`/article/${post.id}`} key={post.id} className=' hover:text-gray-700 text-gray-500 flex flex-col gap-3'>
                            <div className='flex flex-col gap-1'>
                                <div className='text-[1.2rem] font-bold'>{post.title}</div>
                                <p>{post.description}</p>
                            </div>


                            <div className='text-sm flex flex-row gap-2'>
                                <div>{post.date}</div>
                            </div>
                        </Link>
                    }) : <div className='text-center text-[#000000b9]'>Looks like there are no posts yet</div>}
                </div>
            </div>
        </div>
    )
}

export default Article