import { useState } from "react";
import {
  MapPin,
  Navigation,
  ArrowLeftRight,
  ChevronDown,
  Search,
} from "lucide-react";
import { ALL_STATIONS, LANDMARK_TO_STATION } from "../data/metroData";

export default function SearchPanel({ onFind, onSuggestion }) {
  const [city, setCity] = useState("Delhi");
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [destinationInfo, setDestinationInfo] = useState(null);
  const [recent, setRecent] = useState([]);

  const CITIES = [
    "Delhi",
    "Hyderabad (Coming Soon)",
    "Mumbai (Coming Soon)",
    "Bangalore (Coming Soon)",
    "Chennai (Coming Soon)",
  ];

  // 🔥 DESTINATION INPUT
  const handleDestinationChange = (val) => {
    setDestination(val);

    if (!val) {
      setSuggestions([]);
      setDestinationInfo(null);
      onSuggestion(null, "");
      return;
    }

    const landmarks = Object.keys(LANDMARK_TO_STATION);
    const matched = landmarks.filter((l) =>
      l.toLowerCase().includes(val.toLowerCase())
    );
    setSuggestions(matched.slice(0, 5));

    if (LANDMARK_TO_STATION[val]) {
      const info = LANDMARK_TO_STATION[val];
      setDestinationInfo(info);
      onSuggestion(info, val);
    }
  };

  // 🔥 SELECT SUGGESTION
  const selectSuggestion = (landmark) => {
    setDestination(landmark);
    setSuggestions([]);
    const info = LANDMARK_TO_STATION[landmark];
    setDestinationInfo(info);
    onSuggestion(info, landmark);
  };

  // 🔥 SWAP BUTTON
  const swap = () => {
    setDestinationInfo(null);
    onSuggestion(null, "");
    setSuggestions([]);
  };

  // 🔥 MAIN FIND FUNCTION (MISSING BEFORE)
  const handleFind = () => {
    if (!source) {
      alert("Please select a source station");
      return;
    }

    const destStation = destinationInfo?.station || destination;

    if (!destStation) {
      alert("Please enter a destination");
      return;
    }

    // ✅ SAVE RECENT SEARCH
    const newSearch = `${source} → ${destination}`;
    setRecent((prev) => [newSearch, ...prev].slice(0, 3));

    onFind(source, destStation);
  };

  return (
    <div className="bg-navy-800/60 border border-white/8 rounded-2xl p-6 backdrop-blur-sm">

      {/* CITY */}
      <div className="mb-5">
        <label className="text-xs text-slate-500 mb-2 block">City</label>
        <select
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-full bg-navy-900 px-4 py-3 text-white rounded-xl"
        >
          {CITIES.map((c) => (
            <option key={c} disabled={c.includes("Coming Soon")}>
              {c}
            </option>
          ))}
        </select>
      </div>

      {/* SOURCE */}
      <select
        value={source}
        onChange={(e) => setSource(e.target.value)}
        className="w-full mb-3 px-4 py-3 rounded-xl bg-navy-900 text-white"
      >
        <option value="">Select source</option>
        {ALL_STATIONS.map((s) => (
          <option key={s}>{s}</option>
        ))}
      </select>

      {/* DESTINATION */}
      <input
        type="text"
        value={destination}
        onChange={(e) => handleDestinationChange(e.target.value)}
        placeholder="Enter place..."
        className="w-full px-4 py-3 rounded-xl bg-navy-900 text-white"
      />

      {/* SUGGESTIONS */}
      {suggestions.length > 0 && (
        <div className="bg-navy-800 mt-1 rounded-xl">
          {suggestions.map((s) => (
            <button
              key={s}
              onClick={() => selectSuggestion(s)}
              className="block w-full text-left px-4 py-2 hover:bg-sky-500/10"
            >
              {s}
            </button>
          ))}
        </div>
      )}

      {/* BUTTON */}
      <button
        onClick={handleFind}
        className="mt-4 w-full py-3 bg-blue-500 rounded-xl text-white"
      >
        Find Route
      </button>

      {/* RECENT SEARCHES (FIXED POSITION) */}
      {recent.length > 0 && (
        <div className="mt-4">
          <p className="text-xs text-slate-400 mb-2">Recent Searches</p>
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

      {/* DOWNLOAD */}
      <a
        href="/maps/delhi-metro-map.pdf"
        download
        className="block mt-4 text-center text-sky-400"
      >
        📥 Download Metro Map
      </a>

    </div>
  );
}