
export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  image: string;
  githubUrl: string;
  architectureUrl?: string;
}

export interface Skill {
  name: string;
  icon: string;
  category: 'Version Control' | 'CI/CD' | 'Containers' | 'Cloud' | 'Infrastructure as Code' | 'Monitoring' | 'Scripting';
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  badgeUrl: string;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export enum Section {
  HERO = 'hero',
  ABOUT = 'about',
  SKILLS = 'skills',
  PROJECTS = 'projects',
  CERTS = 'certs',
  AI_CHAT = 'ai-chat',
  CONTACT = 'contact'
}
