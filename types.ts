export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location?: string;
  description?: string;
  skills?: string[];
  type: 'Work' | 'Organization' | 'Event' | 'Volunteering';
}

export interface Education {
  id: string;
  school: string;
  degree?: string;
  period: string;
  gpa?: string;
  details?: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}