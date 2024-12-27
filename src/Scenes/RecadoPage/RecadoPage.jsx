import React from 'react';

const RecadoPage = ({ data, onBack }) => {
  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-lg text-gray-600">Informações não encontradas.</p>
      </div>
    );
  }

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

        {/* Corpo do conteúdo */}
        <div className="space-y-4">
          <p className="text-justify text-gray-700">
            {data.recado}
          </p>

          {/* Imagem */}
          {data.imagensPath && (
            <div className="flex flex-col items-center">
              <img
                src={data.imagensPath}
                alt="Imagem relacionada"
                className="w-full max-w-md rounded-lg shadow-lg"
              />
            </div>
          )}

          {/* Vídeo */}
          {data.videosPath && (
            <div className="flex flex-col items-center mt-4">
              <video
                controls
                className="w-full max-w-md rounded-lg shadow-lg"
              >
                <source src={data.videosPath} type="video/mp4" />
              </video>
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
