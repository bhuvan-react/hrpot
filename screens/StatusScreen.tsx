
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BottomNav } from '../components/Layout';

const StatusScreen: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen pb-24 relative max-w-md mx-auto w-full bg-background-light dark:bg-background-dark">
      <header className="flex items-center justify-between px-4 py-4 bg-background-light dark:bg-background-dark z-10 sticky top-0">
        <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">Application Status</h2>
        <button className="relative p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
          <span className="material-symbols-outlined text-slate-700 dark:text-slate-300">notifications</span>
          <span className="absolute top-2 right-2 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
          </span>
        </button>
      </header>

      <main className="flex-1 overflow-y-auto no-scrollbar pb-24 px-4">
        <div className="mb-6">
          <div className="flex flex-col items-start justify-between gap-4 rounded-xl border border-blue-100 bg-white dark:bg-slate-800 dark:border-slate-700 p-4 shadow-sm">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 dark:bg-blue-900/30 text-primary">
                <span className="material-symbols-outlined">pending_actions</span>
              </div>
              <div className="flex flex-col">
                <p className="text-sm font-bold text-slate-900 dark:text-white leading-tight">Pending Action</p>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-normal mt-1">You have 1 pending offer review</p>
              </div>
            </div>
            <button onClick={() => navigate('/offer')} className="flex items-center justify-center gap-1 rounded-lg bg-primary/10 px-4 py-2 text-sm font-semibold text-primary hover:bg-primary/20 transition-colors shrink-0 w-full">
              Review
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </div>
        </div>

        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Applied Jobs</h3>
          <span className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">3 Active</span>
        </div>

        <div className="flex flex-col gap-4">
          <div className="group relative flex flex-col gap-3 rounded-xl bg-white dark:bg-slate-800 p-4 shadow-sm ring-1 ring-slate-900/5 dark:ring-slate-100/10 hover:shadow-md transition-all active:scale-[0.99]">
            <div className="flex justify-between items-start">
              <div className="flex gap-4">
                <div className="h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-600">
                  <img alt="Tech Corp" className="h-full w-full object-cover" src="https://picsum.photos/seed/techcorp/200"/>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-base">Senior Product Manager</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Tech Corp</p>
                </div>
              </div>
              <span className="inline-flex items-center rounded-full bg-green-100 dark:bg-green-900/30 px-2.5 py-0.5 text-xs font-medium text-green-700 dark:text-green-400">
                Shortlisted
              </span>
            </div>
            <div className="mt-2 flex items-center justify-between border-t border-slate-100 dark:border-slate-700 pt-3">
              <span className="text-xs text-slate-400 dark:text-slate-500">Applied: Oct 24</span>
              <div className="flex items-center gap-1 text-primary text-sm font-medium">
                <span>Details</span>
                <span className="material-symbols-outlined text-[16px]">chevron_right</span>
              </div>
            </div>
          </div>

          <div className="group relative flex flex-col gap-3 rounded-xl bg-white dark:bg-slate-800 p-4 shadow-sm ring-1 ring-slate-900/5 dark:ring-slate-100/10 hover:shadow-md transition-all active:scale-[0.99]">
            <div className="flex justify-between items-start">
              <div className="flex gap-4">
                <div className="h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-600">
                  <img alt="Creative Solutions" className="h-full w-full object-cover" src="https://picsum.photos/seed/creative/200"/>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-base">UX Designer</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Creative Solutions</p>
                </div>
              </div>
              <span className="inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-900/30 px-2.5 py-0.5 text-xs font-medium text-blue-700 dark:text-blue-400">
                Submitted
              </span>
            </div>
            <div className="mt-2 flex items-center justify-between border-t border-slate-100 dark:border-slate-700 pt-3">
              <span className="text-xs text-slate-400 dark:text-slate-500">Applied: Oct 20</span>
            </div>
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default StatusScreen;
