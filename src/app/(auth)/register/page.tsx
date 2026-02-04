import Link from "next/link";
import { Button, Input } from "@/components/ui";

export default function RegisterPage() {
    return (
        <div className="w-full max-w-md">
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-xl">
                {/* Header */}
                <div className="text-center">
                    <Link href="/" className="inline-flex items-center gap-2">
                        <span className="text-3xl">🍽️</span>
                        <span className="text-2xl font-bold text-gray-900">FoodMarket</span>
                    </Link>
                    <h1 className="mt-6 text-2xl font-bold text-gray-900">Daftar</h1>
                    <p className="mt-2 text-gray-600">
                        Buat akun untuk mulai memesan makanan favoritmu
                    </p>
                </div>

                {/* Form */}
                <form className="mt-8 space-y-4">
                    <Input
                        label="Nama Lengkap"
                        type="text"
                        placeholder="Nama kamu"
                        required
                    />
                    <Input
                        label="Email"
                        type="email"
                        placeholder="nama@email.com"
                        required
                    />
                    <Input
                        label="Nomor Telepon"
                        type="tel"
                        placeholder="08xxxxxxxxxx"
                        required
                    />
                    <Input
                        label="Password"
                        type="password"
                        placeholder="Minimal 8 karakter"
                        required
                    />
                    <Input
                        label="Konfirmasi Password"
                        type="password"
                        placeholder="Ulangi password"
                        required
                    />

                    {/* Role Selection */}
                    <div>
                        <label className="mb-1.5 block text-sm font-medium text-gray-700">
                            Daftar sebagai
                        </label>
                        <div className="grid grid-cols-2 gap-3">
                            <label className="flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-gray-300 p-3 hover:border-orange-500 has-[:checked]:border-orange-500 has-[:checked]:bg-orange-50">
                                <input
                                    type="radio"
                                    name="role"
                                    value="customer"
                                    className="sr-only"
                                    defaultChecked
                                />
                                <span className="text-xl">🛒</span>
                                <span className="text-sm font-medium">Pembeli</span>
                            </label>
                            <label className="flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-gray-300 p-3 hover:border-orange-500 has-[:checked]:border-orange-500 has-[:checked]:bg-orange-50">
                                <input
                                    type="radio"
                                    name="role"
                                    value="seller"
                                    className="sr-only"
                                />
                                <span className="text-xl">🏪</span>
                                <span className="text-sm font-medium">Penjual</span>
                            </label>
                        </div>
                    </div>

                    <div className="flex items-start gap-2">
                        <input
                            type="checkbox"
                            className="mt-1 h-4 w-4 rounded border-gray-300 text-orange-500"
                            required
                        />
                        <span className="text-sm text-gray-600">
                            Saya setuju dengan{" "}
                            <Link href="#" className="text-orange-500 hover:underline">
                                Syarat & Ketentuan
                            </Link>{" "}
                            dan{" "}
                            <Link href="#" className="text-orange-500 hover:underline">
                                Kebijakan Privasi
                            </Link>
                        </span>
                    </div>

                    <Button type="submit" className="w-full">
                        Daftar
                    </Button>
                </form>

                {/* Login Link */}
                <p className="mt-6 text-center text-sm text-gray-600">
                    Sudah punya akun?{" "}
                    <Link href="/login" className="text-orange-500 hover:underline">
                        Masuk
                    </Link>
                </p>
            </div>
        </div>
    );
}
