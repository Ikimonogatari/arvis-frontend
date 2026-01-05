import "./globals.css";

import "@css/animate.css";
import "@css/bootstrap.min.css";
import "@css/font-awesome.css";
import "@css/magnific-popup.css";
import "@css/meanmenu.css";
import "@css/nice-select.css";
import "@css/swiper-bundle.min.css";
import "@css/main.css";
import "./fonts.css";

import Preloader from "@/components/Preloader";
import { DM_Sans, Montserrat } from "next/font/google";

const montserratFont = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

const dm_sansFont = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

export const metadata = {
  title: "Arvis - IT Solutions",
  description:
    "IT Solutions",
};

export default function RootLayout({ children }) {
  const htmlStyle = {
    '--font-montserrat': montserratFont.style.fontFamily,
    '--font-dm-sans': dm_sansFont.style.fontFamily,
  };
  
  return (
    <html
      className={`${montserratFont.variable} ${dm_sansFont.variable}`}
      style={htmlStyle}
    >
      <body>
        <style dangerouslySetInnerHTML={{
          __html: `
            .preloader .animation-preloader .txt-loading,
            .preloader .animation-preloader .txt-loading .letters-loading,
            .preloader .animation-preloader .txt-loading .letters-loading::before {
              font-family: ${montserratFont.style.fontFamily} !important;
            }
          `
        }} />
        <Preloader />
        {children}
      </body>
    </html>
  );
}
