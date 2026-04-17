import { Montserrat, Open_Sans } from "next/font/google";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Head from "next/head";
import Script from "next/script";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";
import "../styles/globals.css";
import { SITE_URL } from "../lib/constants";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

// BreadcrumbList JSON-LD per le pagine statiche
const BREADCRUMB_ROUTES = {
  "/i-nostri-servizi": [
    { name: "Home", item: `${SITE_URL}/` },
    { name: "I Nostri Servizi", item: `${SITE_URL}/i-nostri-servizi` },
  ],
  "/servizi/odontoiatria": [
    { name: "Home", item: `${SITE_URL}/` },
    { name: "I Nostri Servizi", item: `${SITE_URL}/i-nostri-servizi` },
    { name: "Odontoiatria", item: `${SITE_URL}/servizi/odontoiatria` },
  ],
  "/servizi/bionutrizione": [
    { name: "Home", item: `${SITE_URL}/` },
    { name: "I Nostri Servizi", item: `${SITE_URL}/i-nostri-servizi` },
    { name: "Bio-nutrizione", item: `${SITE_URL}/servizi/bionutrizione` },
  ],
  "/servizi/medicina-estetica": [
    { name: "Home", item: `${SITE_URL}/` },
    { name: "I Nostri Servizi", item: `${SITE_URL}/i-nostri-servizi` },
    { name: "Medicina Estetica", item: `${SITE_URL}/servizi/medicina-estetica` },
  ],
  "/servizi/osteopatia": [
    { name: "Home", item: `${SITE_URL}/` },
    { name: "I Nostri Servizi", item: `${SITE_URL}/i-nostri-servizi` },
    { name: "Osteopatia", item: `${SITE_URL}/servizi/osteopatia` },
  ],
  "/servizi/art-terapia": [
    { name: "Home", item: `${SITE_URL}/` },
    { name: "I Nostri Servizi", item: `${SITE_URL}/i-nostri-servizi` },
    { name: "Art-Terapia", item: `${SITE_URL}/servizi/art-terapia` },
  ],
  "/chi-siamo": [
    { name: "Home", item: `${SITE_URL}/` },
    { name: "Chi Siamo", item: `${SITE_URL}/chi-siamo` },
  ],
  "/prima-visita": [
    { name: "Home", item: `${SITE_URL}/` },
    { name: "Prima Visita", item: `${SITE_URL}/prima-visita` },
  ],
  "/contatti": [
    { name: "Home", item: `${SITE_URL}/` },
    { name: "Contatti", item: `${SITE_URL}/contatti` },
  ],
  "/blog": [
    { name: "Home", item: `${SITE_URL}/` },
    { name: "Blog", item: `${SITE_URL}/blog` },
  ],
  "/privacy-policy": [
    { name: "Home", item: `${SITE_URL}/` },
    { name: "Privacy Policy", item: `${SITE_URL}/privacy-policy` },
  ],
};

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
  const currentPath = router.asPath.split("?")[0];
  const canonical = `${SITE_URL}${currentPath}`;
  const [cookieConsent, setCookieConsent] = useState(null);
  const breadcrumbs = BREADCRUMB_ROUTES[currentPath] || null;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    const observe = () => {
      document.querySelectorAll(".scroll-animate").forEach((el) => observer.observe(el));
    };

    observe();
    router.events.on("routeChangeComplete", observe);
    return () => {
      observer.disconnect();
      router.events.off("routeChangeComplete", observe);
    };
  }, [router.events]);

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
        {breadcrumbs && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": breadcrumbs.map((crumb, index) => ({
                  "@type": "ListItem",
                  "position": index + 1,
                  "name": crumb.name,
                  "item": crumb.item,
                })),
              }),
            }}
          />
        )}
      </Head>
      {GA_ID && cookieConsent === "accepted" && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}', { page_path: window.location.pathname });
            `}
          </Script>
        </>
      )}
      <Header />
      <Component {...pageProps} />
      <Footer />
      <CookieBanner onConsent={setCookieConsent} />
      <a
        href="https://wa.me/393316713904"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-fab"
        aria-label="Scrivici su WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  );
}
