import React from 'react';
const Header = () => {
    return (
      <header className="fixed top-0 left-[280px] right-0 h-16 bg-black/50 backdrop-blur-md border-b border-white/10 flex items-center justify-between px-6 z-10">
        <div className="flex items-center gap-4">
          <div className="flex items-center bg-white/10 rounded-lg px-4 py-2">
            <svg className="w-5 h-5 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search musicians, projects..."
              className="bg-transparent border-none outline-none text-white ml-2 w-64"
            />
          </div>
        </div>
  
        <div className="flex items-center gap-4">
          <button className="text-white/50 hover:text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>
  
          <img
            src="https://api.dicebear.com/6.x/avatars/svg?seed=ABHISA888"
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
        </div>
      </header>
    );
  };
  
  export default Header;