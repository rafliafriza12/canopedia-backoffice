"use client";
import { WebLayoutProps } from "@/types";
import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAuth } from "@/hooks/UseAuth";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { AuthLayout } from "@/components/layout/AuthLayout";

const AppLayout: React.FC<WebLayoutProps> = ({ children }) => {
  const auth = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Jika sudah login dan mencoba akses halaman auth, redirect ke dashboard
    if (auth.auth.isAuthenticated && pathname.startsWith("/auth")) {
      router.replace("/dashboard");
    }
    // Jika belum login dan mencoba akses halaman selain auth, redirect ke login
    else if (!auth.auth.isAuthenticated && !pathname.startsWith("/auth")) {
      router.replace("/auth/login");
    }
  }, [auth.auth.isAuthenticated, pathname]);

  // Gunakan AuthLayout untuk path yang dimulai dengan /auth
  if (pathname.startsWith("/auth")) {
    return <AuthLayout>{children}</AuthLayout>;
  }

  // Gunakan DashboardLayout untuk path lainnya
  return <DashboardLayout>{children}</DashboardLayout>;
};

export default AppLayout;
