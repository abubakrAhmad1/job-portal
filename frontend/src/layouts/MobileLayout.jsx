import React from 'react'
import SearchBox from '../features/jobs/components/SearchBox'
import Footer from '../features/jobs/components/Footer'
// import Navbar from './Navbar' // ✅ Import your NavBar component
// import BottomNav from './BottomNav' // ✅ Import Bottom navigation component

export default function MobileLayout({ children }) {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      
      {/* Top Navbar */}
      <header className=" top-0 left-0 w-full bg-white shadow-md z-10">
        <SearchBox />
      </header>

      {/* Main content with padding to avoid overlap with fixed navbar */}
      <main className="pt-16 pb-16 px-4">
        {children} {/* ✅ Page-specific content goes here */}
      </main>

      {/* Bottom Navigation (if needed) */}
      <footer className="fixed bottom-4 left-0 w-full bg-white shadow-inner z-10">
        <Footer />
      </footer>

    </div>
  )
}
