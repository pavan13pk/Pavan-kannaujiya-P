import React from 'react';
import Navigation from './components/Navigation';
import ChatInterface from './components/ChatInterface';
import { SKILLS, PROJECTS, CERTS } from './constants';

const App: React.FC = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const GITHUB_URL = "https://github.com/pavan13pk";
  const LINKEDIN_URL = "https://www.linkedin.com/in/pavan-kannaujiya";
  const EMAIL = "kpavan5030@gmail.com";
  const PHONE = "+918736860984";
  const WHATSAPP = "+916394585030";
  
  // Direct link transformation for Google Drive hosted images
  const PROFILE_IMAGE_URL = "https://drive.google.com/uc?id=1MxSlblOcg_6kWD-nPoJMnlL4jZLJx4Lo";

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="inline-block px-4 py-1.5 bg-sky-500/10 rounded-full border border-sky-500/20 text-sky-400 text-xs font-bold tracking-widest uppercase mb-8 animate-fade-in">
          Aspiring DevOps Engineer • Automation • Cloud • CI/CD
        </div>
        <div className="mb-8 relative">
           <div className="w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-sky-500/30 p-1 animate-float shadow-2xl shadow-sky-500/20 overflow-hidden bg-slate-800 flex items-center justify-center">
              <img 
                src={PROFILE_IMAGE_URL} 
                alt="kpavan" 
                className="w-full h-full object-cover object-top"
                crossOrigin="anonymous"
                onError={(e) => {
                  // Fallback in case Google Drive embed is blocked by browser policies
                  (e.target as HTMLImageElement).src = "https://api.dicebear.com/7.x/avataaars/svg?seed=Pavan&backgroundColor=b6e3f4";
                }}
              />
           </div>
           <div className="absolute bottom-2 right-2 bg-green-500 w-6 h-6 rounded-full border-4 border-slate-900 shadow-lg" title="Available for work"></div>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
          DevOps by <span className="gradient-text">kpavan</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-12 leading-relaxed">
          3+ years of experience in IT Infrastructure. Currently scaling my expertise into the DevOps horizon with MCA from Manipal University Jaipur.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button 
            onClick={() => scrollTo('projects')}
            className="px-8 py-4 bg-sky-500 hover:bg-sky-600 rounded-xl font-semibold transition-all shadow-xl shadow-sky-500/20"
          >
            Explore Projects
          </button>
          <a 
            href={`mailto:${EMAIL}`}
            className="px-8 py-4 glass hover:bg-white/5 rounded-xl font-semibold transition-all inline-flex items-center gap-2"
          >
            Get In Touch
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </div>
      </section>

      {/* About & Education Section */}
      <section id="about" className="py-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        <div className="glass p-8 md:p-12 rounded-[2.5rem] border-white/5 relative overflow-hidden h-full">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="text-sky-500">01.</span> About Me
          </h2>
          <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
            <p>
              I am an aspiring DevOps Engineer with 3 years of hands-on experience as an <strong>IT Support Engineer</strong> at <strong>Zenpaq Computer & Peripherals</strong>, working on critical infrastructure for the <strong>Airport Authority of India (AAI)</strong> at Hyderabad Airport.
            </p>
            <p>
              My journey is defined by a transition from traditional IT support to modern, automated cloud-native architectures. I focus on building resilient systems that streamline development lifecycles.
            </p>
            <div className="pt-6">
              <h4 className="text-sky-400 font-bold text-xs uppercase tracking-[0.2em] mb-4">Core Competencies</h4>
              <div className="flex flex-wrap gap-2">
                {['Cloud Migration', 'System Automation', 'Network Security', 'K8s Orchestration', 'CI/CD Pipelines'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-white/5 rounded-full text-sm border border-white/10">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="text-sky-500">02.</span> Qualifications
          </h2>
          <div className="space-y-4">
             <div className="glass p-6 rounded-2xl border-white/5 hover:border-sky-500/30 transition-all">
                <span className="text-sky-400 text-xs font-bold uppercase tracking-widest">2023 — 2025</span>
                <h4 className="text-xl font-bold text-white mt-1">MCA (Master of Computer Applications)</h4>
                <p className="text-slate-400">Manipal University Jaipur</p>
             </div>
             <div className="glass p-6 rounded-2xl border-white/5 hover:border-sky-500/30 transition-all">
                <span className="text-sky-400 text-xs font-bold uppercase tracking-widest">2020 — 2022</span>
                <h4 className="text-xl font-bold text-white mt-1">Advanced Diploma</h4>
                <p className="text-slate-400">National Skill Training Institute (NSTI), Hyderabad</p>
             </div>
             <div className="glass p-6 rounded-2xl border-white/5 hover:border-sky-500/30 transition-all">
                <span className="text-sky-400 text-xs font-bold uppercase tracking-widest">2018 — 2021</span>
                <h4 className="text-xl font-bold text-white mt-1">Bachelor of Arts (BA)</h4>
                <p className="text-slate-400">Allahabad State University</p>
             </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold mb-4">Professional Experience</h2>
            <p className="text-slate-400">3 years of managing mission-critical IT infrastructure.</p>
          </div>
          
          <div className="max-w-3xl mx-auto">
             <div className="relative pl-8 border-l-2 border-sky-500/30 space-y-12">
                <div className="relative">
                   <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-sky-500 border-4 border-slate-900 shadow-lg shadow-sky-500/40"></div>
                   <div className="glass p-8 rounded-3xl border-white/5">
                      <div className="flex justify-between items-start mb-4">
                         <div>
                            <h3 className="text-2xl font-bold text-white">IT Support Engineer</h3>
                            <p className="text-sky-400 font-medium">Zenpaq Computer & Peripherals</p>
                         </div>
                         <span className="px-4 py-1 bg-sky-500/10 rounded-full text-sky-400 text-sm font-bold">3 Years Exp.</span>
                      </div>
                      <p className="text-slate-400 mb-6 italic text-sm">Working on behalf of Airport Authority of India (AAI), Hyderabad Airport</p>
                      <ul className="space-y-3 text-slate-300">
                         <li className="flex gap-3">
                            <span className="text-sky-500 mt-1">▹</span>
                            Managed and maintained desktop infrastructure and network peripherals at Hyderabad International Airport.
                         </li>
                         <li className="flex gap-3">
                            <span className="text-sky-500 mt-1">▹</span>
                            Ensured 99.9% uptime for critical operational systems on behalf of AAI.
                         </li>
                         <li className="flex gap-3">
                            <span className="text-sky-500 mt-1">▹</span>
                            Diagnosed complex hardware and software issues, providing rapid on-site resolution.
                         </li>
                      </ul>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold mb-4">Skills & Tools</h2>
            <p className="text-slate-400">Mastering the DevOps toolchain to deliver excellence.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {SKILLS.map((skill, i) => (
              <div key={i} className="glass p-6 rounded-2xl group hover:border-sky-500/50 transition-all flex flex-col items-center justify-center gap-3">
                <span className="text-3xl group-hover:scale-110 transition-transform">{skill.icon}</span>
                <span className="text-slate-200 font-medium text-sm text-center">{skill.name}</span>
                <span className="text-[9px] uppercase tracking-wider text-slate-500 font-bold">{skill.category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-4">Portfolio Projects</h2>
            <p className="text-slate-400">Practical implementations of cloud-native and automation concepts.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project) => (
              <div key={project.id} className="glass rounded-3xl overflow-hidden group hover:shadow-2xl hover:shadow-sky-500/20 transition-all border border-white/5 flex flex-col group/card">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
                  />
                  
                  {/* Subtle Hover Overlay */}
                  <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                       <div className="flex flex-wrap gap-2 mb-2">
                        {project.techStack.map(tech => (
                          <span key={tech} className="bg-sky-500/20 backdrop-blur-md text-[10px] text-sky-200 px-2 py-1 rounded-md border border-sky-400/30 font-bold uppercase tracking-wider">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Static bottom gradient for readability */}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-900 to-transparent"></div>
                  
                  {/* Static category label */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-slate-900/80 backdrop-blur-md text-[9px] text-white px-3 py-1 rounded-full border border-white/10 uppercase tracking-widest font-bold">
                      {project.techStack[0]}
                    </span>
                  </div>
                </div>

                <div className="p-8 flex-1 flex flex-col relative z-10">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-sky-400 group-hover:translate-x-1 transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-6 flex-1 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-2 text-sky-400 font-semibold hover:text-sky-300 transition-colors group/link"
                    >
                      View Repository
                      <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Learning */}
      <section id="certs" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <span className="text-sky-500">03.</span> Certifications
              </h2>
              <div className="space-y-4">
                {CERTS.map((cert, i) => (
                  <div key={i} className="glass p-6 rounded-2xl flex items-center gap-6 border-white/5 hover:border-sky-500/20 transition-all">
                    <img src={cert.badgeUrl} alt={cert.name} className="w-16 h-16 object-contain" />
                    <div>
                      <h4 className="font-bold text-white">{cert.name}</h4>
                      <p className="text-slate-400 text-sm">{cert.issuer} • {cert.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <span className="text-sky-500">04.</span> Currently Learning
              </h2>
              <div className="glass p-8 rounded-2xl border-white/5 space-y-6">
                 <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-sky-500/10 flex items-center justify-center text-sky-400 font-bold">1</div>
                    <div>
                      <h4 className="font-bold text-white mb-1">Advanced Kubernetes Networking</h4>
                      <p className="text-slate-400 text-sm">Deep diving into Service Mesh (Istio) and CNI plugins.</p>
                    </div>
                 </div>
                 <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-sky-500/10 flex items-center justify-center text-sky-400 font-bold">2</div>
                    <div>
                      <h4 className="font-bold text-white mb-1">Go for DevOps</h4>
                      <p className="text-slate-400 text-sm">Building custom CLIs and Kubernetes operators.</p>
                    </div>
                 </div>
                 <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-sky-500/10 flex items-center justify-center text-sky-400 font-bold">3</div>
                    <div>
                      <h4 className="font-bold text-white mb-1">FinOps Fundamentals</h4>
                      <p className="text-slate-400 text-sm">Learning cloud cost optimization strategies for large scale AWS deployments.</p>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Chat Section */}
      <section id="ai-chat" className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Chat with the Guru</h2>
          <p className="text-slate-400 mb-12 max-w-2xl mx-auto">
            Need help with a Jenkinsfile or Terraform HCL? My AI assistant is trained on the latest DevOps trends to help you out.
          </p>
          <ChatInterface />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="glass p-12 rounded-[3rem] border-white/5 relative overflow-hidden text-center md:text-left">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
                <p className="text-slate-400 mb-8 text-lg">
                  Whether you want to discuss a potential collaboration or just talk shop about infrastructure, 
                  I'm always open to new opportunities.
                </p>
                
                <div className="space-y-4">
                   <a href={`mailto:${EMAIL}`} className="flex items-center gap-4 text-slate-300 hover:text-sky-400 transition-colors group">
                      <div className="w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-500 group-hover:scale-110 transition-transform">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                      </div>
                      <span className="font-medium">{EMAIL}</span>
                   </a>
                   <a href={`tel:${PHONE}`} className="flex items-center gap-4 text-slate-300 hover:text-sky-400 transition-colors group">
                      <div className="w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-500 group-hover:scale-110 transition-transform">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                      </div>
                      <span className="font-medium">+91 8736860984</span>
                   </a>
                   <a href={`https://wa.me/${WHATSAPP.replace('+', '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-300 hover:text-green-400 transition-colors group">
                      <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center text-green-500 group-hover:scale-110 transition-transform">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.067 2.877 1.215 3.076.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                      </div>
                      <span className="font-medium">+91 6394585030 (WhatsApp)</span>
                   </a>
                </div>
              </div>
              
              <div className="flex flex-col gap-4">
                <a 
                  href={LINKEDIN_URL} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full py-4 glass border-white/5 bg-sky-500/10 rounded-2xl font-bold text-sky-400 hover:bg-sky-500/20 transition-all text-center flex items-center justify-center gap-2"
                >
                  Connect on LinkedIn
                </a>
                <a 
                  href={GITHUB_URL} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full py-4 glass border-white/5 rounded-2xl font-bold hover:bg-white/5 transition-all text-center"
                >
                  Follow on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20 max-w-7xl mx-auto px-6 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-slate-500 text-xs gap-4 pb-12">
          <p>© {new Date().getFullYear()} kpavan. Built for high availability.</p>
          <div className="flex gap-8">
            <a href={`mailto:${EMAIL}`} className="hover:text-white transition-colors">Contact Me</a>
            <a 
               href={LINKEDIN_URL} 
               target="_blank" 
               rel="noopener noreferrer" 
               className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a 
               href={GITHUB_URL} 
               target="_blank" 
               rel="noopener noreferrer" 
               className="hover:text-white transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default App;