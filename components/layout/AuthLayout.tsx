import { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen w-screen bg-[#0B3B2D] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <span className="text-4xl">🌿</span>
            <h1 className="text-3xl font-bold text-white ml-2">CANOPEDIA</h1>
          </div>
          <p className="text-emerald-300">
            Portal admin keanekaragaman hayati Indonesia
          </p>
        </div>
        <div className="w-full bg-white rounded-lg shadow-xl p-6">
          {children}
        </div>
      </div>
    </div>
  );
}
