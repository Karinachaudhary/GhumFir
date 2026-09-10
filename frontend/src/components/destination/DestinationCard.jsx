import { useCart } from '../cart/CartContext'
import { MapPin, Mountain, Clock, Leaf } from 'lucide-react'

export default function DestinationCard({ destination, onSelect }) {
  const { addToCart } = useCart()

  const handleBookTrek = (e) => {
    e.stopPropagation() // Prevents opening card details modal if clicking the button
    addToCart({
      id: destination.id,
      title: destination.title,
      priceNpr: destination.priceNpr,
      image: destination.image,
      isRental: false,
      quantity: 1
    })
  }

  return (
    <div 
      onClick={() => onSelect && onSelect(destination)}
      className="bg-white rounded-3xl overflow-hidden border border-[#3d6b4f]/15 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col cursor-pointer"
    >
      {/* Mountain Image & Badges */}
      <div className="relative h-64 overflow-hidden bg-black/10">
        <img
          src={destination.image}
          alt={destination.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        />

        {/* Culture Tag */}
        <span className="absolute top-4 left-4 bg-[#1a2e1f]/85 text-[#f5f0e8] text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-md border border-white/10 shadow-sm">
          {destination.cultureTag}
        </span>

        {/* GhumFir Eco-Footprint Score */}
        <span className="absolute top-4 right-4 bg-amber-300 text-[#1a2e1f] text-xs font-extrabold px-3 py-1.5 rounded-full shadow-md flex items-center gap-1">
          <Leaf className="w-3.5 h-3.5 text-[#3d6b4f]" />
          <span>GhumFir {destination.GhumFirEcoScore}%</span>
        </span>
      </div>

      {/* Card Body */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        
        <div className="space-y-2">
          {/* Quick Metrics (Region, Elevation, Duration) */}
          <div className="flex items-center justify-between text-xs font-mono text-[#3d6b4f]">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" />
              {destination.region}
            </span>
            <span className="flex items-center gap-1">
              <Mountain className="w-3.5 h-3.5" />
              {destination.elevationMeters.toLocaleString()}m
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {destination.durationDays} Days
            </span>
          </div>

          {/* Title in English and Nepali */}
          <div>
            <h3 className="text-xl font-bold text-[#1a2e1f] group-hover:text-[#3d6b4f] transition-colors">
              {destination.title}
            </h3>
            <span className="text-xs font-serif text-[#3d6b4f]/80">
              {destination.nepaliTitle}
            </span>
          </div>

          <p className="text-xs text-[#3d5e53] line-clamp-2 leading-relaxed">
            {destination.description}
          </p>
        </div>

        {/* Price & Action Footer */}
        <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
          <div>
            <span className="block text-[10px] uppercase font-mono text-gray-400">Package From</span>
            <span className="text-lg font-extrabold text-[#1a2e1f]">
              NPR {destination.priceNpr.toLocaleString()}
            </span>
          </div>

          <button
            type="button"
            onClick={handleBookTrek}
            className="bg-[#3d6b4f] hover:bg-[#2d523c] text-white px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-sm hover:shadow-md hover:scale-105 active:scale-95 cursor-pointer"
          >
            Book Trek +
          </button>
        </div>

      </div>
    </div>
  )
}