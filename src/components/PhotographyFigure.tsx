import type { FC } from 'react';

interface PhotographyFigureProps {
  src: string;
  alt: string;
  location: string;
  year: number;
  photographer: string;
  instagramHandle: string;
  className?: string;
  imageClassName?: string;
}

export const PhotographyFigure: FC<PhotographyFigureProps> = ({
  src,
  alt,
  location,
  year,
  photographer,
  instagramHandle,
  className = '',
  imageClassName = '',
}) => (
  <figure className={className}>
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={`block w-full object-cover ${imageClassName}`}
    />
    <figcaption className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] leading-relaxed text-[#7A3E2D]">
      <span>{location}</span>
      <span aria-hidden="true">·</span>
      <span>{year}</span>
      <span aria-hidden="true">·</span>
      <span>Photography by {photographer}</span>
      <span aria-hidden="true">·</span>
      <a
        href={`https://www.instagram.com/${encodeURIComponent(instagramHandle.replace(/^@/, ''))}/`}
        target="_blank"
        rel="noopener noreferrer"
        className="underline decoration-[#7A3E2D]/50 underline-offset-2 transition-colors hover:text-[#6D2638] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6D2638]"
        aria-label={`Photographer ${photographer} on Instagram`}
      >
        @{instagramHandle.replace(/^@/, '')}
      </a>
    </figcaption>
  </figure>
);
