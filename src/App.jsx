import { useState } from 'react';
import Navbar from './components/Navbar';
import SearchPanel from './components/SearchPanel';
import SuggestionCard from './components/SuggestionCard';
import LoadingState from './components/LoadingState';
import RouteResult from './components/RouteResult';
import { ROUTES, getRouteKey, generateMockRoute } from './data/metroData';

export default function App() {
  const [suggestion, setSuggestion] = useState(null);
  const [suggestionLandmark, setSuggestionLandmark] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [routeSource, setRouteSource] = useState('');
  const [routeDest, setRouteDest] = useState('');

  // ✅ FIXED — Proper suggestion handler
  const handleSuggestion = (info, landmark) => {
    setSuggestion(info);
    setSuggestionLandmark(landmark || '');
    setResult(null);
  };

  // ✅ Route logic
  const handleFind = (source, destination) => {
    setLoading(true);
    setResult(null);
    setRouteSource(source);
    setRouteDest(destination);

    setTimeout(() => {
      const { key } = getRouteKey(source, destination);
      const route = key
        ? ROUTES[key]
        : generateMockRoute(source, destination);

      setResult(route);
      setLoading(false);
    }, 1200);
  };

  return (
    <div
      className="min-h-screen"
      style={{
        background:
          'radial-gradient(ellipse at 20% 0%, #071428 0%, #020b18 60%)',
      }}
    >
      <Navbar />

      {/* Background grid */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#0ea5e9 1px, transparent 1px), linear-gradient(90deg, #0ea5e9 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Hero */}
      <div className="pt-28 pb-6 px-4 text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-sky-500/5 border border-sky-500/15 rounded-full px-4 py-1.5 mb-5">
          <div className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
          <span className="text-xs font-mono text-sky-400/80 tracking-widest uppercase">
            AI-Powered Transit Intelligence
          </span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl text-white mb-3 leading-tight">
          Navigate Delhi Metro
          <br />
          <span style={{ color: '#0ea5e9' }}>Smarter.</span>
        </h1>

        <p className="text-slate-500 text-sm sm:text-base max-w-md mx-auto">
          Enter any landmark. Get the fastest metro route.
        </p>
      </div>

      {/* Main Card */}
      <div className="max-w-lg mx-auto px-4 pb-24">
        <SearchPanel
          onFind={handleFind}
          onSuggestion={handleSuggestion}
        />

        {/* Suggestion */}
        {suggestion && (
          <SuggestionCard
            info={suggestion}
            landmark={suggestionLandmark}
          />
        )}

        {/* Loading */}
        {loading && <LoadingState />}

        {/* Route Result */}
        {result && !loading && (
          <RouteResult
            route={result}
            source={routeSource}
            destination={routeDest}
          />
        )}
      </div>

      {/* Footer */}
      <footer
        className="fixed bottom-0 left-0 right-0 text-center py-3 border-t border-white/5 text-xs text-slate-700 font-mono"
        style={{
          background: 'rgba(2, 11, 24, 0.9)',
          backdropFilter: 'blur(8px)',
        }}
      >
        Metro Navigator India • Demo • Delhi Metro
      </footer>
    </div>
  );
}