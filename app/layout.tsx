import type React from "react";
import "@/styles/globals.css";
import { Poppins } from "next/font/google";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const poppins = Poppins({ 
  subsets: ["latin"], 
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

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
        url: "https://gaman.dev/iconNimux.png",
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
      "https://gaman.dev/iconNimbux .png",
      "https://gaman.dev/namewhite.png",
    ],
  },
  generator: "Next.js 14",
  icons: {
    icon: "/iconNimux.png",
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
    <html lang="es" suppressHydrationWarning className="dark">
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
      <body className={`${poppins.variable} ${poppins.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="flex min-h-[100dvh] flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
