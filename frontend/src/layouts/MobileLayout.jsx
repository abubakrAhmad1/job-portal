import React from 'react'
// import Navbar from './Navbar' // ✅ Import your NavBar component
// import BottomNav from './BottomNav' // ✅ Import Bottom navigation component

export default function MobileLayout({ children }) {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      
      {/* Top Navbar */}
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-10">
        {/* <Navbar /> */}
      </header>

      {/* Main content with padding to avoid overlap with fixed navbar */}
      <main className="pt-16 pb-16 px-4">
        {children} {/* ✅ Page-specific content goes here */}
      </main>

      {/* Bottom Navigation (if needed) */}
      <footer className="fixed bottom-0 left-0 w-full bg-white shadow-inner z-10">
        {/* <BottomNav /> */}
      </footer>

    </div>
  )
}
