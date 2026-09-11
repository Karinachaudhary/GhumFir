import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  // Load saved session from localStorage on startup
  const [user, setUser] = useState(() => {
    try {
      const savedUser = localStorage.getItem('ghumfir_user')
      return savedUser ? JSON.parse(savedUser) : null
    } catch {
      return null
    }
  })

  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const [authMode, setAuthMode] = useState('login') // 'login' | 'register'

  // Persist user session to localStorage
  useEffect(() => {
    if (user) {
      localStorage.setItem('ghumfir_user', JSON.stringify(user))
    } else {
      localStorage.removeItem('ghumfir_user')
    }
  }, [user])

  // 1. Log In Method
  const login = (email, password) => {
    // Simulated authentication (Ready for ASP.NET Core POST /api/auth/login)
    const authenticatedUser = {
      id: 'usr-101',
      name: email.split('@')[0].toUpperCase(),
      email: email,
      role: 'Traveler',
      pailaPoints: 250,
      token: 'mock-jwt-token-ghumfir-2026'
    }

    setUser(authenticatedUser)
    setIsAuthModalOpen(false)
    return { success: true }
  }

  // 2. Register Method
  const register = ({ fullName, email, password }) => {
    // Simulated registration (Ready for ASP.NET Core POST /api/auth/register)
    const newUser = {
      id: `usr-${Date.now()}`,
      name: fullName,
      email: email,
      role: 'Traveler',
      pailaPoints: 100, // ✦ 100 Welcome Points!
      token: 'mock-jwt-token-new-user'
    }

    setUser(newUser)
    setIsAuthModalOpen(false)
    return { success: true }
  }

  // 3. Log Out Method
  const logout = () => {
    setUser(null)
  }

  const openAuthModal = (mode = 'login') => {
    setAuthMode(mode)
    setIsAuthModalOpen(true)
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoggedIn: !!user,
        isAuthModalOpen,
        setIsAuthModalOpen,
        authMode,
        setAuthMode,
        openAuthModal,
        login,
        register,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}