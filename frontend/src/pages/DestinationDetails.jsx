import { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { DESTINATIONS_DATA } from '../data/destinations'
import { useCart } from '../components/cart/CartContext'
import { 
  ArrowLeft, Mountain, Clock, MapPin, Leaf, ShieldCheck, 
  Sparkles, CheckCircle2, UserCheck, AlertTriangle, Calendar 
} from 'lucide-react'
 
export default function DestinationDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useCart()

  // Find destination matching URL parameter
  const destination = DESTINATIONS_DATA.find((d) => d.id === id) || DESTINATIONS_DATA[0]

  // Add-on State
  const [includeGuide, setIncludeGuide] = useState(true)
  const [includeMedicalKit, setIncludeMedicalKit] = useState(false)
  const [travelersCount, setTravelersCount] = useState(1)

  // Calculations
  const guideFee = includeGuide ? 2500 * (destination.durationDays || 10) : 0
  const medKitFee = includeMedicalKit ? 1500 : 0
  const totalTripPrice = (destination.priceNpr * travelersCount) + guideFee + medKitFee

  // Realistic Day-by-Day Itinerary Data Generator
  const ITINERARY_DAYS = [
    { day: 1, title: 'Arrival & Scenic Drive to Trailhead', elevation: '1,400m', hours: '5-6 hrs drive', desc: 'Briefing with your local guide, gear packing, and scenic mountain drive along riverside canyons.' },
    { day: 2, title: 'Entering the Sacred Pine Forests', elevation: '2,670m', hours: '5 hrs walk', desc: 'Ascend stone staircases carved through rhododendron and pine woodlands. First crossing of suspension bridges.' },
    { day: 3, title: 'Upper Valley Ascent & Monastic Vistas', elevation: '3,200m', hours: '6 hrs walk', desc: 'Enter traditional Buddhist villages. Spin sacred prayer wheels clockwise and see snow-capped giants emerge.' },
    { day: 4, title: 'Acclimatization Day (Active Rest)', elevation: '3,800m', hours: '3 hrs hike', desc: 'Climb high, sleep low. Day hike to an alpine glacial ridge for altitude adaptation and tea with local elders.' },
    { day: 5, title: 'High Alpine Pastures & Yak Herds', elevation: '4,200m', hours: '4-5 hrs walk', desc: 'Walk above the tree line where grazing yaks roam alpine meadows. Crisp, cold mountain air.' },
    { day: 6, title: 'High Mountain Pass Crossing', elevation: `${destination.elevationMeters.toLocaleString()}m`, hours: '7-8 hrs walk', desc: 'Early dawn departure with headlamps. Cross the legendary high pass as prayer flags flutter in the sunrise.' },
    { day: 7, title: 'Descent into Sacred Shrines & Celebration', elevation: '3,700m', hours: '5 hrs walk', desc: 'Descend to sacred temple grounds and peaceful village homestays. Warm organic dinner with village hosts.' }
  ]

  const handleBookNow = () => {
    addToCart({
      id: `${destination.id}-expedition`,
      title: `${destination.title} (${travelersCount} Traveler${travelersCount > 1 ? 's' : ''})`,
      priceNpr: totalTripPrice,
      image: destination.image,
      isRental: false,
      quantity: 1
    })
    navigate('/checkout')
  }

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-8 py-10 font-sans space-y-12">
      
      {/* Back Button */}
      <Link
        to="/destinations"
        className="inline-flex items-center gap-2 text-sm font-bold text-[#3d6b4f] hover:text-[#1a2e1f] transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to All Trails</span>
      </Link>

      {/* 1. HERO EXPEDITION BANNER */}
      <div className="relative h-105 md:h-125 rounded-3xl overflow-hidden shadow-2xl border border-[#3d6b4f]/20">
        <img
          src={destination.image}
          alt={destination.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#1a2e1f] via-[#1a2e1f]/40 to-transparent"></div>

        {/* Hero Overlay Info */}
        <div className="absolute bottom-8 left-6 right-6 md:left-12 md:right-12 text-white space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="bg-amber-300 text-[#1a2e1f] text-xs font-extrabold px-3.5 py-1.5 rounded-full shadow flex items-center gap-1.5">
              <Leaf className="w-3.5 h-3.5 text-[#3d6b4f]" />
              <span><GhumFir></GhumFir> Eco-Score {destination.GhumFirEcoScore || destination.GhumFirEcoScore || 96}%</span>
            </span>

            <span className="bg-[#1a2e1f]/80 text-[#f5f0e8] text-xs font-semibold px-3.5 py-1.5 rounded-full backdrop-blur-md border border-white/20">
              {destination.cultureTag}
            </span>
          </div>

          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              {destination.title}
            </h1>
            <p className="text-lg font-serif text-amber-200 mt-1">
              {destination.nepaliTitle}
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-mono pt-2 border-t border-white/20 text-[#f5f0e8]/90">
            <span className="flex items-center gap-1.5">
              <Mountain className="w-4 h-4 text-amber-300" />
              <span>Max Alt: {destination.elevationMeters.toLocaleString()}m</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-amber-300" />
              <span>Duration: {destination.durationDays} Days</span>
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-amber-300" />
              <span>Region: {destination.region}</span>
            </span>
          </div>
        </div>
      </div>

      {/* 2. TWO-COLUMN LAYOUT (Itinerary on Left, Booking Box on Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* LEFT COLUMN: Narrative & Day-by-Day Timeline (8 Cols) */}
        <div className="lg:col-span-8 space-y-12">
          
          {/* Overview Narrative */}
          <section className="bg-white rounded-3xl p-8 border border-[#3d6b4f]/15 shadow-sm space-y-4">
            <h2 className="text-2xl font-bold text-[#1a2e1f]">Expedition Overview</h2>
            <p className="text-sm md:text-base text-[#3d5e53] leading-relaxed">
              {destination.description}
            </p>

            {/* Cultural Tip Callout */}
            <div className="bg-[#f5f0e8] p-4 rounded-2xl border border-[#3d6b4f]/20 flex items-start gap-3 mt-4">
              <span className="text-2xl">☸️</span>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#3d6b4f]">
                  Sacred Cultural Lore & Etiquette
                </h4>
                <p className="text-xs text-[#3d5e53] mt-0.5">
                  {destination.culturalTip}
                </p>
              </div>
            </div>
          </section>

          {/* Day-by-Day Interactive Itinerary */}
          <section className="space-y-6">
            <div>
              <span className="text-xs font-mono font-bold uppercase text-[#3d6b4f] tracking-wider">
                पाइला-पाइला कार्यतालिका (Step by Step)
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1a2e1f] mt-1">
                Day-by-Day Trail Breakdown
              </h2>
            </div>

            <div className="space-y-4">
              {ITINERARY_DAYS.map((item) => (
                <div
                  key={item.day}
                  className="bg-white rounded-2xl p-6 border border-[#3d6b4f]/15 shadow-sm hover:border-[#3d6b4f]/40 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="space-y-1.5 max-w-lg">
                    <div className="flex items-center gap-2">
                      <span className="w-7 h-7 rounded-full bg-[#3d6b4f] text-white flex items-center justify-center text-xs font-extrabold font-mono">
                        D{item.day}
                      </span>
                      <h4 className="font-bold text-base text-[#1a2e1f]">{item.title}</h4>
                    </div>
                    <p className="text-xs text-[#3d5e53] leading-relaxed pl-9">
                      {item.desc}
                    </p>
                  </div>

                  <div className="flex sm:flex-col items-end justify-between sm:justify-center border-t sm:border-t-0 sm:border-l border-gray-100 pt-3 sm:pt-0 sm:pl-6 text-xs font-mono text-[#3d6b4f] shrink-0">
                    <span className="font-bold text-amber-700">⛰️ {item.elevation}</span>
                    <span className="text-gray-500">⏳ {item.hours}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* What's Included */}
          <section className="bg-white rounded-3xl p-8 border border-[#3d6b4f]/15 shadow-sm space-y-4">
            <h3 className="text-xl font-bold text-[#1a2e1f]">What is Included in This Paila Expedition</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#3d5e53]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#3d6b4f]" />
                <span>TIMS Trekking Card & National Park Permits</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#3d6b4f]" />
                <span>100% Local Family Teahouse Accommodations</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#3d6b4f]" />
                <span>Zero-Plastic Water Purification Assistance</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#3d6b4f]" />
                <span>Licensed Himalayan High-Altitude Emergency Support</span>
              </div>
            </div>
          </section>

        </div>

        {/* RIGHT COLUMN: Sticky Booking Card & Add-ons (4 Cols) */}
        <div className="lg:col-span-4 sticky top-28">
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-[#3d6b4f]/25 shadow-2xl space-y-6">
            
            <div>
              <span className="text-[10px] uppercase font-mono text-gray-400">Total Expedition Package</span>
              <div className="flex items-baseline gap-1 mt-0.5">
                <span className="text-3xl font-extrabold text-[#1a2e1f]">
                  NPR {totalTripPrice.toLocaleString()}
                </span>
                <span className="text-xs text-gray-500">/ total</span>
              </div>
            </div>

            {/* Travelers Count */}
            <div className="space-y-2 pt-4 border-t border-gray-100">
              <label className="block text-xs font-bold text-[#1a2e1f]">Number of Trekkers</label>
              <div className="flex items-center justify-between border border-[#3d6b4f]/20 rounded-xl p-2 bg-[#f5f0e8]/50">
                <button
                  type="button"
                  onClick={() => setTravelersCount(Math.max(1, travelersCount - 1))}
                  className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center font-bold text-sm cursor-pointer"
                >
                  -
                </button>
                <span className="font-bold text-sm">{travelersCount} Person{travelersCount > 1 ? 's' : ''}</span>
                <button
                  type="button"
                  onClick={() => setTravelersCount(travelersCount + 1)}
                  className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center font-bold text-sm cursor-pointer"
                >
                  +
                </button>
              </div>
            </div>

            {/* Ethical Add-on Toggles */}
            <div className="space-y-3 pt-2">
              <label className="block text-xs font-bold text-[#1a2e1f]">Ethical Guide & Safety Add-ons</label>
              
              {/* Sherpa Guide Toggle */}
              <label className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${includeGuide ? 'bg-[#3d6b4f]/10 border-[#3d6b4f]' : 'border-gray-200'}`}>
                <div className="flex items-center gap-2.5">
                  <input
                    type="checkbox"
                    checked={includeGuide}
                    onChange={(e) => setIncludeGuide(e.target.checked)}
                    className="accent-[#3d6b4f] w-4 h-4 cursor-pointer"
                  />
                  <div>
                    <span className="block text-xs font-bold text-[#1a2e1f]">Licensed Sherpa Guide</span>
                    <span className="text-[10px] text-gray-500">+NPR 2,500 / day (Fair Wage)</span>
                  </div>
                </div>
                <UserCheck className="w-4 h-4 text-[#3d6b4f]" />
              </label>

              {/* High Altitude Medical Kit */}
              <label className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${includeMedicalKit ? 'bg-[#3d6b4f]/10 border-[#3d6b4f]' : 'border-gray-200'}`}>
                <div className="flex items-center gap-2.5">
                  <input
                    type="checkbox"
                    checked={includeMedicalKit}
                    onChange={(e) => setIncludeMedicalKit(e.target.checked)}
                    className="accent-[#3d6b4f] w-4 h-4 cursor-pointer"
                  />
                  <div>
                    <span className="block text-xs font-bold text-[#1a2e1f]">Oxygen & Diamox MedKit</span>
                    <span className="text-[10px] text-gray-500">+NPR 1,500 total</span>
                  </div>
                </div>
                <ShieldCheck className="w-4 h-4 text-[#3d6b4f]" />
              </label>
            </div>

            {/* Book Now Button */}
            <button
              type="button"
              onClick={handleBookNow}
              className="w-full bg-[#3d6b4f] hover:bg-[#2d523c] text-white py-4 rounded-2xl font-bold text-sm shadow-xl transition-all hover:scale-105 active:scale-95 cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Book This Expedition →</span>
            </button>

            <p className="text-[11px] text-center text-gray-400">
              🐾 Earns +{Math.floor(totalTripPrice / 100)} Paila Eco-Loyalty Points
            </p>
          </div>
        </div>

      </div>

    </div>
  )
}