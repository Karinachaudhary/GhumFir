import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../components/cart/CartContext'
import { ShieldCheck, Calendar, MapPin, User, Mail, Phone, CheckCircle2, ArrowRight } from 'lucide-react'

export default function Checkout() {
  const { cart, subtotalPrice, pailaPointsEarned, clearCart } = useCart()
  const navigate = useNavigate()

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    passportOrCitizenship: '',
    startDate: '',
    pickupHotel: '',
    notes: '',
  })

  const [paymentMethod, setPaymentMethod] = useState('esewa')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [orderNumber, setOrderNumber] = useState('')

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmitBooking = (e) => {
    e.preventDefault()

    // Generate a realistic Nepali order confirmation number
    const randomId = `GHUMFIR-${Math.floor(100000 + Math.random() * 900000)}`
    setOrderNumber(randomId)
    setIsSubmitted(true)
    clearCart() // Clears the cart upon successful booking
  }

  // 1. EMPTY CART FALLBACK
  if (cart.length === 0 && !isSubmitted) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-20 text-center space-y-6">
        <span className="text-6xl block">🎒</span>
        <h2 className="text-3xl font-extrabold text-[#1a2e1f]">Your Cart is Empty</h2>
        <p className="text-sm text-[#3d5e53] max-w-md mx-auto">
          You haven't selected any Himalayan treks or gear rentals yet. Explore our curated trails to start your journey.
        </p>
        <Link
          to="/destinations"
          className="inline-flex items-center gap-2 bg-[#3d6b4f] hover:bg-[#2d523c] text-white px-6 py-3 rounded-full text-sm font-bold transition-all shadow-md"
        >
          <span>Explore Destinations</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    )
  }

  // 2. ORDER CONFIRMATION / SUCCESS STATE
  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-16 text-center font-sans">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-[#3d6b4f]/20 space-y-6">
          <div className="w-16 h-16 bg-[#3d6b4f]/10 text-[#3d6b4f] rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-mono font-bold uppercase text-[#3d6b4f] tracking-widest">
              Booking Confirmed (सफलतापूर्वक दर्ता)
            </span>
            <h1 className="text-3xl font-extrabold text-[#1a2e1f]">
              Dhanyabad, {formData.fullName}!
            </h1>
            <p className="text-sm text-[#3d5e53]">
              Your expedition booking reference is{' '}
              <span className="font-mono font-bold text-[#1a2e1f] bg-[#f5f0e8] px-2.5 py-1 rounded-md border border-[#3d6b4f]/20">
                {orderNumber}
              </span>
            </p>
          </div>

          {/* Eco Points Reward Box */}
          <div className="bg-[#3d6b4f]/10 border border-[#3d6b4f]/20 rounded-2xl p-4 flex items-center justify-between text-xs">
            <span className="font-semibold text-[#3d6b4f]">✦ Paila Eco Points Earned</span>
            <span className="font-extrabold text-[#1a2e1f]">+{pailaPointsEarned} Points</span>
          </div>

          <div className="text-xs text-left bg-[#f5f0e8] p-5 rounded-2xl space-y-2 border border-[#3d6b4f]/10 text-[#3d5e53]">
            <p><strong>Traveler:</strong> {formData.fullName} ({formData.email})</p>
            <p><strong>Departure Date:</strong> {formData.startDate || 'Immediate'}</p>
            <p><strong>Pickup / Hotel:</strong> {formData.pickupHotel || 'Kathmandu Head Office'}</p>
            <p><strong>Payment Method:</strong> {paymentMethod.toUpperCase()}</p>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="bg-[#3d6b4f] hover:bg-[#2d523c] text-white px-6 py-3 rounded-xl text-sm font-bold transition-all shadow"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    )
  }

  // 3. MAIN CHECKOUT FORM
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 font-sans space-y-8">
      
      {/* Page Header */}
      <div>
        <span className="text-xs font-mono font-bold uppercase text-[#3d6b4f] tracking-wider">
          सुरक्षित भुक्तानी (Secure Booking)
        </span>
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#1a2e1f] tracking-tight">
          Complete Your Expedition & Gear Booking
        </h1>
      </div>

      <form onSubmit={handleSubmitBooking} className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* LEFT COLUMN: Form Inputs (7 Cols) */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Section 1: Lead Traveler Information */}
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-[#3d6b4f]/15 shadow-sm space-y-6">
            <h2 className="text-lg font-bold text-[#1a2e1f] flex items-center gap-2 border-b border-gray-100 pb-3">
              <User className="w-5 h-5 text-[#3d6b4f]" />
              <span>1. Lead Traveler Information</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#1a2e1f] mb-1.5">Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  required
                  placeholder="e.g. Pasang Lhamu"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full bg-[#f5f0e8]/50 border border-[#3d6b4f]/20 rounded-xl px-4 py-2.5 text-sm text-[#1a2e1f] focus:outline-none focus:border-[#3d6b4f] focus:bg-white transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1a2e1f] mb-1.5">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="traveler@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-[#f5f0e8]/50 border border-[#3d6b4f]/20 rounded-xl px-4 py-2.5 text-sm text-[#1a2e1f] focus:outline-none focus:border-[#3d6b4f] focus:bg-white transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1a2e1f] mb-1.5">Phone / WhatsApp *</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="+977 9800000000"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full bg-[#f5f0e8]/50 border border-[#3d6b4f]/20 rounded-xl px-4 py-2.5 text-sm text-[#1a2e1f] focus:outline-none focus:border-[#3d6b4f] focus:bg-white transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1a2e1f] mb-1.5">Passport / Citizenship No. *</label>
                <input
                  type="text"
                  name="passportOrCitizenship"
                  required
                  placeholder="For TIMS & Park Permits"
                  value={formData.passportOrCitizenship}
                  onChange={handleInputChange}
                  className="w-full bg-[#f5f0e8]/50 border border-[#3d6b4f]/20 rounded-xl px-4 py-2.5 text-sm text-[#1a2e1f] focus:outline-none focus:border-[#3d6b4f] focus:bg-white transition-all"
                />
              </div>
            </div>
          </div>

          {/* Section 2: Trip Logistics & Hotel Pickup */}
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-[#3d6b4f]/15 shadow-sm space-y-6">
            <h2 className="text-lg font-bold text-[#1a2e1f] flex items-center gap-2 border-b border-gray-100 pb-3">
              <Calendar className="w-5 h-5 text-[#3d6b4f]" />
              <span>2. Expedition Logistics</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#1a2e1f] mb-1.5">Trek Start Date *</label>
                <input
                  type="date"
                  name="startDate"
                  required
                  value={formData.startDate}
                  onChange={handleInputChange}
                  className="w-full bg-[#f5f0e8]/50 border border-[#3d6b4f]/20 rounded-xl px-4 py-2.5 text-sm text-[#1a2e1f] focus:outline-none focus:border-[#3d6b4f] focus:bg-white transition-all cursor-pointer"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1a2e1f] mb-1.5">Pickup Hotel (Kathmandu / Pokhara)</label>
                <input
                  type="text"
                  name="pickupHotel"
                  placeholder="e.g. Hotel Thamel Eco, Kathmandu"
                  value={formData.pickupHotel}
                  onChange={handleInputChange}
                  className="w-full bg-[#f5f0e8]/50 border border-[#3d6b4f]/20 rounded-xl px-4 py-2.5 text-sm text-[#1a2e1f] focus:outline-none focus:border-[#3d6b4f] focus:bg-white transition-all"
                />
              </div>
            </div>
          </div>

          {/* Section 3: Payment Method Selection */}
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-[#3d6b4f]/15 shadow-sm space-y-6">
            <h2 className="text-lg font-bold text-[#1a2e1f] flex items-center gap-2 border-b border-gray-100 pb-3">
              <ShieldCheck className="w-5 h-5 text-[#3d6b4f]" />
              <span>3. Payment Gateway</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* eSewa */}
              <label
                className={`p-4 rounded-2xl border-2 flex flex-col items-center justify-center gap-2 cursor-pointer transition-all ${
                  paymentMethod === 'esewa' ? 'border-[#60bb46] bg-[#60bb46]/5' : 'border-gray-200'
                }`}
              >
                <input
                  type="radio"
                  name="payment"
                  value="esewa"
                  checked={paymentMethod === 'esewa'}
                  onChange={() => setPaymentMethod('esewa')}
                  className="sr-only"
                />
                <span className="w-8 h-8 rounded-full bg-[#60bb46] text-white flex items-center justify-center font-bold text-xs">
                  e
                </span>
                <span className="font-bold text-sm text-[#1a2e1f]">eSewa Wallet</span>
                <span className="text-[10px] text-gray-500">Instant Nepali QR</span>
              </label>

              {/* Khalti */}
              <label
                className={`p-4 rounded-2xl border-2 flex flex-col items-center justify-center gap-2 cursor-pointer transition-all ${
                  paymentMethod === 'khalti' ? 'border-[#5c2d91] bg-[#5c2d91]/5' : 'border-gray-200'
                }`}
              >
                <input
                  type="radio"
                  name="payment"
                  value="khalti"
                  checked={paymentMethod === 'khalti'}
                  onChange={() => setPaymentMethod('khalti')}
                  className="sr-only"
                />
                <span className="w-8 h-8 rounded-full bg-[#5c2d91] text-white flex items-center justify-center font-bold text-xs">
                  K
                </span>
                <span className="font-bold text-sm text-[#1a2e1f]">Khalti</span>
                <span className="text-[10px] text-gray-500">Digital Wallet</span>
              </label>

              {/* Cash on Hotel Arrival */}
              <label
                className={`p-4 rounded-2xl border-2 flex flex-col items-center justify-center gap-2 cursor-pointer transition-all ${
                  paymentMethod === 'cod' ? 'border-[#3d6b4f] bg-[#3d6b4f]/5' : 'border-gray-200'
                }`}
              >
                <input
                  type="radio"
                  name="payment"
                  value="cod"
                  checked={paymentMethod === 'cod'}
                  onChange={() => setPaymentMethod('cod')}
                  className="sr-only"
                />
                <span className="w-8 h-8 rounded-full bg-[#3d6b4f] text-white flex items-center justify-center font-bold text-xs">
                  💵
                </span>
                <span className="font-bold text-sm text-[#1a2e1f]">Cash On Arrival</span>
                <span className="text-[10px] text-gray-500">Pay at Hotel / Briefing</span>
              </label>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: Sticky Order Summary (5 Cols) */}
        <div className="lg:col-span-5">
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-[#3d6b4f]/20 shadow-lg space-y-6 sticky top-28">
            <h3 className="text-lg font-bold text-[#1a2e1f] border-b border-gray-100 pb-3">
              Expedition Summary ({cart.length} Items)
            </h3>

            {/* Cart Items List */}
            <div className="space-y-4 max-h-72 overflow-y-auto pr-1">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center gap-3 text-xs">
                  <img src={item.image} alt={item.title || item.name} className="w-12 h-12 rounded-xl object-cover" />
                  <div className="flex-1">
                    <h4 className="font-bold text-[#1a2e1f] line-clamp-1">{item.title || item.name}</h4>
                    <span className="text-[#3d5e53]">
                      Qty: {item.quantity} {item.isRental ? `• ${item.rentalDays || 1} Days` : ''}
                    </span>
                  </div>
                  <span className="font-mono font-bold text-[#1a2e1f]">
                    NPR {(item.priceNpr * item.quantity * (item.isRental ? item.rentalDays || 1 : 1)).toLocaleString()}
                  </span>
                </div>
              ))}
            </div>

            {/* Price Calculations */}
            <div className="border-t border-gray-100 pt-4 space-y-2 text-xs">
              <div className="flex justify-between text-[#3d5e53]">
                <span>Base Subtotal</span>
                <span className="font-mono">NPR {subtotalPrice.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-[#3d5e53]">
                <span>TIMS & National Park Permits</span>
                <span className="text-emerald-700 font-bold">Included</span>
              </div>
              <div className="flex justify-between text-base font-extrabold text-[#1a2e1f] pt-2 border-t border-gray-100">
                <span>Total Due:</span>
                <span className="text-xl text-[#3d6b4f] font-mono">NPR {subtotalPrice.toLocaleString()}</span>
              </div>
            </div>

            {/* Paila Points Badge */}
            <div className="bg-[#3d6b4f]/10 border border-[#3d6b4f]/20 rounded-xl p-3 flex items-center justify-between text-xs">
              <span className="font-bold text-[#3d6b4f]">✦ Paila Loyalty Points</span>
              <span className="font-extrabold text-[#1a2e1f]">+{pailaPointsEarned} Points</span>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#3d6b4f] hover:bg-[#2d523c] text-white py-4 rounded-2xl font-bold text-sm shadow-xl transition-all hover:scale-105 active:scale-95 cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Confirm Booking & Reserve</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <p className="text-[10px] text-center text-gray-400">
              🔒 256-Bit SSL Encrypted Booking. Free cancellation up to 48 hours before departure.
            </p>
          </div>
        </div>

      </form>

    </div>
  )
}