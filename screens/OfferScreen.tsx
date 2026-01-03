
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Header, BottomNav } from '../components/Layout';

const OfferScreen: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen pb-24 relative max-w-md mx-auto w-full bg-background-light dark:bg-background-dark">
      <Header title="Sarah Jenkins" subtitle="Candidate" />

      <main className="flex-1 flex flex-col px-4 pt-6 gap-6">
        <div>
          <h2 className="text-2xl font-bold leading-tight tracking-tight text-text-main dark:text-white mb-2">
            Congratulations! 🎉
          </h2>
          <p className="text-text-secondary dark:text-gray-400 text-base leading-relaxed">
            We are excited to offer you the position at <span className="font-semibold text-primary">TechFlow Inc.</span>
          </p>
        </div>

        <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.08)] overflow-hidden border border-gray-100 dark:border-gray-700">
          <div className="h-24 bg-gradient-to-r from-blue-600 to-indigo-700 relative">
            <div className="absolute -bottom-6 left-4 bg-surface-light dark:bg-surface-dark p-1 rounded-lg shadow-sm">
              <div className="size-12 rounded bg-indigo-50 flex items-center justify-center font-bold text-primary">TF</div>
            </div>
          </div>
          <div className="pt-8 px-4 pb-4 flex flex-col gap-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-bold text-text-main dark:text-white">Senior UX Designer</h3>
                <p className="text-sm text-text-secondary dark:text-gray-400">Product Team • Full Time</p>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-success text-xs font-bold uppercase tracking-wider">
                OFFER
              </span>
            </div>
            <div className="grid grid-cols-2 gap-4 py-2 border-t border-b border-gray-100 dark:border-gray-700">
              <div>
                <p className="text-xs font-medium text-text-secondary dark:text-gray-500 uppercase mb-1">Annual Salary</p>
                <p className="text-base font-bold text-text-main dark:text-gray-200">$145,000</p>
              </div>
              <div>
                <p className="text-xs font-medium text-text-secondary dark:text-gray-500 uppercase mb-1">Start Date</p>
                <p className="text-base font-bold text-text-main dark:text-gray-200">Dec 01, 2024</p>
              </div>
            </div>
            <button className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-medium py-3 rounded-lg transition-colors shadow-sm active:scale-[0.98]">
              <span className="material-symbols-outlined text-[20px]">description</span>
              View Full Offer Letter
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-end px-1">
            <h3 className="text-base font-bold text-text-main dark:text-white">Onboarding Checklist</h3>
            <span className="text-sm font-medium text-success">60% Complete</span>
          </div>
          <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div className="h-full bg-success rounded-full transition-all duration-500 ease-out" style={{width: "60%"}}></div>
          </div>
          <p className="text-xs text-text-secondary dark:text-gray-400 px-1">Complete these steps to finalize your joining.</p>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-4 p-4 bg-surface-light dark:bg-surface-dark rounded-xl border border-gray-100 dark:border-gray-700 opacity-70">
            <div className="shrink-0 size-8 rounded-full bg-success/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-success text-lg font-bold">check</span>
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-text-main dark:text-gray-300 line-through">Review Offer Details</p>
              <p className="text-xs text-success">Completed</p>
            </div>
          </div>

          <div className="relative group overflow-hidden bg-surface-light dark:bg-surface-dark rounded-xl border-l-4 border-l-primary shadow-sm border-y border-r border-gray-100 dark:border-gray-700 p-4">
            <div className="flex items-start justify-between gap-3">
              <div className="flex gap-4">
                <div className="shrink-0 size-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-lg">ink_pen</span>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-bold text-text-main dark:text-white">Sign Employment Contract</p>
                  <p className="text-xs text-text-secondary dark:text-gray-400">Requires e-signature</p>
                </div>
              </div>
            </div>
            <div className="mt-4 pl-12">
              <button 
                onClick={() => navigate('/esign')}
                className="flex items-center gap-2 px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg shadow-sm hover:bg-primary-dark transition w-fit"
              >
                Sign Now
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default OfferScreen;
