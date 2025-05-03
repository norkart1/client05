import React from "react";
import { Trophy, User } from "lucide-react";

const Leaderboard = () => {
  const winners = [
    { name: "Anna", team: "Red Phoenix", position: "1st" },
    { name: "Leo", team: "Blue Dragon", position: "2nd" },
    { name: "Mia", team: "Green Tiger", position: "3rd" },
  ];
  
  const positionColors = {
    "1st": "from-lime-400 via-green-500 to-emerald-600",
    "2nd": "from-green-300 via-green-400 to-green-500",
    "3rd": "from-emerald-300 via-emerald-400 to-emerald-500",
  };
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-emerald-500/30 via-green-600/30 to-emerald-500/30 px-4 py-10">
      <div className="max-w-4xl w-full bg-emerald-600/30 dark:bg-emerald-800/40 rounded-2xl shadow-lg backdrop-blur-md p-6 sm:p-10 text-white">
        <h2 className="text-4xl font-bold mb-8 text-center flex items-center justify-center gap-2">
          <Trophy className="text-yellow-300 animate-pulse" /> Leaderboard
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {winners.map((winner, index) => (
            <div
              key={index}
              className={`rounded-xl p-6 flex flex-col items-center text-center shadow-[0_0_20px_rgba(34,197,94,0.6)] bg-gradient-to-tr ${positionColors[winner.position]} text-white`}
            >
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4 shadow-md">
                <User className="w-8 h-8 text-green-200" />
              </div>
              <h3 className="text-xl font-semibold">{winner.name}</h3>
              <p className="text-emerald-100">{winner.team}</p>
              <span className="mt-2 px-4 py-1 rounded-full bg-white/10 text-sm font-medium text-white shadow">
                {winner.position}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;