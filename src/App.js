import React, { useEffect, useState } from 'react';
import FileUpload from './FileUpload';
import LogsClients from './LogsClients';
import LogsSuppliers from './LogsSuppliers';
import TextileDashboard from './AnalyticsDashboard';

function App() {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    const fetchPedidos = async () => {
      try {
        const response = await fetch('https://api.exemplo.com/pedidos');
        const data = await response.json();
        setPedidos(data);
      } catch (error) {
        console.error('Erro ao buscar os pedidos:', error);
      }
    };

    fetchPedidos();
  }, []);

  return (
    <div className="App">
      <header className="bg-blue-300 py-4">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold text-white">Dallas Mavericks Stock Management</h1>
        </div>
      </header>

      <main>
        <TextileDashboard />

        <div className='flex justify-around'>
          <LogsClients pedidos={pedidos} />
          <LogsSuppliers pedidos={pedidos} />
        </div>

        <FileUpload />
      </main>
    </div>
  );
}

export default App;
