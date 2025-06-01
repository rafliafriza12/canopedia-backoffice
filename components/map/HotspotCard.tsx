interface HotspotCardProps {
  title: string;
  type: string;
  totalSpecies: number;
  endangeredCount: number;
  area: string;
  variant: "danger" | "warning" | "success";
}

export function HotspotCard({
  title,
  type,
  totalSpecies,
  endangeredCount,
  area,
  variant,
}: HotspotCardProps) {
  const getVariantColor = () => {
    switch (variant) {
      case "danger":
        return "border-red-500/30 from-red-950/30 to-transparent";
      case "warning":
        return "border-yellow-500/30 from-yellow-950/30 to-transparent";
      case "success":
        return "border-green-500/30 from-green-950/30 to-transparent";
    }
  };

  return (
    <div
      className={`border rounded-lg bg-gradient-to-b ${getVariantColor()} p-4`}
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-white font-medium">{title}</h3>
          <p className="text-emerald-400 text-sm mt-1">{type}</p>
        </div>
        <div
          className={`px-2 py-1 rounded text-sm ${
            variant === "danger"
              ? "bg-red-900/50 text-red-300"
              : variant === "warning"
              ? "bg-yellow-900/50 text-yellow-300"
              : "bg-green-900/50 text-green-300"
          }`}
        >
          {variant === "danger"
            ? "Prioritas"
            : variant === "warning"
            ? "Sedang"
            : "Stabil"}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <p className="text-2xl font-bold text-white">{totalSpecies}</p>
          <p className="text-emerald-400 text-sm">Total Spesies</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-white">{endangeredCount}</p>
          <p className="text-emerald-400 text-sm">Terancam Punah</p>
        </div>
      </div>

      <div className="mt-4">
        <p className="text-emerald-400 text-sm">Area: {area}</p>
      </div>
    </div>
  );
}
