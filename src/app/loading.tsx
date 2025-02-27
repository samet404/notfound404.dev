import { Spinner } from '../components/Spinner'

const Loading = () => {
  return (
    <div className="flex h-full w-full z-50 items-center text-white bg-gray-800 justify-center flex-col gap-3">
      <div>
        Please wait...
      </div>
      <Spinner />
    </div>
  )
}

export default Loading
