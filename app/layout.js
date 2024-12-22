import localFont from "next/font/local";
import "./globals.css";
import GSAP from "./components/gsap";

const circularWeb = localFont({
  src: "./fonts/circularweb-book.woff2",
  variable: "--font-circularweb",
});

const general = localFont({
  src: "./fonts/general.woff2",
  variable: "--font-general",
});

const robertMedium = localFont({
  src: "./fonts/robert-medium.woff2",
  variable: "--font-robert-medium",
});

const robertRegular = localFont({
  src: "./fonts/robert-regular.woff2",
  variable: "--font-robert-regular",
});

const zentryRegular = localFont({
  src: "./fonts/zentry-regular.woff2",
  variable: "--font-zentry",
});

export const metadata = {
  title: "Zentry: The Metagame, The Game of Games To Elevate Gaming Culture | Zentry",
  description:
    "Zentry is the Metagame—a game of games ecosystem designed to unite billions of gamers into one unified Play Economy. Explore our vast network of games, consumer apps, IPs, infrastructure, and communities, where gaming and reality converge.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${circularWeb.variable} ${general.variable} ${robertMedium.variable} ${robertRegular.variable} ${zentryRegular.variable} `}
      >
        {children}
        <GSAP />
      </body>
    </html>
  );
}
