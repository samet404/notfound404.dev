
const calenderJson = (await import('../../data/calendar.json')).default

export async function POST(request: Request) {
    const body = await request.json() as { date: string }
    console.log("dsapjdasp:", body)
    const date = calenderJson[body.date as keyof typeof calenderJson] ?? null
    console.log('date:' ,date)
    return Response.json(date)
}