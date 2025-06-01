interface SpeciesCardProps {
  name: string;
  scientificName: string;
  family: string;
  location: string;
  status: "Kritis" | "Terancam" | "Stabil";
  populationCount: number;
  geneticScore: number;
}

export function SpeciesCard({
  name,
  scientificName,
  family,
  location,
  status,
  populationCount,
  geneticScore,
}: SpeciesCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Kritis":
        return "bg-red-900/50 text-red-300";
      case "Terancam":
        return "bg-orange-900/50 text-orange-300";
      default:
        return "bg-green-900/50 text-green-300";
    }
  };

  return (
    <div className="bg-[#0B3B2D] rounded-lg p-4 border border-emerald-600/30">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-emerald-700 rounded-lg flex items-center justify-center text-2xl">
          🌿
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-white font-medium">{scientificName}</h3>
              <p className="text-emerald-400 text-sm">Family: {family}</p>
            </div>
            <span
              className={`px-2 py-1 text-sm rounded ${getStatusColor(status)}`}
            >
              {status}
            </span>
          </div>
          <div className="mt-2">
            <p className="text-emerald-300 text-sm">
              <span className="inline-block w-4">📍</span> {location}
            </p>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div className="bg-[#0F4D3A] rounded p-2">
              <p className="text-emerald-300 text-sm">Populasi</p>
              <p className="text-white font-medium">{populationCount}</p>
            </div>
            <div className="bg-[#0F4D3A] rounded p-2">
              <p className="text-emerald-300 text-sm">Variasi Genetik</p>
              <p className="text-white font-medium">{geneticScore}%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
