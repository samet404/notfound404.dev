import { Outfit } from 'next/font/google'

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['900'],
})

const Loading = () => {
  return (
    <main
    style={{
      backgroundColor: 'hsla(50,100%,50%,1)',
      backgroundImage:
        'radial-gradient(at 40% 20%, hsla(200,100%,74%,1) 0px, transparent 50%),radial-gradient(at 80% 0%, hsla(20,100%,56%,1) 0px, transparent 50%),radial-gradient(at 25% 100%, hsla(355,100%,93%,1) 0px, transparent 50%),radial-gradient(at 64% 4%, hsla(340,100%,76%,1) 0px, transparent 50%),radial-gradient(at 0% 100%, hsla(22,100%,77%,1) 0px, transparent 50%),radial-gradient(at 100% 95%, hsla(242,100%,70%,1) 0px, transparent 50%),radial-gradient(at 0% 0%, hsla(359,100%,79%,1) 0px, transparent 50%)',
    }}
    className='flex  h-full w-full items-center justify-center'
  >
    <div className={`${outfit.className} drop-shadow-[0_0px_3px_rgba(0,0,0,0.55)] text-4xl text-white`}>LOADING</div>
  </main>
  )
}

export default Loading