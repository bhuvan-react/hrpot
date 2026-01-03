
import React from 'react';
import { Header, BottomNav } from '../components/Layout';

const ESignScreen: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen pb-24 relative max-w-md mx-auto w-full bg-background-light dark:bg-background-dark">
      <Header title="Welcome, Alex" subtitle="Senior UX Designer" />

      <section className="px-4 py-6 bg-surface-light dark:bg-surface-dark mb-2 shadow-sm">
        <h1 className="text-text-main dark:text-white text-2xl font-bold tracking-tight mb-1">Let's get you ready for Day 1</h1>
        <p className="text-text-secondary dark:text-gray-400 text-sm mb-5">Complete these steps to finalize your onboarding.</p>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-end mb-1">
            <span className="text-primary font-semibold text-sm">2 of 3 steps completed</span>
            <span className="text-text-secondary dark:text-gray-500 text-xs font-medium">66%</span>
          </div>
          <div className="h-2.5 w-full bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
            <div className="h-full bg-primary rounded-full relative" style={{width: "66%"}}>
              <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
            </div>
          </div>
          <p className="text-text-secondary dark:text-gray-400 text-xs mt-1">Almost there! Just verification left.</p>
        </div>
      </section>

      <main className="flex flex-col gap-4 px-4 py-4">
        <h3 className="text-text-main dark:text-white text-lg font-bold tracking-tight">Action Items</h3>
        
        <div className="group relative bg-surface-light dark:bg-surface-dark rounded-xl p-4 border border-gray-100 dark:border-gray-800 shadow-sm flex flex-col gap-3 overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-success"></div>
          <div className="flex justify-between items-start">
            <div className="flex gap-3">
              <div className="flex items-center justify-center size-10 rounded-full bg-success/10 text-success shrink-0">
                <span className="material-symbols-outlined">check_circle</span>
              </div>
              <div>
                <h4 className="font-semibold text-text-main dark:text-white">Offer Letter</h4>
                <p className="text-xs text-text-secondary dark:text-gray-400">Signed on Oct 24, 2024</p>
              </div>
            </div>
            <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-success/10 text-success">
              Signed
            </span>
          </div>
          <button className="text-sm font-medium text-primary hover:text-primary/80 text-left flex items-center gap-1 mt-1 w-fit">
            View Document <span className="material-symbols-outlined text-base">open_in_new</span>
          </button>
        </div>

        <div className="relative bg-surface-light dark:bg-surface-dark rounded-xl p-5 border border-primary/20 shadow-md ring-1 ring-primary/10 flex flex-col gap-4">
          <div className="flex justify-between items-start">
            <div className="flex gap-3">
              <div className="flex items-center justify-center size-10 rounded-full bg-primary/10 text-primary shrink-0 animate-pulse">
                <span className="material-symbols-outlined">badge</span>
              </div>
              <div>
                <h4 className="font-semibold text-text-main dark:text-white text-lg">Identity Verification</h4>
                <p className="text-sm text-text-secondary dark:text-gray-400">Upload Government ID for KYC compliance</p>
              </div>
            </div>
            <span className="inline-flex items-center px-2.5 py-1 rounded text-xs font-medium bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400">
              Action Required
            </span>
          </div>
          <div className="grid grid-cols-2 gap-3 mt-1">
            <button className="flex flex-col items-center justify-center p-4 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg hover:border-primary hover:bg-primary/5 transition-all group">
              <span className="material-symbols-outlined text-gray-400 group-hover:text-primary mb-2 text-3xl">add_a_photo</span>
              <span className="text-xs font-medium text-text-secondary dark:text-gray-400 group-hover:text-primary">Front of ID</span>
            </button>
            <button className="flex flex-col items-center justify-center p-4 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg hover:border-primary hover:bg-primary/5 transition-all group">
              <span className="material-symbols-outlined text-gray-400 group-hover:text-primary mb-2 text-3xl">add_a_photo</span>
              <span className="text-xs font-medium text-text-secondary dark:text-gray-400 group-hover:text-primary">Back of ID</span>
            </button>
          </div>
          <button className="w-full h-12 flex items-center justify-center gap-2 bg-primary hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-colors mt-2">
            Submit Documents
          </button>
        </div>

        <div className="opacity-60 bg-surface-light dark:bg-surface-dark rounded-xl p-4 border border-gray-100 dark:border-gray-800 flex flex-col gap-3">
          <div className="flex justify-between items-start">
            <div className="flex gap-3">
              <div className="flex items-center justify-center size-10 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-400 shrink-0">
                <span className="material-symbols-outlined">account_balance</span>
              </div>
              <div>
                <h4 className="font-semibold text-text-main dark:text-white">Bank Details</h4>
                <p className="text-xs text-text-secondary dark:text-gray-400">Direct deposit setup</p>
              </div>
            </div>
            <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-500">
              Pending
            </span>
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default ESignScreen;
