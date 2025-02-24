import { NextResponse, userAgent, type NextMiddleware, type NextRequest } from 'next/server';

const middleware: NextMiddleware = (request: NextRequest) => {

    const url = request
    const { os } = userAgent(request)



    NextResponse.next()
}

export default middleware