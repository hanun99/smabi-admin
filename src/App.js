import React from 'react';
import AdminPanel from './pages/AdminPanel';

function App() {
  console.log("✅ App.js Loaded");

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <AdminPanel />
    </div>
  );
}

export default App;
