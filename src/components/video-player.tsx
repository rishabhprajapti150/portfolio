"use client";

type VideoPlayerProps = {
  src: string;
};

export function VideoPlayer({ src }: VideoPlayerProps) {
  return (
    <video controls className="w-full h-full" autoPlay muted loop>
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
