"use client";

import Sidebar from "@/components/admin/sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (

    <div className="flex min-h-screen bg-gray-100">

      <Sidebar />

      <div className="flex-1">

        <header className="h-16 bg-white border-b flex items-center justify-between px-6">

          <h1 className="font-semibold text-lg">
            GMRH Kitchen Admin
          </h1>

        </header>

        <main className="p-6">

          {children}

        </main>

      </div>

    </div>

  );
}