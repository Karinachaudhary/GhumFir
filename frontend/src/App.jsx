
import Navbar from "./components/common/Navbar"
import Footer from "./components/common/Footer"
import Home from "./pages/Home"
import Destination from "./pages/Destination"
import { CartProvider } from "./components/cart/CartContext"
import CartDrawer from "./components/cart/CartDrawer"

function App(){
return(
  <CartProvider >
     <div className="min-h-[200vh] bg-[#f5f0e8] text-[#1a2e1f]  font-sans flex flex-col scroll-smooth">
      <Navbar isLoggedIn={false} />
      
      {/* Test Hero Content */}
      <main className=" grow  w-full space-y-16 ">
        <Home />
        <section id="destination" className="pt-6">
          <Destination />
        </section>
      </main>
      <CartDrawer />
      <Footer />
    </div>
    </CartProvider>
)
}
export default App