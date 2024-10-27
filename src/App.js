import React, { useEffect, useState } from 'react';
import FileUpload from './FileUpload';
import LogsClients from './LogsClients';
import LogsSuppliers from './LogsSuppliers';
import TextileDashboard from './AnalyticsDashboard';

function App() {

  return (
    <div className="App">
      <header className="bg-blue-300 py-4">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold text-white">Dallas Mavericks Stock Management</h1>
        </div>
      </header>

      <main>
        <TextileDashboard />

        <FileUpload />
      </main>
    </div>
  );
}

export default App;
