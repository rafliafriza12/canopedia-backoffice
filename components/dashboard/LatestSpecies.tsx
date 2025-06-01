interface Species {
  id: number;
  name: string;
  scientificName: string;
  status: "Stabil" | "Terancam" | "Kritis";
}

const mockData: Species[] = [
  {
    id: 1,
    name: "Oranmgutan kalimantan",
    scientificName: "Deilenomys hesselii",
    status: "Terancam",
  },
  {
    id: 2,
    name: "Burung Iris",
    scientificName: "Shoma hesperius",
    status: "Stabil",
  },
  {
    id: 3,
    name: "Penyu Hijau",
    scientificName: "Aspidura malacoceros",
    status: "Kritis",
  },
];

export function LatestSpecies() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-emerald-800">
            <th className="text-left py-3 px-4 text-emerald-300">Nama</th>
            <th className="text-left py-3 px-4 text-emerald-300">Nama Latin</th>
            <th className="text-left py-3 px-4 text-emerald-300">Status</th>
            <th className="text-left py-3 px-4 text-emerald-300">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {mockData.map((species) => (
            <tr
              key={species.id}
              className="border-b border-emerald-800 hover:bg-emerald-800/30"
            >
              <td className="py-3 px-4 text-white">{species.name}</td>
              <td className="py-3 px-4 italic text-emerald-300">
                {species.scientificName}
              </td>
              <td className="py-3 px-4">
                <span
                  className={`px-2 py-1 rounded text-sm ${
                    species.status === "Stabil"
                      ? "bg-green-900 text-green-300"
                      : species.status === "Terancam"
                      ? "bg-orange-900 text-orange-300"
                      : "bg-red-900 text-red-300"
                  }`}
                >
                  {species.status}
                </span>
              </td>
              <td className="py-3 px-4">
                <button className="text-emerald-300 hover:text-emerald-200">
                  Detail
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
