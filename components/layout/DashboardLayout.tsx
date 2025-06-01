import { ReactNode } from "react";
import { Sidebar } from "./Sidebar";
import { useAuth } from "@/hooks/UseAuth";

interface DashboardLayoutProps {
  children: ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const auth = useAuth();
  return (
    <div className="min-h-screen bg-[#ffffff]/5">
      <Sidebar />
      <div className="pl-64">
        <main className="bg-[#0B3B2D] min-h-screen">{children}</main>
      </div>
    </div>
  );
}
