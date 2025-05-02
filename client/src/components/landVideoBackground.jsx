const VideoBackground = () => {
    return (
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        <video
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
        >
          <source src="/Taperec.mp4" type="video/mp4" />
        </video>
      </div>
    );
  };
  
  export default VideoBackground;