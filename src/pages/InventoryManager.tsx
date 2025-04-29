import React, { useState } from 'react';

const InventoryManager: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  
  // Dati di esempio per i prodotti in magazzino
  const products = [
    { id: 1, name: 'Prodotto A', category: 'Elettronica', businessType: 'B2B', quantity: 150, status: 'In stock' },
    { id: 2, name: 'Prodotto B', category: 'Abbigliamento', businessType: 'B2C', quantity: 75, status: 'In stock' },
    { id: 3, name: 'Prodotto C', category: 'Alimentari', businessType: 'D2C', quantity: 30, status: 'Basso' },
    { id: 4, name: 'Prodotto D', category: 'Elettronica', businessType: 'B2B', quantity: 0, status: 'Esaurito' },
    { id: 5, name: 'Prodotto E', category: 'Arredamento', businessType: 'B2G', quantity: 12, status: 'Basso' },
  ];
  
  // Filtraggio prodotti in base alla tab attiva e al termine di ricerca
  const filteredProducts = products.filter(product => {
    const matchesTab = activeTab === 'all' || 
                      (activeTab === 'low' && product.status === 'Basso') ||
                      (activeTab === 'out' && product.status === 'Esaurito') ||
                      product.category.toLowerCase() === activeTab;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Gestione Magazzino</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-6">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          
          {/* Search and Add */}
          <div className="flex flex-col justify-between mb-6 md:flex-row md:items-center">
            <div className="relative mb-4 md:mb-0">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                className="block w-full py-2 pl-10 pr-3 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Cerca prodotti..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <button
              className="flex items-center px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
              onClick={() => setShowAddModal(true)}
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Aggiungi Prodotto
            </button>
          </div>
          
          {/* Inventory Stats */}
          <div className="grid grid-cols-1 gap-5 mb-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="p-5 bg-white rounded-lg shadow">
              <div className="flex items-center">
                <div className="flex-shrink-0 p-3 text-white bg-blue-600 rounded-md">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <div className="flex-1 ml-4">
                  <p className="text-sm font-medium text-gray-500">Totale Prodotti</p>
                  <p className="text-2xl font-semibold text-gray-900">267</p>
                </div>
              </div>
            </div>
            
            <div className="p-5 bg-white rounded-lg shadow">
              <div className="flex items-center">
                <div className="flex-shrink-0 p-3 text-white bg-green-600 rounded-md">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="flex-1 ml-4">
                  <p className="text-sm font-medium text-gray-500">In Stock</p>
                  <p className="text-2xl font-semibold text-gray-900">225</p>
                </div>
              </div>
            </div>
            
            <div className="p-5 bg-white rounded-lg shadow">
              <div className="flex items-center">
                <div className="flex-shrink-0 p-3 text-white bg-yellow-500 rounded-md">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div className="flex-1 ml-4">
                  <p className="text-sm font-medium text-gray-500">Scorta Bassa</p>
                  <p className="text-2xl font-semibold text-gray-900">42</p>
                </div>
              </div>
            </div>
            
            <div className="p-5 bg-white rounded-lg shadow">
              <div className="flex items-center">
                <div className="flex-shrink-0 p-3 text-white bg-red-600 rounded-md">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <div className="flex-1 ml-4">
                  <p className="text-sm font-medium text-gray-500">Esauriti</p>
                  <p className="text-2xl font-semibold text-gray-900">15</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Inventory Tabs */}
          <div className="mb-6 border-b border-gray-200">
            <nav className="flex -mb-px space-x-8">
              <button
                className={`py-4 text-sm font-medium border-b-2 ${
                  activeTab === 'all'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
                onClick={() => setActiveTab('all')}
              >
                Tutti
              </button>
              <button
                className={`py-4 text-sm font-medium border-b-2 ${
                  activeTab === 'low'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
                onClick={() => setActiveTab('low')}
              >
                Scorta Bassa
              </button>
              <button
                className={`py-4 text-sm font-medium border-b-2 ${
                  activeTab === 'out'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
                onClick={() => setActiveTab('out')}
              >
                Esauriti
              </button>
              <button
                className={`py-4 text-sm font-medium border-b-2 ${
                  activeTab === 'elettronica'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
                onClick={() => setActiveTab('elettronica')}
              >
                Elettronica
              </button>
              <button
                className={`py-4 text-sm font-medium border-b-2 ${
                  activeTab === 'abbigliamento'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
                onClick={() => setActiveTab('abbigliamento')}
              >
                Abbigliamento
              </button>
            </nav>
          </div>
          
          {/* Product List */}
          <div className="overflow-hidden bg-white shadow sm:rounded-md">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                    Prodotto
                  </th>
                  <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                    Categoria
                  </th>
                  <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                    Tipo Business
                  </th>
                  <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                    Quantità
                  </th>
                  <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                    Stato
                  </th>
                  <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                    Azioni
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => (
                    <tr key={product.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{product.name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{product.category}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{product.businessType}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{product.quantity}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 text-xs font-semibold leading-5 rounded-full ${
                          product.status === 'In stock' 
                            ? 'text-green-800 bg-green-100' 
                            : product.status === 'Basso' 
                              ? 'text-yellow-800 bg-yellow-100' 
                              : 'text-red-800 bg-red-100'
                        }`}>
                          {product.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex space-x-2">
                          <button className="p-1 text-blue-600 hover:text-blue-900">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                            </svg>
                          </button>
                          <button className="p-1 text-red-600 hover:text-red-900">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="px-6 py-4 text-center text-sm text-gray-500">
                      Nessun prodotto trovato.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          
          {/* Quick Actions */}
          <div className="grid grid-cols-1 gap-5 mt-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="p-5 bg-white rounded-lg shadow">
              <h3 className="mb-2 text-lg font-medium text-gray-900">Spedizione</h3>
              <p className="mb-4 text-sm text-gray-600">Gestisci le spedizioni in uscita e traccia lo stato delle consegne.</p>
              <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-blue-700 bg-blue-100 rounded-md hover:bg-blue-200">
                Gestisci Spedizioni
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            
            <div className="p-5 bg-white rounded-lg shadow">
              <h3 className="mb-2 text-lg font-medium text-gray-900">Ricezione</h3>
              <p className="mb-4 text-sm text-gray-600">Registra nuovi arrivi e aggiorna le quantità in magazzino.</p>
              <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-blue-700 bg-blue-100 rounded-md hover:bg-blue-200">
                Registra Arrivi
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            
            <div className="p-5 bg-white rounded-lg shadow">
              <h3 className="mb-2 text-lg font-medium text-gray-900">E-commerce</h3>
              <p className="mb-4 text-sm text-gray-600">Sincronizza il magazzino con il tuo negozio online.</p>
              <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-blue-700 bg-blue-100 rounded-md hover:bg-blue-200">
                Sincronizza
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            
            <div className="p-5 bg-white rounded-lg shadow">
              <h3 className="mb-2 text-lg font-medium text-gray-900">Riassortimento</h3>
              <p className="mb-4 text-sm text-gray-600">Genera ordini automatici per i prodotti in esaurimento.</p>
              <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-blue-700 bg-blue-100 rounded-md hover:bg-blue-200">
                Genera Ordini
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Add Product Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

            <div className="inline-block overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto bg-blue-100 rounded-full sm:mx-0 sm:h-10 sm:w-10">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">Aggiungi Prodotto</h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Inserisci i dettagli del nuovo prodotto da aggiungere al magazzino.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 space-y-4">
                  <div>
                    <label htmlFor="product-name" className="block text-sm font-medium text-gray-700">
                      Nome Prodotto
                    </label>
                    <input
                      type="text"
                      id="product-name"
                      className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="product-category" className="block text-sm font-medium text-gray-700">
                      Categoria
                    </label>
                    <select
                      id="product-category"
                      className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    >
                      <option value="elettronica">Elettronica</option>
                      <option value="abbigliamento">Abbigliamento</option>
                      <option value="alimentari">Alimentari</option>
                      <option value="arredamento">Arredamento</option>
                      <option value="altro">Altro</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="business-type" className="block text-sm font-medium text-gray-700">
                      Tipo Business
                    </label>
                    <select
                      id="business-type"
                      className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    >
                      <option value="B2B">B2B</option>
                      <option value="B2C">B2C</option>
                      <option value="D2C">D2C</option>
                      <option value="B2G">B2G</option>
                      <option value="B2E">B2E</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="product-quantity" className="block text-sm font-medium text-gray-700">
                      Quantità
                    </label>
                    <input
                      type="number"
                      id="product-quantity"
                      min="0"
                      className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Aggiungi
                </button>
                <button
                  type="button"
                  className="inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setShowAddModal(false)}
                >
                  Annulla
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InventoryManager;
