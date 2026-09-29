import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import HowItWorksPage from './pages/HowItWorksPage';
import ForGovernmentPage from './pages/ForGovernmentPage';
import ForStartupsPage from './pages/ForStartupsPage';
import GovernmentRegistrationPage from './pages/GovernmentRegistrationPage';
import StartupRegistrationPage from './pages/StartupRegistrationPage';
import OpportunitiesPage from './pages/OpportunitiesPage';
import OpportunityDetailPage from './pages/OpportunityDetailPage';
import VerificationPage from './pages/VerificationPage';
import MatchingPage from './pages/MatchingPage';
import CapabilityPage from './pages/CapabilityPage';
import PilotPage from './pages/PilotPage';
import EvaluationPage from './pages/EvaluationPage';
import ProcurementPage from './pages/ProcurementPage';
import MonitoringPage from './pages/MonitoringPage';
import PaymentsPage from './pages/PaymentsPage';
import GovernmentDashboardPage from './pages/GovernmentDashboardPage';
import StartupDashboardPage from './pages/StartupDashboardPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import ResourcesPage from './pages/ResourcesPage';
import HelpPage from './pages/HelpPage';
import LoginPage from './pages/LoginPage';

export default function App() {
  // Sync route with URL hash for easy bookmarking and deep linking
  const getInitialRoute = () => {
    const hash = window.location.hash.replace('#', '').replace('/', '');
    const validRoutes = [
      'home', 'about', 'how-it-works', 'government', 'startups',
      'register-government', 'register-startup', 'opportunities',
      'opportunity-detail', 'verification', 'matching', 'capability',
      'pilot', 'evaluation', 'procurement', 'monitoring', 'payments',
      'dashboard-government', 'dashboard-startup', 'dashboard-admin',
      'resources', 'help', 'login'
    ];
    return validRoutes.includes(hash) ? hash : 'home';
  };

  const [currentRoute, setCurrentRoute] = useState(getInitialRoute);
  const [currentUserRole, setCurrentUserRole] = useState('government'); // 'government' | 'startup' | 'admin'
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedOpportunityId, setSelectedOpportunityId] = useState('OPP-MH-2026-001');

  // Listen for hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').replace('/', '');
      if (hash && hash !== currentRoute) {
        setCurrentRoute(hash);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [currentRoute]);

  // Update URL hash when route changes
  const handleSetRoute = (route) => {
    setCurrentRoute(route);
    window.location.hash = `#${route}`;
  };

  const isGovOrStartup = isLoggedIn && (currentUserRole === 'government' || currentUserRole === 'startup' || currentUserRole === 'admin');

  // Render the active route component
  const renderCurrentPage = () => {
    // Route guard for protected routes: opportunities and how-it-works
    const protectedRoutes = ['opportunities', 'opportunity-detail', 'how-it-works'];
    if (!isGovOrStartup && protectedRoutes.includes(currentRoute)) {
      return (
        <LoginPage 
          setCurrentRoute={handleSetRoute}
          currentUserRole={currentUserRole}
          setCurrentUserRole={setCurrentUserRole}
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          redirectNotice="Government or Startup login is required to access Opportunities and How It Works."
        />
      );
    }

    switch (currentRoute) {
      case 'home':
        return (
          <HomePage 
            setCurrentRoute={handleSetRoute}
            isLoggedIn={isLoggedIn}
            currentUserRole={currentUserRole}
          />
        );
      case 'about':
        return <AboutPage setCurrentRoute={handleSetRoute} />;
      case 'how-it-works':
        return <HowItWorksPage setCurrentRoute={handleSetRoute} />;
      case 'government':
        return (
          <ForGovernmentPage 
            setCurrentRoute={handleSetRoute} 
            isLoggedIn={isLoggedIn}
            currentUserRole={currentUserRole}
          />
        );
      case 'startups':
        return (
          <ForStartupsPage 
            setCurrentRoute={handleSetRoute} 
            isLoggedIn={isLoggedIn}
            currentUserRole={currentUserRole}
          />
        );
      case 'register-government':
        return <GovernmentRegistrationPage setCurrentRoute={handleSetRoute} />;
      case 'register-startup':
        return <StartupRegistrationPage setCurrentRoute={handleSetRoute} />;
      case 'opportunities':
        return (
          <OpportunitiesPage 
            setCurrentRoute={handleSetRoute} 
            setSelectedOpportunityId={setSelectedOpportunityId} 
          />
        );
      case 'opportunity-detail':
        return (
          <OpportunityDetailPage 
            opportunityId={selectedOpportunityId} 
            setCurrentRoute={handleSetRoute} 
            currentUserRole={currentUserRole}
          />
        );
      case 'verification':
        return <VerificationPage setCurrentRoute={handleSetRoute} />;
      case 'matching':
        return (
          <MatchingPage 
            setCurrentRoute={handleSetRoute} 
            setSelectedOpportunityId={setSelectedOpportunityId} 
          />
        );
      case 'capability':
        return (
          <CapabilityPage 
            setCurrentRoute={handleSetRoute} 
            setSelectedOpportunityId={setSelectedOpportunityId} 
          />
        );
      case 'pilot':
        return <PilotPage setCurrentRoute={handleSetRoute} />;
      case 'evaluation':
        return <EvaluationPage setCurrentRoute={handleSetRoute} />;
      case 'procurement':
        return <ProcurementPage setCurrentRoute={handleSetRoute} />;
      case 'monitoring':
        return <MonitoringPage setCurrentRoute={handleSetRoute} />;
      case 'payments':
        return (
          <PaymentsPage 
            setCurrentRoute={handleSetRoute} 
            currentUserRole={currentUserRole} 
          />
        );
      case 'dashboard-government':
        return (
          <GovernmentDashboardPage 
            setCurrentRoute={handleSetRoute} 
            setSelectedOpportunityId={setSelectedOpportunityId} 
          />
        );
      case 'dashboard-startup':
        return <StartupDashboardPage setCurrentRoute={handleSetRoute} />;
      case 'dashboard-admin':
        return <AdminDashboardPage setCurrentRoute={handleSetRoute} />;
      case 'resources':
        return <ResourcesPage setCurrentRoute={handleSetRoute} />;
      case 'help':
        return <HelpPage setCurrentRoute={handleSetRoute} />;
      case 'login':
        return (
          <LoginPage 
            setCurrentRoute={handleSetRoute}
            currentUserRole={currentUserRole}
            setCurrentUserRole={setCurrentUserRole}
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
          />
        );
      default:
        return (
          <HomePage 
            setCurrentRoute={handleSetRoute}
            isLoggedIn={isLoggedIn}
            currentUserRole={currentUserRole}
          />
        );
    }
  };

  return (
    <div className="main-content">
      {/* Universal Public Sector Header */}
      <Header 
        currentRoute={currentRoute} 
        setCurrentRoute={handleSetRoute}
        currentUserRole={currentUserRole}
        setCurrentUserRole={setCurrentUserRole}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
      />

      {/* Main Page Content */}
      <main style={{ minHeight: '80vh' }}>
        {renderCurrentPage()}
      </main>

      {/* Universal Public Sector Footer */}
      <Footer 
        setCurrentRoute={handleSetRoute} 
        isLoggedIn={isLoggedIn}
        currentUserRole={currentUserRole}
      />
    </div>
  );
}
