export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-900 text-white p-4">
        Sidebar
      </aside>
      <main className="flex-1 bg-gray-100 p-6">
        {children}
      </main>
    </div>
  );
}
