import { Svg } from '../components/Svg'

const Loading = async () => {

  return (
    <div className="flex h-full w-full z-50 items-center bg-gray-800 justify-center">
      <Svg
        src='spinner-one-third-svgrepo-com'
        alt="spinner"
        className="animate-spin animate-infinite w-12 h-12 animate-ease-in-out"
      />
    </div>
  )
}

export default Loading
