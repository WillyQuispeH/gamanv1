import type React from "react";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Gaman - Desarrollo de Sistemas Web y Soporte QA",
  description:
    "En Gaman.dev transformamos negocios con desarrollo web personalizado, QA, diseño UX/UI y posicionamiento SEO.",
  keywords: [
    "desarrollo web",
    "software a medida",
    "QA",
    "landing page",
    "SEO",
    "sistemas web",
    "Next.js",
    "automatización de procesos",
    "optimización de negocios",
    "Gaman",
    "gaman.dev",
  ],
  metadataBase: new URL("https://gaman.dev"),
  alternates: {
    canonical: "https://gaman.dev",
  },
  openGraph: {
    title: "Gaman - Desarrollo de Sistemas Web y QA",
    description:
      "Soluciones digitales para impulsar tu negocio. Desarrollo personalizado, soporte QA y diseño optimizado.",
    url: "https://gaman.dev",
    siteName: "Gaman",
    images: [
      {
        url: "https://gaman.dev/logoIcon.png",
        width: 1200,
        height: 630,
        alt: "Gaman Desarrollo Web",
      },
    ],
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gaman - Desarrollo de Sistemas Web y QA",
    description:
      "Impulsa tu negocio con soluciones web personalizadas, QA y automatización.",
    images: [
      "https://gaman.dev/logoIcon.png",
      "https://gaman.dev/namewhite.png",
    ],
  },
  generator: "Next.js 14",
  icons: {
    icon: "/logoIcon.png",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        {/* Extra: Google Site Verification (si tienes código) */}
        {/* <meta name="google-site-verification" content="tu_codigo_aqui" /> */}
        {/* Google Analytics opcional */}
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXX');
          `,
        }} /> */}
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
