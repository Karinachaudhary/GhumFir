import { useState } from 'react'
import { useCart } from '../components/cart/CartContext'
import { Filter, ShoppingBag, Sparkles, ShieldCheck } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'
import { InView } from '../components/core/InView'

const GEAR_ITEMS = [
  {
    id: 'boots-trekking',
    name: 'GhumFir Himalayan Waterproof Boots',
    category: 'Footwear',
    rentalRate: 450,
    salePrice: 14500,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=600',
    description: 'Vibram high-traction sole with waterproof Gore-Tex membrane. Essential for Annapurna & Everest passes.',
  },
  {
    id: 'sleeping-bag-down',
    name: 'Himalayan Down Sleeping Bag (-20°C)',
    category: 'Camp Gear',
    rentalRate: 500,
    salePrice: 18000,
    image: 'https://images.unsplash.com/photo-1510312305653-8ed496efae75?q=80&w=600',
    description: '800-fill duck down insulation. Keeps you warm in sub-zero teahouse nights above 4,000m.',
  },
  {
    id: 'poles-carbon',
    name: 'Carbon Fiber Anti-Shock Poles',
    category: 'Accessories',
    rentalRate: 150,
    salePrice: 4500,
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=600',
    description: 'Lightweight, foldable carbon fiber with ergonomic cork grips. Saves your knees on steep mountain descents.',
  },
  {
    id: 'down-jacket-expedition',
    name: 'Heavy Expedition Down Parka (-25°C)',
    category: 'Clothing',
    rentalRate: 550,
    salePrice: 21000,
    image: 'https://images.unsplash.com/photo-1544923246-77307dd654cb?q=80&w=600',
    description: 'Weatherproof ripstop shell with high-loft down baffles. Built for cold Thorong La & Kala Patthar mornings.',
  },
  {
    id: 'solar-charger-portable',
    name: 'Mountain Solar Charger 24W Foldable',
    category: 'Electronics',
    rentalRate: 200,
    salePrice: 6500,
    image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?q=80&w=600',
    description: 'Dual USB ports to charge your phone and camera on trails where teahouses charge expensive battery fees.',
  },
  {
    id: 'water-purifier-uv',
    name: 'UV SteriPEN Water Purifier',
    category: 'Accessories',
    rentalRate: 180,
    salePrice: 7200,
    image: 'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?q=80&w=600',
    description: 'Destroys 99.9% of bacteria and viruses in 90 seconds. Eliminates the need to buy single-use plastic bottles.',
  }
]

const CATEGORIES = ['All', 'Footwear', 'Camp Gear', 'Clothing', 'Accessories', 'Electronics']

// Staggered blur + scale reveal animation variants
const itemVariants = {
  hidden: {
    opacity: 0,
    scale: 0.85,
    filter: 'blur(10px)',
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export default function Products() {
  const { addToCart } = useCart()
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [pricingMode, setPricingMode] = useState('rental') // 'rental' | 'buy'

  const filteredGear = selectedCategory === 'All'
    ? GEAR_ITEMS
    : GEAR_ITEMS.filter((item) => item.category === selectedCategory)

  return (
    <section className="py-20 bg-[#1a2e1f] text-[#f5f0e8] relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 space-y-12 font-sans">
      
      {/* Header */}
      <div className="space-y-4">
        <span className="inline-block bg-[#3d6b4f]/10 text-[#e8ebde] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
          सामाग्री तथा गाइड भण्डार (Gear Store)
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#dae8de] tracking-tight">
          Trekking Gear Rentals & Sales
        </h1>
        <p className="text-sm md:text-base text-[#e1f1ec] max-w-2xl leading-relaxed">
          Why buy expensive alpine gear you'll only use for one week? Rent certified high-altitude equipment per day, or buy sustainable gear directly in Nepal.
        </p>
      </div>

      {/* Filter and Rent/Buy Switcher Bar */}
      <div className="bg-white rounded-3xl p-4 shadow-sm border border-[#3d6b4f]/15 flex flex-col md:flex-row md:items-center justify-between gap-4">
        
        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
          <Filter className="w-4 h-4 text-[#3d6b4f] mr-1 shrink-0" />
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-[#1a2e1f] text-white shadow-sm'
                  : 'bg-[#f5f0e8] text-[#3d5e53] hover:bg-[#3d6b4f]/15'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
 
        {/* Pricing Mode Toggle: Rent vs Buy */}
        <div className="flex items-center bg-[#f5f0e8] p-1 rounded-2xl border border-[#3d6b4f]/20 self-start md:self-auto">
          <button
            onClick={() => setPricingMode('rental')}
            className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              pricingMode === 'rental' ? 'bg-[#3d6b4f] text-white shadow-sm' : 'text-[#3d5e53]'
            }`}
          >
            Rent Per Day
          </button>
          <button
            onClick={() => setPricingMode('buy')}
            className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              pricingMode === 'buy' ? 'bg-[#3d6b4f] text-white shadow-sm' : 'text-[#3d5e53]'
            }`}
          >
            Buy New
          </button>
        </div>

      </div>

      {/* InView Scroll Container with Staggered Blur Reveal */}
      <InView
        viewOptions={{ once: true, margin: '0px 0px -100px 0px' }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1, // Staggers each item smoothly
            },
          },
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredGear.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="bg-white rounded-3xl overflow-hidden border border-[#3d6b4f]/15 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Product Image */}
              <div className="h-64 bg-black/5 overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-[#1a2e1f]/80 text-[#f5f0e8] text-[10px] font-mono font-bold px-3 py-1 rounded-full backdrop-blur-sm">
                  {item.category}
                </span>
              </div>

              {/* Product Details */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="font-bold text-lg text-[#1a2e1f] group-hover:text-[#3d6b4f] transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs text-[#3d5e53] leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>

                {/* Price & Add to Cart Button */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <span className="block text-[10px] uppercase font-mono text-gray-400">
                      {pricingMode === 'rental' ? 'Daily Rental' : 'Purchase Price'}
                    </span>
                    <span className="text-lg font-extrabold text-[#1a2e1f]">
                      NPR {pricingMode === 'rental' ? `${item.rentalRate.toLocaleString()} / day` : item.salePrice.toLocaleString()}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => addToCart({
                      id: `${item.id}-${pricingMode}`,
                      name: item.name,
                      title: item.name,
                      priceNpr: pricingMode === 'rental' ? item.rentalRate : item.salePrice,
                      image: item.image,
                      isRental: pricingMode === 'rental',
                      rentalDays: 1,
                      quantity: 1
                    })}
                    className="bg-[#3d6b4f] hover:bg-[#2d523c] text-white px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-sm hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-1.5"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>{pricingMode === 'rental' ? 'Rent Gear +' : 'Buy Now +'}</span>
                  </button>
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