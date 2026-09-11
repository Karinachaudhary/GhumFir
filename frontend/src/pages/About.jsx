import { Link } from 'react-router-dom'
import { Heart, Sparkles, Footprints, Users, Compass, ArrowRight } from 'lucide-react'

const VOICES_OF_GHUMFIR = [
  {
    role: 'The Mountain Guide (सहयात्री)',
    name: 'Mingma Norbu Sherpa',
    valley: 'Khumbu Valley',
    story: 'Ghumfir isn’t an agency that sits in an office far away. They make sure we guides are paid fair living wages, insured, and respected as family on every pass.',
    avatar: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=400',
  },
  {
    role: 'The Teahouse Custodian',
    name: 'Dolma Gurung',
    valley: 'Annapurna Sanctuary',
    story: 'When travelers book through Ghumfir, they eat our local organic millet and sleep in our solar-warmed rooms. The wealth stays right here in our village.',
    avatar: 'https://images.unsplash.com/photo-1518002171953-a080ee817e1f?q=80&w=400',
  },
  {
    role: 'The Curious Wanderer',
    name: 'Elena & Lucas',
    valley: 'Langtang Valley',
    story: 'Ghumfir felt like traveling with a local friend who knew every hidden tea-stop and sacred monastic prayer time. We arrived as tourists and left as family.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400',
  },
]

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 space-y-24 font-sans text-[#1a2e1f]">
      
      {/* 1. HERO STORYTELLING BANNER */}
      <section className="space-y-6 max-w-3xl">
        <div className="inline-flex items-center gap-2 bg-[#3d6b4f]/10 text-[#3d6b4f] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider font-mono">
          <Heart className="w-3.5 h-3.5 text-red-600 fill-red-600" />
          <span>हाम्रो कथा (The Ghumfir Story)</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
          Nepal is more than a destination. <br />
          <span className="italic font-serif text-[#3d6b4f]">
            It is a story waiting to be lived together.
          </span>
        </h1>

        <p className="text-base md:text-lg text-[#3d5e53] leading-relaxed">
          Ghumfir was born from a simple Nepali phrase spoken among close friends: <br />
          <span className="font-bold text-[#1a2e1f]">"हिँड आज घुमफिर गरौँ!"</span> — <em>Come, let’s wander and explore together.</em> 
          We are not a corporate booking engine. We are your travel companion, bringing together the stories of wanderers, local sherpas, and ancient mountain villages.
        </p>
      </section>

      {/* 2. THE COMPANION VIBE (PHOTO & MANIFESTO) */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Visual Showcase */}
        <div className="lg:col-span-6 relative">
          <div className="relative h-[450px] md:h-[520px] rounded-3xl overflow-hidden shadow-2xl border border-[#3d6b4f]/20">
            <img
              src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200"
              alt="Himalayan trail companion"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
              <span className="text-xs font-mono text-amber-300 font-bold uppercase">सहयात्री (The Travel Companion)</span>
              <p className="text-lg font-bold">"Every footstep leaves a memory; every conversation creates a home."</p>
            </div>
          </div>

          {/* Floating Paila Badge */}
          <div className="absolute -bottom-6 -right-6 hidden sm:flex bg-[#f5f0e8] border border-[#3d6b4f]/25 p-4 rounded-2xl shadow-xl items-center gap-3">
            <div className="w-12 h-12 bg-[#3d6b4f] text-white rounded-xl flex items-center justify-center text-xl">
              🐾
            </div>
            <div>
              <span className="block text-xs font-bold text-[#1a2e1f]">पाइला-पाइला (Step by Step)</span>
              <span className="text-[11px] text-[#3d5e53]">Ethical & Positive Footprints</span>
            </div>
          </div>
        </div>

        {/* Manifesto Content */}
        <div className="lg:col-span-6 space-y-6 text-left">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#3d6b4f]">
            हाम्रो सिद्धान्त (Our Philosophy)
          </span>

          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a2e1f] leading-tight">
            We don’t just show you Nepal. We walk with you as your companion.
          </h2>

          <p className="text-sm md:text-base text-[#3d5e53] leading-relaxed">
            Conventional tourism rushes people from photo-spot to photo-spot, turning sacred lands into check-lists. Ghumfir was created to slow down the journey.
          </p>

          <p className="text-sm md:text-base text-[#3d5e53] leading-relaxed">
            When you travel with us, you are introduced to the tea-house owners by name. You understand why Machapuchare cannot be climbed. You share warmth around a kitchen hearth with village elders.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-2">
            <div className="p-4 bg-white rounded-2xl border border-[#3d6b4f]/15">
              <Users className="w-5 h-5 text-[#3d6b4f] mb-2" />
              <h4 className="font-bold text-sm text-[#1a2e1f]">100% Local Sherpas</h4>
              <p className="text-xs text-gray-500 mt-1">Direct wages to indigenous mountain custodians.</p>
            </div>

            <div className="p-4 bg-white rounded-2xl border border-[#3d6b4f]/15">
              <Footprints className="w-5 h-5 text-amber-600 mb-2" />
              <h4 className="font-bold text-sm text-[#1a2e1f]">Paila Eco Pledge</h4>
              <p className="text-xs text-gray-500 mt-1">Zero single-use plastic & community respect.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. EVERYONE'S STORY (COMMUNITY VOICES) */}
      <section className="space-y-10">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#3d6b4f]">
            यात्री तथा स्थानियका आवाज (Community Voices)
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a2e1f]">
            Ghumfir Brings Everyone's Story Together
          </h2>
          <p className="text-sm text-[#3d5e53]">
            Tourism is a sacred dialogue between the wanderer who travels and the host who welcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {VOICES_OF_GHUMFIR.map((voice) => (
            <div
              key={voice.name}
              className="bg-white rounded-3xl p-8 border border-[#3d6b4f]/15 shadow-sm hover:shadow-lg transition-all space-y-6 flex flex-col justify-between"
            >
              <p className="text-sm text-[#3d5e53] italic leading-relaxed">
                "{voice.story}"
              </p>

              <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                <img
                  src={voice.avatar}
                  alt={voice.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-[#3d6b4f]/20"
                />
                <div>
                  <h4 className="font-bold text-sm text-[#1a2e1f]">{voice.name}</h4>
                  <span className="block text-[11px] font-mono text-[#3d6b4f] font-semibold">{voice.role}</span>
                  <span className="block text-[10px] text-gray-400">📍 {voice.valley}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. COMPANION INVITATION CTA */}
      <section className="bg-[#1a2e1f] text-[#f5f0e8] rounded-3xl p-8 md:p-14 text-center space-y-6 shadow-2xl border border-[#3d6b4f]/30 max-w-5xl mx-auto">
        <span className="inline-block bg-[#a7d4c5]/20 text-[#a7d4c5] px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider">
          सहयात्री बनौं (Walk With Us)
        </span>

        <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
          Ready to discover Nepal with a true companion?
        </h2>

        <p className="text-sm md:text-base text-[#f5f0e8]/80 max-w-xl mx-auto leading-relaxed">
          Whether you want to trek the high ridges of Annapurna, rent warm sleeping bags, or simply learn sacred mountain lore, we are here with you.
        </p>

        <div className="pt-4 flex flex-wrap justify-center gap-4">
          <Link
            to="/destinations"
            className="bg-amber-400 hover:bg-amber-300 text-[#1a2e1f] px-8 py-3.5 rounded-full text-sm font-extrabold transition-all shadow-xl hover:scale-105 flex items-center gap-2"
          >
            <span>Explore Trails With Us</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            to="/products"
            className="bg-white/15 hover:bg-white/25 text-white border border-white/20 px-8 py-3.5 rounded-full text-sm font-bold transition-all backdrop-blur-md"
          >
            Browse Gear Store
          </Link>
        </div>
      </section>

    </div>
  )
}