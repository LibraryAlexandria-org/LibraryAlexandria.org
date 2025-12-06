interface LogoProps {
  size?: number;
  className?: string;
}

export default function Logo({ size = 60, className = '' }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer circles */}
      <circle
        cx="50"
        cy="50"
        r="45"
        stroke="#c9a962"
        strokeWidth="1"
        fill="none"
        opacity="0.6"
      />
      <circle
        cx="50"
        cy="50"
        r="38"
        stroke="#c9a962"
        strokeWidth="1"
        fill="none"
        opacity="0.4"
      />

      {/* Inner hexagon */}
      <polygon
        points="50,15 78,32.5 78,67.5 50,85 22,67.5 22,32.5"
        stroke="#c9a962"
        strokeWidth="1.5"
        fill="none"
      />

      {/* Inner hexagon 2 */}
      <polygon
        points="50,25 70,37.5 70,62.5 50,75 30,62.5 30,37.5"
        stroke="#c9a962"
        strokeWidth="1"
        fill="none"
        opacity="0.7"
      />

      {/* Center hexagon filled */}
      <polygon
        points="50,35 62,42.5 62,57.5 50,65 38,57.5 38,42.5"
        stroke="#c9a962"
        strokeWidth="1"
        fill="#c9a962"
        fillOpacity="0.15"
      />

      {/* Connecting lines from center */}
      <line x1="50" y1="15" x2="50" y2="35" stroke="#c9a962" strokeWidth="1" opacity="0.5" />
      <line x1="50" y1="65" x2="50" y2="85" stroke="#c9a962" strokeWidth="1" opacity="0.5" />
      <line x1="22" y1="32.5" x2="38" y2="42.5" stroke="#c9a962" strokeWidth="1" opacity="0.5" />
      <line x1="78" y1="32.5" x2="62" y2="42.5" stroke="#c9a962" strokeWidth="1" opacity="0.5" />
      <line x1="22" y1="67.5" x2="38" y2="57.5" stroke="#c9a962" strokeWidth="1" opacity="0.5" />
      <line x1="78" y1="67.5" x2="62" y2="57.5" stroke="#c9a962" strokeWidth="1" opacity="0.5" />

      {/* Center dot */}
      <circle cx="50" cy="50" r="4" fill="#c9a962" />

      {/* Outer decorative dots */}
      <circle cx="50" cy="8" r="2" fill="#c9a962" opacity="0.6" />
      <circle cx="50" cy="92" r="2" fill="#c9a962" opacity="0.6" />
      <circle cx="13" cy="29" r="2" fill="#c9a962" opacity="0.6" />
      <circle cx="87" cy="29" r="2" fill="#c9a962" opacity="0.6" />
      <circle cx="13" cy="71" r="2" fill="#c9a962" opacity="0.6" />
      <circle cx="87" cy="71" r="2" fill="#c9a962" opacity="0.6" />
    </svg>
  );
}
