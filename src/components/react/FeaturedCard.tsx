"use client"

type FeaturedCardProps = {
  accentColor: "marketing" | "software"
  children: React.ReactNode
}

export function FeaturedCard({ accentColor, children }: FeaturedCardProps) {
  return (
    <div className="relative h-full w-full">
      <div className="relative z-10 h-full flex flex-col justify-between">
        {children}
      </div>
    </div>
  )
}
