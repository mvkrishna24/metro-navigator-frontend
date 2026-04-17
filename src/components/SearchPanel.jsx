import { useState } from "react";
import { Search } from "lucide-react";
import { LANDMARK_TO_STATION } from "../data/metroData";

export default function SearchPanel({ onFind, onSuggestion, favorites = [] }) {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [sourceSuggestions, setSourceSuggestions] = useState([]);
  const [recent, setRecent] = useState([]);

  // 🔹 SOURCE AUTOCOMPLETE
  const handleSourceChange = (val) => {
    setSource(val);

    if (!val.trim()) {
      setSourceSuggestions([]);
      return;
    }

    const matches = Object.keys(LANDMARK_TO_STATION).filter((item) =>
      item.toLowerCase().includes(val.toLowerCase())
    );

    setSourceSuggestions(matches.slice(0, 5));
  };

  const selectSourceSuggestion = (item) => {
    setSource(item);
    setSourceSuggestions([]);
  };

  // 🔹 DESTINATION AUTOCOMPLETE
  const handleDestinationChange = (val) => {
    setDestination(val);

    if (!val.trim()) {
      setSuggestions([]);
      onSuggestion(null, "");
      return;
    }

    const matches = Object.keys(LANDMARK_TO_STATION).filter((item) =>
      item.toLowerCase().includes(val.toLowerCase())
    );

    setSuggestions(matches.slice(0, 5));

    if (LANDMARK_TO_STATION[val]) {
      const info = LANDMARK_TO_STATION[val];
      onSuggestion(info, val);
    } else {
      onSuggestion(null, "");
    }
  };

  const selectSuggestion = (landmark) => {
    setDestination(landmark);
    setSuggestions([]);

    const info = LANDMARK_TO_STATION[landmark];
    onSuggestion(info, landmark);
  };

  // 🔹 FIND ROUTE
  const handleFind = () => {
    if (!source.trim() || !destination.trim()) {
      alert("Please enter both source and destination");
      return;
    }

    const destStation =
      LANDMARK_TO_STATION[destination]?.station || destination;

    onFind(source.trim(), destStation);

    const newRecent = `${source} → ${destination}`;
    setRecent((prev) => [newRecent, ...prev].slice(0, 3));

    setSuggestions([]);
    setSourceSuggestions([]);
  };

  return (
    <div className="bg-navy-800/60 border border-white/10 rounded-2xl p-6 backdrop-blur">

      {/* 🔹 SOURCE */}
      <div className="relative">
        <input
          placeholder="Source (e.g. Rajiv Chowk)"
          value={source}
          onChange={(e) => handleSourceChange(e.target.value)}
          className="w-full mb-3 p-3 rounded bg-black text-white outline-none"
        />

        {sourceSuggestions.length > 0 && (
          <div className="absolute z-10 w-full bg-black border border-white/10 rounded-xl shadow max-h-40 overflow-y-auto">
            {sourceSuggestions.map((item, i) => (
              <div
                key={i}
                className="p-2 cursor-pointer hover:bg-white/10 text-sm"
                onClick={() => selectSourceSuggestion(item)}
              >
                {item}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 🔹 DESTINATION */}
      <div className="relative">
        <input
          placeholder="Destination (e.g. India Gate)"
          value={destination}
          onChange={(e) => handleDestinationChange(e.target.value)}
          className="w-full mb-3 p-3 rounded bg-black text-white outline-none"
        />

        {suggestions.length > 0 && (
          <div className="absolute z-10 w-full bg-black border border-white/10 rounded-xl shadow max-h-40 overflow-y-auto">
            {suggestions.map((item, i) => (
              <div
                key={i}
                className="p-2 cursor-pointer hover:bg-white/10 text-sm"
                onClick={() => selectSuggestion(item)}
              >
                {item}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 🔹 BUTTON */}
      <button
        onClick={handleFind}
        className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition flex items-center justify-center gap-2"
      >
        <Search size={16} />
        Find Route
      </button>

      {/* 🔹 RECENT */}
      {recent.length > 0 && (
        <div className="mt-4">
          <p className="text-xs text-sky-400 mb-2">Recent Searches</p>

          <div className="flex flex-wrap gap-2">
            {recent.map((item, i) => (
              <button
                key={i}
                className="text-xs px-3 py-1 rounded-full bg-sky-500/10 text-sky-400"
                onClick={() => {
                  const [src, dest] = item.split(" → ");
                  setSource(src);
                  setDestination(dest);
                }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* 🔹 FAVORITES */}
      {favorites.length > 0 && (
        <div className="mt-4">
          <p className="text-xs text-yellow-400 mb-2">⭐ Favorite Routes</p>

          <div className="flex flex-wrap gap-2">
            {favorites.map((item, i) => (
              <button
                key={i}
                className="text-xs px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-400"
                onClick={() => {
                  const [src, dest] = item.split(" → ");
                  setSource(src);
                  setDestination(dest);
                }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* 🔹 DOWNLOAD */}
      <a
        href="/maps/delhi-metro-map.pdf"
        download
        className="block mt-5 text-center text-sky-400 hover:text-sky-300"
      >
        📥 Download Metro Map
      </a>
    </div>
  );
}