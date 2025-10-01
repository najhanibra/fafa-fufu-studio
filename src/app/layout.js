import "./globals.css";
import Navbar from "./components/navbar"; 

export const metadata = {
  title: "Fafa fufu studio",
  description: "Fafa-Fufu Studio adalah develop game inde",
  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
