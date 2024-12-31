import React, { useState } from "react";
import InitialPage from "../InitialPage/InitialPage";
import RecadoPage from "../RecadoPage/RecadoPage";
import MockData from '../../Mock/MockData.json';

const images = [
  "/Assets/01.jpg",
  "/Assets/02.jpg",
  "/Assets/03.jpg",
  "/Assets/04.jpg",
  "/Assets/05.jpg",
  "/Assets/06.jpg",
  "/Assets/07.jpg",
  "/Assets/08.jpg",
  "/Assets/09.jpg",
  "/Assets/10.jpg",
  "/Assets/11.jpg",
  "/Assets/12.jpg",
  "/Assets/13.jpg",
  "/Assets/14.jpg",
  "/Assets/15.jpg",
  "/Assets/16.jpg",
  "/Assets/17.jpg",
  "/Assets/18.jpg",
  "/Assets/19.jpg",
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
                  height: "80vh", // Cada imagem ocupará 100% da altura da tela
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
