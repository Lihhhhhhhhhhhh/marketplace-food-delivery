import Link from "next/link";

export function Footer() {
    return (
        <footer className="border-t border-gray-200 bg-gray-50">
            <div className="container mx-auto px-4 py-8">
                <div className="grid gap-8 md:grid-cols-4">
                    {/* Brand */}
                    <div>
                        <Link href="/" className="flex items-center gap-2">
                            <span className="text-2xl">🍽️</span>
                            <span className="text-xl font-bold text-gray-900">FoodMarket</span>
                        </Link>
                        <p className="mt-3 text-sm text-gray-600">
                            Platform marketplace untuk pesan makanan dan minuman dari berbagai toko favorit kamu.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="mb-3 font-semibold text-gray-900">Menu</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>
                                <Link href="/stores" className="hover:text-orange-500">
                                    Semua Toko
                                </Link>
                            </li>
                            <li>
                                <Link href="/categories/makanan" className="hover:text-orange-500">
                                    Makanan
                                </Link>
                            </li>
                            <li>
                                <Link href="/categories/minuman" className="hover:text-orange-500">
                                    Minuman
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Customer */}
                    <div>
                        <h3 className="mb-3 font-semibold text-gray-900">Pelanggan</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>
                                <Link href="/login" className="hover:text-orange-500">
                                    Masuk
                                </Link>
                            </li>
                            <li>
                                <Link href="/register" className="hover:text-orange-500">
                                    Daftar
                                </Link>
                            </li>
                            <li>
                                <Link href="/dashboard/orders" className="hover:text-orange-500">
                                    Pesanan Saya
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="mb-3 font-semibold text-gray-900">Kontak</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>📧 support@foodmarket.id</li>
                            <li>📞 +62 812-3456-7890</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} FoodMarket. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
