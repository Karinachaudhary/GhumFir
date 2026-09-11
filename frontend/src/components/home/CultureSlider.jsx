import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Sparkles, ArrowRight, X, HeartHandshake, ShieldCheck, Compass } from 'lucide-react'

// Authentic Cultural Heritage & Indigenous Communities Dataset
const CULTURES_DATA = [
  {
    id: 'sherpa',
    name: 'Sherpa Highland Custodians',
    nepaliName: 'शेर्पा समुदाय र परम्परा',
    region: 'Khumbu & Solukhumbu',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800',
    philosophy: 'Guardians of Chomolungma (Mt. Everest) who believe peaks are residences of sacred deities.',
    etiquette: 'Never step over ceremonial hearth fires or prayer books. Always walk clockwise around Chortens (stupas).',
    sacredItem: 'Khata (White Silk Blessing Scarf) & Mani Stones',
    badge: 'High Altitude Custodians'
  },
  {
    id: 'gurung',
    name: 'Gurung & Rhododendron Valleys',
    nepaliName: 'गुरुङ संस्कृति र रोधीं',
    region: 'Annapurna & Lamjung',
    image: 'https://images.unsplash.com/photo-1518002171953-a080ee817e1f?q=80&w=800',
    philosophy: 'Renowned for warm community homestays, Rodhi traditions, and wild cliffside honey hunting.',
    etiquette: 'Accept ceremonial tea or local millet roxy with both hands to honor village elders.',
    sacredItem: 'Pachhiya (Embroidered Shawl) & Cliff Honey',
    badge: 'Homestay Pioneers'
  },
  {
    id: 'newar',
    name: 'Newari Valley Architecture',
    nepaliName: 'नेवारी सम्पदा र वास्तुकला',
    region: 'Kathmandu, Patan & Bhaktapur',
    image: 'https://images.unsplash.com/photo-1582650625119-3a31f8418b7d?q=80&w=800',
    philosophy: 'Masters of pagoda wood-carving, terracotta brickwork, and centuries-old Guthi communal heritage.',
    etiquette: 'Remove leather items before stepping inside ancient courtyards or tantric sanctums.',
    sacredItem: 'Torana Carvings & Sukunda Lamps',
    badge: 'Architectural Masters'
  },
  {
    id: 'tamang',
    name: 'Tamang Heritage Trails',
    nepaliName: 'तामाङ सम्पदा र सेलो',
    region: 'Langtang & Helambu',
    image: 'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?q=80&w=800',
    philosophy: 'Deep animist and Bon-Buddhist roots, traditional wool weaving, and joyous Damphu folk songs.',
    etiquette: 'Greet villagers with "Tashi Delek" accompanied by a respectful slight bow and palms pressed.',
    sacredItem: 'Damphu Drum & Hand-spun Yak Wool',
    badge: 'Ancient Heritage'
  },
  {
    id: 'tharu',
    name: 'Tharu Lowland Forest Guardians',
    nepaliName: 'थारू संस्कृति र प्रकृति संरक्षण',
    region: 'Chitwan & Terai',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800',
    philosophy: 'Centuries of peaceful coexistence with wild rhinos, tigers, and sacred elephant grass ecosystems.',
    etiquette: 'Respect clay wall paintings depicting village mythologies and wildlife spirits.',
    sacredItem: 'Traditional Peacock Dance & Clay Mural Art',
    badge: 'Terai Custodians'
  }
]

export default function CultureSlider() {
  const navigate = useNavigate()
  const [selectedCulture, setSelectedCulture] = useState(null)

  // Duplicate items for seamless continuous looping
  const marqueeItems = [...CULTURES_DATA, ...CULTURES_DATA]

  return (
    <section className="py-16 bg-white overflow-hidden relative border-t border-[#3d6b4f]/10">
      
      {/* 1. Header with 'Explore All Cultures' button */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#3d6b4f] mb-2">
            <HeartHandshake className="w-4 h-4 text-[#a81c1c]" />
            <span>Living Heritage & Custodians</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a2e1f] tracking-tight">
            Sacred Cultures of the Himalayas
          </h2>
          <p className="text-sm text-[#3d5e53] mt-1">
            Travel not just as a visitor, but as an invited companion honoring local traditions and ancient wisdom.
          </p>
        </div>

        {/* Explore More Button -> Goes to /culture */}
        <Link
          to="/culture"
          className="inline-flex items-center gap-2 bg-[#f5f0e8] hover:bg-[#3d6b4f] text-[#1a2e1f] hover:text-white border border-[#3d6b4f]/20 px-5 py-3 rounded-2xl text-xs font-bold transition-all shadow-sm hover:shadow-md group self-start sm:self-auto"
        >
          <span>Explore All Traditions</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* 2. Infinite Marquee Container */}
      <div className="relative w-full overflow-hidden">
        {/* Soft edge gradient fades */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee-reverse gap-6 flex">
          {marqueeItems.map((culture, idx) => (
            <div
              key={`${culture.id}-${idx}`}
              onClick={() => setSelectedCulture(culture)}
              className="w-72 sm:w-80 flex-shrink-0 bg-[#f5f0e8]/60 rounded-3xl overflow-hidden border border-[#3d6b4f]/15 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group flex flex-col hover:-translate-y-1"
            >
              {/* Culture Image & Badge */}
              <div className="relative h-48 overflow-hidden bg-black/10">
                <img
                  src={culture.image}
                  alt={culture.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                
                <span className="absolute top-3 left-3 bg-[#1a2e1f]/85 text-[#f5f0e8] text-[10px] font-semibold px-2.5 py-1 rounded-full backdrop-blur-md border border-white/10">
                  {culture.region}
                </span>

                <span className="absolute top-3 right-3 bg-[#a81c1c] text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-md">
                  {culture.badge}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-5 flex flex-col justify-between flex-1 space-y-3">
                <div>
                  <h3 className="font-extrabold text-base text-[#1a2e1f] group-hover:text-[#a81c1c] transition-colors line-clamp-1">
                    {culture.name}
                  </h3>
                  <p className="text-xs text-[#3d6b4f] font-serif italic mt-0.5">{culture.nepaliName}</p>
                </div>

                <p className="text-xs text-[#3d5e53] line-clamp-2 leading-relaxed">
                  {culture.philosophy}
                </p>

                <div className="pt-2 border-t border-[#3d6b4f]/10 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-gray-500 truncate max-w-[170px]">
                    ✦ {culture.sacredItem}
                  </span>
                  <span className="text-[11px] font-bold text-[#a81c1c] underline decoration-[#a81c1c]/40 group-hover:decoration-[#a81c1c]">
                    Learn Lore →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Pop-Up Preview Modal */}
      {selectedCulture && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn"
          onClick={() => setSelectedCulture(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-white/20 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedCulture(null)}
              className="absolute top-4 right-4 z-20 bg-black/40 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-md transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image Header */}
            <div className="relative h-60 w-full">
              <img
                src={selectedCulture.image}
                alt={selectedCulture.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="bg-[#a81c1c] text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-block mb-2 shadow">
                  {selectedCulture.badge}
                </span>
                <h3 className="text-2xl font-black">{selectedCulture.name}</h3>
                <p className="text-xs text-white/80 font-serif italic">{selectedCulture.nepaliName}</p>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-4">
              
              {/* Philosophy */}
              <div>
                <span className="text-xs uppercase font-mono text-[#3d6b4f] font-bold tracking-wider">
                  Heritage Philosophy
                </span>
                <p className="text-sm text-[#1a2e1f] mt-1 leading-relaxed">
                  {selectedCulture.philosophy}
                </p>
              </div>

              {/* Cultural Etiquette / Guide */}
              <div className="bg-[#f5f0e8] p-4 rounded-2xl border border-[#3d6b4f]/15 space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-[#a81c1c]">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Respect & Sacred Etiquette for Travelers:</span>
                </div>
                <p className="text-xs text-gray-700 leading-relaxed pl-6">
                  {selectedCulture.etiquette}
                </p>
              </div>

              {/* Sacred Symbol */}
              <div className="flex items-center gap-2 text-xs text-[#3d5e53] bg-gray-50 p-3 rounded-xl border border-gray-100">
                <Compass className="w-4 h-4 text-[#3d6b4f]" />
                <span><strong>Sacred Artifact & Heritage:</strong> {selectedCulture.sacredItem}</span>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex items-center justify-between gap-4 border-t border-gray-100">
                <span className="text-xs text-gray-400 font-mono">
                  Region: {selectedCulture.region}
                </span>

                <button
                  onClick={() => {
                    setSelectedCulture(null)
                    navigate('/culture')
                  }}
                  className="bg-[#1a2e1f] hover:bg-[#3d6b4f] text-white px-5 py-3 rounded-2xl text-xs font-bold shadow transition-all flex items-center gap-2 hover:scale-105 cursor-pointer"
                >
                  <span>Explore Cultural Protocols</span>
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