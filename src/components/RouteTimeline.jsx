import { Train, ArrowRight, AlertCircle } from 'lucide-react';

const LINE_COLORS = {
  yellow: '#fbbf24',
  blue: '#3b82f6',
  red: '#ef4444',
  green: '#22c55e',
  violet: '#a855f7',
};

export default function RouteTimeline({ route }) {
  const { path, interchanges, line } = route;
  const lineColor = LINE_COLORS[line] || '#0ea5e9';

  return (
    <div className="mt-5">
      <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-4">Route Path</p>
      <div className="relative pl-8">
        {/* Vertical line */}
        <div
          className="absolute left-3 top-3 bottom-3 w-0.5"
          style={{ background: `linear-gradient(to bottom, ${lineColor}40, ${lineColor}, ${lineColor}40)` }}
        />

        {path.map((station, idx) => {
          const isFirst = idx === 0;
          const isLast = idx === path.length - 1;
          const isInterchange = interchanges?.includes(station);

          return (
            <div key={idx} className="relative flex items-start mb-4 last:mb-0">
              {/* Station dot */}
              <div
                className="absolute -left-5 mt-0.5 flex items-center justify-center"
                style={{ width: '10px', height: '10px' }}
              >
                <div
                  className={`rounded-full border-2 ${isFirst || isLast ? 'w-3 h-3' : isInterchange ? 'w-3 h-3' : 'w-2 h-2'}`}
                  style={{
                    borderColor: lineColor,
                    backgroundColor: isFirst || isLast ? lineColor : isInterchange ? '#fff' : 'transparent',
                    boxShadow: isFirst || isLast || isInterchange ? `0 0 6px ${lineColor}80` : 'none'
                  }}
                />
              </div>

              {/* Station name */}
              <div className={`ml-3 flex-1 pb-0.5 ${isFirst || isLast ? '' : ''}`}>
                <span
                  className={`text-sm ${isFirst || isLast ? 'text-white font-semibold' : isInterchange ? 'text-amber-300 font-medium' : 'text-slate-400'}`}
                >
                  {station}
                </span>
                {isInterchange && (
                  <span className="ml-2 text-xs bg-amber-500/15 border border-amber-500/25 text-amber-400 px-2 py-0.5 rounded-full font-mono inline-flex items-center gap-1">
                    <ArrowRight size={9} /> Interchange
                  </span>
                )}
                {isFirst && (
                  <span className="ml-2 text-xs bg-green-500/15 border border-green-500/25 text-green-400 px-2 py-0.5 rounded-full font-mono">
                    Board Here
                  </span>
                )}
                {isLast && (
                  <span className="ml-2 text-xs bg-sky-500/15 border border-sky-500/25 text-sky-400 px-2 py-0.5 rounded-full font-mono">
                    Exit Here
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}