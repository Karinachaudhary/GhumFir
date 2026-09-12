import { Sparkles, Compass, Heart, ShieldCheck } from 'lucide-react'
import {useState, useEffect, useRef} from 'react'

const ETIQUETTE_RULES = [
  {
    id: 1,
    title: 'Clockwise Circle (प्रदक्षिणा)',
    subtitle: 'Pass Mani Walls & Stupas on your right',
    description: 'In Tibetan Buddhist tradition, always walk around Chortens, Mani stones, and prayer wheels clockwise. Spin prayer wheels in a clockwise direction with good intentions.',
    icon: '☸️',
  },
  {
    id: 2,
    title: 'Sacred Unclimbed Summits',
    subtitle: 'Respect forbidden holy peaks',
    description: 'Mount Machapuchare (Fishtail) in the Annapurna range is considered the sacred home of Lord Shiva and has never been summited. We honor its sanctity from below.',
    icon: '🏔️',
  },
  {
    id: 3,
    title: 'Monastery & Temple Decorum',
    subtitle: 'Remove footwear & dress modestly',
    description: 'Always remove your shoes and hats before stepping into Buddhist Gompas and Hindu Mandirs. Always ask politely before photographing monks or sacred butter lamps.',
    icon: '🛕',
  },
  {
    id: 4,
    title: 'Paila Eco-Pledge (सकारात्मक पाइला)',
    subtitle: 'Zero plastic & local wealth',
    description: 'Carry a refillable canteen with purification tablets. Support remote village teahouses and buy locally hand-woven woolens so your money directly uplifts the families living there.',
    icon: '🐾',
  }
]

const SACRED_COMMUNITIES = [
  {
    name: 'Sherpa (शर्पा)',
    region: 'Khumbu & Solukhumbu',
    badge: 'Highland Guardians',
    description: 'Famous worldwide for high-altitude endurance and deep Vajrayana Buddhist philosophy. Their homes and monasteries are sacred sanctuaries of kindness.',
  },
  {
    name: 'Gurung & Magar (गुरुङ तथा मगर)',
    region: 'Annapurna & Gandaki',
    badge: 'Mid-Hills Pioneers',
    description: 'Celebrated for legendary cliff honey hunting, terraced agricultural marvels, vibrant Rodhi musical gatherings, and warm homestay hospitality.',
  },
  {
    name: 'Tamang (तामाङ)',
    region: 'Langtang & Helambu',
    badge: 'Sacred Valley Artisans',
    description: 'Renowned for intricate Thangka sacred artwork, woodcarving, and ancient horse-trading trails connecting Nepal with Tibet.',
  },
  {
    name: 'Newar (नेवार)',
    region: 'Kathmandu Valley',
    badge: 'Architectural Masters',
    description: 'The ancient builders of multi-tiered pagoda temples, metal craft, stone sculptures, and rich masked festival dances.',
  }
]

export default function Culture() {
  const videoRef = useRef(null)
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true
      videoRef.current.play().catch((error) => {
        console.error('Error playing video:', error)
      })
    }
  }, []);

  return (
    <div className="w-full pb-16">
      <section className="relative w-full min-h-120 max-h-140 overflow-hidden shadow-2xl">
        
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
            src="/culture.mp4" 
            type="video/mp4" 
          />
        </video>
</section>
<div className="max-w-7xl w-full px-6 md:px-8 py-10 space-y-12">
      {/* Page Header */}
      <div className="space-y-4 max-w-3xl">
        <span className="inline-block bg-[#3d6b4f]/10 text-[#3d6b4f] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
          सांस्कृतिक मर्यादा तथा सम्पदा (Cultural Heritage)
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#1a2e1f] tracking-tight">
          Respecting Nepal: Mountain Lore & Sacred Etiquette
        </h1>
        <p className="text-sm md:text-base text-[#3d5e53] leading-relaxed">
          In Nepal, the mountains are not mere piles of rock to conquer — they are sacred deities. When you travel with GhumFir, you walk as an honored guest who respects the sacred customs of the Himalayas.
        </p>
      </div>

      {/* 4 Pillars of Mountain Etiquette */}
      <div className="space-y-8">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-amber-500" />
          <h2 className="text-2xl md:text-3xl font-bold text-[#1a2e1f]">
            Essential Mountain Trail Etiquette (पाइला मर्यादा)
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ETIQUETTE_RULES.map((rule) => (
            <div
              key={rule.id}
              className="bg-white rounded-3xl p-6 border border-[#3d6b4f]/15 shadow-sm hover:shadow-md transition-all space-y-3"
            >
              <div className="flex items-center gap-4">
                <span className="text-4xl p-3 bg-[#f5f0e8] rounded-2xl">{rule.icon}</span>
                <div>
                  <h3 className="font-bold text-lg text-[#1a2e1f]">{rule.title}</h3>
                  <span className="text-xs font-mono text-[#3d6b4f] font-semibold">{rule.subtitle}</span>
                </div>
              </div>
              <p className="text-xs md:text-sm text-[#3d5e53] leading-relaxed pt-1">
                {rule.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Indigenous Mountain Custodians */}
      <div className="bg-[#1a2e1f] text-[#f5f0e8] rounded-3xl p-8 md:p-14 space-y-10 shadow-2xl border border-[#3d6b4f]/30">
        <div className="space-y-3">
          <span className="text-xs font-mono text-[#a7d4c5] uppercase tracking-widest font-semibold">
            स्थानिय समुदाय (Indigenous Custodians)
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            The Peoples of the Himalayas
          </h2>
          <p className="text-sm text-[#f5f0e8]/80 max-w-2xl">
            Each valley has its own dialect, songs, and architecture. Here are the diverse cultural custodians of the trails you will walk.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SACRED_COMMUNITIES.map((community) => (
            <div
              key={community.name}
              className="bg-[#243e2b] rounded-2xl p-6 border border-[#3d6b4f]/30 space-y-4 flex flex-col justify-between hover:border-[#a7d4c5]/40 transition-colors"
            >
              <div className="space-y-2">
                <span className="inline-block bg-[#a7d4c5]/20 text-[#a7d4c5] text-[10px] font-mono font-bold px-2.5 py-1 rounded-full">
                  {community.badge}
                </span>
                <h3 className="font-bold text-lg text-white">{community.name}</h3>
                <span className="block text-xs text-amber-300 font-mono">📍 {community.region}</span>
                <p className="text-xs text-[#f5f0e8]/75 leading-relaxed pt-1">
                  {community.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
</div>
    </div>
  )
}