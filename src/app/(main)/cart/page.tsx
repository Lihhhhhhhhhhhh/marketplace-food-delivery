import Link from "next/link";
import { Button } from "@/components/ui";

export default function CartPage() {
    // Placeholder cart items
    const cartItems = [
        {
            id: "1",
            name: "Nasi Goreng Spesial",
            variant: "Large",
            price: 25000,
            quantity: 2,
            store: "Warung Makan Bu Tini",
        },
        {
            id: "2",
            name: "Es Teh Manis",
            variant: "Medium",
            price: 8000,
            quantity: 2,
            store: "Warung Makan Bu Tini",
        },
    ];

    const subtotal = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    const formatPrice = (amount: number) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
        }).format(amount);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="mb-6 text-2xl font-bold text-gray-900">Keranjang</h1>

            {cartItems.length === 0 ? (
                <div className="rounded-xl border border-gray-200 bg-white p-12 text-center">
                    <span className="text-6xl">🛒</span>
                    <h2 className="mt-4 text-xl font-semibold text-gray-900">
                        Keranjang Kosong
                    </h2>
                    <p className="mt-2 text-gray-600">
                        Belum ada item di keranjang kamu
                    </p>
                    <Link href="/stores">
                        <Button className="mt-6">Mulai Belanja</Button>
                    </Link>
                </div>
            ) : (
                <div className="grid gap-8 lg:grid-cols-3">
                    {/* Cart Items */}
                    <div className="lg:col-span-2">
                        <div className="rounded-xl border border-gray-200 bg-white">
                            {/* Store Group */}
                            <div className="border-b border-gray-100 p-4">
                                <p className="font-medium text-gray-900">
                                    🏪 Warung Makan Bu Tini
                                </p>
                            </div>

                            {/* Items */}
                            <div className="divide-y divide-gray-100">
                                {cartItems.map((item) => (
                                    <div key={item.id} className="flex gap-4 p-4">
                                        <div className="flex h-20 w-20 items-center justify-center rounded-lg bg-gray-100 text-3xl">
                                            🍽️
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-medium text-gray-900">{item.name}</h3>
                                            <p className="text-sm text-gray-500">
                                                Ukuran: {item.variant}
                                            </p>
                                            <p className="mt-1 font-semibold text-orange-500">
                                                {formatPrice(item.price)}
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100">
                                                -
                                            </button>
                                            <span className="w-8 text-center">{item.quantity}</span>
                                            <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100">
                                                +
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24 rounded-xl border border-gray-200 bg-white p-6">
                            <h2 className="text-lg font-semibold text-gray-900">
                                Ringkasan Pesanan
                            </h2>
                            <div className="mt-4 space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-600">Subtotal</span>
                                    <span className="text-gray-900">{formatPrice(subtotal)}</span>
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
                                        {formatPrice(subtotal + 2000)}
                                    </span>
                                </div>
                            </div>
                            <Link href="/checkout" className="block">
                                <Button className="mt-6 w-full">Checkout</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
