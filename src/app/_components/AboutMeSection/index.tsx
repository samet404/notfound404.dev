import { FirstPart } from './components/FirstPart'
import { Links } from './components/Links'

export const AboutMeSection = async () => {
  const { description, hobbies, qualifications } = await import('./data.json')

  return (
    <div className="flex w-full flex-row items-center justify-center px-4 py-4 shadow-[0_0px_60px_-15px_rgba(0,0,0,0.3)] animate-fade">
      <div className="flex flex-col gap-3">
        <FirstPart />
        <div className="flex flex-col 1 gap-4 max-w-[40rem]">
          <div className='flex flex-col gap-2 rounded-md bg-gradient-to-b from-[hsla(171,83%,32%,1)] to-[#3ca29e] p-3 text-[0.9rem] leading-5 text-[rgba(255,255,255,0.7)] shadow-[0_0px_15px_3px_rgba(0,0,0,0.2)]'>
            <Links />
            <div className='flex flex-col gap-3 items-start' >
              <div>{description}</div>
              <div className='pb-2 text-[#ffffffb5]'><div>Quick Note: Levels below are my personal opinions</div></div>
            </div>
            <div className="pb-1 pt-2 font-[700]">{`Qualifications:`}</div>
            <div>{qualifications.experience}</div>

            <div className="flex flex-col gap-2 py-1 pl-6 leading-4">
              <div className="pb-1 pt-1 font-[700]">{`Languages:`}</div>
              <div className="flex flex-col gap-1">
                {qualifications.languages.map((lang, index) => (
                  <div key={index}>
                    {lang.name} {lang.experience && `(${lang.experience})`} {lang.level && `${lang.level}`}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2 py-1 pl-6 leading-4">
              <div className="pb-1 pt-1 font-[700]">{`Frameworks:`}</div>
              <div className="flex flex-col gap-1">
                {qualifications.frameworks.map((framework, index) => (
                  <div key={index}>
                    {framework.name} ({framework.experience} {framework.level})
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2 py-1 pl-6 leading-4">
              <div className="pb-1 pt-1 font-[700]">{`Packages And Libraries:`}</div>
              <div className="flex flex-col gap-1">
                {qualifications.packagesAndLibraries.map((pkg, index) => (
                  <div key={index}>
                    {pkg.name} {pkg.experience && `(${pkg.experience})`} {pkg.level && `(${pkg.level})`}
                    {pkg.note && ` - ${pkg.note}`}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2 py-1 pl-6 leading-4">
              <div className="pb-1 pt-1 font-[700]">{`Third party services I used:`}</div>
              <div className="flex flex-col gap-1">
                {qualifications.thirdPartyServices.map((service, index) => (
                  <div key={index}>{service}</div>
                ))}
              </div>
            </div>

            <div className="pb-2 pt-5 font-[700]">
              {`Technologies that I have had experience with in the past but don't remember or don't like now`}
            </div>
            <div className="flex flex-col gap-1">
              {qualifications.pastExperience.map((tech, index) => (
                <div key={index}>
                  {tech.name} {tech.note && `- ${tech.note}`}
                </div>
              ))}
            </div>
            <div className="pb-2 pt-2 font-[700]">{`My Hobbies:`}</div>
            {hobbies.map((item, id) => (
              <div key={id}>- {item}</div>
            ))}

          </div>
        </div>
      </div>
    </div>
  )
}
