
export interface UserProfile {
  name: string;
  jobTitle: string;
  profileStrength: number;
  experience: Experience[];
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  aiGenerated?: boolean;
}

export interface Job {
  id: string;
  title: string;
  company: string;
  logo: string;
  matchScore: number;
  location: string;
  salary: string;
  skills: string[];
  initials?: string;
}

export interface Application {
  id: string;
  jobTitle: string;
  company: string;
  logo: string;
  status: 'Submitted' | 'Shortlisted' | 'Offer Extended' | 'Rejected';
  appliedDate: string;
}
