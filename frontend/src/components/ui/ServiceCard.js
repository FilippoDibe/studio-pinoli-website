import Link from "next/link";
import Image from "next/image";

/**
 * ServiceCard - Macro service card component for the 4 main services
 *
 * @param {Object} props
 * @param {string} props.title - Service title
 * @param {string} props.description - Service description
 * @param {string} props.image - Image path
 * @param {string} props.icon - Icon path (SVG)
 * @param {string} props.href - Link destination
 * @param {string} props.theme - Color theme: 'dental' | 'nutrition' | 'aesthetic' | 'integrative'
 * @param {string} props.badge - Badge text (optional)
 */
export default function ServiceCard({
  title,
  description,
  image,
  icon,
  href,
  theme = "dental",
  badge,
}) {
  const themeLabels = {
    dental: "Odontoiatria",
    nutrition: "Bionutrizione",
    aesthetic: "Medicina Estetica",
    integrative: "Medicina Integrata",
  };

  return (
    <article className={`macro-service-card ${theme}`}>
      <div className="macro-service-card-image">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <div
            style={{
              width: "100%",
              height: "100%",
              background: `linear-gradient(135deg, var(--color-${theme}) 0%, var(--color-${theme}-dark) 100%)`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          />
        )}
        <div className="macro-service-card-overlay" />
        <div className="macro-service-card-icon">
          {icon ? (
            <Image src={icon} alt="" width={32} height={32} />
          ) : (
            <DefaultIcon theme={theme} />
          )}
        </div>
      </div>

      <div className="macro-service-card-content">
        <span className="macro-service-card-badge">
          {badge || themeLabels[theme]}
        </span>
        <h3>{title}</h3>
        <p>{description}</p>
        <Link href={href} className="btn btn-themed">
          Scopri di più
        </Link>
      </div>
    </article>
  );
}

// Default icons for each service theme
function DefaultIcon({ theme }) {
  const icons = {
    dental: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
        <path d="M12 2C9.79 2 8 3.79 8 6c0 .55.12 1.07.32 1.55L4.5 11.37c-.39.39-.39 1.03 0 1.42l.71.71c.39.39 1.02.39 1.41 0l3.89-3.89c.39-.39.39-1.02 0-1.41L12 6.69l1.49 1.51c-.39.39-.39 1.02 0 1.41l3.89 3.89c.39.39 1.02.39 1.41 0l.71-.71c.39-.39.39-1.03 0-1.42l-3.82-3.82c.2-.48.32-1 .32-1.55 0-2.21-1.79-4-4-4zm0 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm-5 9c-2.21 0-4 1.79-4 4v3c0 1.1.9 2 2 2h2v-4h2v4h6v-4h2v4h2c1.1 0 2-.9 2-2v-3c0-2.21-1.79-4-4-4H7z" />
      </svg>
    ),
    nutrition: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
        <path d="M18.06 22.99h1.66c.84 0 1.53-.64 1.63-1.46L23 5.05l-1.78-.17-.52 6.15c-.14 1.66-1.33 3.01-2.93 3.37l-.33.07V22.99h.62zm-14.12 0h1.66V14.47l-.33-.07c-1.6-.36-2.79-1.71-2.93-3.37l-.52-6.15L0 5.05l1.65 16.48c.1.82.79 1.46 1.63 1.46h.66zM12 9c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm-1 1h2c2.76 0 5 2.24 5 5v5c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2v-5c0-2.76 2.24-5 5-5z" />
      </svg>
    ),
    aesthetic: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    ),
    integrative: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
      </svg>
    ),
  };

  return icons[theme] || icons.dental;
}
