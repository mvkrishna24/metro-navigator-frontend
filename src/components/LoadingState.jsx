export default function LoadingState() {
  return (
    <div className="bg-navy-800/60 border border-white/8 rounded-2xl p-8 text-center mt-6">
      <div className="flex justify-center mb-4">
        <div className="relative">
          {/* Animated train dots */}
          <div className="flex items-center gap-2">
            {[0, 1, 2, 3, 4].map(i => (
              <div
                key={i}
                className="w-2 h-2 rounded-full bg-sky-500"
                style={{
                  animation: `pulse 1.2s ease-in-out ${i * 0.15}s infinite`,
                  opacity: 0.3
                }}
              />
            ))}
          </div>
        </div>
      </div>
      <p className="text-sky-400 font-mono text-sm tracking-widest">FINDING BEST ROUTE...</p>
      <p className="text-slate-600 text-xs mt-1">Running Dijkstra's Algorithm</p>
    </div>
  );
}