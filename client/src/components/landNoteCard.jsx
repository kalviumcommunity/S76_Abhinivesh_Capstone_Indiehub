const NoteCard = () => {
    return (
      <div className="w-[190px] h-[120px] p-2 bg-[rgba(198,198,198,0.34)] rounded-lg backdrop-blur-md border-b-[3px] border-b-[rgba(255,255,255,0.440)] border-l-[2px] border-l-[rgba(255,255,255,0.545)] shadow-[-40px_50px_30px_rgba(0,0,0,0.280)] skew-x-[10deg] transition-all duration-1000 overflow-hidden text-white hover:h-[254px] hover:skew-x-0">
        <div className="p-4 flex items-center gap-2">
          <span className="text-xl font-bold">
            <span className="text-red-500">N</span>ote :
          </span>
        </div>
  
        <p className="
          px-4 
          font-['Quicksand'] 
          text-sm 
          leading-relaxed 
          text-gray-100
          tracking-wide
          font-medium
          opacity-90
          backdrop-blur-sm
          rounded-md
          p-2
          bg-white/5
        ">
          Welcome to The Indie Hub! Your gateway to independent music and creative expression. Explore, create, and connect with fellow artists.
        </p>
      </div>
    );
  };
  
  export default NoteCard;