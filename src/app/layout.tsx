"use client";

import "./globals.css";
import { Header } from "@/components/layout";
import { Footer } from "@/components/layout";
import { CartProvider } from "@/context/cart-context";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const pathname = usePathname();

  const isAuthPage =
    pathname.startsWith("/login") ||
    pathname.startsWith("/register");

  const isAdminPage =
    pathname.startsWith("/admin");

  const hideLayout = isAuthPage || isAdminPage;

  return (
    <html lang="id">
      <body>

        <CartProvider>

          {!hideLayout && <Header />}

          {children}

          {!hideLayout && <Footer />}

        </CartProvider>

      </body>
    </html>
  );
}