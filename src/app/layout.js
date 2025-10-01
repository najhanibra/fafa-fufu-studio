import "./globals.css";

export const metadata = {
  title: "Tap n Match",
  description: "Game puzzle refleks seru dari Fafa-Fufu Studio",
  icons: {
    icon: "/images/logo.png", 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
