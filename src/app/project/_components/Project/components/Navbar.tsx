import { Inter } from 'next/font/google'
import BackButton from '@/components/BackButton'

const inter = Inter({
  subsets: ['latin'],
  weight: ['600'],
})

type NavbarProps = {
  name: string
}

const Navbar = ({ name }: NavbarProps) => {
  return (
    <nav className="flex w-full flex-row items-center gap-2 rounded-lg bg-[rgba(255,255,255,0.9)] p-1">
      <BackButton className="flex cursor-pointer items-center justify-center rounded-md bg-[rgba(0,0,0,0.07)] p-1 lg:hover:opacity-60">
        <div className={`${inter.className} text-1xl text-[#00000098]`}>Back</div>
      </BackButton>
      <div className={`${inter.className} text-2xl text-[#000000a9]`}>{name}</div>
    </nav>
  )
}

export default Navbar
