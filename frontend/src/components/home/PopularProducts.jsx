import { Link } from 'react-router-dom'
import { InView } from '../core/InView'
import { motion } from 'motion/react'
import { useCart } from '../cart/CartContext'
import { ShieldCheck, ShoppingBag, ArrowRight, Sparkles, Tag } from 'lucide-react'

// Curated high-altitude gear items
const GEAR_ITEMS = [
  {
    id: 'himalayan-down-jacket',
    name: '8000m Goose Down Expedition Parka',
    category: 'Outerwear',
    rentPrice: 350,
    buyPrice: 18500,
    image: 'https://images.unsplash.com/photo-1544923246-77307dd654cb?q=80&w=800',
    tag: 'Trekker Favorite'
  },
  {
    id: 'goretex-trek-boots',
    name: 'Vibram Waterproof Alpine Boots',
    category: 'Footwear',
    rentPrice: 250,
    buyPrice: 14200,
    image: 'https://images.unsplash.com/photo-1520639888713-7851133b1ed0?q=80&w=800',
    tag: 'High Grip'
  },
  {
    id: 'carbon-trekking-poles',
    name: 'Ultralight Carbon Fiber Trekking Poles',
    category: 'Hardware',
    rentPrice: 120,
    buyPrice: 4800,
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=800',
    tag: 'Knee Saver'
  },
  {
    id: 'four-season-tent',
    name: 'High-Wind Expedition 3-Person Tent',
    category: 'Shelter',
    rentPrice: 500,
    buyPrice: 28000,
    image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=800',
    tag: 'Stormproof'
  },
  {
    id: 'subzero-sleeping-bag',
    name: '-20°C Down Alpine Sleeping Bag',
    category: 'Camp Comfort',
    rentPrice: 300,
    buyPrice: 16500,
    image: 'https://images.unsplash.com/photo-1510312305653-8ed496efae75?q=80&w=800',
    tag: 'Sub-Zero Tested'
  },
  {
    id: 'expedition-backpack-65l',
    name: 'Sherpa-Trail 65L Ergonomic Backpack',
    category: 'Packs',
    rentPrice: 280,
    buyPrice: 12900,
    image: 'https://images.unsplash.com/photo-1622260614153-03223fb72052?q=80&w=800',
    tag: 'Comfort Load'
  }
]

// Item reveal animation variants
const itemVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.85, 
    filter: 'blur(12px)',
    y: 20 
  },
  visible: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1], // Smooth cubic-bezier easeOut
    },
  },
}

export default function PopularProducts() {
  const { addToCart } = useCart()

  const handleQuickRent = (item) => {
    addToCart({
      id: `${item.id}-rental`,
      title: `${item.name} (Rental)`,
      priceNpr: item.rentPrice,
      unitPrice: item.rentPrice,
      image: item.image,
      isRental: true,
      rentalDays: 1,
      quantity: 1,
    })
  }

  return (
    <section className="py-20 bg-[#1a2e1f] text-[#f5f0e8] relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#3d6b4f]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 space-y-12">
        
        {/* Header with 'Explore All' Button */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#3d6b4f]/30 border border-[#3d6b4f]/40 px-3.5 py-1.5 rounded-full text-xs font-bold text-amber-300 uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>GhumFir Expedition Gear Locker</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
              Rent or Own High-Altitude Gear
            </h2>
            <p className="text-sm md:text-base text-gray-300 mt-2 max-w-xl">
              Why buy expensive equipment for a one-time trek? Rent sanitized, tested gear by the day or purchase brand new.
            </p>
          </div>

          <Link
            to="/products"
            className="inline-flex items-center gap-2 bg-[#f5f0e8] hover:bg-amber-400 text-[#1a2e1f] font-bold px-6 py-3.5 rounded-2xl text-xs transition-all shadow-lg hover:scale-105 group self-start md:self-auto"
          >
            <span>Explore Full Gear Catalog</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Scroll In-View Staggered Grid */}
        <InView
          viewOptions={{ once: true, margin: '0px 0px -150px 0px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.12, // Each item reveals one after another
              },
            },
          }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {GEAR_ITEMS.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-sm group hover:border-[#3d6b4f]/50 hover:bg-white/10 transition-all duration-300 flex flex-col"
              >
                {/* Product Image */}
                <div className="relative h-64 overflow-hidden bg-black/20">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Category Pill */}
                  <span className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-white text-[10px] font-mono px-3 py-1 rounded-full uppercase tracking-wider">
                    {item.category}
                  </span>

                  {/* Feature Tag */}
                  <span className="absolute top-3 right-3 bg-amber-400 text-[#1a2e1f] text-[10px] font-bold px-2.5 py-1 rounded-full shadow">
                    {item.tag}
                  </span>
                </div>

                {/* Details Body */}
                <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
                  <div>
                    <h3 className="font-bold text-lg text-white group-hover:text-amber-300 transition-colors line-clamp-1">
                      {item.name}
                    </h3>
                  </div>

                  {/* Pricing Comparison: Rent vs Buy */}
                  <div className="grid grid-cols-2 gap-3 py-3 border-y border-white/10 text-xs">
                    <div className="bg-white/5 p-2.5 rounded-xl border border-white/5">
                      <span className="text-gray-400 block text-[10px] uppercase font-mono">Rent Per Day</span>
                      <span className="font-extrabold text-amber-300 font-mono text-sm">
                        NPR {item.rentPrice}/day
                      </span>
                    </div>
                    <div className="bg-white/5 p-2.5 rounded-xl border border-white/5">
                      <span className="text-gray-400 block text-[10px] uppercase font-mono">Purchase Brand New</span>
                      <span className="font-bold text-gray-200 font-mono text-xs">
                        NPR {item.buyPrice.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-2 pt-1">
                    <button
                      onClick={() => handleQuickRent(item)}
                      className="flex-1 bg-[#3d6b4f] hover:bg-[#2d523c] text-white py-3 rounded-xl font-bold text-xs shadow-md transition-all hover:scale-[1.02] flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Rent for Trek</span>
                    </button>

                    <Link
                      to="/products"
                      className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-colors"
                      title="View item specs"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>
        </InView>

      </div>
    </section>
  )
}