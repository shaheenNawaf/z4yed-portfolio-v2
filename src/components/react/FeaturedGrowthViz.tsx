"use client"

import { useEffect, useRef } from "react"
import { BAYER4, fillOf, type PixelColor } from "../dither-kit/pixel"
import { rgb } from "../dither-kit/palette"

type GrowthPoint = {
  month: string
  value: string
  rawValue: number
  joined?: boolean
}

type FeaturedGrowthVizProps = {
  data: GrowthPoint[]
  color?: PixelColor
}

export function FeaturedGrowthViz({
  data,
  color = "orange",
}: FeaturedGrowthVizProps) {
  const wrapRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const wrap = wrapRef.current
    const canvas = canvasRef.current
    if (!wrap || !canvas || !data?.length) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const fill = fillOf(color)

    const paint = () => {
      const box = wrap.getBoundingClientRect()
      const dpr = window.devicePixelRatio || 1
      const w = Math.round(box.width * dpr)
      const h = Math.round(box.height * dpr)
      canvas.width = w
      canvas.height = h
      canvas.style.width = `${box.width}px`
      canvas.style.height = `${box.height}px`

      ctx.clearRect(0, 0, w, h)

      const max = Math.max(...data.map((d) => d.rawValue))
      const min = Math.min(...data.map((d) => d.rawValue))
      const range = max - min || 1

      const padX = Math.round(w * 0.02)
      const padY = Math.round(h * 0.1)
      const chartW = w - padX * 2
      const chartH = h - padY * 2

      const points = data.map((d, i) => ({
        x: padX + (i / (data.length - 1)) * chartW,
        y: padY + chartH - ((d.rawValue - min) / range) * chartH,
      }))

      // Ordered-dither fill below the line (clipped to chart area)
      for (let y = padY; y < padY + chartH; y++) {
        for (let x = padX; x < padX + chartW; x++) {
          let lineY = padY + chartH
          for (let i = 0; i < points.length - 1; i++) {
            if (x >= points[i].x && x <= points[i + 1].x) {
              const t =
                (x - points[i].x) / (points[i + 1].x - points[i].x || 1)
              lineY = points[i].y + t * (points[i + 1].y - points[i].y)
              break
            }
          }
          if (y <= lineY) continue
          const density = 1 - (y - lineY) / (padY + chartH - lineY || 1)
          const lit = density > BAYER4[y & 3][x & 3]
          if (!lit) continue
          const alpha = 0.08 + 0.25 * density
          ctx.fillStyle = rgb(fill, 1, alpha)
          ctx.fillRect(x, y, 1, 1)
        }
      }

      // Draw dithered curve line
      for (let i = 0; i < points.length - 1; i++) {
        const p0 = points[i]
        const p1 = points[i + 1]
        const steps = Math.max(
          Math.abs(p1.x - p0.x),
          Math.abs(p1.y - p0.y),
          1,
        )
        for (let s = 0; s <= steps; s++) {
          const t = s / steps
          const x = Math.round(p0.x + t * (p1.x - p0.x))
          const y = Math.round(p0.y + t * (p1.y - p0.y))
          if (x >= padX && x < padX + chartW && y >= padY && y < padY + chartH) {
            ctx.fillStyle = rgb(fill, 1, 0.7)
            ctx.fillRect(x, y, 1, 1)
          }
        }
      }

      // Endpoint dot — 3×3 dithered
      const last = points[points.length - 1]
      for (let dx = -1; dx <= 1; dx++) {
        for (let dy = -1; dy <= 1; dy++) {
          const x = Math.round(last.x) + dx
          const y = Math.round(last.y) + dy
          if (x < padX || y < padY || x >= padX + chartW || y >= padY + chartH) continue
          if (dx === 0 && dy === 0) {
            ctx.fillStyle = rgb(fill, 1, 1)
          } else if (Math.abs(dx) + Math.abs(dy) === 1) {
            ctx.fillStyle = rgb(fill, 1, 0.7)
          } else {
            ctx.fillStyle = rgb(fill, 1, 0.4)
          }
          ctx.fillRect(x, y, 1, 1)
        }
      }
    }

    paint()
    if (typeof ResizeObserver === "undefined") return
    const ro = new ResizeObserver(paint)
    ro.observe(wrap)
    return () => ro.disconnect()
  }, [data, color])

  if (!data?.length) return null

  return (
    <div className="flex flex-col gap-2">
      <div ref={wrapRef} className="relative h-20 w-full" aria-hidden="true">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          style={{ imageRendering: "pixelated" }}
        />
      </div>
      <div className="flex justify-between">
        {data.map((point, i) => (
          <div key={i} className="flex flex-col items-center gap-0.5">
            <span className="text-[11px] font-semibold tracking-tight text-[color:var(--text)]">
              {point.value}
            </span>
            <span className="text-[9px] font-medium text-[color:var(--text-faint)]">
              {point.month}
            </span>
            {point.joined && (
              <span className="text-[8px] font-medium text-[color:var(--mkt)] mt-0.5">
                joined
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
