/* eslint-disable @typescript-eslint/no-floating-promises */
'use client'

import { Spinner } from '@/src/components/Spinner'
import { constants } from '@/src/constants'
import Link from 'next/link'
import { useEffect, useState } from 'react'

type Repository = {
  name: string
  description: string
}

export const Repos = () => {
  const [repos, setRepos] = useState<Repository[]>([])

  useEffect(() => {
    ;(async () => {
      try {
        const response = await fetch(`${window.origin}/api/repos`)
        const json = await response.json()
        setRepos(json as Repository[])
      } catch (error) {
        console.error(error)
      }
    })()
  }, [])

  if (repos.length == 0)
    return (
      <div className="flex w-full items-center justify-center">
        <Spinner />
      </div>
    )

  return (
    <div className="flex w-full flex-col items-center justify-center gap-8">
      <div className="rounded-lg bg-[rgba(255,255,255,0.59)] text-2xl shadow-[0_0px_15px_5px_rgba(0,0,0,0.1)]">
        <div className=" bg-gradient-to-tl from-blue-600  via-blue-400 to-blue-500 bg-clip-text  px-3  py-1 font-[700] text-transparent ">
          {'My github repos'}
        </div>
      </div>

      <div className="flex flex-col items-center gap-2 text-[#000000a8]">
        {repos.map((repo) => (
          <div
            key={repo.name}
            className="max-w-[40rem] rounded-md bg-[#ffffff68] p-2 hover:opacity-50 xxs:w-[90%] lg:w-[40rem]"
          >
            <Link
              href={`https://github.com/${constants.githubUsername}/${repo.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col gap-2"
            >
              <div className="font-[600]">{repo.name}</div>

              {repo.description && (
                <div className="text-sm font-[400]">{repo.description}</div>
              )}
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
