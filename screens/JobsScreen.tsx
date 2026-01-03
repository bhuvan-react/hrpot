
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header, BottomNav } from '../components/Layout';
import { Job } from '../types';

const MOCK_JOBS: Job[] = [
  {
    id: '1',
    title: 'Senior UX Designer',
    company: 'TechFlow Inc.',
    logo: '',
    initials: 'TF',
    matchScore: 94,
    location: 'SF (Hybrid)',
    salary: '$140k+',
    skills: ['Figma', 'UI/UX', 'Prototyping']
  },
  {
    id: '2',
    title: 'Product Manager',
    company: 'OmniStream',
    logo: '',
    initials: 'OS',
    matchScore: 88,
    location: 'Remote',
    salary: '$130k+',
    skills: ['Agile', 'Product Roadmap']
  }
];

const JobsScreen: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="flex flex-col min-h-screen pb-24 relative max-w-md mx-auto w-full bg-background-light dark:bg-background-dark">
      <header className="px-5 pt-8 pb-2">
        <div className="flex items-center justify-between mb-2">
          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Welcome back,</p>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">Alex Morgan</h1>
          </div>
          <button className="relative p-2 rounded-full bg-white dark:bg-surface-dark shadow-sm border border-gray-100 dark:border-gray-700 text-gray-600 dark:text-gray-300">
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500"></span>
          </button>
        </div>
        <div className="mt-4">
          <h2 className="text-primary dark:text-blue-400 text-lg font-bold leading-tight">AI found 5 new matches for you.</h2>
        </div>
      </header>
      
      <div className="px-4 py-3 sticky top-0 z-20 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm">
        <div className="flex w-full items-center rounded-xl bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 shadow-sm transition-colors focus-within:border-primary focus-within:ring-1 focus-within:ring-primary h-12 overflow-hidden">
          <div className="flex items-center justify-center pl-4 text-gray-400 dark:text-gray-500">
            <span className="material-symbols-outlined">search</span>
          </div>
          <input 
            className="flex w-full min-w-0 flex-1 resize-none border-none bg-transparent px-3 text-base font-normal text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-0 focus:ring-0" 
            placeholder="Search title, skill, or company"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="flex gap-2 px-4 pb-4 overflow-x-auto no-scrollbar">
        <button className="flex h-9 shrink-0 items-center justify-center gap-x-1.5 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-4 shadow-md">
          <span className="material-symbols-outlined text-[18px]">tune</span>
          <p className="text-sm font-medium">All Filters</p>
        </button>
        <button className="flex h-9 shrink-0 items-center justify-center gap-x-1.5 rounded-full bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 px-4 text-gray-700 dark:text-gray-200">
          <p className="text-sm font-medium">Remote</p>
        </button>
        <button className="flex h-9 shrink-0 items-center justify-center gap-x-1.5 rounded-full bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 px-4 text-gray-700 dark:text-gray-200">
          <p className="text-sm font-medium">$100k+</p>
        </button>
      </div>

      <main className="flex flex-col gap-4 px-4">
        {MOCK_JOBS.filter(j => j.title.toLowerCase().includes(searchTerm.toLowerCase())).map(job => (
          <div 
            key={job.id}
            className="group relative flex flex-col rounded-2xl bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-700 shadow-sm p-4 transition-all active:scale-[0.99] cursor-pointer"
            onClick={() => navigate('/status')}
          >
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center gap-3">
                <div className={`h-12 w-12 rounded-lg ${job.id === '1' ? 'bg-indigo-100 text-indigo-600' : 'bg-orange-100 text-orange-600'} flex items-center justify-center font-bold text-xl overflow-hidden`}>
                  {job.initials}
                </div>
                <div>
                  <h3 className="text-gray-900 dark:text-white text-lg font-bold leading-tight">{job.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">{job.company}</p>
                </div>
              </div>
              <div className="flex items-center gap-1 rounded-full bg-blue-50 dark:bg-blue-900/20 px-2.5 py-1">
                <span className="material-symbols-outlined text-primary text-[16px] fill-1">auto_awesome</span>
                <span className="text-primary font-bold text-xs">{job.matchScore}%</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-y-2 gap-x-4 mb-4 text-gray-500 dark:text-gray-400 text-sm">
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[18px]">location_on</span>
                <span>{job.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[18px]">payments</span>
                <span>{job.salary}</span>
              </div>
            </div>
            <div className="mb-4 rounded-lg bg-gray-50 dark:bg-gray-800/50 p-3 text-sm">
              <div className="flex items-start gap-2 mb-1.5">
                <span className="material-symbols-outlined text-green-600 dark:text-green-400 text-[18px]">check_circle</span>
                <span className="text-gray-700 dark:text-gray-300">Strong match for <span className="font-medium text-gray-900 dark:text-white">{job.skills[0]}</span>.</span>
              </div>
            </div>
            <button className="flex w-full items-center justify-center rounded-xl bg-primary py-3 text-white font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20">
              Apply Now
            </button>
          </div>
        ))}
      </main>

      <BottomNav />
    </div>
  );
};

export default JobsScreen;
