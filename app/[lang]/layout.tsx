import type { Metadata } from "next";
import "./globals.css";
import Header from "@/src/components/header";
import Footer from "@/src/components/footer";



export const metadata: Metadata = {
  title: "Listado de personajes - HarryPotterApp",
  description: "Explora el universo mágico de Harry Potter: un listado completo de personajes con su casa, especie y datos principales.",
};

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'es' }]
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <html lang={lang}>{}
      <body>
      <Header lang={lang}></Header>
      <main>
        {children}
      </main>
      <Footer lang={lang}></Footer>
      </body>
    </html>
  );
}
