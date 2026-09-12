import { useState, useMemo, useRef, useEffect } from 'react'
import { DESTINATIONS_DATA } from '../data/destinations'
import DestinationFilter from '../components/destination/DestinationFilter'
import DestinationMap from '../components/destination/DestinationMap'
import DestinationCard from '../components/destination/DestinationCard'

export default function Destination() {
  const [selectedDestination, setSelectedDestination] = useState(null)
  const videoRef = useRef(null)
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true
      videoRef.current.play().catch((error) => {
        console.error('Error playing video:', error)
      })
    }
  }, [])

  // Filter State
  const [filters, setFilters] = useState({
    search: '',
    region: 'All',
    difficulty: 'All',
    minEcoScore: 0,
  })

  // Filter Handler
  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }))
  }

  // Reset Filters
  const handleResetFilters = () => {
    setFilters({ search: '', region: 'All', difficulty: 'All', minEcoScore: 0 })
  }

  // Filter Algorithm using useMemo (Senior Engineer Performance Optimization!)
  const filteredDestinations = useMemo(() => {
    return DESTINATIONS_DATA.filter((dest) => {
      // 1. Search Query Match
      const matchesSearch =
        dest.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        dest.region.toLowerCase().includes(filters.search.toLowerCase()) ||
        dest.cultureTag.toLowerCase().includes(filters.search.toLowerCase())

      // 2. Region Match
      const matchesRegion = filters.region === 'All' || dest.region === filters.region

      // 3. Difficulty Match
      const matchesDifficulty = filters.difficulty === 'All' || dest.difficulty === filters.difficulty

      // 4. GhumFireco score match
      const matchesEco = dest.GhumFirEcoScore >= filters.minEcoScore

      return matchesSearch && matchesRegion && matchesDifficulty && matchesEco
    })
  }, [filters])

  return (
    <div className="space-y-12 w-full pb-16">
      {/* Cinematic videooo */}
      <section className="relative w-full h-[50vh] min-h-120 max-h-140 overflow-hidden shadow-2xl">
        
        {/* Background Looping Video with useRef Autoplay */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
        //   poster="https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1600"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source  
            src="/destination.mp4" 
            type="video/mp4" 
          />
        </video>
</section>
<div className="max-w-7xl mx-auto px-6 md:px-8 py-12 space-y-12 font-sans">
      {/* Page Header */}
      <div className="space-y-3 text-center md:text-left">
        <span className="inline-block bg-[#3d6b4f]/10 text-[#3d6b4f] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
          गन्तव्यहरू (GhumFir Trails of Nepal)
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#1a2e1f] tracking-tight">
          Destinations & Sacred Trails
        </h1>
        <p className="text-sm md:text-base text-[#3d5e53] max-w-2xl">
          Discover handpicked Himalayan trekking circuits. Every booking directly finances local Sherpa, Gurung, and Tamang mountain communities.
        </p>
      </div>

      {/* 1. Interactive Nepal Trail Map */}
      <DestinationMap
        destinations={filteredDestinations}
        selectedId={selectedDestination?.id}
        onSelectDestination={(dest) => setSelectedDestination(dest)}
      />

      {/* 2. Destination Filter Bar */}
      <DestinationFilter
        filters={filters}
        onFilterChange={handleFilterChange}
        onResetFilters={handleResetFilters}
        totalResults={filteredDestinations.length}
      />

      {/* 3. Destination Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredDestinations.map((dest) => (
          <DestinationCard
            key={dest.id}
            destination={dest}
            onSelect={(item) => setSelectedDestination(item)}
          />
        ))}
      </div>
</div>
    </div>
  )
}