import "./globals.css";
import { Header } from "@/components/layout";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>
        <Header />
        {children}
        
      </body>
    </html>
  );
}