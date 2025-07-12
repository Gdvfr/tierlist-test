ase 2:
      return <Medal className="w-6 h-6 text-gray-300" />;
    case 3:
      return <Trophy className="w-6 h-6 text-amber-600" />;
    default:
      return <Star className="w-5 h-5 text-blue-400" />;
  }
};

const getRankGradient = (rank: number) => {
  switch (rank) {
    case 1:
      return "from-yellow-500/20 to-amber-600/20 border-yellow-500/30";
    case 2:
      return "from-gray-400/20 to-slate-500/20 border-gray-400/30";
    case 3:
      return "from-amber-600/20 to-orange-600/20 border-amber-600/30";
    default:
      return "from-blue-500/10 to-purple-600/10 border-blue-500/20";
  }
};

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10" />
        <div className="relative container mx-auto px-4 py-16 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sword className="w-8 h-8 text-blue-400" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              PvP Leaderboard
            </h1>
            <Sword className="w-8 h-8 text-purple-400" />
          </div>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            The ultimate ranking of the best PvP players. Battle your way to the top and claim your throne.
          </p>
        </div>
      </div>

      {/* Leaderboard */}
      <div className="container mx-auto px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Top 3 Special Display */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {pvpData.slice(0, 3).map((player, index) => (
              <Card
                key={player.rank}
                className={`relative overflow-hidden bg-gradient-to-br ${getRankGradient(
                  player.rank
                )} backdrop-blur-sm border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  index === 0 ? "md:order-2 transform md:scale-110" : index === 1 ? "md:order-1" : "md:order-3"
                }`}
              >
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    {getRankIcon(player.rank)}
                  </div>
                  <div className="text-6xl mb-4">{player.emoji}</div>
                  <h3 className="text-2xl font-bold text-white mb-2">{player.name}</h3>
                  <Badge variant="secondary" className="bg-slate-700/50 text-slate-200">
                    #{player.rank}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Rest of the Rankings */}
          <div className="space-y-4">
            {pvpData.slice(3).map((player) => (
              <Card
                key={player.rank}
                className={`bg-gradient-to-r ${getRankGradient(
                  player.rank
                )} backdrop-blur-sm border transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${
                  player.status === "coming" ? "opacity-60" : ""
                }`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6">
                      <div className="flex items-center gap-3">
                        {getRankIcon(player.rank)}
                        <span className="text-3xl font-bold text-white">#{player.rank}</span>
                      </div>
                      <div className="text-4xl">{player.emoji}</div>
                      <div>
                        <h3 className={`text-xl font-semibold ${
                          player.status === "coming" ? "text-slate-400" : "text-white"
                        }`}>
                          {player.name}
                        </h3>
                        {player.status === "active" && (
                          <p className="text-slate-300 text-sm">Elite PvP Player</p>
                        )}
                      </div>
                    </div>
                    {player.status === "active" && (
                      <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                        Active
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 py-8 border-t border-slate-700">
          <p className="text-slate-400">
            Think you have what it takes? Challenge the best and earn your spot on the leaderboard.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
