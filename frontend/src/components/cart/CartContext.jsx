import React, {createContext, useContext, useState, useEffect } from 'react'
const CartContext = createContext()

export function CartProvider({ children }) {
  // Initialize state from localStorage so cart persists on page refresh
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('ghumfir_cart')
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })

  const [isCartOpen, setIsCartOpen] = useState(false)

  // Sync cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('ghumfir_cart', JSON.stringify(cart))
  }, [cart])

  // 1. Add Item to Cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id)
      
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + (product.quantity || 1) }
            : item
        )
      }

      return [
        ...prevCart,
        {
          ...product,
          quantity: product.quantity || 1,
          rentalDays: product.rentalDays || 1,
          isRental: product.isRental || false
        }
      ]
    })

    // Automatically open drawer when an item is added
    setIsCartOpen(true)
  }

  // 2. Remove Item from Cart
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id))
  }

  // 3. Update Quantity (+ / -)
  const updateQuantity = (id, delta) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta
            return newQty > 0 ? { ...item, quantity: newQty } : null
          }
          return item
        })
        .filter(Boolean)
    )
  }

  // 4. Update Rental Days (For Gear Rental items)
  const updateRentalDays = (id, days) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, rentalDays: Math.max(1, days) } : item
      )
    )
  }

  // 5. Clear Entire Cart
  const clearCart = () => setCart([])

  // Calculated Totals
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)

  const subtotalPrice = cart.reduce((sum, item) => {
    const itemPrice = item.priceNpr || item.unitPrice || 0
    if (item.isRental) {
      return sum + itemPrice * item.quantity * (item.rentalDays || 1)
    }
    return sum + itemPrice * item.quantity
  }, 0)

  // GhumFir Eco Loyalty Points Earned (1 Point for every NPR 100 spent)
  const GhumFirPointsEarned = Math.floor(subtotalPrice / 100)

  return (
    <CartContext.Provider
      value={{
        cart,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        updateRentalDays,
        clearCart,
        totalItems,
        subtotalPrice,
        GhumFirPointsEarned
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

// Custom Hook for Easy Access in Any Component
export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}