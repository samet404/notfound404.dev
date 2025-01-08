import { Svg } from '../components/Svg'

const Loading = () => {
  return (
    <div className="flex h-full w-full animate-fade items-center justify-center bg-[hsla(220,39%,10%,1)]">
      <Svg
        src='spinner-one-third-svgrepo-com'
        alt="spinner"
        className="animate-spin animate-infinite animate-ease-in-out"
      />
    </div>
  )
}

export default Loading
