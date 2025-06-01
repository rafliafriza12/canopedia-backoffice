"use client";

import { useState } from "react";
import { Card } from "@/components/ui/Card";
import { SpeciesCard } from "@/components/species/SpeciesCard";

interface SpeciesStats {
  totalSpecies: number;
  endangeredSpecies: number;
  criticalSpecies: number;
  pendingReview: number;
  samplesCollected: number;
}

interface Species {
  id: number;
  name: string;
  scientificName: string;
  family: string;
  location: string;
  status: "Kritis" | "Terancam" | "Stabil";
  populationCount: number;
  geneticScore: number;
}

const mockSpecies: Species[] = [
  {
    id: 1,
    name: "Dipterocarpus hasseltii",
    scientificName: "Dipterocarpus hasseltii",
    family: "Dipterocarpaceae",
    location: "Kalimantan Tengah, Hutan Tropis",
    status: "Kritis",
    populationCount: 647,
    geneticScore: 34.2,
  },
  {
    id: 2,
    name: "Burung Maleo",
    scientificName: "Macrocephalon maleo",
    family: "Megapodiidae",
    location: "Sulawesi Utara",
    status: "Terancam",
    populationCount: 892,
    geneticScore: 45.7,
  },
  {
    id: 3,
    name: "Anggrek Hitam",
    scientificName: "Coelogyne pandurata",
    family: "Orchidaceae",
    location: "Kalimantan Timur",
    status: "Stabil",
    populationCount: 1247,
    geneticScore: 67.3,
  },
];

export default function SpeciesPage() {
  const [stats, setStats] = useState<SpeciesStats>({
    totalSpecies: 823,
    endangeredSpecies: 99,
    criticalSpecies: 56,
    pendingReview: 21,
    samplesCollected: 1822,
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [familyFilter, setFamilyFilter] = useState("");
  const [provinceFilter, setProvinceFilter] = useState("");

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-white">
            Manajemen Spesies
          </h1>
          <p className="text-emerald-300 mt-1">
            Kelola database spesies biologi dari Indonesia
          </p>
        </div>
        <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700">
          + Tambah Spesies
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <Card className="bg-[#0F4D3A] p-4">
          <p className="text-emerald-300 text-sm">Total Spesies</p>
          <p className="text-2xl font-bold text-white mt-1">
            {stats.totalSpecies}
          </p>
        </Card>
        <Card className="bg-[#0F4D3A] p-4">
          <p className="text-emerald-300 text-sm">Spesies Terancam</p>
          <p className="text-2xl font-bold text-white mt-1">
            {stats.endangeredSpecies}
          </p>
        </Card>
        <Card className="bg-[#0F4D3A] p-4">
          <p className="text-emerald-300 text-sm">Spesies Kritis</p>
          <p className="text-2xl font-bold text-white mt-1">
            {stats.criticalSpecies}
          </p>
        </Card>
        <Card className="bg-[#0F4D3A] p-4">
          <p className="text-emerald-300 text-sm">Pending Terdaftar</p>
          <p className="text-2xl font-bold text-white mt-1">
            {stats.pendingReview}
          </p>
        </Card>
        <Card className="bg-[#0F4D3A] p-4">
          <p className="text-emerald-300 text-sm">Sampel Terkumpul</p>
          <p className="text-2xl font-bold text-white mt-1">
            {stats.samplesCollected}
          </p>
        </Card>
      </div>

      {/* Search & Filter Section */}
      <Card className="bg-[#0F4D3A] p-6">
        <h2 className="text-lg font-medium text-white mb-4">
          Pencarian & Filter
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-emerald-300 mb-1">
              Cari Spesies
            </label>
            <input
              type="text"
              placeholder="Nama spesies, kode, atau kata..."
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
              Family
            </label>
            <input
              type="text"
              placeholder="Semua Family"
              className="w-full bg-[#0B3B2D] border border-emerald-600/30 rounded-lg px-3 py-2 text-white placeholder-emerald-600/50 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              value={familyFilter}
              onChange={(e) => setFamilyFilter(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-emerald-300 mb-1">
              Provinsi
            </label>
            <input
              type="text"
              placeholder="Semua Provinsi"
              className="w-full bg-[#0B3B2D] border border-emerald-600/30 rounded-lg px-3 py-2 text-white placeholder-emerald-600/50 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              value={provinceFilter}
              onChange={(e) => setProvinceFilter(e.target.value)}
            />
          </div>
        </div>
        <div className="flex justify-end mt-4">
          <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700">
            Cari
          </button>
        </div>
      </Card>

      {/* Species List */}
      <Card className="bg-[#0F4D3A] p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium text-white">
            Daftar Spesies ({mockSpecies.length} hasil)
          </h2>
          <select className="bg-[#0B3B2D] text-emerald-300 border border-emerald-600/30 rounded-lg px-3 py-2">
            <option>Urut A-Z</option>
            <option>Urut Z-A</option>
          </select>
        </div>

        <div className="space-y-4">
          {mockSpecies.map((species) => (
            <SpeciesCard key={species.id} {...species} />
          ))}
        </div>
      </Card>
    </div>
  );
}
