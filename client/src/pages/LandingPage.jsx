import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import SplitType from 'split-type';
import VideoBackground from '../components/landVideoBackground';
import ExploreButton from '../components/landExploreButton';
import NoteCard from '../components/landNoteCard';
import MusicIcons from '../components/landMusicIcons';

const LandingPage = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    // Initialize GSAP animations
    const title = new SplitType(titleRef.current, { types: 'chars' });
    const chars = title.chars;

    // Initial animation
    gsap.from(chars, {
      duration: 1.2,
      opacity: 0,
      scale: 0,
      y: -50,
      rotationX: -90,
      transformOrigin: '50% 50%',
      stagger: 0.1,
      ease: "back.out(1.7)",
    });

    // Hover animation setup
    const titleElement = titleRef.current;
    
    const handleMouseEnter = () => {
      gsap.to(chars, {
        duration: 0.7,
        scale: 1.2,
        y: gsap.utils.random(-20, 20, true),
        rotation: gsap.utils.random(-20, 20, true),
        stagger: {
          amount: 0.4,
          from: "random"
        },
        ease: "back.out(1.7)",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(chars, {
        duration: 0.5,
        scale: 1,
        y: 0,
        rotation: 0,
        stagger: {
          amount: 0.3,
          from: "random"
        },
        ease: "back.out(1.7)",
      });
    };

    titleElement.addEventListener('mouseenter', handleMouseEnter);
    titleElement.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      titleElement.removeEventListener('mouseenter', handleMouseEnter);
      titleElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="min-h-screen transparent relative overflow-hidden">
      <VideoBackground />
      
      
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4">
        <div className="relative mt-20"> {/* Added margin-top */}
          {/* Adjusted MusicIcons position */}
          <div className="relative h-16"> {/* Added container with height */}
            <MusicIcons />
          </div>
          
          <h1 
            ref={titleRef}
            className="
              text-7xl 
              md:text-8xl 
              font-black
              text-pink-500
              text-center
              tracking-wider
              leading-tight
              cursor-pointer
              drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]
              hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.7)]
              transition-all
              duration-300
              uppercase
              font-['Helvetica_Neue']
              [text-shadow:_3px_3px_15px_rgb(255_255_255_/_40%)]
            "
          >
            <>
  The Indie Hu
  <img 
    src="/guitar.png" 
    alt="guitar" 
    className="inline-block h-[1em] align-baseline" 
  />
</>

          </h1>
        </div>
        
        {/* Rest of the code remains the same */}
        <div className="w-full flex flex-col items-center justify-between flex-grow relative">
          {/* Note Card - Positioned absolutely on the right */}
          <div className="absolute top-1/2 right-8 transform -translate-y-1/2 
                          hover:scale-105 transition-transform duration-300">
            <NoteCard />
          </div>

          {/* Explore Button - Positioned at the bottom */}
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2
                          hover:translate-y-[-10px] transition-all duration-300">
            <ExploreButton  />
          
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;