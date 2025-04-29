import React, { useState } from 'react';

const DocumentManager: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showUploadModal, setShowUploadModal] = useState(false);
  
  // Dati di esempio per i documenti
  const documents = [
    { id: 1, name: 'Fattura-2025-001.pdf', type: 'fattura', date: '15/04/2025', size: '1.2 MB' },
    { id: 2, name: 'Preventivo-Cliente-XYZ.pdf', type: 'preventivo', date: '10/04/2025', size: '0.8 MB' },
    { id: 3, name: 'Bolla-Consegna-123.pdf', type: 'bolla', date: '05/04/2025', size: '0.5 MB' },
    { id: 4, name: 'Ricevuta-Pagamento-456.pdf', type: 'ricevuta', date: '01/04/2025', size: '0.3 MB' },
    { id: 5, name: 'Report-Trimestrale-Q1.pdf', type: 'report', date: '31/03/2025', size: '2.5 MB' },
  ];
  
  // Filtraggio documenti in base alla tab attiva e al termine di ricerca
  const filteredDocuments = documents.filter(doc => {
    const matchesTab = activeTab === 'all' || doc.type === activeTab;
    const matchesSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Gestione Documenti</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-6">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          
          {/* Search and Upload */}
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
                placeholder="Cerca documenti..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <button
              className="flex items-center px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
              onClick={() => setShowUploadModal(true)}
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Carica Documento
            </button>
          </div>
          
          {/* Document Tabs */}
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
                  activeTab === 'fattura'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
                onClick={() => setActiveTab('fattura')}
              >
                Fatture
              </button>
              <button
                className={`py-4 text-sm font-medium border-b-2 ${
                  activeTab === 'preventivo'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
                onClick={() => setActiveTab('preventivo')}
              >
                Preventivi
              </button>
              <button
                className={`py-4 text-sm font-medium border-b-2 ${
                  activeTab === 'bolla'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
                onClick={() => setActiveTab('bolla')}
              >
                Bolle
              </button>
              <button
                className={`py-4 text-sm font-medium border-b-2 ${
                  activeTab === 'report'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
                onClick={() => setActiveTab('report')}
              >
                Report
              </button>
            </nav>
          </div>
          
          {/* Document List */}
          <div className="overflow-hidden bg-white shadow sm:rounded-md">
            <ul className="divide-y divide-gray-200">
              {filteredDocuments.length > 0 ? (
                filteredDocuments.map((document) => (
                  <li key={document.id}>
                    <div className="block hover:bg-gray-50">
                      <div className="flex items-center px-4 py-4 sm:px-6">
                        <div className="flex items-center flex-1 min-w-0">
                          <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-white bg-blue-600 rounded-md">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                          </div>
                          <div className="flex-1 min-w-0 px-4">
                            <div>
                              <p className="text-sm font-medium text-blue-600 truncate">{document.name}</p>
                              <p className="flex mt-1 text-sm text-gray-500">
                                <span className="capitalize">{document.type}</span>
                                <span className="mx-1">•</span>
                                <span>{document.date}</span>
                                <span className="mx-1">•</span>
                                <span>{document.size}</span>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="flex space-x-2">
                            <button className="p-2 text-gray-500 rounded-full hover:bg-gray-100">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                              </svg>
                            </button>
                            <button className="p-2 text-gray-500 rounded-full hover:bg-gray-100">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                              </svg>
                            </button>
                            <button className="p-2 text-gray-500 rounded-full hover:bg-gray-100">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))
              ) : (
                <li className="px-4 py-6 text-center text-gray-500">
                  Nessun documento trovato.
                </li>
              )}
            </ul>
          </div>
        </div>
      </main>

      {/* Upload Modal */}
      {showUploadModal && (
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0l-4 4m4-4v12" />
                    </svg>
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">Carica Documento</h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Seleziona un file dal tuo computer per caricarlo nel sistema.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4">
                  <div className="flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                      <svg className="w-12 h-12 mx-auto text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <div className="flex text-sm text-gray-600">
                        <label htmlFor="file-upload" className="relative font-medium text-blue-600 bg-white rounded-md cursor-pointer hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
                          <span>Carica un file</span>
                          <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                        </label>
                        <p className="pl-1">o trascina e rilascia</p>
                      </div>
                      <p className="text-xs text-gray-500">
                        PDF, DOC, DOCX, XLS, XLSX fino a 10MB
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4">
                  <label htmlFor="document-type" className="block text-sm font-medium text-gray-700">
                    Tipo di documento
                  </label>
                  <select
                    id="document-type"
                    name="document-type"
                    className="block w-full py-2 pl-3 pr-10 mt-1 text-base border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  >
                    <option value="fattura">Fattura</option>
                    <option value="preventivo">Preventivo</option>
                    <option value="bolla">Bolla</option>
                    <option value="ricevuta">Ricevuta</option>
                    <option value="report">Report</option>
                  </select>
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Carica
                </button>
                <button
                  type="button"
                  className="inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setShowUploadModal(false)}
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

export default DocumentManager;
