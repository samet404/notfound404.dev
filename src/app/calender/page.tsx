import { SetScrollContainer } from '@/src/components/SetScrollContainer'
import { BackgroundColor } from './BackgroundColor'
import CalendarClient from './ClientCalender'
import { ThingsIdid } from './ThingsIdid'

const Calender = () => {
  return (
    <div
      style={{
        scrollbarWidth: 'none',
      }}
      id="scroll-container"
      className="h-screen w-screen  overflow-y-scroll"
    >
      <BackgroundColor>
        <SetScrollContainer />
        <div className="flex flex-col px-4 pt-4 text-white">
          <div className="text-[2rem]">Calender</div>
          <div className="max-w-[30rem]">I made this calender to keep track of my time. You can see what I did on each day by clicking on the day and then scrolling down. </div>
        </div>
        <CalendarClient />
        <ThingsIdid />
      </BackgroundColor>
    </div>
  )
}

export default Calender
