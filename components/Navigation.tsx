import React from 'react';

const Navigation: React.FC = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5 px-6 py-4 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-sky-500 rounded-lg flex items-center justify-center font-bold text-white shadow-lg shadow-sky-500/20 cursor-pointer" onClick={() => scrollTo('hero')}>PK</div>
        <span className="font-bold text-xl tracking-tight hidden sm:inline">kpavan</span>
      </div>
      <div className="flex gap-4 md:gap-8 text-sm font-medium text-slate-400">
        <button onClick={() => scrollTo('about')} className="hover:text-sky-400 transition-colors hidden md:block">About</button>
        <button onClick={() => scrollTo('skills')} className="hover:text-sky-400 transition-colors">Skills</button>
        <button onClick={() => scrollTo('projects')} className="hover:text-sky-400 transition-colors">Projects</button>
        <button onClick={() => scrollTo('certs')} className="hover:text-sky-400 transition-colors hidden sm:block">Certs</button>
        <button onClick={() => scrollTo('ai-chat')} className="hover:text-sky-400 transition-colors">Ask AI</button>
        <button onClick={() => scrollTo('contact')} className="bg-sky-500/10 text-sky-400 px-4 py-1.5 rounded-full border border-sky-400/20 hover:bg-sky-500/20 transition-all">Connect</button>
      </div>
    </nav>
  );
};

export default Navigation;