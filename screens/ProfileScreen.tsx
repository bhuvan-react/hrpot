
import React, { useState } from 'react';
import { Header, BottomNav } from '../components/Layout';
import { UserProfile, Experience } from '../types';
import { parseResume } from '../services/geminiService';

const INITIAL_PROFILE: UserProfile = {
  name: "Alex Morgan",
  jobTitle: "Senior UX Designer",
  profileStrength: 75,
  experience: [
    {
      id: '1',
      title: "Lead UX Designer",
      company: "FinTech Global",
      period: "2021 - Present",
      description: "Spearheaded the redesign of the core banking mobile app, improving user retention by 40%...",
      aiGenerated: true
    }
  ]
};

const ProfileScreen: React.FC = () => {
  const [profile, setProfile] = useState<UserProfile>(INITIAL_PROFILE);
  const [isParsing, setIsParsing] = useState(false);

  const handleResumeUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsParsing(true);
    // Simulate reading file text - in real world use PDFJS or similar
    // For this prototype, we'll simulate a resume string
    const mockResumeText = `Alex Morgan. Senior Product Designer. 5 years experience at various tech firms.`;
    
    try {
      const result = await parseResume(mockResumeText);
      if (result.name) {
        setProfile(prev => ({
          ...prev,
          name: result.name || prev.name,
          jobTitle: result.jobTitle || prev.jobTitle,
          experience: result.experience ? result.experience.map((exp: any, i: number) => ({
            ...exp,
            id: String(Date.now() + i),
            aiGenerated: true
          })) : prev.experience,
          profileStrength: 90
        }));
      }
    } finally {
      setIsParsing(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen pb-24 relative max-w-md mx-auto w-full bg-background-light dark:bg-background-dark">
      <Header title="Digital Profile" />
      
      <main className="flex-1 flex flex-col px-4 pt-4 gap-6">
        <section className="bg-surface-light dark:bg-surface-dark rounded-xl p-5 shadow-sm border border-gray-100 dark:border-gray-800">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-semibold dark:text-white flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary text-lg filled">verified</span>
              Profile Strength: {profile.profileStrength === 90 ? 'Expert' : 'Strong'}
            </span>
            <span className="text-sm font-bold text-secondary">{profile.profileStrength}%</span>
          </div>
          <div className="h-2.5 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
            <div 
              className="h-full rounded-full bg-secondary transition-all duration-1000 ease-out" 
              style={{width: `${profile.profileStrength}%`}}
            ></div>
          </div>
          <p className="text-text-muted dark:text-gray-400 text-xs mt-3 flex items-center gap-1">
            <span className="material-symbols-outlined text-sm">lightbulb</span>
            {profile.profileStrength < 90 ? 'Add 2 skills to reach All-Star status' : 'Your profile is optimized for matching!'}
          </p>
        </section>

        <section className="flex flex-col">
          <label className="relative overflow-hidden group rounded-xl border-2 border-dashed border-primary/30 dark:border-primary/50 bg-blue-50/50 dark:bg-blue-900/10 p-6 flex flex-col items-center justify-center text-center gap-4 transition-all hover:border-primary hover:bg-blue-50 dark:hover:bg-blue-900/20 cursor-pointer">
            <input type="file" className="hidden" onChange={handleResumeUpload} accept=".pdf,.doc,.docx,.txt" />
            <div className="absolute top-3 right-3 bg-white dark:bg-gray-800 shadow-sm border border-blue-100 dark:border-blue-900 rounded-full px-2 py-0.5 flex items-center gap-1">
              <span className="material-symbols-outlined text-primary text-xs">auto_awesome</span>
              <span className="text-[10px] font-bold text-primary uppercase tracking-wide">
                {isParsing ? 'Processing...' : 'AI Auto-fill'}
              </span>
            </div>
            <div className={`size-12 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-primary mb-1 ${isParsing ? 'animate-bounce' : ''}`}>
              <span className="material-symbols-outlined text-2xl">cloud_upload</span>
            </div>
            <div className="space-y-1 max-w-[280px]">
              <h3 className="font-bold text-lg dark:text-white">Upload Resume</h3>
              <p className="text-sm text-text-muted dark:text-gray-400">Start fast. Upload PDF/Docx to auto-fill details with AI magic.</p>
            </div>
          </label>
        </section>

        <section className="bg-surface-light dark:bg-surface-dark rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden">
          <div className="px-5 py-3 border-b border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/30 flex justify-between items-center">
            <h3 className="font-bold text-base dark:text-white">Personal Information</h3>
            <button className="text-primary text-sm font-medium">Edit</button>
          </div>
          <div className="p-5 space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-text-muted dark:text-gray-400 uppercase tracking-wider">Full Name</label>
              <input 
                className="w-full bg-background-light dark:bg-background-dark border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2.5 text-sm font-medium focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-shadow" 
                type="text" 
                value={profile.name}
                onChange={(e) => setProfile(p => ({...p, name: e.target.value}))}
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-text-muted dark:text-gray-400 uppercase tracking-wider">Job Title</label>
              <input 
                className="w-full bg-background-light dark:bg-background-dark border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2.5 text-sm font-medium focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-shadow" 
                type="text" 
                value={profile.jobTitle}
                onChange={(e) => setProfile(p => ({...p, jobTitle: e.target.value}))}
              />
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <h3 className="px-1 text-lg font-bold dark:text-white">Experience</h3>
          {profile.experience.map(exp => (
            <div key={exp.id} className="bg-surface-light dark:bg-surface-dark rounded-xl p-5 border border-gray-100 dark:border-gray-800 shadow-sm relative overflow-hidden group">
              {exp.aiGenerated && (
                <div className="absolute top-0 right-0 p-3">
                  <div className="bg-blue-50 dark:bg-blue-900/30 text-primary text-[10px] font-bold px-2 py-1 rounded flex items-center gap-1">
                    <span className="material-symbols-outlined text-[10px]">auto_awesome</span>
                    AI Generated
                  </div>
                </div>
              )}
              <div className="flex gap-4">
                <div className="size-10 rounded bg-gray-100 dark:bg-gray-700 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-gray-400">work</span>
                </div>
                <div>
                  <h4 className="font-bold text-sm dark:text-white">{exp.title}</h4>
                  <p className="text-xs text-text-muted dark:text-gray-400">{exp.company} • {exp.period}</p>
                  <p className="text-sm mt-2 text-gray-600 dark:text-gray-300 line-clamp-2">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>

      <BottomNav />
    </div>
  );
};

export default ProfileScreen;
