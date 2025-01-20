import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "./globals.css";
//import { Toaster } from "sonner";
import { AuthProvider } from "@/context/AuthContext";
import { ThemeProvider } from "@/context/ThemeContext";

const mulish = Mulish({
  subsets: ["latin-ext"],
});

export const metadata: Metadata = {
  title: "Minhas Contas App",
  description: "Simplificando o seu Controle Financeiro Pessoal!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${mulish.className} antialiased`}>
        <AuthProvider>
          <ThemeProvider>
            <div className="flex h-full flex-col overflow-hidden">
              {children}
            </div>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
