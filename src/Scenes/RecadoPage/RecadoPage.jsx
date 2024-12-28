import React from 'react';

const RecadoPage = ({ data, onBack }) => {
  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-lg text-gray-600">Informações não encontradas.</p>
      </div>
    );
  }

  const imagens = data.imagensPath ? (Array.isArray(data.imagensPath) ? data.imagensPath : [data.imagensPath]) : [];
  const videos = data.videosPath ? (Array.isArray(data.videosPath) ? data.videosPath : [data.videosPath]) : [];

  return (
    <div className="w-full max-w-sm sm:max-w-md md:max-w-lg p-4 sm:p-6 md:p-8 bg-white shadow-lg rounded-lg">
      <div className="w-full max-w-2xl p-6 sm:p-8 md:p-10 bg-white shadow-xl rounded-2xl relative max-h-[80vh] overflow-y-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-extrabold text-gray-800 mb-2">Recadinho</h1>
          <p>
            <span className="italic">Assinado por:</span>{' '}
            <strong className="font-semibold text-gray-800">{data.pessoa}</strong>
          </p>
        </div>

        {/* Primeira imagem, se houver mais de uma */}
        {imagens.length > 1 && (
          <div className="flex flex-col items-center mb-4">
            <img
              src={imagens[0]}
              alt="Imagem inicial"
              className="w-full max-w-md rounded-lg shadow-lg"
            />
          </div>
        )}

        {/* Corpo do conteúdo */}
        <div className="space-y-4">
          <p className="text-justify text-gray-700">
            {data.recado}
          </p>

          {/* Demais imagens, se houver mais de uma */}
          {imagens.length > 1 && (
            <div className="flex flex-col items-center mt-4">
              {imagens.slice(1).map((imagem, index) => (
                <img
                  key={index}
                  src={imagem}
                  alt={`Imagem relacionada ${index + 1}`}
                  className="w-full max-w-md rounded-lg shadow-lg mb-4"
                />
              ))}
            </div>
          )}

          {/* Uma única imagem no final */}
          {imagens.length === 1 && (
            <div className="flex flex-col items-center mt-4">
              <img
                src={imagens[0]}
                alt="Imagem relacionada"
                className="w-full max-w-md rounded-lg shadow-lg"
              />
            </div>
          )}

          {/* Todos os vídeos no final */}
          {videos.length > 0 && (
            <div className="flex flex-col items-center mt-4">
              {videos.map((video, index) => (
                <video
                  key={index}
                  controls
                  className="w-full max-w-md rounded-lg shadow-lg mb-4"
                >
                  <source src={video} type="video/mp4" />
                </video>
              ))}
            </div>
          )}
        </div>

        {/* Botão voltar */}
        <div className="mt-6">
          <button
            onClick={onBack}
            className="w-full py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition-all focus:ring-4 focus:ring-blue-300 focus:outline-none"
          >
            Voltar
          </button>
        </div>

        {/* Assinatura no rodapé */}
        <footer className="mt-8 border-t pt-4 text-center text-sm text-gray-500">
          <p className="text-gray-500">Código: {data.codigo}</p>
        </footer>
      </div>
    </div>
  );
};

export default RecadoPage;
