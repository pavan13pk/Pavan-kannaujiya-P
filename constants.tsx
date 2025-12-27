
import { Project, Skill, Certification } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'CI/CD Pipeline for Node.js App',
    description: 'Automated build, test, and deployment pipeline using GitHub Actions. Implements automated semantic versioning and Slack notifications.',
    techStack: ['Node.js', 'GitHub Actions', 'Jest', 'Slack API'],
    image: 'https://images.unsplash.com/photo-1618401471353-b98aadebc25a?auto=format&fit=crop&q=80&w=800',
    githubUrl: 'https://github.com/pavan13pk'
  },
  {
    id: '2',
    title: 'Dockerized Microservices Web App',
    description: 'Multi-stage Docker builds for optimized images. Orchestrated with Docker Compose for local development and testing.',
    techStack: ['Docker', 'Nginx', 'PostgreSQL', 'Redis'],
    image: 'https://images.unsplash.com/photo-1605745341112-85968b193ef5?auto=format&fit=crop&q=80&w=800',
    githubUrl: 'https://github.com/pavan13pk'
  },
  {
    id: '3',
    title: 'Terraform AWS Infrastructure',
    description: 'Infrastructure as Code to deploy a highly available VPC with public and private subnets, RDS, and EC2 instances.',
    techStack: ['Terraform', 'AWS', 'VPC', 'EC2', 'RDS'],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
    githubUrl: 'https://github.com/pavan13pk'
  },
  {
    id: '4',
    title: 'Kubernetes Cluster Deployment',
    description: 'Deployment of a microservices application on EKS using Helm charts and ingress controllers for external access.',
    techStack: ['Kubernetes', 'EKS', 'Helm', 'Ingress-Nginx'],
    image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&q=80&w=800',
    githubUrl: 'https://github.com/pavan13pk'
  },
  {
    id: '5',
    title: 'Prometheus & Grafana Dashboard',
    description: 'Implemented comprehensive monitoring for a distributed system. Custom Grafana dashboards for visualizing node health and app metrics.',
    techStack: ['Prometheus', 'Grafana', 'Node Exporter', 'AlertManager'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    githubUrl: 'https://github.com/pavan13pk'
  }
];

export const SKILLS: Skill[] = [
  { name: 'Git', icon: '🌲', category: 'Version Control' },
  { name: 'GitHub', icon: '🐙', category: 'Version Control' },
  { name: 'Jenkins', icon: '👷', category: 'CI/CD' },
  { name: 'GitHub Actions', icon: '⚡', category: 'CI/CD' },
  { name: 'Docker', icon: '🐳', category: 'Containers' },
  { name: 'Kubernetes', icon: '☸️', category: 'Containers' },
  { name: 'AWS', icon: '☁️', category: 'Cloud' },
  { name: 'Azure', icon: '🔷', category: 'Cloud' },
  { name: 'GCP', icon: '🌈', category: 'Cloud' },
  { name: 'Terraform', icon: '🏗️', category: 'Infrastructure as Code' },
  { name: 'Ansible', icon: '📜', category: 'Infrastructure as Code' },
  { name: 'Prometheus', icon: '🔥', category: 'Monitoring' },
  { name: 'Grafana', icon: '📊', category: 'Monitoring' },
  { name: 'Python', icon: '🐍', category: 'Scripting' },
  { name: 'Bash', icon: '🐚', category: 'Scripting' },
];

export const CERTS: Certification[] = [
  { name: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services', date: '2023', badgeUrl: 'https://images.credly.com/size/340x340/images/00638dc6-a44e-4131-9951-4171f6597792/AWS-CloudPractitioner-2020.png' },
  { name: 'Docker Certified Associate', issuer: 'Docker', date: '2024', badgeUrl: 'https://images.unsplash.com/photo-1605745341112-85968b193ef5?auto=format&fit=crop&q=80&w=100' },
  { name: 'Linux Professional Institute', issuer: 'LPI', date: '2023', badgeUrl: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&q=80&w=100' }
];
