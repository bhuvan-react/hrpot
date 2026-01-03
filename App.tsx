
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';
import JobsScreen from './screens/JobsScreen';
import StatusScreen from './screens/StatusScreen';
import OfferScreen from './screens/OfferScreen';
import ESignScreen from './screens/ESignScreen';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen bg-background-light dark:bg-background-dark">
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="/jobs" element={<JobsScreen />} />
          <Route path="/status" element={<StatusScreen />} />
          <Route path="/offer" element={<OfferScreen />} />
          <Route path="/esign" element={<ESignScreen />} />
        </Routes>
      </div>
    </HashRouter>
  );
};

export default App;
