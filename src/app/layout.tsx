import "./globals.css";
import { Header } from "@/components/layout";
import { Footer } from "@/components/layout";
import { CartProvider } from "@/context/cart-context";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>
        <CartProvider>
          <Header />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}