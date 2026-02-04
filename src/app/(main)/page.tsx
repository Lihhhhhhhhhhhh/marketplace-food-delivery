import Link from "next/link";
import { Button } from "@/components/ui";

export default function HomePage() {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-orange-500 to-orange-600 px-4 py-20 text-white">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
                        Pesan Makanan Favoritmu
                    </h1>
                    <p className="mx-auto mt-4 max-w-2xl text-lg text-orange-100">
                        Temukan berbagai pilihan makanan dan minuman dari toko-toko terbaik di sekitarmu
                    </p>
                    <div className="mt-8 flex justify-center gap-4">
                        <Link href="/stores">
                            <Button size="lg" variant="secondary">
                                Lihat Semua Toko
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Categories Section */}
            <section className="px-4 py-16">
                <div className="container mx-auto">
                    <h2 className="mb-8 text-center text-2xl font-bold text-gray-900">
                        Kategori
                    </h2>
                    <div className="grid gap-6 md:grid-cols-2">
                        {/* Makanan */}
                        <Link
                            href="/categories/makanan"
                            className="group flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-orange-500 hover:shadow-md"
                        >
                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-3xl transition-transform group-hover:scale-110">
                                🍔
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900">Makanan</h3>
                                <p className="text-gray-600">
                                    Berbagai pilihan makanan lezat
                                </p>
                            </div>
                        </Link>

                        {/* Minuman */}
                        <Link
                            href="/categories/minuman"
                            className="group flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-orange-500 hover:shadow-md"
                        >
                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-3xl transition-transform group-hover:scale-110">
                                🥤
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900">Minuman</h3>
                                <p className="text-gray-600">
                                    Minuman segar untuk menemani harimu
                                </p>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Featured Stores Section - Placeholder */}
            <section className="bg-gray-50 px-4 py-16">
                <div className="container mx-auto">
                    <h2 className="mb-8 text-center text-2xl font-bold text-gray-900">
                        Toko Populer
                    </h2>
                    <div className="grid gap-6 md:grid-cols-3">
                        {/* Placeholder cards */}
                        {[1, 2, 3].map((i) => (
                            <div
                                key={i}
                                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
                            >
                                <div className="mb-4 flex h-32 items-center justify-center rounded-lg bg-gray-100">
                                    <span className="text-5xl">🏪</span>
                                </div>
                                <h3 className="font-semibold text-gray-900">Toko {i}</h3>
                                <p className="mt-1 text-sm text-gray-600">
                                    Deskripsi toko akan muncul di sini
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 text-center">
                        <Link href="/stores">
                            <Button variant="outline">Lihat Semua Toko</Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="px-4 py-16">
                <div className="container mx-auto text-center">
                    <h2 className="text-2xl font-bold text-gray-900">
                        Ingin Menjadi Penjual?
                    </h2>
                    <p className="mt-2 text-gray-600">
                        Daftarkan toko kamu dan mulai jual produkmu di FoodMarket
                    </p>
                    <div className="mt-6">
                        <Link href="/register?role=seller">
                            <Button>Daftar Sebagai Penjual</Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
