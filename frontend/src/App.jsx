import { Routes, Route} from 'react-router-dom'
import Navbar from "./components/common/Navbar"
import Footer from "./components/common/Footer"
import Home from "./pages/Home"
import Culture from './pages/Cultures'
import Products from './pages/Products'
import Destination from "./pages/Destination"
import About from "./pages/About"
import Checkout from './pages/Checkout'
import { CartProvider } from "./components/cart/CartContext"
import CartDrawer from "./components/cart/CartDrawer"
import { AuthProvider } from './context/AuthContext'
import AuthModal from './components/common/AuthModal'

function App(){
return(
  <AuthProvider>
  <CartProvider >
     <div className="min-h-[200vh] bg-[#f5f0e8] text-[#1a2e1f]  font-sans flex flex-col scroll-smooth">
      <Navbar isLoggedIn={false} />
      
      {/* Test Hero Content */}
      <main className=" grow  w-full space-y-16 ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />}/>
        <Route path="/culture" element={<Culture/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/checkout" element={<Checkout />}/>
      </Routes>
      </main>
      <CartDrawer />
      <AuthModal />
      <Footer />
    </div>
    </CartProvider>
    </AuthProvider>
)
}
export default App