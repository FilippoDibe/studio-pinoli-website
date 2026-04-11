import { Montserrat, Open_Sans } from "next/font/google";
import { useRouter } from "next/router";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/globals.css";
import { SITE_URL } from "../lib/constants";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const canonical = `${SITE_URL}${router.asPath.split("?")[0]}`;

  return (
    <div className={`${montserrat.variable} ${openSans.variable}`}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={canonical} />
        {/* Default Open Graph — overridden per pagina */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Studio Pinoli Milano" />
        <meta property="og:url" content={canonical} />
        <meta
          property="og:image"
          content={`${SITE_URL}/foto/image-003-foto-anna-sof-5706.jpg`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="description"
          content="Studio Pinoli — dentista a Milano dal 1989. Odontoiatria, implantologia, ortodonzia, bionutrizione e medicina estetica. Prima visita: chiama 02 4272381."
        />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
