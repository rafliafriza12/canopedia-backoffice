"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/Card";
import { LineChart, PieChart } from "@/components/charts";
import { LatestSpecies } from "@/components/dashboard/LatestSpecies";
import { LatestActivities } from "@/components/dashboard/LatestActivities";

export default function DashboardPage() {
  const [stats, setStats] = useState({
    totalSpecies: 798,
    pendingCount: 21,
    specialAttentionCount: 96,
  });

  return (
    <div className="p-6 space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-emerald-700 text-white p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-medium">Total Species Terdata</h3>
              <p className="text-3xl font-bold mt-2">{stats.totalSpecies}</p>
            </div>
            <div className="text-4xl">🌿</div>
          </div>
          <p className="text-sm mt-2 text-emerald-200">↑ 12% dari bulan lalu</p>
        </Card>

        <Card className="bg-orange-600 text-white p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-medium">Pending Terdaftar</h3>
              <p className="text-3xl font-bold mt-2">{stats.pendingCount}</p>
            </div>
            <div className="text-4xl">📝</div>
          </div>
          <p className="text-sm mt-2 text-orange-200">Perlu review</p>
        </Card>

        <Card className="bg-red-600 text-white p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-medium">Species Terancam</h3>
              <p className="text-3xl font-bold mt-2">
                {stats.specialAttentionCount}
              </p>
            </div>
            <div className="text-4xl">⚠️</div>
          </div>
          <p className="text-sm mt-2 text-red-200">↑ Meningkat bulan ini</p>
        </Card>
      </div>

      {/* Charts Section */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6 bg-[#0F4D3A]">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium text-white">
              Tren Registrasi Species
            </h3>
            <button className="text-emerald-300 hover:text-emerald-200 text-sm">
              Lihat Semua
            </button>
          </div>
          <LineChart />
        </Card>

        <Card className="p-6 bg-[#0F4D3A]">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium text-white">
              Status Konservasi
            </h3>
            <button className="text-emerald-300 hover:text-emerald-200 text-sm">
              Lihat Detail
            </button>
          </div>
          <PieChart />
        </Card>
      </div> */}

      {/* Latest Species Section */}
      <Card className="p-6 bg-[#0F4D3A]">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium text-white">Species Terbaru</h3>
          <button className="text-emerald-300 hover:text-emerald-200 text-sm">
            Semua Species
          </button>
        </div>
        <LatestSpecies />
      </Card>

      {/* Latest Activities Section */}
      <Card className="p-6 bg-[#0F4D3A]">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium text-white">Aktivitas Terbaru</h3>
          <button className="text-emerald-300 hover:text-emerald-200 text-sm">
            Lihat Semua
          </button>
        </div>
        <LatestActivities />
      </Card>
    </div>
  );
}
