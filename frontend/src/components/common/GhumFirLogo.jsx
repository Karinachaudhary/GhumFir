import React from 'react'
import {Link} from 'react-router-dom'

export default function GhumFirLogo({ 
  href = "/", 
  asLink = true,
  className = ""
}) {
  const logoImage = (
    <div className="inline-flex items-center group cursor-pointer select-none py-1">
      {/* 
        h-10 md:h-12 locks layout height (keeps navbar compact)
        scale-135 visually expands the red calligraphy letters by 35%
      */}
      <img
        src="/logo.png"
        alt="घुमफिर - GhumFir"
        className={`h-10 md:h-12 w-auto object-contain scale-125 md:scale-200 origin-left transition-transform duration-300 group-hover:scale-140 filter drop-shadow-[0_3px_14px_rgba(168,28,28,0.45)] group-hover:drop-shadow-[0_5px_24px_rgba(212,175,55,0.75)] ${className}`}
      />
    </div>
  )

  if (!asLink) return logoImage

  return (
    <Link href={href} aria-label="GhumFir Home" className="inline-block focus:outline-none">
      {logoImage}
    </Link>
  )
}