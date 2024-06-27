interface YouTubeVideoProps {
    videoId?: string;
}

export default function YouTubeVideo({videoId}: YouTubeVideoProps) {
  return (
    <div
      className="relative aspect-video overflow-hidden max-w-full bg-black w-full"
    >
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube video player"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      ></iframe>
    </div>
  )
}
