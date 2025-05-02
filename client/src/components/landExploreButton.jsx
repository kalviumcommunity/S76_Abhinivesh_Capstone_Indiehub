import React from 'react';
import { useNavigate } from 'react-router-dom';
const ExploreButton = () => {
    const navigate = useNavigate();
    const handleClick = () => {
      navigate('/home'); // Navigate to the discover page
    };
    return (
      <button 
        onClick={handleClick}
      className="w-[110px] h-[40px] flex items-center justify-start gap-2.5 bg-[rgb(161,255,20)] rounded-[30px] text-[rgb(19,19,19)] font-semibold border-none relative cursor-pointer duration-500 shadow-[5px_5px_10px_rgba(0,0,0,0.116)] pl-2 hover:bg-[rgb(192,255,20)] active:scale-[0.97]">
        <svg 
          className="h-[25px] duration-[1.5s] hover:rotate-[360deg]" 
          viewBox="0 0 512 512" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
        </svg>
        Explore
      </button>
    );
  };
  
  export default ExploreButton;