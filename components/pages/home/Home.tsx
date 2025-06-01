"use client";
import { useAuth } from "@/hooks/UseAuth";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
const HomePage: React.FC = () => {
  const auth = useAuth();
  const navigation = useRouter();

  useEffect(() => {
    if (!auth.auth.isAuthenticated) navigation.replace("/auth/login");
  }, [auth.auth.isAuthenticated, navigation]);

  if (!auth.auth.isAuthenticated) {
    navigation.replace("/auth/login");
    return null;
  }

  return (
    <div className="w-full h-screen flex items-center justify-center"></div>
  );
};

export default HomePage;
