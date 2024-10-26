import React from 'react';

const LogsClients = () => {
  // Sample data array
  const pedidos = [
    {
      id: 1001,
      quantidade: 5,
      artigo: "Laptop Dell XPS 13"
    },
    {
      id: 1002, 
      quantidade: 10,
      artigo: "Monitor LG 27-inch"
    },
    {
      id: 1003,
      quantidade: 3,
      artigo: "Teclado Mecânico"
    },
    {
      id: 1004,
      quantidade: 8,
      artigo: "Mouse Wireless"
    },
    {
      id: 1005,
      quantidade: 15,
      artigo: "Headset Gaming"
    }
  ];

  // Ordena os pedidos em ordem decrescente pelo id
  const pedidosOrdenados = [...pedidos].sort((a, b) => b.id - a.id);

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md w-[35vw] max-h-[80vh] flex flex-col">
      <h2 className="text-2xl font-bold mb-4 sticky top-0 bg-gray-100 pb-2 border-b border-gray-300">
        Clients Orders
      </h2>
      <div className="overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
        <ul className="space-y-4">
          {pedidosOrdenados.map((pedido) => (
            <li
              key={pedido.id}
              className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="grid grid-cols-2 gap-2">
                <p className="text-sm"><strong>ID:</strong> {pedido.id}</p>
                <p className="text-sm"><strong>Quantidade:</strong> {pedido.quantidade}</p>
                <p className="text-sm"><strong>Artigo:</strong> {pedido.artigo}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {pedidosOrdenados.length === 0 && (
        <div className="text-center text-gray-500 py-4">
          Nenhum pedido encontrado
        </div>
      )}
    </div>
  );
};

export default LogsClients;