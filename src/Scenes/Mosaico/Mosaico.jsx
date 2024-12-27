import React, { useState } from "react";
import InitialPage from "../InitialPage/InitialPage";
import RecadoPage from "../RecadoPage/RecadoPage";
import MockData from '../../Mock/MockData.json';

const images = [
  "/Assets/001.jpg",
  "/Assets/002.jpg",
  "/Assets/003.jpg",
  "/Assets/004.jpg",
  "/Assets/005.jpg",
  "/Assets/006.jpg",
  "/Assets/007.jpg",
  "/Assets/008.jpg",
  "/Assets/009.jpg",
  "/Assets/010.jpg",
  "/Assets/011.jpg",
  "/Assets/012.jpg",
  "/Assets/013.jpg",
  "/Assets/014.jpg",
  "/Assets/015.jpg",
  "/Assets/016.jpg",
  "/Assets/017.jpg",
  "/Assets/018.jpg",
  "/Assets/019.jpg",
  "/Assets/020.jpg",
  "/Assets/021.jpg",
]

function Mosaico() {

  const [selectedData, setSelectedData] = useState(null);

  const handleCodeSubmit = (codigo) => {
    const result = MockData.find((item) => item.codigo === codigo);
    setSelectedData(result || null);
  };

  const handleBack = () => {
    setSelectedData(null); // Voltar para a página de busca
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black">
      {/* Contêiner de imagens com animação contínua */}
      <div className="absolute top-0 left-0 w-full flex flex-col animate-vertical-marquee">
        {/* Renderizando as imagens */}
        {Array.from({ length: Math.ceil(images.length / 3) }).map((_, groupIndex) => (
          <div key={groupIndex} className="flex justify-center space-x-0">
            {images.slice(groupIndex * 3, groupIndex * 3 + 3).map((src, index) => (
              <img
                key={`${groupIndex}-${index}`}
                src={src}
                alt={`Imagem ${groupIndex}-${index}`}
                className="object-cover w-full sm:w-1/3"
                style={{
                  height: "100vh", // Cada imagem ocupará 100% da altura da tela
                }}
              />
            ))}
          </div>
        ))}
        {/* Duplicando as imagens para criar o loop contínuo */}
        {Array.from({ length: Math.ceil(images.length / 3) }).map((_, groupIndex) => (
          <div key={`dup-${groupIndex}`} className="flex justify-center space-x-0">
            {images.slice(groupIndex * 3, groupIndex * 3 + 3).map((src, index) => (
              <img
                key={`dup-${groupIndex}-${index}`}
                src={src}
                alt={`Imagem duplicada ${groupIndex}-${index}`}
                className="object-cover w-full sm:w-1/3"
                style={{
                  height: "100vh", // Mantém a altura da imagem
                }}
              />
            ))}
          </div>
        ))}
      </div>

      {/* Conteúdo principal da página */}
      <div className="relative z-10 flex items-center justify-center h-full">
        {!selectedData ? (
          <InitialPage onSubmitCode={handleCodeSubmit} />
        ) : (
          <RecadoPage data={selectedData} onBack={handleBack}/>
        )}
      </div>
    </div>
  );
}

export default Mosaico;
