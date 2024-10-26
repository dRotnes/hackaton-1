import React from 'react';

const LogsSuppliers = () => {
  // Sample data array
  const pedidos = [
    {
      id: 2001,
      artigo: "Processador Intel i9",
      price: 499.99,
      quantity: 10,
      subtotal: 4999.90,
      total: 5749.89  // Including hypothetical tax/shipping
    },
    {
      id: 2002,
      artigo: "Placa de Vídeo RTX 4080",
      price: 899.99,
      quantity: 5,
      subtotal: 4499.95,
      total: 5174.94
    },
    {
      id: 2003,
      artigo: "SSD 2TB Samsung",
      price: 199.99,
      quantity: 20,
      subtotal: 3999.80,
      total: 4599.77
    },
    {
      id: 2004,
      artigo: "Memória RAM 32GB",
      price: 149.99,
      quantity: 15,
      subtotal: 2249.85,
      total: 2587.33
    },
    {
      id: 2005,
      artigo: "Fonte 850W Modular",
      price: 129.99,
      quantity: 12,
      subtotal: 1559.88,
      total: 1793.86
    }
  ];

  // Ordena os pedidos em ordem decrescente pelo id
  const pedidosOrdenados = [...pedidos].sort((a, b) => b.id - a.id);

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md w-[35vw] max-h-[80vh] flex flex-col">
      <h2 className="text-2xl font-bold mb-4 sticky top-0 bg-gray-100 pb-2 border-b border-gray-300">
        Suppliers Resquests
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
                <p className="text-sm"><strong>Artigo:</strong> {pedido.artigo}</p>
                <p className="text-sm"><strong>Preço:</strong> ${pedido.price.toFixed(2)}</p>
                <p className="text-sm"><strong>Quantidade:</strong> {pedido.quantity}</p>
                <p className="text-sm"><strong>Subtotal:</strong> ${pedido.subtotal.toFixed(2)}</p>
                <p className="text-sm"><strong>Total:</strong> ${pedido.total.toFixed(2)}</p>
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

export default LogsSuppliers;