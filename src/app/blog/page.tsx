import Link from 'next/link'

const Blog = async () => {
    const posts: {
        id: string
        title: string
        description: string
        date: string
    }[] | null = (await import('./posts.json')).default

    return (
        <div
            style={{
                backgroundColor: 'hsla(36, 100%, 50%, 1)',
                backgroundImage:
                    'radial-gradient(at 40% 20%, hsla(37, 100%, 63%, 1) 0px, transparent 50%)',
                scrollbarWidth: 'none',
            }}
            className='w-full h-full overflow-y-scroll bg-yellow-500'>
            <div className='pt-[5rem] w-full justify-center items-center flex flex-col gap-10'>

                <div className='bg-white shadow-[0_0px_15px_5px_rgba(0,0,0,0.1)] animate-fade-up p-5 w-[40rem] rounded-lg'>
                    {posts.length > 0 ? posts.map(post => {
                        return <Link href={`/blog/${post.id}`} key={post.id} className='hover:text-black text-gray-500 flex flex-col gap-3'>
                            <div className='flex flex-col gap-1'>
                                <div className='text-[1.2rem] font-bold'>{post.title}</div>
                                <p>{post.description}</p>
                            </div>


                            <div className='text-sm text-[#0000007e] flex flex-row gap-2'>
                                <div>{post.date}</div>
                            </div>
                        </Link>
                    }) : <div className='text-center text-[#000000b9]'>Looks like there are no posts yet</div>}
                </div>
            </div>
        </div>
    )
}

export default Blog