"use client";

type VideoPlayerProps = {
  src: string;
};

// export function VideoPlayer({ src }: VideoPlayerProps) {
//   return (
//     <video controls className="w-full h-full" autoPlay muted loop>
//       <source src={src} type="video/mp4" />
//       Your browser does not support the video tag.
//     </video>
//   );
// }

export function VideoPlayer({ src }: VideoPlayerProps) {
  // Extract Vimeo ID from URL
  const videoId = src.split("/").pop();

  return (
    <iframe
      src={`https://player.vimeo.com/video/${videoId}`}
      width="100%"
      height="360"
      frameBorder="0"
      allow="autoplay; fullscreen; picture-in-picture"
      allowFullScreen
      className="w-full h-full"
    ></iframe>
  );
}
