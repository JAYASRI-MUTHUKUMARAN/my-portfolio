export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  problemStatement?: string;
  whatIBuilt: string;
  technologies: string[];
  metrics?: string[];
  features?: { title: string; description: string }[];
  githubUrl: string;
  liveDemoUrl?: string;
  isFeatured?: boolean;
}

export interface SkillCategory {
  title: string;
  categoryKey: 'programming' | 'backend' | 'frontend' | 'aiml' | 'databases' | 'tools';
  skills: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  type: string;
  highlights: string[];
  metrics: string[];
  technologies: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  score: string;
  gradeBadge?: string;
  location?: string;
}

export interface AchievementItem {
  title: string;
  detail: string;
  iconName: string;
  tag?: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  year?: string;
  badge?: string;
}

export interface DeveloperStage {
  step: string;
  title: string;
  description: string;
  practices: string[];
}
