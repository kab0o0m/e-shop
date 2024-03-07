import { Roboto } from "next/font/google";
import { Theme } from "@radix-ui/themes";
import "./globals.css";
import Navbar from "./Navbar";
const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable}`}>
        <Navbar />
        <Theme>{children}</Theme>
      </body>
    </html>
  );
}
