"use client";

import { useState } from "react";
import { Card } from "@/components/ui/Card";
import { HotspotCard } from "@/components/map/HotspotCard";

interface MapStats {
  totalProvinces: number;
  totalLocations: number;
  conservationAreas: number;
  criticalAreas: number;
}

interface ProvinceData {
  name: string;
  totalSpecies: number;
  endangeredSpecies: number;
  area: string;
}

export default function MapPage() {
  const [stats, setStats] = useState<MapStats>({
    totalProvinces: 34,
    totalLocations: 2847,
    conservationAreas: 12,
    criticalAreas: 8,
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [regionFilter, setRegionFilter] = useState("");
  const [yearFilter, setYearFilter] = useState("");

  const hotspotData = [
    {
      title: "Taman Nasional Leuser",
      type: "Kawasan Hutan & Ekosistem",
      totalSpecies: 127,
      endangeredCount: 23,
      area: "450 ribu ha",
      variant: "danger" as const,
    },
    {
      title: "Hutan Dipterokarpus",
      type: "Hutan Hujan Tropis",
      totalSpecies: 86,
      endangeredCount: 42,
      area: "782 ribu ha",
      variant: "danger" as const,
    },
    {
      title: "Pegunungan Jayawijaya",
      type: "Wilayah Pegunungan",
      totalSpecies: 76,
      endangeredCount: 28,
      area: "524 ribu ha",
      variant: "warning" as const,
    },
    {
      title: "Taman Nasional Bukit Duabelas",
      type: "Kawasan Konservasi",
      totalSpecies: 19,
      endangeredCount: 12,
      area: "268 ribu ha",
      variant: "success" as const,
    },
  ];

  const provinceData: ProvinceData[] = [
    {
      name: "Kalimantan Tengah",
      totalSpecies: 156,
      endangeredSpecies: 23,
      area: "15.380 km²",
    },
    {
      name: "Papua",
      totalSpecies: 142,
      endangeredSpecies: 12,
      area: "14.535 km²",
    },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-white">Peta Distribusi</h1>
        <p className="text-emerald-300 mt-1">
          Visualisasi persebaran spesies biologi di seluruh Indonesia
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-[#0F4D3A] p-4">
          <div className="flex items-center gap-3">
            <div className="text-2xl">📍</div>
            <div>
              <p className="text-2xl font-bold text-white">
                {stats.totalProvinces}
              </p>
              <p className="text-emerald-300 text-sm">Provinsi Tercakup</p>
              <p className="text-emerald-400 text-xs mt-1">
                ↑ 100% Coverage Indonesia
              </p>
            </div>
          </div>
        </Card>

        <Card className="bg-[#0F4D3A] p-4">
          <div className="flex items-center gap-3">
            <div className="text-2xl">📌</div>
            <div>
              <p className="text-2xl font-bold text-white">
                {stats.totalLocations}
              </p>
              <p className="text-emerald-300 text-sm">Lokasi Sampling</p>
              <p className="text-emerald-400 text-xs mt-1">↑ 156 titik baru</p>
            </div>
          </div>
        </Card>

        <Card className="bg-[#0F4D3A] p-4">
          <div className="flex items-center gap-3">
            <div className="text-2xl">🌳</div>
            <div>
              <p className="text-2xl font-bold text-white">
                {stats.conservationAreas}
              </p>
              <p className="text-emerald-300 text-sm">Hotspot Keanekaragaman</p>
              <p className="text-emerald-400 text-xs mt-1">
                ↑ Bertambah 2 area
              </p>
            </div>
          </div>
        </Card>

        <Card className="bg-[#0F4D3A] p-4">
          <div className="flex items-center gap-3">
            <div className="text-2xl">⚠️</div>
            <div>
              <p className="text-2xl font-bold text-white">
                {stats.criticalAreas}
              </p>
              <p className="text-emerald-300 text-sm">Area Terancam</p>
              <p className="text-red-400 text-xs mt-1">↑ Meningkat 3 area</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Filter Section */}
      <Card className="bg-[#0F4D3A] p-6">
        <h2 className="text-lg font-medium text-white mb-4">
          Filter Peta & Data
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-emerald-300 mb-1">
              Jenis Spesies
            </label>
            <input
              type="text"
              placeholder="Pilih Spesies"
              className="w-full bg-[#0B3B2D] border border-emerald-600/30 rounded-lg px-3 py-2 text-white placeholder-emerald-600/50 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-emerald-300 mb-1">
              Status Konservasi
            </label>
            <input
              type="text"
              placeholder="Semua Status"
              className="w-full bg-[#0B3B2D] border border-emerald-600/30 rounded-lg px-3 py-2 text-white placeholder-emerald-600/50 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-emerald-300 mb-1">
              Wilayah
            </label>
            <input
              type="text"
              placeholder="Pilih Wilayah"
              className="w-full bg-[#0B3B2D] border border-emerald-600/30 rounded-lg px-3 py-2 text-white placeholder-emerald-600/50 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              value={regionFilter}
              onChange={(e) => setRegionFilter(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-emerald-300 mb-1">
              Tahun Data
            </label>
            <input
              type="text"
              placeholder="2024"
              className="w-full bg-[#0B3B2D] border border-emerald-600/30 rounded-lg px-3 py-2 text-white placeholder-emerald-600/50 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              value={yearFilter}
              onChange={(e) => setYearFilter(e.target.value)}
            />
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Map Section */}
        <div className="md:col-span-2">
          <Card className="bg-[#0F4D3A] p-6">
            <h2 className="text-lg font-medium text-white mb-4">
              Peta Distribusi Spesies
            </h2>
            <div className="aspect-[4/3] bg-[#ECF9CB]/10 rounded-lg flex items-center justify-center">
              <p className="text-emerald-300">Peta Interaktif Indonesia</p>
            </div>
          </Card>
        </div>

        {/* Province Distribution */}
        <div>
          <Card className="bg-[#0F4D3A] p-6">
            <h2 className="text-lg font-medium text-white mb-4">
              Distribusi per Provinsi
              <span className="text-sm font-normal text-emerald-400 ml-2">
                (28 provinsi telah terdata)
              </span>
            </h2>
            <div className="space-y-4">
              {provinceData.map((province) => (
                <div
                  key={province.name}
                  className="bg-[#0B3B2D] rounded-lg p-4 border border-emerald-600/30"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-white font-medium">
                        {province.name}
                      </h3>
                      <p className="text-emerald-400 text-sm mt-1">
                        Terdata: {province.totalSpecies}
                      </p>
                    </div>
                    <div className="bg-red-900/50 text-red-300 px-2 py-1 rounded text-sm">
                      {province.endangeredSpecies} Terancam
                    </div>
                  </div>
                  <div className="mt-2">
                    <p className="text-emerald-400 text-sm">
                      Luas: {province.area}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>

      {/* Hotspot Section */}
      <Card className="bg-[#0F4D3A] p-6">
        <h2 className="text-lg font-medium text-white mb-4">
          Hotspot Keanekaragaman
          <span className="text-sm font-normal text-emerald-400 ml-2">
            Area dengan keanekaragaman spesies tertinggi yang memerlukan
            prioritas konservasi
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {hotspotData.map((hotspot) => (
            <HotspotCard key={hotspot.title} {...hotspot} />
          ))}
        </div>
      </Card>
    </div>
  );
}
