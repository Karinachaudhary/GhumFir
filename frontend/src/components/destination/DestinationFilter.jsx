import { Search, SlidersHorizontal, RotateCcw, Leaf } from 'lucide-react'

const REGIONS = ['All', 'Annapurna', 'Khumbu', 'Langtang', 'Mustang', 'Far-West']
const DIFFICULTIES = ['All', 'Easy', 'Moderate', 'Challenging']

export default function DestinationFilter({ 
  filters, 
  onFilterChange, 
  onResetFilters,
  totalResults 
}) {
  const isFiltered = 
    filters.search !== '' || 
    filters.region !== 'All' || 
    filters.difficulty !== 'All' || 
    filters.minEcoScore > 0

  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-[#3d6b4f]/15 space-y-6">
      
      {/* Top Row: Search & Dropdown Filters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        {/* 1. Live Search Input */}
        <div className="relative">
          <Search className="w-4 h-4 text-[#3d6b4f] absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search trail, culture, or region..."
            value={filters.search}
            onChange={(e) => onFilterChange('search', e.target.value)}
            className="w-full bg-[#f5f0e8]/50 border border-[#3d6b4f]/20 rounded-2xl pl-11 pr-4 py-3 text-sm text-[#1a2e1f] placeholder:text-[#3d5e53]/50 focus:outline-none focus:border-[#3d6b4f] focus:bg-white transition-all"
          />
        </div>

        {/* 2. Difficulty Dropdown */}
        <div className="relative">
          <select
            value={filters.difficulty}
            onChange={(e) => onFilterChange('difficulty', e.target.value)}
            className="w-full bg-[#f5f0e8]/50 border border-[#3d6b4f]/20 rounded-2xl px-4 py-3 text-sm text-[#1a2e1f] focus:outline-none focus:border-[#3d6b4f] focus:bg-white transition-all cursor-pointer appearance-none"
          >
            {DIFFICULTIES.map((diff) => (
              <option key={diff} value={diff}>
                Difficulty: {diff}
              </option>
            ))}
          </select>
          <SlidersHorizontal className="w-4 h-4 text-[#3d6b4f] absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>

        {/* 3. GhumFir Eco-Score Toggle */}
        <button
          type="button"
          onClick={() => onFilterChange('minEcoScore', filters.minEcoScore === 95 ? 0 : 95)}
          className={`flex items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold transition-all border cursor-pointer ${
            filters.minEcoScore === 95
              ? 'bg-[#3d6b4f] text-white border-[#3d6b4f] shadow-sm'
              : 'bg-[#f5f0e8]/50 text-[#3d6b4f] border-[#3d6b4f]/20 hover:bg-[#3d6b4f]/10'
          }`}
        >
          <Leaf className="w-4 h-4" />
          <span>95%+ High GhumFir Eco-Impact</span>
        </button>

      </div>

      {/* Bottom Row: Region Pills & Active Count */}
      <div className="pt-2 border-t border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
        
        {/* Region Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
          <span className="text-xs font-mono text-gray-400 uppercase mr-1">Region:</span>
          {REGIONS.map((region) => (
            <button
              key={region}
              type="button"
              onClick={() => onFilterChange('region', region)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                filters.region === region
                  ? 'bg-[#1a2e1f] text-white shadow-sm scale-105'
                  : 'bg-[#f5f0e8] text-[#3d5e53] hover:bg-[#3d6b4f]/15 hover:text-[#1a2e1f]'
              }`}
            >
              {region}
            </button>
          ))}
        </div>

        {/* Total Results & Reset Button */}
        <div className="flex items-center gap-4 text-xs font-mono text-[#3d5e53]">
          <span>Found {totalResults} {totalResults === 1 ? 'Trail' : 'Trails'}</span>
          
          {isFiltered && (
            <button
              type="button"
              onClick={onResetFilters}
              className="flex items-center gap-1 text-[#a81c1c] hover:underline font-semibold cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          )}
        </div>

      </div>

    </div>
  )
}