import Link from "next/link";
import { Button } from "@/components/ui";

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-sm">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <span className="text-2xl">🍽️</span>
                    <span className="text-xl font-bold text-gray-900">FoodMarket</span>
                </Link>

                {/* Navigation */}
                <nav className="hidden items-center gap-6 md:flex">
                    <Link
                        href="/stores"
                        className="text-sm font-medium text-gray-600 transition-colors hover:text-orange-500"
                    >
                        Toko
                    </Link>
                    <Link
                        href="/categories"
                        className="text-sm font-medium text-gray-600 transition-colors hover:text-orange-500"
                    >
                        Kategori
                    </Link>
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-3">
                    <Link href="/cart">
                        <Button variant="ghost" size="sm" className="relative">
                            <span className="text-xl">🛒</span>
                            {/* Cart count badge - will be dynamic */}
                            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-xs text-white">
                                0
                            </span>
                        </Button>
                    </Link>
                    <Link href="/login">
                        <Button size="sm">Masuk</Button>
                    </Link>
                </div>
            </div>
        </header>
    );
}
