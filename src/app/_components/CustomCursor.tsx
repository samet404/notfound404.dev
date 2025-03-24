'use client'

import { useEffect, useRef } from 'react'

export const CustomCursor = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const rafRef = useRef<number>()
    const cursorPos = useRef({ x: 0, y: 0 })
    const trail = useRef<Array<{ x: number; y: number; alpha: number }>>([])
    const isClicked = useRef(false)
    const previousCursorPos = useRef({ x: 0, y: 0 })

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d', { alpha: true })
        if (!ctx) return

        const setCanvasSize = () => {
            const dpr = window.devicePixelRatio || 1
            canvas.width = window.innerWidth * dpr
            canvas.height = window.innerHeight * dpr
            canvas.style.width = `${window.innerWidth}px`
            canvas.style.height = `${window.innerHeight}px`
            ctx.scale(dpr, dpr)
        }
        setCanvasSize()

        const drawCursor = () => {
            // Clear only the previous cursor area (including shadow area)
            ctx.clearRect(
                previousCursorPos.current.x - 15, // Slightly larger than cursor to account for shadow
                previousCursorPos.current.y - 15,
                30,
                30
            )

            previousCursorPos.current.x = cursorPos.current.x
            previousCursorPos.current.y = cursorPos.current.y

            // Draw main cursor
            if (cursorPos.current.x >= 0 && cursorPos.current.y >= 0) {
                ctx.beginPath()
                ctx.arc(cursorPos.current.x, cursorPos.current.y, 10, 0, Math.PI * 2)
                ctx.fillStyle = isClicked.current ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.4)'
                ctx.shadowColor = 'rgba(0, 0, 0, 0.1)'
                ctx.shadowBlur = 5
                ctx.shadowOffsetX = 0
                ctx.shadowOffsetY = 0
                ctx.fill()
            }

            rafRef.current = requestAnimationFrame(drawCursor)
        }

        let ticking = false
        const handleMouseMove = (e: MouseEvent) => {
            if (ticking) return

            ticking = true
            requestAnimationFrame(() => {
                if (e.target instanceof HTMLInputElement ||
                    e.target instanceof HTMLTextAreaElement ||
                    e.target instanceof HTMLCanvasElement) {
                    canvas.style.opacity = '0'
                } else {
                    canvas.style.opacity = '1'
                    cursorPos.current = { x: e.clientX, y: e.clientY }
                }
                ticking = false
            })
        }

        const handleMouseDown = () => {
            isClicked.current = true
            setTimeout(() => {
                isClicked.current = false
            }, 150)
        }

        const handleResize = () => {
            setCanvasSize()
            trail.current = [] // Reset trail on resize
        }

        window.addEventListener('resize', handleResize)
        document.addEventListener('mousemove', handleMouseMove, { passive: true })
        document.addEventListener('mousedown', handleMouseDown, { passive: true })

        drawCursor()

        return () => {
            window.removeEventListener('resize', handleResize)
            document.removeEventListener('mousemove', handleMouseMove)
            document.removeEventListener('mousedown', handleMouseDown)
            if (rafRef.current) cancelAnimationFrame(rafRef.current)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                pointerEvents: 'none',
                zIndex: 50,
                opacity: 0,
                transition: 'opacity 350ms ease-out',
            }}
        />
    )
}