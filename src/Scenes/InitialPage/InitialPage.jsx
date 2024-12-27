import { useState } from 'react';
import './InitialPage.css'

const InitialPage = ({onSubmitCode}) => {
  const [codigo, setCodigo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitCode(codigo);
  };


  return (
      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg p-4 sm:p-6 md:p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-gray-800 mb-4 sm:mb-6">
          Gih, Digita o código aqui
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="codigo"
              className="block text-sm sm:text-base font-medium text-gray-700"
            >
              São só 5 dígitos ein!!
            </label>
            <input
              type="text"
              value={codigo}
              onChange={(e) => setCodigo(e.target.value)}
              id="codigo"
              name="codigo"
              maxLength="5"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Digite o código"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Receber cartinha
          </button>
        </form>
      </div>
  );
}

export default InitialPage;