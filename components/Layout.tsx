
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

interface NavButtonProps {
  to: string;
  icon: string;
  label: string;
  hasBadge?: boolean;
}

const NavButton: React.FC<NavButtonProps> = ({ to, icon, label, hasBadge }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = location.pathname === to;

  const iconClass = isActive ? "filled text-primary" : "text-gray-400 dark:text-gray-500 group-hover:text-primary";
  const textClass = isActive ? "text-primary font-bold" : "text-gray-400 dark:text-gray-500 font-medium group-hover:text-primary";

  return (
    <button 
      onClick={() => navigate(to)}
      className="flex flex-col items-center justify-center w-full h-full gap-1 group transition-colors relative"
    >
      <div className="relative">
        <span className={`material-symbols-outlined text-[24px] ${iconClass}`}>
          {icon}
        </span>
        {hasBadge && (
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
          </span>
        )}
        {isActive && !hasBadge && (
          <span className="absolute -top-1 -right-2 size-2 bg-primary rounded-full hidden sm:block"></span>
        )}
      </div>
      <span className={`text-[10px] ${textClass}`}>{label}</span>
    </button>
  );
};

export const BottomNav: React.FC = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-surface-light dark:bg-surface-dark border-t border-gray-200 dark:border-gray-800 pb-safe pt-2 max-w-md mx-auto">
      <div className="flex justify-around items-center h-16 px-2">
        <NavButton to="/jobs" icon="work" label="Jobs" />
        <NavButton to="/status" icon="inventory" label="Status" hasBadge={true} />
        <NavButton to="/offer" icon="description" label="Offers" />
        <NavButton to="/profile" icon="person" label="Profile" />
      </div>
    </nav>
  );
};

export const Header: React.FC<{ title: string; subtitle?: string; showNotification?: boolean }> = ({ title, subtitle, showNotification = true }) => {
  return (
    <header className="sticky top-0 z-30 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors duration-300 max-w-md mx-auto w-full">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          {subtitle ? (
            <div className="relative">
              <div 
                className="bg-center bg-no-repeat bg-cover rounded-full size-10 border-2 border-white dark:border-gray-700 shadow-sm" 
                style={{backgroundImage: 'url("https://picsum.photos/seed/alex/200")'}}
              ></div>
              <div className="absolute bottom-0 right-0 size-3 bg-success rounded-full border-2 border-white dark:border-gray-800"></div>
            </div>
          ) : null}
          <div>
            <h2 className={`text-text-main dark:text-white font-bold leading-tight ${subtitle ? 'text-sm' : 'text-xl'}`}>{title}</h2>
            {subtitle && <p className="text-xs text-text-secondary dark:text-gray-400">{subtitle}</p>}
          </div>
        </div>
        {showNotification && (
          <button className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <span className="material-symbols-outlined text-text-secondary dark:text-gray-400">notifications</span>
            <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full animate-pulse"></span>
          </button>
        )}
      </div>
    </header>
  );
};
