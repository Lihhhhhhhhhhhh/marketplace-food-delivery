import { Button } from "@/components/ui";

interface StoreDetailPageProps {
    params: Promise<{ slug: string }>;
}

export default async function StoreDetailPage({ params }: StoreDetailPageProps) {
    const { slug } = await params;

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Store Header */}
            <div className="mb-8 flex flex-col gap-6 md:flex-row md:items-start">
                <div className="flex h-32 w-32 items-center justify-center rounded-xl bg-gray-100 text-6xl">
                    🏪
                </div>
                <div className="flex-1">
                    <h1 className="text-2xl font-bold text-gray-900">
                        Toko: {slug}
                    </h1>
                    <p className="mt-2 text-gray-600">
                        Deskripsi toko akan ditampilkan di sini. Lorem ipsum dolor sit amet
                        consectetur adipisicing elit.
                    </p>
                    <div className="mt-4 flex items-center gap-4">
                        <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">
                            🟢 Buka
                        </span>
                        <span className="text-sm text-gray-500">📍 Alamat toko</span>
                    </div>
                </div>
            </div>

            {/* Category Filter */}
            <div className="mb-6 flex gap-3">
                <button className="rounded-full bg-orange-500 px-4 py-2 text-sm font-medium text-white">
                    Semua
                </button>
                <button className="rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:border-orange-500 hover:text-orange-500">
                    Makanan
                </button>
                <button className="rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:border-orange-500 hover:text-orange-500">
                    Minuman
                </button>
            </div>

            {/* Products Grid */}
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                    <div
                        key={i}
                        className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md"
                    >
                        <div className="aspect-square bg-gray-100 flex items-center justify-center">
                            <span className="text-5xl">🍽️</span>
                        </div>
                        <div className="p-3">
                            <h3 className="font-medium text-gray-900">Menu {i}</h3>
                            <p className="mt-1 text-sm text-gray-500 line-clamp-2">
                                Deskripsi menu yang lezat
                            </p>

                            {/* Size Variants */}
                            <div className="mt-3 flex flex-wrap gap-2">
                                <button className="rounded-lg border border-orange-500 bg-orange-50 px-2 py-1 text-xs text-orange-600">
                                    S - Rp15.000
                                </button>
                                <button className="rounded-lg border border-gray-300 px-2 py-1 text-xs text-gray-600 hover:border-orange-500">
                                    M - Rp20.000
                                </button>
                                <button className="rounded-lg border border-gray-300 px-2 py-1 text-xs text-gray-600 hover:border-orange-500">
                                    L - Rp25.000
                                </button>
                            </div>

                            <Button size="sm" className="mt-3 w-full">
                                + Keranjang
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
