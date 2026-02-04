import { Button } from "@/components/ui";

export default function CheckoutPage() {
    const formatPrice = (amount: number) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
        }).format(amount);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="mb-6 text-2xl font-bold text-gray-900">Checkout</h1>

            <div className="grid gap-8 lg:grid-cols-3">
                {/* Form Section */}
                <div className="space-y-6 lg:col-span-2">
                    {/* Delivery Address */}
                    <div className="rounded-xl border border-gray-200 bg-white p-6">
                        <h2 className="text-lg font-semibold text-gray-900">
                            📍 Alamat Pengiriman
                        </h2>
                        <div className="mt-4 space-y-4">
                            <div>
                                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                                    Nama Penerima
                                </label>
                                <input
                                    type="text"
                                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                                    placeholder="Nama lengkap"
                                />
                            </div>
                            <div>
                                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                                    Nomor Telepon
                                </label>
                                <input
                                    type="tel"
                                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                                    placeholder="08xxxxxxxxxx"
                                />
                            </div>
                            <div>
                                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                                    Alamat Lengkap
                                </label>
                                <textarea
                                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                                    rows={3}
                                    placeholder="Jalan, RT/RW, Kelurahan, Kecamatan"
                                />
                            </div>
                            <div>
                                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                                    Catatan (Opsional)
                                </label>
                                <input
                                    type="text"
                                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                                    placeholder="Patokan, warna rumah, dll"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Payment Method */}
                    <div className="rounded-xl border border-gray-200 bg-white p-6">
                        <h2 className="text-lg font-semibold text-gray-900">
                            💳 Metode Pembayaran
                        </h2>
                        <div className="mt-4 space-y-3">
                            <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-gray-200 p-4 hover:border-orange-500">
                                <input
                                    type="radio"
                                    name="payment"
                                    value="cod"
                                    className="h-4 w-4 text-orange-500"
                                    defaultChecked
                                />
                                <span className="flex-1">
                                    <span className="font-medium text-gray-900">
                                        Cash on Delivery (COD)
                                    </span>
                                    <span className="block text-sm text-gray-500">
                                        Bayar saat pesanan tiba
                                    </span>
                                </span>
                            </label>
                            <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-gray-200 p-4 hover:border-orange-500">
                                <input
                                    type="radio"
                                    name="payment"
                                    value="transfer"
                                    className="h-4 w-4 text-orange-500"
                                />
                                <span className="flex-1">
                                    <span className="font-medium text-gray-900">
                                        Transfer Bank
                                    </span>
                                    <span className="block text-sm text-gray-500">
                                        BCA, BNI, BRI, Mandiri
                                    </span>
                                </span>
                            </label>
                        </div>
                    </div>
                </div>

                {/* Order Summary */}
                <div className="lg:col-span-1">
                    <div className="sticky top-24 rounded-xl border border-gray-200 bg-white p-6">
                        <h2 className="text-lg font-semibold text-gray-900">
                            Ringkasan Pesanan
                        </h2>

                        {/* Items */}
                        <div className="mt-4 space-y-3 border-b border-gray-200 pb-4">
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-600">Nasi Goreng Spesial (L) x2</span>
                                <span className="text-gray-900">{formatPrice(50000)}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-600">Es Teh Manis (M) x2</span>
                                <span className="text-gray-900">{formatPrice(16000)}</span>
                            </div>
                        </div>

                        {/* Totals */}
                        <div className="mt-4 space-y-2">
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-600">Subtotal</span>
                                <span className="text-gray-900">{formatPrice(66000)}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-600">Biaya Layanan</span>
                                <span className="text-gray-900">{formatPrice(2000)}</span>
                            </div>
                        </div>

                        <div className="mt-4 border-t border-gray-200 pt-4">
                            <div className="flex justify-between">
                                <span className="font-semibold text-gray-900">Total</span>
                                <span className="font-semibold text-orange-500">
                                    {formatPrice(68000)}
                                </span>
                            </div>
                        </div>

                        <Button className="mt-6 w-full">Buat Pesanan</Button>

                        <p className="mt-4 text-center text-xs text-gray-500">
                            Dengan menekan tombol di atas, kamu menyetujui syarat dan ketentuan kami
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
