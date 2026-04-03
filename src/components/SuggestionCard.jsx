import { MapPin, Clock, Footprints, Sparkles } from 'lucide-react';

export default function SuggestionCard({ info, landmark }) {
  if (!info) return null;

  return (
    <div className="bg-amber-500/5 border border-amber-500/20 rounded-2xl p-4 mt-4 animate-in slide-in-from-top-2"
      style={{ animation: 'fadeSlideIn 0.3s ease-out' }}>
      <div className="flex items-start gap-3">
        <div className="w-9 h-9 rounded-lg bg-amber-500/10 flex items-center justify-center shrink-0 mt-0.5">
          <Sparkles size={16} className="text-amber-400" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs font-mono text-amber-400/70 uppercase tracking-widest mb-1">Nearest Metro Station</p>
          <p className="text-base font-semibold text-white truncate">{info.station}</p>
          <p className="text-xs text-slate-500 mt-0.5 truncate">for <span className="text-slate-400">{landmark}</span></p>
        </div>
      </div>
      <div className="mt-3 flex gap-3">
        <div className="flex items-center gap-1.5 text-xs text-slate-400">
          <MapPin size={11} className="text-sky-500" />
          {info.distance}
        </div>
        <div className="flex items-center gap-1.5 text-xs text-slate-400">
          <Clock size={11} className="text-sky-500" />
          {info.walk}
        </div>
      </div>
    </div>
  );
}