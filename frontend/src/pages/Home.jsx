import React, { useState, useEffect, useRef } from 'react'

// Mock Data for Destinations & Products
const FEATURED_DESTINATIONS = [
  {
    id: 1,
    title: "Annapurna Circuit Eco-Trek",
    region: "Annapurna",
    elevation: "5,416m",
    days: "12 Days",
    pailaScore: 96,
    price: "NPR 65,000",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800",
    tag: "Cultural Homestay"
  },
  {
    id: 2,
    title: "Everest Footprint Trail",
    region: "Khumbu",
    elevation: "5,364m",
    days: "14 Days",
    pailaScore: 92,
    price: "NPR 110,000",
    image: "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?q=80&w=800",
    tag: "Sherpa Heritage"
  },
  {
    id: 3,
    title: "Langtang Sacred Valley Walk",
    region: "Langtang",
    elevation: "4,773m",
    days: "8 Days",
    pailaScore: 98,
    price: "NPR 42,000",
    image: "https://images.unsplash.com/photo-1585863810459-00f72ec1c8b3?q=80&w=800",
    tag: "100% Local Eco"
  }
]

const FEATURED_GEAR = [
  {
    id: 1,
    name: "GhumFir Waterproof Trekking Boots",
    type: "Rental & Sale",
    rentalRate: "NPR 450 / day",
    salePrice: "NPR 14,500",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=600"
  },
  {
    id: 2,
    name: "Himalayan Down Sleeping Bag (-20°C)",
    type: "Rental & Sale",
    rentalRate: "NPR 500 / day",
    salePrice: "NPR 18,000",
    image: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?q=80&w=600"
  },
  {
    id: 3,
    name: "Carbon Fiber Anti-Shock Poles",
    type: "Rental & Sale",
    rentalRate: "NPR 150 / day",
    salePrice: "NPR 4,500",
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=600"
  }
]

export default function Home() {
  const [activeTab, setActiveTab] = useState('all')
  const videoRef = useRef(null)

  // Guarantee 100% Programmatic Autoplay on Website Load
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true
      videoRef.current.play().catch((error) => {
        console.log("Autoplay fallback:", error)
      })
    }
  }, [])

  return (
    <div className="space-y-16 pb-12">

      {/* ========================================================================= */}
      {/* CARD 1: CINEMATIC SCENERY HERO VIDEO CARD */}
      {/* ========================================================================= */}
      <section className="relative w-full h-screen min-h-150 overflow-hidden shadow-2xl">
        
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
            src="/homevideo.mp4" 
            type="video/mp4" 
          />
        </video>

        {/* Dark Ambient Overlay Gradient */}
        <div className="absolute inset-0 bg-linear-to-t from-[#1a2e1f] via-[#1a2e1f]/40 to-black/30"></div>

        {/* Hero Content Overlay */}
        <div className="absolute inset-0 z-10 pointer-events-none flex items-end pb-20 md:pb-28 px-8 md:px-16 text-red-600">
          <div className="pt-12 space-y-4">

            <h1 className="text-4xl md:text-6xl font-serif tracking-tight leading-tight">
               हाम्रो नेपाल<br />
              <span className="text-amber-50 md:text-3xl">नेपाल जान्नुहोस्। अनुभव गर्नुहोस्। यसको एउटा टुक्रा साथमा लैजानुहोस्।</span>
            </h1>

            {/* <p className="text-base md:text-xl text-[#f5f0e8]/90 max-w-2xl mx-auto font-light"> */}
              {/* Book sustainable Himalayan treks, rent eco-certified gear, and leave direct financial footprints in remote mountain villages. */}
            {/* </p> */}
          </div>

          {/* Interactive Search Bar Card */}
          {/* <div className="bg-[#f5f0e8]/95 backdrop-blur-md text-[#1a2e1f] p-4 md:p-6 rounded-2xl shadow-2xl border border-white/30 grid grid-cols-1 md:grid-cols-4 gap-4 text-left">
            <div>
              <label className="block text-xs font-bold uppercase text-[#3d6b4f]">Destination</label>
              <input type="text" placeholder="Where to walk? (e.g. Annapurna)" className="w-full bg-transparent border-b border-[#3d6b4f]/30 py-1 text-sm focus:outline-none focus:border-[#3d6b4f]" />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-[#3d6b4f]">Trek Month</label>
              <select className="w-full bg-transparent border-b border-[#3d6b4f]/30 py-1 text-sm focus:outline-none focus:border-[#3d6b4f]">
                <option>Autumn (Oct - Nov)</option>
                <option>Spring (Mar - May)</option>
                <option>Monsoon Eco-Trek</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-[#3d6b4f]">Paila Eco Score</label>
              <select className="w-full bg-transparent border-b border-[#3d6b4f]/30 py-1 text-sm focus:outline-none focus:border-[#3d6b4f]">
                <option>All Eco Ratings</option>
                <option>90+ Homestay Certified</option>
                <option>Zero-Plastic Trails</option>
              </select>
            </div>

            <button className="bg-[#3d6b4f] hover:bg-[#2d523c] text-[#f5f0e8] py-3 rounded-xl text-sm font-semibold transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer">
              <span>Find My Trail</span> →
            </button> */}
          {/* </div> */}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* CARD 2: POPULAR DESTINATIONS & CULTURES */}
      {/* ========================================================================= */}
      <section className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#3d6b4f]">
              पाइला गन्तव्यहरू (Paila Trails)
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a2e1f]">
              Popular Destinations & Cultures
            </h2>
          </div>
          <p className="text-sm text-[#3d5e53] max-w-md">
            Every trail supports local Sherpa and Tamang communities with fair economic distribution.
          </p>
        </div>

        {/* Destination Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURED_DESTINATIONS.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-md border border-[#3d6b4f]/10 group hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <span className="absolute top-4 left-4 bg-[#1a2e1f]/80 text-[#f5f0e8] text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
                  {item.tag}
                </span>
                <span className="absolute top-4 right-4 bg-amber-400 text-[#1a2e1f] text-xs font-bold px-3 py-1 rounded-full shadow">
                  Paila Eco {item.pailaScore}%
                </span>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex justify-between items-center text-xs font-mono text-[#3d6b4f]">
                  <span>📍 {item.region}</span>
                  <span>⛰️ Max {item.elevation}</span>
                  <span>⏳ {item.days}</span>
                </div>

                <h3 className="text-xl font-bold text-[#1a2e1f] group-hover:text-[#3d6b4f] transition-colors">
                  {item.title}
                </h3>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-lg font-extrabold text-[#1a2e1f]">{item.price}</span>
                  <button className="bg-[#f5f0e8] hover:bg-[#3d6b4f] text-[#3d6b4f] hover:text-white px-4 py-2 rounded-lg text-xs font-semibold transition-colors cursor-pointer">
                    View Itinerary →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* CARD 3: PRODUCTS & HOSPITALITY MARKETPLACE */}
      {/* ========================================================================= */}
      <section className="bg-[#1a2e1f] text-[#f5f0e8] rounded-3xl p-8 md:p-12 space-y-8 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#3d6b4f]/40 pb-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#a7d4c5]">
              सामाग्री तथा गाइड भण्डार (Marketplace)
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#f5f0e8]">
              Gear Rentals & Local Hospitality
            </h2>
          </div>
          <p className="text-sm text-[#f5f0e8]/75 max-w-md">
            Rent high-altitude gear per day or hire verified local Sherpas directly.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURED_GEAR.map((gear) => (
            <div key={gear.id} className="bg-[#243e2b] rounded-2xl overflow-hidden border border-[#3d6b4f]/30 space-y-4 p-5 hover:border-[#a7d4c5]/50 transition-all">
              <div className="h-48 rounded-xl overflow-hidden bg-black/20">
                <img src={gear.image} alt={gear.name} className="w-full h-full object-cover" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono text-[#a7d4c5]">{gear.type}</span>
                <h3 className="text-lg font-bold text-white">{gear.name}</h3>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <div>
                  <span className="block text-xs text-[#f5f0e8]/60">Rental Rate</span>
                  <span className="text-base font-extrabold text-amber-300">{gear.rentalRate}</span>
                </div>

                <button className="bg-[#3d6b4f] hover:bg-[#2d523c] text-white px-4 py-2 rounded-xl text-xs font-semibold transition-colors cursor-pointer">
                  Rent / Buy
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}