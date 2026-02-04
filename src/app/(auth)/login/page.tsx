import Link from "next/link";
import { Button, Input } from "@/components/ui";

export default function LoginPage() {
    return (
        <div className="w-full max-w-md">
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-xl">
                {/* Header */}
                <div className="text-center">
                    <Link href="/" className="inline-flex items-center gap-2">
                        <span className="text-3xl">🍽️</span>
                        <span className="text-2xl font-bold text-gray-900">FoodMarket</span>
                    </Link>
                    <h1 className="mt-6 text-2xl font-bold text-gray-900">Masuk</h1>
                    <p className="mt-2 text-gray-600">
                        Selamat datang kembali! Silakan masuk ke akun kamu
                    </p>
                </div>

                {/* Form */}
                <form className="mt-8 space-y-4">
                    <Input
                        label="Email"
                        type="email"
                        placeholder="nama@email.com"
                        required
                    />
                    <Input
                        label="Password"
                        type="password"
                        placeholder="••••••••"
                        required
                    />

                    <div className="flex items-center justify-between">
                        <label className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-orange-500"
                            />
                            <span className="text-sm text-gray-600">Ingat saya</span>
                        </label>
                        <Link
                            href="/forgot-password"
                            className="text-sm text-orange-500 hover:underline"
                        >
                            Lupa password?
                        </Link>
                    </div>

                    <Button type="submit" className="w-full">
                        Masuk
                    </Button>
                </form>

                {/* Divider */}
                <div className="my-6 flex items-center gap-4">
                    <div className="h-px flex-1 bg-gray-200" />
                    <span className="text-sm text-gray-400">atau</span>
                    <div className="h-px flex-1 bg-gray-200" />
                </div>

                {/* OAuth */}
                <Button variant="outline" className="w-full">
                    <span className="mr-2">🔵</span>
                    Lanjutkan dengan Google
                </Button>

                {/* Register Link */}
                <p className="mt-6 text-center text-sm text-gray-600">
                    Belum punya akun?{" "}
                    <Link href="/register" className="text-orange-500 hover:underline">
                        Daftar sekarang
                    </Link>
                </p>
            </div>
        </div>
    );
}
