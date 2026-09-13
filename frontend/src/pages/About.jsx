import { Link } from 'react-router-dom'
import { Heart, Sparkles, Footprints, Users, Compass, ArrowRight, Sun, MessageSquareQuote } from 'lucide-react'

const PILLARS_OF_WELCOME = [
  {
    step: '01',
    title: 'Explore places.',
    nepali: 'गन्तव्य खोज्नुहोस्',
    desc: 'Wander beyond the crowded tourist trails into sacred valleys, pristine glacial lakes, and hidden mountain passes.',
    icon: '🏔️',
  },
  {
    step: '02',
    title: 'Hear their stories.',
    nepali: 'कथाहरू सुन्नुहोस्',
    desc: 'Listen to folklore passed down through generations—why Machapuchare remains unclimbed and how Everest got its motherly name Chomolungma.',
    icon: '📖',
  },
  {
    step: '03',
    title: 'Meet the people.',
    nepali: 'मानिसहरूलाई भेट्नुहोस्',
    desc: 'Look into the eyes of village elders, share butter tea with monks, and walk side-by-side with indigenous Sherpa and Gurung guides.',
    icon: '🤝',
  },
  {
    step: '04',
    title: 'Experience the culture.',
    nepali: 'संस्कृति महसुस गर्नुहोस्',
    desc: 'Spin prayer wheels clockwise, taste steaming organic dal bhat by the hearth, and be blessed with white silk Khatas.',
    icon: '🪔',
  },
  {
    step: '05',
    title: 'Take something home.',
    nepali: 'केही सम्झना लिएर फर्कनुहोस्',
    desc: 'Leave with hand-woven wool, ethical memories, and a piece of the Himalayas imprinted permanently on your soul.',
    icon: '🎒',
  },
]

const VOICES_OF_GHUMFIR = [
  {
    role: 'The Mountain Guide (सहयात्री)',
    name: 'Mingma Norbu Sherpa',
    valley: 'Khumbu Valley',
    story: 'GhumFir isn’t an agency that sits in an office far away. They treat us guides as family, ensuring fair living wages, gear safety, and mutual respect on every pass.',
    avatar: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=400',
  },
  {
    role: 'The Teahouse Custodian',
    name: 'Dolma Gurung',
    valley: 'Annapurna Sanctuary',
    story: 'When travelers book through GhumFir, they eat our local organic buckwheat and sleep in our solar-warmed rooms. The blessing and livelihood stay right here in our village.',
    avatar: 'https://images.unsplash.com/photo-1518002171953-a080ee817e1f?q=80&w=400',
  },
  {
    role: 'The Curious Wanderer',
    name: 'Elena & Lucas',
    valley: 'Langtang Valley',
    story: 'GhumFir felt like traveling with lifelong Nepali friends who knew every hidden tea-stop and monastery. We arrived as tourists and left as family.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400',
  },
]

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 space-y-28 font-sans text-[#1a2e1f]">
      
      {/* 1. HERO MANIFESTO: WHERE NEPAL WELCOMES YOU */}
      <section className="text-center max-w-4xl mx-auto space-y-8">
        <div className="inline-flex items-center gap-2 bg-[#3d6b4f]/10 text-[#3d6b4f] px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider font-mono">
          <Sparkles className="w-4 h-4 text-amber-500" />
          <span>हाम्रो आत्मियता (The GhumFir Spirit)</span>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-[#1a2e1f] leading-tight">
            GhumFir isn't just where you book your trip.
          </h1>
          <p className="text-3xl sm:text-5xl font-serif italic text-[#3d6b4f]">
            It's where Nepal welcomes you.
          </p>
        </div>

        {/* Atithi Devo Bhava Badge */}
        <div className="py-6 px-8 bg-white border border-[#3d6b4f]/20 rounded-3xl shadow-sm inline-block max-w-2xl mx-auto">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-600 block mb-1">
            Ancient Vedic Wisdom of Hospitality
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1a2e1f]">
            Atithi Devo Bhava — <span className="font-serif text-[#a81c1c]">अतिथि देवो भवः</span>
          </h2>
          <p className="text-sm text-[#3d5e53] mt-2 italic">
            "The Guest is Divine. Because every traveler deserves to feel welcome, honored, and safe."
          </p>
        </div>
      </section>

      {/* 2. THE 5 PILLARS OF TRAVELING NEPAL */}
      <section className="space-y-12">
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <span className="text-xs font-mono uppercase tracking-widest font-bold text-[#3d6b4f]">
            हाम्रो यात्रा मार्ग (The Fivefold Journey)
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a2e1f]">
            How We Travel With You
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {PILLARS_OF_WELCOME.map((pillar) => (
            <div
              key={pillar.step}
              className="bg-white rounded-3xl p-6 border border-[#3d6b4f]/15 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-2xl">{pillar.icon}</span>
                  <span className="text-xs font-mono font-bold text-gray-300 group-hover:text-[#3d6b4f] transition-colors">
                    {pillar.step}
                  </span>
                </div>
                <div>
                  <h3 className="font-extrabold text-lg text-[#1a2e1f] group-hover:text-[#3d6b4f] transition-colors">
                    {pillar.title}
                  </h3>
                  <span className="text-[11px] text-[#3d6b4f] font-serif italic block mt-0.5">
                    {pillar.nepali}
                  </span>
                </div>
                <p className="text-xs text-[#3d5e53] leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. GHUMFIR WITH FRIENDS (साथीहरूसँग घुमफिर — THE COMPANION VIBE) */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-[#f5f0e8] p-8 md:p-14 rounded-3xl border border-[#3d6b4f]/20">
        
        {/* Photo with Friends Vibe */}
        <div className="lg:col-span-6 relative">
          <div className="h-[420px] md:h-[480px] rounded-3xl overflow-hidden shadow-2xl border border-white/40 relative">
            <img
              src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200"
              alt="GhumFir with Friends in the Himalayas"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
              <span className="text-xs font-mono text-amber-300 font-bold uppercase tracking-wider">
                साथीहरूसँग घुमफिर (Travel With Friends)
              </span>
              <p className="text-lg font-bold">
                "Not clients and tour operators. Just companions wandering under the same sacred peaks."
              </p>
            </div>
          </div>

          {/* Floating Companion Pill */}
          <div className="absolute -bottom-5 -right-5 hidden sm:flex bg-white border border-[#3d6b4f]/20 p-4 rounded-2xl shadow-xl items-center gap-3">
            <div className="w-10 h-10 bg-amber-400 text-[#1a2e1f] rounded-xl flex items-center justify-center font-black">
              ☕
            </div>
            <div>
              <span className="block text-xs font-extrabold text-[#1a2e1f]">चिया गफ (Chiya & Laughter)</span>
              <span className="text-[10px] text-gray-500">Unfiltered stories by the hearth</span>
            </div>
          </div>
        </div>

        {/* Text Manifesto */}
        <div className="lg:col-span-6 space-y-6 text-left">
          <div className="inline-flex items-center gap-2 bg-[#3d6b4f]/10 text-[#3d6b4f] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            <Users className="w-3.5 h-3.5" />
            <span>The Companion Philosophy</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a2e1f] leading-tight">
            GhumFir with Friends: No Stiff Itineraries. Just Pure Camaraderie.
          </h2>

          <p className="text-sm md:text-base text-[#3d5e53] leading-relaxed">
            In Nepali, when someone says <em>"हिँड घुमफिर गरौँ"</em>, it’s never a corporate transaction. It's an invitation from a friend to step outside, take a deep breath of mountain air, and see where the trail leads.
          </p>

          <p className="text-sm md:text-base text-[#3d5e53] leading-relaxed">
            That is the soul of GhumFir. We pair you with local guides who treat you like family, not customers. We pause when you want to take pictures, we introduce you to village homestay mothers by name, and we carry your load when your knees ache.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-2">
            <div className="p-4 bg-white rounded-2xl border border-[#3d6b4f]/15">
              <h4 className="font-extrabold text-sm text-[#1a2e1f]">✦ 100% Local Guides</h4>
              <p className="text-xs text-gray-500 mt-1">Direct wages paid to native Sherpa, Gurung, and Tamang mountain guides.</p>
            </div>

            <div className="p-4 bg-white rounded-2xl border border-[#3d6b4f]/15">
              <h4 className="font-extrabold text-sm text-[#1a2e1f]">✦ GhumFir Eco-Pledge</h4>
              <p className="text-xs text-gray-500 mt-1">Zero single-use plastics, verified homestays, and community preservation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. VOICES OF GHUMFIR (COMMUNITY STORIES) */}
      <section className="space-y-12">
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <span className="text-xs font-mono uppercase tracking-widest font-bold text-[#3d6b4f]">
            हाम्रो सहयात्रीका अनुभव (Community Voices)
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a2e1f]">
            Stories From the Trail
          </h2>
          <p className="text-sm text-[#3d5e53]">
            Tourism is a sacred dialogue between the wanderer who journeys and the homeland that welcomes.
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

      {/* 5. INVITATION CTA */}
      <section className="bg-[#1a2e1f] text-[#f5f0e8] rounded-3xl p-8 md:p-14 text-center space-y-6 shadow-2xl border border-[#3d6b4f]/30 max-w-5xl mx-auto">
        <span className="inline-block bg-white/10 text-amber-300 px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider">
          सहयात्री बनौं (Be Our Companion)
        </span>

        <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
          Ready to experience Nepal as an invited guest?
        </h2>

        <p className="text-sm md:text-base text-[#f5f0e8]/80 max-w-xl mx-auto leading-relaxed">
          The kettle is warm, the trails are open, and your Himalayan friends are ready to welcome you.
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
            to="/culture"
            className="bg-white/15 hover:bg-white/25 text-white border border-white/20 px-8 py-3.5 rounded-full text-sm font-bold transition-all backdrop-blur-md"
          >
            Learn Sacred Lore & Etiquette
          </Link>
        </div>
      </section>

    </div>
  )
}