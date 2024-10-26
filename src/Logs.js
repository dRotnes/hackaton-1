import React from 'react';

const Logs = ({ pedidos }) => {
  // Ordena os pedidos em ordem decrescente pelo id
  const pedidosOrdenados = [...pedidos].sort((a, b) => b.id - a.id);

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md w-[35vw]">
      <h2 className="text-2xl font-bold mb-4">Last Orders</h2>
      <ul>
        {pedidosOrdenados.map((pedido) => (
          <li key={pedido.id} className="mb-2 border-b border-gray-300 pb-2">
            <p><strong>ID:</strong> {pedido.id}</p>
            <p><strong>Data:</strong> {pedido.data}</p>
            <p><strong>Status:</strong> {pedido.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Logs;
