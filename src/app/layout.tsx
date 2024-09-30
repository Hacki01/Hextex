import type { Metadata } from "next";
import "./globals.css";


// Import Google Fonts
import { Lato } from "next/font/google";

// Import Components
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";


const lato = Lato({weight:['100','300','400','700'], subsets:['latin']})

export const metadata: Metadata = {
  title: "Hextex",
  description: "Hi, this is my portfolio so check it out!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={lato.className}
      >
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
