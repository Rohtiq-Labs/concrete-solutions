import type { JSX } from "react";
import Image from "next/image";

type PlaceholderImageProps = {
  label: string;
  className?: string;
  src?: string;
  priority?: boolean;
  sizes?: string;
};

export const PlaceholderImage = ({
  label,
  className = "",
  src,
  priority = false,
  sizes = "(max-width: 640px) 100vw, 50vw",
}: PlaceholderImageProps): JSX.Element => {
  const hasMedia = Boolean(src);

  return (
    <div
      className={`slot ${hasMedia ? "slot--media" : ""} ${className}`.trim()}
      role={hasMedia ? undefined : "img"}
      aria-label={hasMedia ? undefined : label}
    >
      {hasMedia && src ? (
        <Image
          src={src}
          alt={label}
          fill
          sizes={sizes}
          priority={priority}
        />
      ) : (
        <span>{label}</span>
      )}
    </div>
  );
};
