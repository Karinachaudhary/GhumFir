import React from 'react'
import { useCart } from './CartContext'

export default function CartDrawer() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    updateRentalDays,
    subtotalPrice,
    GhumFirPointsEarned
  } = useCart()

  if (!isCartOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-hidden font-sans">
      {/* Dark Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      ></div>

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#f5f0e8] text-[#1a2e1f] shadow-2xl flex flex-col">
          
          {/* Header */}
          <div className="p-6 border-b border-[#3d6b4f]/20 flex items-center justify-between bg-[#1a2e1f] text-[#f5f0e8]">
            <div className="flex items-center gap-2">
              <span className="text-xl">🛒</span>
              <h2 className="text-lg font-bold">Your GhumFir Cart</h2>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="text-[#f5f0e8]/70 hover:text-white text-xl font-bold p-1 cursor-pointer"
            >
              ✕
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cart.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <span className="text-5xl block opacity-40">🎒</span>
                <p className="text-sm text-[#3d5e53]">Your travel cart is empty.</p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="bg-[#3d6b4f] text-white text-xs px-4 py-2 rounded-xl font-semibold cursor-pointer"
                >
                  Explore Trails & Gear
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl p-4 shadow-sm border border-[#3d6b4f]/10 flex gap-4 items-center"
                >
                  <img
                    src={item.image || 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=200'}
                    alt={item.title || item.name}
                    className="w-16 h-16 rounded-xl object-cover"
                  />

                  <div className="flex-1 space-y-1">
                    <h4 className="text-sm font-bold text-[#1a2e1f] line-clamp-1">
                      {item.title || item.name}
                    </h4>
                    
                    <span className="block text-xs text-[#3d6b4f] font-mono">
                      NPR {(item.priceNpr || item.unitPrice || 0).toLocaleString()} 
                      {item.isRental ? ' / day' : ''}
                    </span>

                    {/* Rental Days Selector */}
                    {item.isRental && (
                      <div className="flex items-center gap-2 text-xs pt-1">
                        <span className="text-[#3d5e53]">Days:</span>
                        <input
                          type="number"
                          min="1"
                          max="30"
                          value={item.rentalDays || 1}
                          onChange={(e) => updateRentalDays(item.id, parseInt(e.target.value) || 1)}
                          className="w-12 bg-[#f5f0e8] border border-[#3d6b4f]/20 rounded px-1 text-center font-bold text-[#1a2e1f]"
                        />
                      </div>
                    )}

                    {/* Quantity Selector */}
                    <div className="flex items-center gap-3 pt-2">
                      <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="px-2.5 py-0.5 bg-gray-100 hover:bg-gray-200 text-xs font-bold"
                        >
                          -
                        </button>
                        <span className="px-3 text-xs font-bold">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="px-2.5 py-0.5 bg-gray-100 hover:bg-gray-200 text-xs font-bold"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-xs text-red-500 hover:underline cursor-pointer"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Summary & Checkout */}
          {cart.length > 0 && (
            <div className="p-6 bg-white border-t border-[#3d6b4f]/15 space-y-4">
              {/* GhumFir Points Reward Banner */}
              <div className="bg-[#3d6b4f]/10 border border-[#3d6b4f]/20 rounded-xl p-3 flex items-center justify-between text-xs">
                <span className="font-semibold text-[#3d6b4f]">✦ GhumFir Points Earned</span>
                <span className="font-extrabold text-[#1a2e1f]">+{GhumFirPointsEarned} Points</span>
              </div>

              <div className="flex justify-between items-center text-base font-extrabold text-[#1a2e1f]">
                <span>Total Amount:</span>
                <span className="text-xl text-[#3d6b4f]">NPR {subtotalPrice.toLocaleString()}</span>
              </div>

              <button className="w-full bg-[#3d6b4f] hover:bg-[#2d523c] text-white py-3.5 rounded-xl font-bold text-sm shadow-md transition-colors cursor-pointer">
                Proceed to Checkout →
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}