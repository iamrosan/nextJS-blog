import { Inter } from "next/font/google";
import "./globals.css";
import NavbarComponent from "@/components/navbar/NavbarComponent";
import FooterComponent from "@/components/footer/FooterComponent";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next App",
  description: "Next.js starter app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <NavbarComponent />
          {children}
          <FooterComponent />
        </div>
      </body>
    </html>
  );
}
