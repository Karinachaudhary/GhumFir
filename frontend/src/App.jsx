
import Navbar from "./components/common/Navbar"
import Footer from "./components/common/Footer"
import Home from "./pages/Home"
import { CartProvider } from "./components/cart/CartContext"
import CartDrawer from "./components/cart/CartDrawer"

function App(){
return(
  <CartProvider >
     <div className="min-h-[200vh] bg-[#f5f0e8] text-[#1a2e1f]  font-sans flex flex-col">
      <Navbar isLoggedIn={false} />
      
      {/* Test Hero Content */}
      <main className=" grow mx-auto w-full space-y-6 text-center ">
        <Home />
      </main>
      <CartDrawer />
      <Footer />
    </div>
    </CartProvider>
)
}
export default App