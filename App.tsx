import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Dashboard from './pages/Dashboard';
import DocumentManager from './pages/DocumentManager';
import InventoryManager from './pages/InventoryManager';
import AIAssistant from './pages/AIAssistant';
import AuthForm from './components/AuthForm';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<div className="flex items-center justify-center min-h-screen bg-gray-100"><AuthForm isLogin={true} /></div>} />
          <Route path="/register" element={<div className="flex items-center justify-center min-h-screen bg-gray-100"><AuthForm isLogin={false} /></div>} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/documents" element={<DocumentManager />} />
          <Route path="/inventory" element={<InventoryManager />} />
          <Route path="/assistant" element={<AIAssistant />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
