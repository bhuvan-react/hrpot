
import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginScreen: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 w-full max-w-md mx-auto">
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none"></div>
      
      <div className="w-full flex flex-col items-center mb-8 z-10">
        <div className="w-20 h-20 bg-white dark:bg-gray-800 rounded-2xl shadow-soft flex items-center justify-center mb-6">
          <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white">
            <span className="material-symbols-outlined text-[32px]">rocket_launch</span>
          </div>
        </div>
        <h2 className="text-[#0c131c] dark:text-white tracking-tight text-[28px] font-bold leading-tight text-center">
          Welcome to QuickOnboardAI
        </h2>
        <p className="text-[#6C757D] dark:text-gray-400 text-base font-normal leading-normal pt-2 text-center">
          Start your new journey
        </p>
      </div>

      <div className="w-full space-y-5 z-10">
        <div className="group/input">
          <label className="block text-[#0c131c] dark:text-gray-200 text-sm font-medium leading-normal pb-2">
            Email Address
          </label>
          <input className="form-input flex w-full rounded-xl text-[#0c131c] dark:text-white border border-[#cdd8e9] dark:border-gray-700 bg-white dark:bg-gray-800 focus:border-primary focus:ring-primary/20 h-14 placeholder:text-[#6C757D] px-4 text-base transition-all" placeholder="you@example.com" type="email" defaultValue="alex@example.com"/>
        </div>
        <div className="group/input">
          <div className="flex justify-between items-center pb-2">
            <label className="block text-[#0c131c] dark:text-gray-200 text-sm font-medium leading-normal">
              Password
            </label>
          </div>
          <div className="relative flex w-full items-center">
            <input className="form-input flex w-full rounded-xl text-[#0c131c] dark:text-white border border-[#cdd8e9] dark:border-gray-700 bg-white dark:bg-gray-800 focus:border-primary focus:ring-primary/20 h-14 placeholder:text-[#6C757D] px-4 pr-12 text-base transition-all" placeholder="••••••••" type="password" defaultValue="password"/>
            <button className="absolute right-0 top-0 h-full px-4 flex items-center justify-center text-[#6C757D] hover:text-primary transition-colors" type="button">
              <span className="material-symbols-outlined text-[24px]">visibility</span>
            </button>
          </div>
          <div className="flex justify-end pt-2">
            <a className="text-sm font-medium text-primary hover:text-primary/80 transition-colors" href="#">
              Forgot Password?
            </a>
          </div>
        </div>
        <button 
          onClick={() => navigate('/jobs')}
          className="w-full h-14 bg-primary hover:bg-blue-700 text-white font-bold text-lg rounded-xl shadow-lg shadow-primary/30 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
        >
          <span>Log In</span>
          <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
        </button>

        <div className="relative flex items-center py-2">
          <div className="flex-grow border-t border-gray-200 dark:border-gray-700"></div>
          <span className="flex-shrink-0 mx-4 text-xs text-gray-400 font-medium uppercase tracking-wider">Or continue with</span>
          <div className="flex-grow border-t border-gray-200 dark:border-gray-700"></div>
        </div>

        <button className="w-full h-14 bg-white dark:bg-gray-800 border border-[#cdd8e9] dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 text-[#0c131c] dark:text-white font-medium text-base rounded-xl transition-all flex items-center justify-center gap-3">
          <div className="w-5 h-5 bg-contain bg-center bg-no-repeat" style={{backgroundImage: "url('https://www.google.com/favicon.ico')"}}></div>
          <span>Sign in with Google</span>
        </button>
      </div>
    </div>
  );
};

export default LoginScreen;
