import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import GhumFirLogo from './GhumFirLogo'
// import {ShoppingCart} from './ShoppingCart'
import {useCart} from '../cart/CartContext'
import {ShoppingCart} from 'lucide-react'

// Mock Logo component (Replace with your actual icon import)
//  function GhumFirLogo({ size = 36, className = '' }) {
//   return (
//     <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
//       <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#3d6b4f"/>
//     </svg>
//   )
// }

// Single Source of Truth for Navigation Links
const NAV_LINKS = [
  { label: 'Destinations', href: '/destination' },
  // { label: 'Explore', href: '#explore' },
  {label: 'Culture', href:'/culture'},
  { label: 'Products', href: '/products' },
]

export default function Navbar({ onRegister, onDashboard, isLoggedIn }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false)
  const {totalItems, setIsCartOpen} = useCart()

  // Native Scroll Listener with Cleanup
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 5)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close Mobile Drawer on Escape Key Press & Lock Body Scroll
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMobileDrawerOpen(false)
    }
    
    if (mobileDrawerOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [mobileDrawerOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'py-2 bg-[#f5f0e8] border-b border-[#3d6b4f]/20 shadow-md ' // Solid Off-White on scroll!
            : 'py-4 bg-transparent'                                      // Transparent over top hero video
        }`}
        //  style={{
        //   backgroundColor: isScrolled ? ' bg-[#f5f0e8]/92' : 'transparent',
        // }}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-8 h-14 md:h-16 flex items-center justify-between">
          {/* Brand Logo & Name */}
          <div
            className="flex items-center gap-3 group"
          >
            <GhumFirLogo />
            {/* <span className="flex items-baseline gap-1.5">
              घुमफिर
            </span> */}
          </div>

          {/* Desktop Navigation Links */}
          <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-8 text-2xl font-serif text-red-800">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} to={link.href} className={`hover:text-[#1a2e1f] transition-colors hover:underline hover:underline-offset-8 hover:decoration-1 ${isScrolled ? 'text-[#1a2e1f] hover:text-[#3d6b4f] hover:decoration-[#3d6b4f]' 
          : 'text-white/90 hover:text-amber-100 drop-shadow hover:decoration-amber-100'}`}>
                {link.label}
              </Link>
            ))}

            {isLoggedIn ? (
              <button
                type="button"
                onClick={onDashboard}
                className="hover:text-[#1a2e1f] transition-colors cursor-pointer font-semibold text-[#3d6b4f]"
              >
                Dashboard
              </button>
            ) : (
              <button
                type="button"
                onClick={onRegister}
                className={`hover:text-[#1a2e1f] transition-colors cursor-pointer font-serif hover:underline hover:underline-offset-8 hover:decoration-1 ${isScrolled ? 'text-[#1a2e1f] hover:text-[#3d6b4f] hover:decoration-[#3d6b4f]' 
          : 'text-white/90 hover:text-amber-100 drop-shadow hover:decoration-amber-100'}`}
              >
                Register/Login
              </button> 
            )}
           {/* Cart Icon with Badge  */}
<button
  type="button"
  onClick={() => setIsCartOpen(true)}
  className={`group relative flex items-center gap-2 px-3.5 py-1.5 rounded-full border transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer ${
    isScrolled
      ? 'bg-[#1a2e1f]/5 border-[#3d6b4f]/25 text-[#1a2e1f] hover:bg-[#3d6b4f] hover:text-white hover:shadow-[0_0_18px_rgba(61,107,79,0.4)]'
      : 'bg-white/15 border-white/30 text-white backdrop-blur-md hover:bg-white/25 hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]'
  }`}
  aria-label="Open Shopping Cart"
>
  <ShoppingCart className="w-5 h-5 transition-transform group-hover:-rotate-12 duration-200" />
 

  {/* Pulsing Badge */}
  {totalItems > 0 && (
    <span className="flex h-4 w-4 relative">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
      <span className="relative inline-flex rounded-full h-4 w-4 bg-[#a81c1c] text-white text-[9px] font-bold items-center justify-center">
        {totalItems}
      </span>
    </span>
  )}
</button>
          </nav>


          {/* Mobile Menu Button with ARIA state */}
          <button
            type="button"
            onClick={() => setMobileDrawerOpen(!mobileDrawerOpen)}
            className="md:hidden text-[#1a2e1f] p-2 focus:outline-none cursor-pointer"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileDrawerOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileDrawerOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Drawer Backdrop */}
      {mobileDrawerOpen && (
        <div
          className="fixed inset-0 z-40 bg-[#1a2e1f]/40 backdrop-blur-sm md:hidden"
          onClick={() => setMobileDrawerOpen(false)}
        >
          <div
            className="absolute top-20 left-4 right-4 bg-[#f5f0e8] border border-[#3d6b4f]/20 rounded-2xl p-6 shadow-xl space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="flex flex-col space-y-3 font-medium text-[#3d5e53]">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileDrawerOpen(false)}
                  className="py-2 hover:text-[#1a2e1f]"
                >
                  {link.label}
                </Link>
              ))}

              {isLoggedIn ? (
                <button
                  type="button"
                  onClick={() => {
                    setMobileDrawerOpen(false)
                    onDashboard()
                  }}
                  className="py-2 text-left hover:text-[#1a2e1f] font-semibold text-[#3d6b4f]"
                >
                  Dashboard
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    setMobileDrawerOpen(false)
                    onRegister()
                  }}
                  className="py-2 text-left hover:text-[#1a2e1f] font-semibold text-[#3d6b4f]"
                >
                  Register/Login
                </button>
              )}
              <button
  onClick={() => setIsCartOpen(true)}
  className="relative p-2 text-[#1a2e1f] hover:text-[#3d6b4f] transition-colors cursor-pointer"
  aria-label="Open Cart"
>
  <ShoppingCart className="w-5 h-5" />
  {totalItems > 0 && (
    <span className="absolute -top-1 -right-1 bg-[#a81c1c] text-white text-[10px] font-extrabold w-5 h-5 rounded-full flex items-center justify-center shadow">
      {totalItems}
    </span>
  )}
</button>
            </nav>

           
          </div>
        </div>
      )}
    </>
  )
}