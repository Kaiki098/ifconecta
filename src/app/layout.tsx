import type { Metadata } from "next";
import StyledComponentsRegistry from "@/lib/registry";
import ClientLayout from "@/lib/client-layout";

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
    <html lang="pt-br">
      <body>
        <StyledComponentsRegistry>
          <ClientLayout>{children}</ClientLayout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
