const embedUrls: string[] =
    [
        'https://open.spotify.com/embed/playlist/7l35G7kYV1DWB3uRoMjVPi?utm_source=generator',
        'https://open.spotify.com/embed/playlist/78y3ENNMQu4Zh1LnOq93Eh?utm_source=generator',
        'https://open.spotify.com/embed/playlist/5r7z0ZMAakt6R4QYXw9Dlx?utm_source=generator',
        'https://open.spotify.com/embed/playlist/0cEA9mm6XHgZeDwDsuhsJi?utm_source=generator'
    ]

export const MusicsILike = () => {
    return (
        <div className='flex flex-col gap-2 items-center max-[360px]:hidden'>

            <h2 className='text-center w-[90%]'>Musics I like</h2>
            <p> These are preview of my playlists</p>
            <div className='flex flex-row w-full items-center justify-center gap-2 flex-wrap'>
                {
                    embedUrls.map((url) => {
                        return <div key={url} className='md:w-[18rem]  xxs:w-full xxs:h-[4.8rem] md:h-[4.5rem] lg:h-[4.1rem] drop-shadow-[0_0px_6px_rgba(255,255,255,0.3)]'>
                            <iframe style={{
                                overflow: 'hidden',
                            }} scrolling='no' className='flex  md:w-[18rem]  xxs:w-full xxs:h-[4.8rem] md:h-[4.5rem] lg:h-[4.1rem]  rounded-[12px] ' src={url} allowFullScreen={false} allow="autoplay; clipboard-write; picture-in-picture" loading="lazy"></iframe>

                        </div>
                    })
                }
            </div>
        </div>
    )
}
