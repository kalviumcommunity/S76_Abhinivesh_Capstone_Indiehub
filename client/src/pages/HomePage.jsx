import { useState } from 'react';

const HomePage = () => {
  const [projects] = useState([
    {
      id: 1,
      title: "Summer Beats",
      genre: "Electronic",
      collaborators: 3,
      progress: 75,
      lastUpdated: "2025-04-28",
      thumbnail: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=280&fit=crop"
    },
    {
      id: 2,
      title: "Acoustic Sessions",
      genre: "Folk",
      collaborators: 2,
      progress: 45,
      lastUpdated: "2025-04-29",
      thumbnail: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=500&h=280&fit=crop"
    }
  ]);

  return (
    <div className="p-8 pt-24">
      <div className="bg-gradient-to-r from-purple-900 to-pink-800 rounded-2xl p-8 mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">Welcome back, ABHISA888</h1>
        <p className="text-white/80 text-lg">
          Connect with fellow musicians, collaborate on projects, and share your music with the community.
        </p>
      </div>

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-white">Your Projects</h2>
        <a href="/projects" className="text-pink-500 hover:text-pink-400">View All</a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(project => (
          <div key={project.id} className="bg-white/5 rounded-lg overflow-hidden hover:bg-white/10 transition-all">
            <img src={project.thumbnail} alt={project.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-white font-semibold text-lg mb-2">{project.title}</h3>
              <div className="flex items-center justify-between text-sm text-white/60 mb-3">
                <span>{project.genre}</span>
                <span>{project.collaborators} collaborators</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2 mb-2">
                <div 
                  className="bg-pink-500 h-2 rounded-full" 
                  style={{ width: `${project.progress}%` }}
                />
              </div>
              <div className="text-white/40 text-sm">
                Last updated: {project.lastUpdated}
              </div>
            </div>
          </div>
        ))}

        <div className="bg-white/5 rounded-lg border-2 border-dashed border-white/20 flex items-center justify-center h-[272px] hover:bg-white/10 transition-all cursor-pointer">
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center mx-auto mb-2">
              <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <span className="text-white/60">Create New Project</span>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white mb-6">Recent Activity</h2>
        <div className="space-y-4">
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="bg-white/5 rounded-lg p-4 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
                {String.fromCharCode(65 + i)}
              </div>
              <div className="flex-1">
                <p className="text-white">
                  <span className="font-semibold">User{i + 1}</span> 
                  {i === 0 ? ' commented on ' : i === 1 ? ' joined ' : ' updated '} 
                  <span className="text-pink-500">Project {i + 1}</span>
                </p>
                <p className="text-white/40 text-sm">2 hours ago</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;