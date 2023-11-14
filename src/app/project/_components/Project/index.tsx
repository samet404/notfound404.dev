import { type StaticImageData } from 'next/image'
import Navbar from './components/Navbar'
import MediaSectionVertical from './components/MediaSectionVertical'
import MediaSection from './components/MediaSection'

type ProjectProps = {
  name: string
  descriptionSection: JSX.Element
  videos: Array<string>
  images: Array<StaticImageData>
  mediaSectionType?: 'Vertical' | 'Horizontal'
}

const Project = ({
  name,
  descriptionSection,
  mediaSectionType = 'Horizontal',
  videos,
  images,
}: ProjectProps) => {
  let mediaSection
  if (videos || images) {
    if (mediaSectionType == 'Vertical')
      mediaSection = (
        <MediaSectionVertical
          key={'MediaSectionVertical'}
          videos={videos}
          images={images}
        />
      )
    if (mediaSectionType == 'Horizontal')
      mediaSection = (
        <MediaSection key={'MediaSection'} videos={videos} images={images} />
      )
  } else mediaSection = <div></div>

  return (
    <div
      style={{
        backgroundColor: 'hsla(151,100%,43%,1)',
        backgroundImage:
          'radial-gradient(at 40% 20%, hsla(28,100%,74%,1) 0px, transparent 50%),radial-gradient(at 80% 0%, hsla(151,100%,53%,1) 0px, transparent 50%),radial-gradient(at 0% 50%, hsla(152,100%,78%,1) 0px, transparent 50%),radial-gradient(at 80% 50%, hsla(340,100%,76%,1) 0px, transparent 50%),radial-gradient(at 0% 100%, hsla(22,100%,77%,1) 0px, transparent 50%),radial-gradient(at 100% 100%, hsla(242,100%,70%,1) 0px, transparent 50%),radial-gradient(at 0% 0%, hsla(343,100%,76%,1) 0px, transparent 50%)',
      }}
      className="h-full w-full xxs:p-0 md:p-2 lg:p-5"
    >
      <div className="h-full w-full overflow-y-auto  xxs:p-0 sm:pr-1">
        <main className="flex w-full animate-fade flex-col gap-2 rounded-md bg-[rgba(255,255,255,0.6)] p-2 backdrop-blur-xl animate-normal animate-once animate-ease-in-out">
          <Navbar name={name} />
          <div className=" flex grow flex-col gap-5 rounded-md bg-[rgba(255,255,255,0.3)] shadow-[0_0px_60px_-15px_rgba(0,0,0,0.3)]">
            {mediaSection}
            {descriptionSection}
          </div>
        </main>
      </div>
    </div>
  )
}

export default Project
