import React, { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import profilePic from '../../assets/my_passport_pic.png';

function SiteLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-neutral-200 font-sans">
      <header className="flex items-center justify-between px-6 py-4">
        <Link to="/" className="text-xl font-semibold tracking-wide">
          <span className="text-rose-300">a</span>.<span className="text-rose-300">m</span>.
        </Link>
        <button
          aria-label="Open menu"
          onClick={() => setIsMenuOpen(true)}
          className="h-10 w-10 inline-flex items-center justify-center rounded hover:bg-white/5"
        >
          <span className="i-lucide-menu text-2xl">≡</span>
        </button>
      </header>

      <main className="px-6">
        <Outlet />
      </main>

      <footer className="mt-24 border-t border-white/10 px-6 py-10 text-sm text-neutral-400">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <p>© {new Date().getFullYear()} all rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/" className="hover:text-white">Home</Link>
            <Link to="resume" className="hover:text-white">Resume</Link>
            <Link to="/portfolio" className="hover:text-white">Portfolio</Link>
            <Link to="/admin/login" className="hover:text-rose-300 text-rose-300/70">Admin</Link>
          </div>
        </div>
      </footer>

    {/* sidebar */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50">
          <div className="max-w-6xl mx-auto px-6 py-8 grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="w-24 h-30 rounded-full overflow-hidden bg-white/5" >
              <img src={profilePic} alt="profile picture" />
              </div>
              <div className="space-y-2 text-neutral-400">
                <p className="text-2xl leading-snug text-white">Hi, I am Ashoke! I am a Full stack Web developer, editor and designer based on India.</p>
                <p>Country - India</p>
                <p>Contact- ashokemaity092@gmail.com</p>
              </div>
            </div>
            <div className="flex flex-col">
              <button
                aria-label="Close menu"
                onClick={() => setIsMenuOpen(false)}
                className="self-end text-3xl text-white/70 hover:text-white"
              >
                ×
              </button>
              <nav className="mt-6 space-y-6 md:space-y-8">
                <NavLink onClick={() => setIsMenuOpen(false)} to="/" className={({isActive}) => `block text-5xl md:text-7xl ${isActive ? 'text-rose-300' : 'text-neutral-400 hover:text-white'}`}>Home</NavLink>
                <NavLink onClick={() => setIsMenuOpen(false)} to="/portfolio" className={({isActive}) => `block text-5xl md:text-7xl ${isActive ? 'text-rose-300' : 'text-neutral-400 hover:text-white'}`}>Portfolio</NavLink>
                <NavLink onClick={() => setIsMenuOpen(false)} to="/Contact" className={({isActive}) => `block text-5xl md:text-7xl ${isActive ? 'text-rose-300' : 'text-neutral-400 hover:text-white'}`}>Contact</NavLink>
                <NavLink onClick={() => setIsMenuOpen(false)} to="/resume" className={({isActive}) => `block text-5xl md:text-7xl ${isActive ? 'text-rose-300' : 'text-neutral-400 hover:text-white'}`}>Resume</NavLink>
              </nav>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SiteLayout;


