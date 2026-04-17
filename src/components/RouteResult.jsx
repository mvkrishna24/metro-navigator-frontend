import { Clock, Ticket, Train, Zap, Star, TrendingUp } from "lucide-react";
import RouteTimeline from "./RouteTimeline";
import { motion } from "framer-motion";

const TAG_STYLES = {
  "AI Recommended": {
    bg: "bg-amber-500/10",
    border: "border-amber-500/25",
    text: "text-amber-400",
    icon: <Zap size={11} />,
  },
  "Fastest Route": {
    bg: "bg-sky-500/10",
    border: "border-sky-500/25",
    text: "text-sky-400",
    icon: <TrendingUp size={11} />,
  },
  "Scenic Route": {
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/25",
    text: "text-emerald-400",
    icon: <Star size={11} />,
  },
};

export default function RouteResult({ route, source, destination, onFavorite }) {
  if (!route) return null;

  const tagStyle = TAG_STYLES[route.tag] || TAG_STYLES["AI Recommended"];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-navy-800/60 border border-white/10 rounded-2xl p-6 mt-6 backdrop-blur-sm"
      style={{ boxShadow: "0 4px 40px rgba(0,0,0,0.4)" }}
    >
      {/* HEADER */}
      <div className="flex items-start justify-between mb-5">
        <div>
          <h3 className="text-base font-semibold text-white">
            {source} → {destination}
          </h3>
          <p className="text-xs text-slate-500 mt-1 font-mono">
            {(route.path?.length || 0)} stations • {route.coaches}
          </p>
        </div>

        <div
          className={`flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-mono ${tagStyle.bg} ${tagStyle.border} ${tagStyle.text}`}
        >
          {tagStyle.icon}
          {route.tag}
        </div>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-3 gap-3 mb-5">
        {[
          {
            icon: <Clock size={14} />,
            label: "Time",
            value: route.time,
          },
          {
            icon: <Ticket size={14} />,
            label: "Fare",
            value: `₹${route.fare}`,
          },
          {
            icon: <Train size={14} />,
            label: "Freq",
            value: route.frequency,
          },
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-navy-800/50 border border-white/10 rounded-xl p-3 text-center"
          >
            <div className="flex justify-center text-sky-400 mb-1">
              {stat.icon}
            </div>
            <p className="text-xs text-slate-500">{stat.label}</p>
            <p className="text-sm font-semibold text-white">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* TIMELINE */}
      <RouteTimeline route={route} />

      {/* ACTION BUTTONS */}
      <div className="mt-6 flex gap-3">
        <button
          onClick={onFavorite}
          className="flex-1 py-2 rounded-xl text-xs bg-yellow-500/10 text-yellow-400 hover:bg-yellow-500/20 transition"
        >
          ⭐ Save Route
        </button>

        <button
          onClick={() =>
            alert("🎫 Coming soon: Digital Metro Ticketing 🚇")
          }
          className="flex-1 py-2 rounded-xl border border-sky-500/30 text-sky-400 text-xs hover:bg-sky-500/10 transition"
        >
          Book Ticket
        </button>
      </div>
    </motion.div>
  );
}