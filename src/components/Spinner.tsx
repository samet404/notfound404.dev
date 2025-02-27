import { Svg } from './Svg'

export const Spinner = () => {
    return (
        <Svg
            src='spinner-one-third-svgrepo-com'
            alt="spinner"
            className="animate-spin animate-infinite w-12 h-12 animate-ease-in-out"
        />
    )
}