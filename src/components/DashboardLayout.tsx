import Header from "./Header";
import React from "react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header showAuth={false} />
      <main className="flex-1 flex flex-col">{children}</main>
    </div>
  );
};

export default DashboardLayout; 