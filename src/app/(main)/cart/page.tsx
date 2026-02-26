import Link from "next/link";

export default function CartPage() {
    const hasItems = true;

    if (!hasItems) {
        return (
            <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
                <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-orange-100 text-orange-500">
                    <span className="text-sm font-medium">Ikon</span>
                </div>
                <h2 className="mb-3 text-2xl font-bold text-gray-900">Keranjang Anda Kosong</h2>
                <p className="mb-8 text-gray-500">Belum ada produk di keranjang Anda</p>
                <Link href="/menu" className="rounded-xl bg-orange-500 px-8 py-3.5 font-semibold text-white transition-colors hover:bg-orange-600">
                    Lihat Menu
                </Link>
            </div>
        );
    }

    return (
        <div className="mx-auto max-w-5xl px-4 py-12">
            <h1 className="mb-8 text-3xl font-bold text-gray-900">Keranjang Belanja</h1>
            
            <div className="flex flex-col gap-8 md:flex-row">
                <div className="flex-1 space-y-4">
                    <div className="flex items-center gap-5 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                        <div className="h-24 w-24 flex-shrink-0 rounded-xl bg-gray-100"></div>
                        <div className="flex flex-1 flex-col">
                            <div className="flex justify-between">
                                <h3 className="text-lg font-bold text-gray-900">Es Kelapa Muda</h3>
                                <button className="text-red-500 hover:text-red-700">Hapus</button>
                            </div>
                            <p className="mt-1 text-sm text-gray-500">Kelapa muda segar dengan es</p>
                            <div className="mt-4 flex items-center justify-between">
                                <span className="font-bold text-orange-500">Rp 10.000</span>
                                <div className="flex items-center gap-4 rounded-xl border border-gray-200 px-4 py-1.5">
                                    <button className="text-gray-500 hover:text-orange-500">-</button>
                                    <span className="text-sm font-semibold text-gray-900">1</span>
                                    <button className="text-gray-500 hover:text-orange-500">+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-96">
                    <div className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm">
                        <h2 className="mb-6 text-xl font-bold text-gray-900">Ringkasan Pesanan</h2>
                        <div className="space-y-4 text-gray-600">
                            <div className="flex justify-between">
                                <span>Es Kelapa Muda x1</span>
                                <span className="font-medium">Rp 10.000</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Ayam Goreng x1</span>
                                <span className="font-medium">Rp 10.000</span>
                            </div>
                            
                            <div className="my-6 h-px w-full bg-gray-200"></div>
                            
                            <div className="flex justify-between text-lg font-bold text-gray-900">
                                <span>Total</span>
                                <span>Rp 20.000</span>
                            </div>
                        </div>
                        <button className="mt-8 w-full rounded-xl bg-orange-500 py-3.5 font-semibold text-white transition-colors hover:bg-orange-600">
                            Checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}