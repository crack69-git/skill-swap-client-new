import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavbarSection from "@/Components/MainComponents/NavbarSection";
import Providers from "@/Components/MainComponents/ThemeProvider";
import FooterSection from "@/Components/MainComponents/FooterSecction";
import { Bounce, ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Home-SkillSwap",
  description:
    "SkillSwap is a platform that connects clients with skilled freelancers for various projects. Find the right talent for your needs and collaborate seamlessly.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Providers>
          <NavbarSection />
          <main>{children}</main>
          <FooterSection />
          <ToastContainer
            position="top-center"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable
            pauseOnHover
            theme="light"
            transition={Bounce}
          />
        </Providers>
      </body>
    </html>
  );
}
