import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <div className={`bg-[#FFFFFF]/5 rounded-lg shadow-sm ${className}`}>
      {children}
    </div>
  );
}
