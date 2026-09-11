
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { DESTINATIONS_DATA } from '../../data/destinations'
import { Mountain, Clock, Leaf, ArrowRight, X, Sparkles, MapPin } from 'lucide-react'

export default function DestinationSlider() {
  const navigate = useNavigate()
  // State for the card currently selected in the pop-up modal
  const [selectedDest, setSelectedDest] = useState(null)

  // Duplicate items to ensure a seamless, endless infinite loop
  const marqueeItems = [...DESTINATIONS_DATA, ...DESTINATIONS_DATA]

  return (
    <section className="py-16 bg-[#f5f0e8]/50 overflow-hidden relative">
      
      {/* 1. Header with 'Explore All' button */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#3d6b4f] mb-2">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>Featured Expeditions</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a2e1f] tracking-tight">
            Sacred Himalayan Trails
          </h2>
          <p className="text-sm text-[#3d5e53] mt-1">
            Hand-curated journeys with verified GhumFir Eco-Scores and indigenous guides.
          </p>
        </div>

        {/* Explore More Button -> Goes to /destinations */}
        <Link
          to="/destination"
          className="inline-flex items-center gap-2 bg-[#1a2e1f] hover:bg-[#3d6b4f] text-[#f5f0e8] px-5 py-3 rounded-2xl text-xs font-bold transition-all shadow-md hover:shadow-lg hover:scale-105 group self-start sm:self-auto"
        >
          <span>Explore All Destinations</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* 2. Infinite Marquee Container */}
      <div className="relative w-full overflow-hidden mask-radial">
        {/* Soft edge gradient fades for cinematic blend */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-linear-to-r from-[#f5f0e8] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-linear-to-l from-[#f5f0e8] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee gap-6 flex">
          {marqueeItems.map((dest, idx) => (
            <div
              key={`${dest.id}-${idx}`}
              onClick={() => setSelectedDest(dest)}
              className="w-72 sm:w-80 shrink-0 bg-white rounded-3xl overflow-hidden border border-[#3d6b4f]/15 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group flex flex-col"
            >
              {/* Image & Badges */}
              <div className="relative h-48 overflow-hidden bg-black/10">
                <img
                  src={dest.image}
                  alt={dest.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <span className="absolute top-3 left-3 bg-[#1a2e1f]/85 text-[#f5f0e8] text-[10px] font-semibold px-2.5 py-1 rounded-full backdrop-blur-md border border-white/10">
                  {dest.region}
                </span>

                <span className="absolute top-3 right-3 bg-amber-300 text-[#1a2e1f] text-[10px] font-extrabold px-2.5 py-1 rounded-full shadow-md flex items-center gap-1">
                  <Leaf className="w-3 h-3 text-[#3d6b4f]" />
                  <span>GhumFir {dest.GhumFirEcoScore}%</span>
                </span>
              </div>

              {/* Content Card Body */}
              <div className="p-5 flex flex-col justify-between flex-1 space-y-3">
                <div>
                  <h3 className="font-extrabold text-base text-[#1a2e1f] group-hover:text-[#3d6b4f] transition-colors line-clamp-1">
                    {dest.title}
                  </h3>
                  <p className="text-xs text-gray-400 font-serif italic mt-0.5">{dest.nepaliTitle}</p>
                </div>

                <div className="flex items-center justify-between text-xs text-gray-500 pt-2 border-t border-gray-100 font-mono">
                  <span className="flex items-center gap-1">
                    <Mountain className="w-3.5 h-3.5 text-[#3d6b4f]" />
                    {dest.elevationMeters.toLocaleString()}m
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#3d6b4f]" />
                    {dest.durationDays} Days
                  </span>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <span className="text-sm font-extrabold text-[#3d6b4f] font-mono">
                    NPR {dest.priceNpr.toLocaleString()}
                  </span>
                  <span className="text-[11px] font-bold text-[#1a2e1f] underline decoration-[#3d6b4f]/40 group-hover:decoration-[#3d6b4f]">
                    Quick View →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Pop-Up Preview Modal */}
      {selectedDest && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn"
          onClick={() => setSelectedDest(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-white/20 relative animate-scaleUp"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedDest(null)}
              className="absolute top-4 right-4 z-20 bg-black/40 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-md transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="relative h-64 w-full">
              <img
                src={selectedDest.image}
                alt={selectedDest.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="bg-amber-400 text-[#1a2e1f] text-xs font-black px-2.5 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1 mb-2">
                  <Leaf className="w-3.5 h-3.5 text-[#3d6b4f]" />
                  GhumFir Eco-Score: {selectedDest.GhumFirEcoScore}%
                </span>
                <h3 className="text-2xl font-black">{selectedDest.title}</h3>
                <p className="text-xs text-white/80 font-serif italic">{selectedDest.nepaliTitle}</p>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-4">
              <p className="text-sm text-[#3d5e53] leading-relaxed">
                {selectedDest.description}
              </p>

              {/* Cultural Tip Pill */}
              <div className="bg-[#f5f0e8] p-3.5 rounded-2xl border border-[#3d6b4f]/15 text-xs text-[#1a2e1f] flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block text-[#3d6b4f]">Local Cultural Etiquette:</span>
                  <p className="text-gray-600 mt-0.5">{selectedDest.culturalTip}</p>
                </div>
              </div>

              {/* Quick Metrics */}
              <div className="grid grid-cols-3 gap-2 py-2 text-center text-xs">
                <div className="bg-gray-50 p-2.5 rounded-xl border border-gray-100">
                  <span className="text-gray-400 block text-[10px] uppercase font-mono">Elevation</span>
                  <span className="font-bold text-[#1a2e1f]">{selectedDest.elevationMeters.toLocaleString()}m</span>
                </div>
                <div className="bg-gray-50 p-2.5 rounded-xl border border-gray-100">
                  <span className="text-gray-400 block text-[10px] uppercase font-mono">Duration</span>
                  <span className="font-bold text-[#1a2e1f]">{selectedDest.durationDays} Days</span>
                </div>
                <div className="bg-gray-50 p-2.5 rounded-xl border border-gray-100">
                  <span className="text-gray-400 block text-[10px] uppercase font-mono">Difficulty</span>
                  <span className="font-bold text-[#3d6b4f]">{selectedDest.difficulty}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] uppercase font-mono text-gray-400 block">Starting From</span>
                  <span className="text-lg font-extrabold text-[#3d6b4f] font-mono">
                    NPR {selectedDest.priceNpr.toLocaleString()}
                  </span>
                </div>

                <button
                  onClick={() => {
                    setSelectedDest(null)
                    navigate(`/destination/${selectedDest.id}`)
                  }}
                  className="bg-[#3d6b4f] hover:bg-[#2d523c] text-white px-6 py-3 rounded-2xl text-xs font-bold shadow-md hover:shadow-lg transition-all flex items-center gap-2 hover:scale-105 cursor-pointer"
                >
                  <span>View Full Itinerary</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  )
}