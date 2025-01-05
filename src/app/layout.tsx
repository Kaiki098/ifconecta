import type { Metadata } from "next";
import StyledComponentsRegistry from "@/lib/registry";
import ClientLayout from "@/lib/client-layout";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IFConecta",
  description: "Plataforma para projetos de extensão",
  // TODO Adicionar um favicon bom
  icons: {
    icon: "/images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={openSans.variable}>
      <body>
        <StyledComponentsRegistry>
          <ClientLayout>{children}</ClientLayout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
