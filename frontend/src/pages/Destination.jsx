import { useState, useMemo } from 'react'
import { DESTINATIONS_DATA } from '../data/destinations'
import DestinationFilter from '../components/destination/DestinationFilter'
import DestinationMap from '../components/destination/DestinationMap'
import DestinationCard from '../components/destination/DestinationCard'

export default function Destination() {
  const [selectedDestination, setSelectedDestination] = useState(null)
  
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
    <div className="space-y-12 max-w-7xl mx-auto px-6 md:px-8 py-10">
      
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
  )
}