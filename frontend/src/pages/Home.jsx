import React, { useEffect, useRef } from 'react'
import DestinationSlider from '../components/home/DestinationSlider'
import CultureSlider from '../components/home/CultureSlider'
import PopularProducts from '../components/home/PopularProducts'

export default function Home() {
  // const [activeTab, setActiveTab] = useState('all')
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

    {/* Cinematic videooo */}
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
            src="/home.mp4" 
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
      {/* Interactive Destination and CultureSlider  */}
      <DestinationSlider />

      <CultureSlider />
      <PopularProducts />

      
    </div>
  )
}