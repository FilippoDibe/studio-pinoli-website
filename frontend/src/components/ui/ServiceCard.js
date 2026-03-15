import Link from "next/link";
import Image from "next/image";

export default function ServiceCard({
  title,
  description,
  image,
  href,
  theme = "dental",
}) {
  return (
    <Link
      href={href}
      className={`mosaic-card ${theme}`}
      aria-label={`${title} – scopri il servizio`}
    >
      {/* Image layer */}
      <div className="mosaic-card-image">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div
            style={{
              width: "100%",
              height: "100%",
              background: "linear-gradient(135deg, var(--color-primary) 0%, #0d3d7a 100%)",
            }}
          />
        )}
      </div>

      {/* Gradient overlay */}
      <div className="mosaic-card-overlay" aria-hidden="true" />

      {/* Text content */}
      <div className="mosaic-card-content">
        <span className="mosaic-card-badge">Studio Pinoli</span>
        <h3 className="mosaic-card-title">{title}</h3>
        {description && (
          <p className="mosaic-card-description">{description}</p>
        )}
        <div className="mosaic-card-cta" aria-hidden="true">
          Scopri il servizio
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </div>
      </div>
      <div className={`mosaic-card-accent ${theme}`} aria-hidden="true" />
    </Link>
  );
}
