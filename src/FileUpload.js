import React, { useState } from 'react';

function FileUpload() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Função para lidar com a seleção do arquivo
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile && selectedFile.type === 'text/plain') {
      setFile(selectedFile);
      setError('');
      setSuccess('');
    } else {
      alert("Por favor, selecione um arquivo .txt");
      setFile(null);
    }
  };

  // Função para enviar o arquivo
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (!file) {
      setError("Nenhum arquivo selecionado!");
      return;
    }

    try {
      setLoading(true);
      setError('');
      setSuccess('');

      // Criar um objeto FormData para enviar o arquivo
      const formData = new FormData();
      formData.append('file', file);

      // Fazer a requisição POST
      const response = await fetch('localhost:3000/orders/new', {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        throw new Error(`Erro: ${response.status}`);
      }

      const data = await response.json();
      setSuccess('Arquivo enviado com sucesso!');
      setFile(null);
      
      // Resetar o input file
      const fileInput = document.querySelector('input[type="file"]');
      if (fileInput) {
        fileInput.value = '';
      }

      return data;

    } catch (err) {
      setError(err.message || 'Erro ao enviar arquivo');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Add order</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col space-y-2">
          <input
            type="file"
            accept=".txt"
            onChange={handleFileChange}
            className="file:mr-4 file:py-2 file:px-4 file:border-0
                     file:text-sm file:font-semibold file:bg-blue-50 
                     file:text-blue-700 hover:file:bg-blue-100"
            disabled={loading}
          />
          {file && (
            <p className="text-sm text-gray-600">
              Arquivo selecionado: {file.name}
            </p>
          )}
        </div>

        <button 
          type="submit" 
          className={`px-4 py-2 rounded font-semibold text-white
                    ${loading 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-blue-500 hover:bg-blue-600'}`}
          disabled={loading}
        >
          {loading ? 'Enviando...' : 'Enviar Arquivo'}
        </button>

        {error && (
          <div className="p-3 bg-red-100 text-red-700 rounded">
            {error}
          </div>
        )}

        {success && (
          <div className="p-3 bg-green-100 text-green-700 rounded">
            {success}
          </div>
        )}
      </form>
    </div>
  );
}

export default FileUpload;