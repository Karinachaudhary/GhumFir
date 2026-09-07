
import Navbar from "./components/common/Navbar"
import Footer from "./components/common/Footer"

function App(){
return(
     <div className="min-h-[200vh] bg-[#f5f0e8] text-[#1a2e1f]  font-sans flex flex-col">
      <Navbar isLoggedIn={false} />
      
      {/* Test Hero Content */}
      <main className=" grow pt-28 pb-16 px-6 md:px-8 max-w-6xl mx-auto w-full space-y-6 text-center ">
        <span className="inline-block bg-[#3d6b4f]/10 text-[#3d6b4f] px-4 py-1.5 rounded-full text-sm font-semibold">
          पाइला इको-टूरिज्म (Paila Tourism)
        </span>
        <h1 className="text-5xl font-extrabold tracking-tight text-[#1a2e1f] sm:text-6xl">
          GhumFir: Explore Nepal, Step by Step.
        </h1>
        <p className="text-lg text-[#3d5e53] max-w-2xl mx-auto">
          Book authentic Himalayan treks, rent eco-certified gear, and hire local Sherpa guides.
        </p>
        
        <div className="pt-8">
          <p className="text-sm font-medium text-[#3d6b4f] animate-bounce">
            ↓ Scroll down to watch the Navbar transform!
          </p>
        </div>
      </main>
      <Footer />
    </div>
)
}
export default App