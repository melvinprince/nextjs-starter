import ScrollbarProvider from "@/components/ScrollbarProvider";
import "./globals.css";

export const metadata = {};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ScrollbarProvider>{children}</ScrollbarProvider>
      </body>
    </html>
  );
}
