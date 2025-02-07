import { Lato } from "next/font/google";
import "@styles/globals.css";
import NavBar from "@components/layout/NavBar";
import Footer from "@components/layout/Footer";

// const lato = Lato({
//   variable: "--font-lato",
//   subsets: ["latin"],
//   weight: ["700", "900"],
// });

export const metadata = {
  title: "TRAVEL AGENT",
  description: "for travel agents",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
