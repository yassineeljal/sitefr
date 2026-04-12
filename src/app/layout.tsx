import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  IBM_Plex_Mono,
  Space_Grotesk,
} from "next/font/google";
import { TransitionProvider } from "@/components/transition-provider";
import { StateProvider } from "@/context/stateContext";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { Navbar } from "@/components/navbar";
import "./globals.css";

const bodyFont = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const headingFont = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const monoFont = IBM_Plex_Mono({
  variable: "--font-ibm-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "ANOUK-OS // Atelier de Pureté",
  description: "Expérience narrative sur la tension entre corps réel et image virtuelle.", 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={`${bodyFont.variable} ${headingFont.variable} ${monoFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <StateProvider>
            <Navbar />
            <TransitionProvider>{children}</TransitionProvider>
            {/* Le bouton est ici, fixe sur tout le site */}
            <ThemeToggle />
          </StateProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}