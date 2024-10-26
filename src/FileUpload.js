import React, { useState } from 'react';

function FileUpload() {
  const [file, setFile] = useState(null);

  // Função para lidar com a seleção do arquivo
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile && selectedFile.type === 'text/plain') {
      setFile(selectedFile);
    } else {
      alert("Por favor, selecione um arquivo .txt");
      setFile(null);
    }
  };

  // Função para enviar o arquivo
  const handleSubmit = (event) => {
    event.preventDefault();
    if (file) {
      // Aqui você pode fazer o upload do arquivo
      console.log("Arquivo enviado:", file);
      // Resete o estado após o envio
      setFile(null);
    } else {
      alert("Nenhum arquivo selecionado!");
    }
  };

  return (
    <div>
        <h2 className='ml-[1rem]'>Add order</h2>
        <form onSubmit={handleSubmit}>
        <input
            type="file"
            accept=".txt"
            onChange={handleFileChange}
            className="mb-2 mx-[1rem]"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            Enviar Arquivo
        </button>
        </form>
    </div>
  );
}

export default FileUpload;
