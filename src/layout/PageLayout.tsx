import React from "react";

export const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="px-40 py-3 h-[calc(100vh-48px)]">{children}</div>;
};
