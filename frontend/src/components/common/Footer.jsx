import React from 'react'
import {Link, Route} from 'react-router-dom'
import GhumFirLogo from './GhumFirLogo'

export default function Footer(){
    // const currentYear =new Date().getFullYear()
    return(
        <footer className="bg-[#1a2e1f] text-[#f5f0e8] pt-16 pb-12 px-8 border-t border-[#3d6b4f]/30 font-sans">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 mb-12">
        {/* Brand Column */}
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center gap-3">
            <GhumFirLogo className="drop-shadow-[0_0_12px_rgba(245,240,232,0.8)]" size="md"/>
          </div>

          <p className="font-body text-sm text-[#f5f0e8]/75 leading-relaxed max-w-sm">
            Tourism should not only move visitors through Nepal — it should help them understand places, respect culture, discover overlooked communities, and distribute tourism value more fairly.
          </p>

          <p className="font-mono text-xs text-[#a7d4c5]">
            Built with respect for Nepal
          </p>
        </div>

        {/* Quick Links Column */}
        <nav aria-label="Footer Navigation" className="space-y-3">
          <h4 className="font-mono text-xs tracking-widest uppercase text-[#a7d4c5] font-semibold">
            Discover Nepal
          </h4>
          <Link className="space-y-2 text-sm text-[#f5f0e8]/80 font-body list-none">
            <li><Link to="/destination" className="hover:text-[#f5f0e8] transition-colors">Destination</Link></li>
            {/* <li><Link to="/explore" className="hover:text-[#f5f0e8] transition-colors">Explore</Link></li> */}
            <li><Link to="/products" className="hover:text-[#f5f0e8] transition-colors">Products</Link></li>
            <li><Link to="/culture" className="hover:text-[#f5f0e8] transition-colors">Cultural Etiquette</Link></li>
          </Link>
        </nav>

        {/* Developer and Creator i.e My Column */}
        <div className="space-y-3">
          <h4 className="font-mono text-xs tracking-widest uppercase text-[#a7d4c5] font-semibold">
            E-commerce Website
          </h4>
          <p className="text-sm text-[#f5f0e8]/80 font-body">
            घुमफिर (GhumFir)
          </p>
           <div className="pt-2">
            <p className="text-xs text-[#f5f0e8]/60 uppercase tracking-wider font-mono">
              Designed & Developed By
            </p>
            {/* Added target="_blank" and rel="noopener noreferrer" for security */}
            <a 
              href="https://www.linkedin.com/in/karina-chaudhary-b783b1306/" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs text-[#a7d4c5] hover:text-white transition-colors font-semibold mt-1 hover:underline"
            >
              <span>Karina Chaudhary</span>
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
{/* Copyright Bar  */}
      <div className="max-w-6xl mx-auto pt-8 border-t border-[#3d6b4f]/20 flex flex-col sm:flex-row items-center justify-between text-xs text-[#f5f0e8]/60 font-body gap-4">
        <p>© {new Date().getFullYear()} घुमफिर. Don't just visit Nepal. Know it. Experience it. Take a piece of it with you.</p>
        <p className="font-mono text-[11px]">नेपाल जान्नुहोस्। अनुभव गर्नुहोस्। यसको एउटा टुक्रा साथमा लैजानुहोस्।</p>
      </div>
    </footer>
    )
}