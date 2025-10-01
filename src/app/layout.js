import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { Righteous } from "next/font/google";

const righteous = Righteous({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Fafa-Fufu Studio",
  description: "Game Studio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={righteous.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
