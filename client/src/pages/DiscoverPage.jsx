import { useState } from 'react';

const DiscoverPage = () => {
  const [activeTab, setActiveTab] = useState('trending');
  const [projects] = useState([
    {
      id: 1,
      title: "Electronic Symphony",
      author: "DJ Wave",
      genre: "Electronic",
      likes: 1234,
      thumbnail: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=280&fit=crop",
      preview: "https://example.com/audio1.mp3"
    },
    {
      id: 2,
      title: "Acoustic Dreams",
      author: "Sarah Smith",
      genre: "Folk",
      likes: 890,
      thumbnail: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=500&h=280&fit=crop",
      preview: "https://example.com/audio2.mp3"
    }
    // Add more projects as needed
  ]);

  return (
    <div className="p-8 pt-24">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-white">Discover</h1>
        <div className="flex gap-2">
          <button className="px-4 py-2 rounded-full bg-white/10 text-white hover:bg-white/20">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
          </button>
          <button className="px-4 py-2 rounded-full bg-white/10 text-white hover:bg-white/20">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      <div className="flex gap-4 mb-8">
        {['trending', 'recent', 'following'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-full capitalize ${
              activeTab === tab 
                ? 'bg-pink-500 text-white' 
                : 'bg-white/10 text-white/60 hover:bg-white/20'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(project => (
          <div key={project.id} className="bg-white/5 rounded-lg overflow-hidden group hover:bg-white/10 transition-all">
            <div className="relative">
              <img 
                src={project.thumbnail} 
                alt={project.title} 
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button className="w-12 h-12 rounded-full bg-pink-500 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-white font-semibold">{project.title}</h3>
                <span className="text-white/60 text-sm flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                  </svg>
                  {project.likes}
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-white/60">{project.author}</span>
                <span className="text-pink-500">{project.genre}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscoverPage;