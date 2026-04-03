import { Train, MapPin } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5"
      style={{ background: 'rgba(2, 11, 24, 0.85)', backdropFilter: 'blur(16px)' }}>
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center glow-blue">
            <Train size={18} className="text-sky-400" />
          </div>
          <div>
            <span className="font-display text-lg text-white leading-none">Metro Navigator</span>
            <span className="block text-xs text-sky-400 font-mono tracking-widest uppercase">India</span>
          </div>
        </div>

        {/* Status Pill */}
        <div className="hidden sm:flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-3 py-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs text-green-400 font-mono">LIVE DEMO</span>
        </div>

        {/* Nav links */}
        <div className="flex items-center gap-6">
          <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors hidden md:block">Map</a>
          <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors hidden md:block">Fares</a>
          <button className="text-sm bg-sky-500/10 border border-sky-500/30 text-sky-400 px-4 py-1.5 rounded-full hover:bg-sky-500/20 transition-all">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
}