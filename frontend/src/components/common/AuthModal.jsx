import { useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import { User, Mail, Lock, Sparkles, X } from 'lucide-react'

export default function AuthModal() {
  const { isAuthModalOpen, setIsAuthModalOpen, authMode, setAuthMode, login, register } = useAuth()

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
  })

  const [error, setError] = useState('')

  if (!isAuthModalOpen) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    if (authMode === 'login') {
      if (!formData.email || !formData.password) {
        setError('Please enter both email and password.')
        return
      }
      login(formData.email, formData.password)
    } else {
      if (!formData.fullName || !formData.email || !formData.password) {
        setError('Please fill in all fields.')
        return
      }
      register(formData)
    }
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 font-sans">
      {/* Dark Blurred Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={() => setIsAuthModalOpen(false)}
      ></div>

      {/* Modal Card */}
      <div className="relative bg-[#f5f0e8] text-[#1a2e1f] w-full max-w-md rounded-3xl p-8 shadow-2xl border border-[#3d6b4f]/20 z-10 space-y-6">
        
        {/* Close Button */}
        <button
          onClick={() => setIsAuthModalOpen(false)}
          className="absolute top-6 right-6 text-gray-400 hover:text-[#1a2e1f] p-1 cursor-pointer transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center space-y-2">
          <span className="inline-block bg-[#3d6b4f]/10 text-[#3d6b4f] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            घुमफिर खाता (GhumFir Account)
          </span>
          <h2 className="text-2xl font-extrabold text-[#1a2e1f]">
            {authMode === 'login' ? 'Welcome Back, Traveler' : 'Begin Your Himalayan Journey'}
          </h2>
          <p className="text-xs text-[#3d5e53]">
            {authMode === 'login' 
              ? 'Access your bookings and redeem Paila Eco-Points.' 
              : 'Join GhumFir today and earn 100 Welcome Paila Points!'}
          </p>
        </div>

        {/* Tab Switcher (Log In vs Register) */}
        <div className="flex bg-white/70 p-1 rounded-2xl border border-[#3d6b4f]/15">
          <button
            type="button"
            onClick={() => { setAuthMode('login'); setError('') }}
            className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
              authMode === 'login' ? 'bg-[#3d6b4f] text-white shadow-sm' : 'text-[#3d5e53]'
            }`}
          >
            Log In
          </button>
          <button
            type="button"
            onClick={() => { setAuthMode('register'); setError('') }}
            className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
              authMode === 'register' ? 'bg-[#3d6b4f] text-white shadow-sm' : 'text-[#3d5e53]'
            }`}
          >
            Create Account
          </button>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 text-xs px-4 py-2.5 rounded-xl font-medium">
            {error}
          </div>
        )}

        {/* Form Inputs */}
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          
          {authMode === 'register' && (
            <div>
              <label className="block text-xs font-bold text-[#1a2e1f] mb-1.5">Full Name</label>
              <div className="relative">
                <User className="w-4 h-4 text-[#3d6b4f] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="e.g. Nimdoma Sherpa"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full bg-white border border-[#3d6b4f]/20 rounded-xl pl-10 pr-4 py-2.5 text-sm text-[#1a2e1f] focus:outline-none focus:border-[#3d6b4f] transition-all"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-xs font-bold text-[#1a2e1f] mb-1.5">Email Address</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-[#3d6b4f] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                placeholder="traveler@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-white border border-[#3d6b4f]/20 rounded-xl pl-10 pr-4 py-2.5 text-sm text-[#1a2e1f] focus:outline-none focus:border-[#3d6b4f] transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#1a2e1f] mb-1.5">Password</label>
            <div className="relative">
              <Lock className="w-4 h-4 text-[#3d6b4f] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full bg-white border border-[#3d6b4f]/20 rounded-xl pl-10 pr-4 py-2.5 text-sm text-[#1a2e1f] focus:outline-none focus:border-[#3d6b4f] transition-all"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#3d6b4f] hover:bg-[#2d523c] text-white py-3 rounded-xl font-bold text-sm shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer flex items-center justify-center gap-2 mt-2"
          >
            <span>{authMode === 'login' ? 'Sign In to GhumFir' : 'Create My Account'}</span>
            <Sparkles className="w-4 h-4 text-amber-300" />
          </button>
        </form>

        {/* Footer Note */}
        <p className="text-[11px] text-center text-gray-400">
          By continuing, you agree to GhumFir's Sustainable Tourism Pledge and Privacy Policy.
        </p>
      </div>
    </div>
  )
}