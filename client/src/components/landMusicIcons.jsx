const MusicIcons = () => {
    return (
      <div className="flex gap-4 absolute -top-16 left-1/2 transform -translate-x-1/2 animate-float">
        {/* Note Icon */}
        <svg className="w-8 h-8 text-white/80 hover:scale-110 transition-transform hover:text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
        </svg>
  
        {/* Headphones Icon */}
        <svg className="w-8 h-8 text-white/80 hover:scale-110 transition-transform hover:text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 1a9 9 0 0 0-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7a9 9 0 0 0-9-9z"/>
        </svg>
  
        {/* Guitar Icon */}
        <svg className="w-8 h-8 text-white/80 hover:scale-110 transition-transform hover:text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.59 3H22v2h-1.59l-3.5 3.5c-.19.19-.44.3-.71.3h-2.12l-2.83 2.83c-.37.37-.58.88-.58 1.41V15c0 1.1.9 2 2 2h7v2H9.41c-.89 0-1.34-1.08-.71-1.71L12.29 14H9.83c-.38 0-.74-.15-1.01-.42L6.71 11.5c-.18-.18-.29-.43-.29-.71V9.7c0-.28.11-.53.29-.71l3.5-3.5c.18-.18.43-.29.71-.29h4.17l4.5-4.5z"/>
        </svg>
  
        {/* Violin Icon */}
        <svg className="w-8 h-8 text-white/80 hover:scale-110 transition-transform hover:text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22 2L17 7L12 2L7 7L2 2V4L7 9L2 14L7 19L12 14L17 19L22 14L17 9L22 4V2M13 14.5V20C13 21.11 12.11 22 11 22H9C7.89 22 7 21.11 7 20V14.5L11 10.5L13 14.5Z"/>
        </svg>
      </div>
    );
  };
  
  export default MusicIcons;