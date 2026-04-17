import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner({ onConsent }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("cookie_consent");
    if (stored) {
      onConsent(stored);
    } else {
      setVisible(true);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleAccept = () => {
    localStorage.setItem("cookie_consent", "accepted");
    onConsent("accepted");
    setVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookie_consent", "rejected");
    onConsent("rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-modal="true" aria-label="Informativa sull'uso dei cookie">
      <div className="cookie-banner-inner">
        <div className="cookie-banner-text">
          <strong>Questo sito utilizza i cookie</strong>
          <p>
            Usiamo cookie analitici (Google Analytics) per capire come viene utilizzato il sito e migliorare l'esperienza di navigazione. I cookie necessari sono sempre attivi.{" "}
            <Link href="/privacy-policy">Informativa cookie</Link>
          </p>
        </div>
        <div className="cookie-banner-actions">
          <button className="cookie-btn cookie-btn-reject" onClick={handleReject} type="button">
            Solo necessari
          </button>
          <button className="cookie-btn cookie-btn-accept" onClick={handleAccept} type="button">
            Accetta tutti
          </button>
        </div>
      </div>
    </div>
  );
}
