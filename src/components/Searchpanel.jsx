import { useState } from 'react';
import { MapPin, Navigation, ArrowLeftRight, ChevronDown, Search } from 'lucide-react';
import { ALL_STATIONS, LANDMARK_TO_STATION } from '../data/metroData';

export default function SearchPanel({ onFind, onSuggestion }) {
  const [city, setCity] = useState('Delhi');
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [destinationInfo, setDestinationInfo] = useState(null);

  const CITIES = ['Delhi', 'Mumbai (Coming Soon)', 'Bangalore (Coming Soon)', 'Chennai (Coming Soon)'];

  const handleDestinationChange = (val) => {
  setDestination(val);

  if (!val) {
    setSuggestions([]);
    setDestinationInfo(null);
    onSuggestion(null, "");   // ✅ FIXED
    return;
  }


    // Check landmark map
    const landmarks = Object.keys(LANDMARK_TO_STATION);
    const matched = landmarks.filter(l => l.toLowerCase().includes(val.toLowerCase()));
    setSuggestions(matched.slice(0, 5));

    // If exact match
    if (LANDMARK_TO_STATION[val]) {
      const info = LANDMARK_TO_STATION[val];
      setDestinationInfo(info);
      onSuggestion(info, val);
    }
  };

  const selectSuggestion = (landmark) => {
    setDestination(landmark);
    setSuggestions([]);
    const info = LANDMARK_TO_STATION[landmark];
    setDestinationInfo(info);
    onSuggestion(info, landmark);
  };        

 const swap = () => {
  setDestinationInfo(null);
  onSuggestion(null, "");   // ✅ FIXED
  setSuggestions([]);
};

 const handleFind = () => {
  console.log("BUTTON CLICKED 🚀");  // DEBUG

  if (!source) {
    alert("Please select a source station");
    return;
  }

  const destStation = destinationInfo?.station || destination;

  if (!destStation) {
    alert("Please enter a destination");
    return;
  }

  onFind(source, destStation);
};

  return (
    <div className="bg-navy-800/60 border border-white/8 rounded-2xl p-6 backdrop-blur-sm"
      style={{ boxShadow: '0 4px 40px rgba(0,0,0,0.4)' }}>

      {/* City Selector */}
      <div className="mb-5">
        <label className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-2 block">City</label>
        <div className="relative">
          <select
            value={city}
            onChange={e => setCity(e.target.value)}
            className="w-full bg-navy-900/80 border border-white/10 rounded-xl px-4 py-3 text-sm text-white appearance-none cursor-pointer focus:border-sky-500/50 focus:outline-none transition-colors pr-10"
          >
            {CITIES.map(c => (
              <option key={c} value={c} disabled={c.includes('Coming Soon')}>{c}</option>
            ))}
          </select>
          <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" />
        </div>
      </div>

      {/* Source & Destination */}
      <div className="relative">
        {/* Source */}
        <div className="mb-3">
          <label className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-2 block flex items-center gap-1.5">
            <Navigation size={10} /> From
          </label>
          <div className="relative">
            <select
              value={source}
              onChange={e => setSource(e.target.value)}
              className="w-full bg-navy-900/80 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white appearance-none cursor-pointer focus:border-sky-500/50 focus:outline-none transition-colors pr-10"
            >
              <option value="">Select source station</option>
              {ALL_STATIONS.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
            <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" />
          </div>
        </div>

        {/* Swap Button */}
        <div className="flex justify-center my-1 relative z-10">
          <button
            onClick={swap}
            className="w-8 h-8 rounded-full bg-navy-700 border border-white/10 flex items-center justify-center hover:border-sky-500/50 hover:bg-sky-500/10 transition-all group"
          >
            <ArrowLeftRight size={14} className="text-slate-400 group-hover:text-sky-400 transition-colors" />
          </button>
        </div>

        {/* Destination */}
        <div className="mt-1 relative">
          <label className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-2 block flex items-center gap-1.5">
            <MapPin size={10} /> To (Place or Station)
          </label>
          <div className="relative">
            <input
              type="text"
              value={destination}
              onChange={e => handleDestinationChange(e.target.value)}
              placeholder="e.g. India Gate, Red Fort, AIIMS..."
              className="w-full bg-navy-900/80 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-600 focus:border-sky-500/50 focus:outline-none transition-colors pr-10"
            />
            <Search size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" />
          </div>

          {/* Autocomplete Suggestions */}
          {suggestions.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-navy-800 border border-white/10 rounded-xl overflow-hidden z-20 shadow-2xl">
              {suggestions.map(s => (
                <button
                  key={s}
                  onClick={() => selectSuggestion(s)}
                  className="w-full px-4 py-3 text-sm text-left text-slate-300 hover:bg-sky-500/10 hover:text-sky-300 transition-colors flex items-center gap-2"
                >
                  <MapPin size={12} className="text-sky-500 shrink-0" />
                  {s}
                  <span className="ml-auto text-xs text-slate-600">{LANDMARK_TO_STATION[s]?.station}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Find Route Button */}
      <button
        onClick={handleFind}
        className="mt-5 w-full py-4 rounded-xl font-semibold text-sm tracking-wide transition-all duration-200 relative overflow-hidden group"
        style={{
          background: 'linear-gradient(135deg, #0ea5e9, #0284c7)',
          boxShadow: '0 4px 20px rgba(14, 165, 233, 0.4)'
        }}
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          <Search size={16} />
          Find Best Route
        </span>
        <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-all" />
      </button>
    </div>
  );
}