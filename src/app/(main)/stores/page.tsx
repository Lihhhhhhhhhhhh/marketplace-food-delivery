export default function StoresPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="mb-6 text-2xl font-bold text-gray-900">Semua Toko</h1>

            {/* Filter Section */}
            <div className="mb-6 flex flex-wrap gap-4">
                <select className="rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20">
                    <option value="">Semua Kategori</option>
                    <option value="makanan">Makanan</option>
                    <option value="minuman">Minuman</option>
                </select>
                <select className="rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20">
                    <option value="">Urutkan</option>
                    <option value="price_asc">Harga: Rendah ke Tinggi</option>
                    <option value="price_desc">Harga: Tinggi ke Rendah</option>
                </select>
            </div>

            {/* Stores Grid - Placeholder */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                    <a
                        key={i}
                        href={`/stores/store-${i}`}
                        className="block rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
                    >
                        <div className="mb-4 flex h-40 items-center justify-center rounded-lg bg-gray-100">
                            <span className="text-5xl">🏪</span>
                        </div>
                        <h2 className="font-semibold text-gray-900">Toko {i}</h2>
                        <p className="mt-1 text-sm text-gray-600">
                            Deskripsi singkat tentang toko ini
                        </p>
                        <div className="mt-3 flex items-center gap-2">
                            <span className="rounded-full bg-green-100 px-2 py-1 text-xs text-green-700">
                                Buka
                            </span>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}
