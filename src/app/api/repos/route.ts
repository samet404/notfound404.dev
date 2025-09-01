import { fetchGhRepos } from '@/src/utils/fetchGhRepos'

export async function GET() {
  return Response.json(await fetchGhRepos(process.env.GITHUB_ACCESS_TOKEN!))
}
