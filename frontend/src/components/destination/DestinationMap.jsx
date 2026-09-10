import { useState } from 'react'
import { Mountain, MapPin, Leaf, Compass } from 'lucide-react'

export default function DestinationMap({ destinations = [], onSelectDestination, selectedId }) {
  const [hoveredDest, setHoveredDest] = useState(null)

  return (
    <div className="relative bg-[#1a2e1f] text-[#f5f0e8] rounded-3xl p-6 md:p-10 overflow-hidden shadow-2xl border border-[#3d6b4f]/30 font-sans">
      
      {/* Header & Map Legend */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 z-20 relative">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#a7d4c5] uppercase tracking-widest">
            <Compass className="w-4 h-4 text-amber-400 animate-spin-slow" />
            <span>इन्टर्याक्टिभ Ghumfir नक्शा (Interactive Trail Map)</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-extrabold text-white mt-1">
            Explore Himalayan Trails Across Nepal
          </h3>
        </div>

        {/* Map Legend */}
        <div className="flex items-center gap-4 text-xs font-mono bg-[#243e2b] px-4 py-2 rounded-2xl border border-[#3d6b4f]/30">
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
            <span>Active Trail</span>
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#a7d4c5]"></span>
            <span>GhumFir Eco Verified</span>
          </span>
        </div>
      </div>

      {/* Map Canvas Container */}
      <div className="relative w-full aspect-[2/1] min-h-[350px] md:min-h-[480px] bg-[#142418] rounded-2xl border border-[#3d6b4f]/20 overflow-hidden flex items-center justify-center">
        
        {/* Stylized Nepal Topographic SVG Silhouette */}
        <svg
          viewBox="0 0 1000 500"
          className="absolute inset-0 w-full h-full object-contain opacity-30 select-none pointer-events-none"
          fill="none"
          stroke="currentColor"
        >
          {/* Nepal Contour Silhouette */}
          <path
            d="M 50 180 Q 150 120 280 160 T 450 140 T 600 170 T 780 210 T 920 260 L 950 330 Q 820 380 650 360 T 400 370 T 180 340 T 50 280 Z"
            fill="#2d523c"
            stroke="#a7d4c5"
            strokeWidth="2"
            strokeDasharray="4 4"
          />
          {/* Mountain Ridge Lines (Himalayas in the North) */}
          <path d="M 80 170 L 150 110 L 220 160 L 300 90 L 380 150 L 480 80 L 580 140 L 700 70 L 800 130 L 900 110" stroke="#f5f0e8" strokeWidth="1.5" opacity="0.4" />
          <path d="M 120 180 L 180 130 L 250 170 L 340 120 L 420 170 L 520 110 L 640 160 L 750 110 L 860 150" stroke="#f5f0e8" strokeWidth="1" opacity="0.25" />
          
          {/* Grid lines for coordinate aesthetics */}
          <line x1="250" y1="50" x2="250" y2="450" stroke="#3d6b4f" strokeWidth="0.5" opacity="0.2" />
          <line x1="500" y1="50" x2="500" y2="450" stroke="#3d6b4f" strokeWidth="0.5" opacity="0.2" />
          <line x1="750" y1="50" x2="750" y2="450" stroke="#3d6b4f" strokeWidth="0.5" opacity="0.2" />
        </svg>

        {/* Region Labels */}
        <span className="absolute left-[12%] top-[30%] text-[10px] font-mono text-[#a7d4c5]/40 tracking-widest uppercase pointer-events-none">Far-Western Region</span>
        <span className="absolute left-[40%] top-[20%] text-[10px] font-mono text-[#a7d4c5]/40 tracking-widest uppercase pointer-events-none">Annapurna Range</span>
        <span className="absolute left-[65%] top-[25%] text-[10px] font-mono text-[#a7d4c5]/40 tracking-widest uppercase pointer-events-none">Khumbu (Everest)</span>

        {/* Interactive Pinned Destinations */}
        {destinations.map((dest) => {
          const isSelected = selectedId === dest.id
          const isHovered = hoveredDest?.id === dest.id

          return (
            <div
              key={dest.id}
              style={{
                left: `${dest.mapCoords?.x || 50}%`,
                top: `${dest.mapCoords?.y || 50}%`,
              }}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer group"
              onMouseEnter={() => setHoveredDest(dest)}
              onMouseLeave={() => setHoveredDest(null)}
              onClick={() => onSelectDestination && onSelectDestination(dest)}
            >
              {/* Radar Ping Animation */}
              <div className="relative flex items-center justify-center">
                <span className="animate-ping absolute inline-flex h-8 w-8 rounded-full bg-amber-400 opacity-60"></span>
                
                {/* Center Pin Button */}
                <button
                  type="button"
                  className={`relative flex items-center justify-center w-7 h-7 rounded-full transition-all duration-300 shadow-xl ${
                    isSelected
                      ? 'bg-amber-400 text-[#1a2e1f] scale-125 ring-4 ring-amber-400/30'
                      : 'bg-[#a7d4c5] text-[#1a2e1f] hover:bg-amber-400 hover:scale-110'
                  }`}
                >
                  <Mountain className="w-3.5 h-3.5 font-bold" />
                </button>

                {/* Permanent Title Tag */}
                <div className="absolute top-8 whitespace-nowrap bg-[#1a2e1f]/90 text-[11px] font-bold px-2.5 py-0.5 rounded-full border border-white/10 shadow backdrop-blur-sm pointer-events-none">
                  {dest.region}
                </div>
              </div>

              {/* Floating Mini Trail Preview Card on Hover or Select */}
              {(isHovered || isSelected) && (
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-64 bg-white text-[#1a2e1f] p-4 rounded-2xl shadow-2xl border border-[#3d6b4f]/20 z-30 space-y-3 pointer-events-auto animate-in fade-in zoom-in-95 duration-200">
                  <div className="relative h-28 rounded-xl overflow-hidden">
                    <img src={dest.image} alt={dest.title} className="w-full h-full object-cover" />
                    <span className="absolute top-2 right-2 bg-amber-300 text-[#1a2e1f] text-[10px] font-extrabold px-2 py-0.5 rounded-full shadow flex items-center gap-1">
                      <Leaf className="w-2.5 h-2.5 text-[#3d6b4f]" />
                      <span>{dest.GhumFirEcoScore}%</span>
                    </span>
                  </div>

                  <div>
                    <h4 className="font-bold text-sm leading-tight text-[#1a2e1f]">{dest.title}</h4>
                    <p className="text-[10px] text-[#3d6b4f] font-mono mt-0.5">
                      ⛰️ {dest.elevationMeters.toLocaleString()}m • ⏳ {dest.durationDays} Days
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-1 border-t border-gray-100">
                    <span className="font-extrabold text-xs">NPR {dest.priceNpr.toLocaleString()}</span>
                    <span className="text-[10px] font-bold text-[#3d6b4f] hover:underline">View Trail →</span>
                  </div>
                </div>
              )}

            </div>
          )
        })}

      </div>

      {/* Footer Helper Note */}
      <div className="mt-4 flex items-center justify-between text-xs font-mono text-[#a7d4c5]/75">
        <span>✦ Click on any mountain pin to highlight the trail below.</span>
        <span>Elevation Range: 2,990m — 5,416m</span>
      </div>

    </div>
  )
}