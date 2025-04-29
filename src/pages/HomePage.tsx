import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('features');
  
  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="bg-white shadow-sm">
        <div className="container flex items-center justify-between px-4 py-4 mx-auto">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-600">ProfitFlow</h1>
          </div>
          <nav className="hidden space-x-8 md:flex">
            <a href="#features" className="text-gray-700 hover:text-blue-600">Funzionalità</a>
            <a href="#pricing" className="text-gray-700 hover:text-blue-600">Prezzi</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600">Chi siamo</a>
          </nav>
          <div className="flex space-x-4">
            <Link to="/login" className="px-4 py-2 text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50">
              Accedi
            </Link>
            <Link to="/register" className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700">
              Registrati
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col items-center max-w-4xl mx-auto text-center">
            <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
              Gestione aziendale semplificata per le PMI italiane
            </h2>
            <p className="mb-10 text-xl text-gray-600">
              ProfitFlow integra i software gestionali più usati in Italia per offrirti dashboard interattive, 
              gestione documenti e un assistente AI per la tua azienda.
            </p>
            <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-6">
              <Link to="/register" className="px-8 py-3 text-lg font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">
                Prova gratuita di 30 giorni
              </Link>
              <a href="#features" className="px-8 py-3 text-lg font-medium text-blue-600 bg-white border border-blue-600 rounded-md hover:bg-blue-50">
                Scopri di più
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container px-4 mx-auto">
          <h2 className="mb-12 text-3xl font-bold text-center text-gray-900">Funzionalità principali</h2>
          
          <div className="flex mb-8 border-b">
            <button 
              className={`px-4 py-2 mr-4 ${activeTab === 'features' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500'}`}
              onClick={() => setActiveTab('features')}
            >
              Panoramica
            </button>
            <button 
              className={`px-4 py-2 mr-4 ${activeTab === 'integration' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500'}`}
              onClick={() => setActiveTab('integration')}
            >
              Integrazione Software
            </button>
            <button 
              className={`px-4 py-2 mr-4 ${activeTab === 'dashboard' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500'}`}
              onClick={() => setActiveTab('dashboard')}
            >
              Dashboard
            </button>
            <button 
              className={`px-4 py-2 mr-4 ${activeTab === 'ai' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500'}`}
              onClick={() => setActiveTab('ai')}
            >
              AI Integrata
            </button>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center justify-center w-12 h-12 mb-4 text-white bg-blue-600 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold">Integrazione Software</h3>
              <p className="text-gray-600">
                Collegamento con Zucchetti, Arco e altri gestionali per importazione automatica e sincronizzazione in tempo reale dei dati aziendali.
              </p>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center justify-center w-12 h-12 mb-4 text-white bg-blue-600 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold">Dashboard & Visualizzazione</h3>
              <p className="text-gray-600">
                Grafici interattivi e indicatori chiave per monitorare ricavi, spese, marketing, investimenti e utili/perdite della tua azienda.
              </p>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center justify-center w-12 h-12 mb-4 text-white bg-blue-600 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold">Gestione Documenti</h3>
              <p className="text-gray-600">
                Caricamento e archiviazione permanente di fatture, bolle, ricevute, preventivi e report, con accesso anche dopo il logout.
              </p>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center justify-center w-12 h-12 mb-4 text-white bg-blue-600 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold">Gestione Magazzino</h3>
              <p className="text-gray-600">
                Sistema per tracciare disponibilità merce, classificazione per categoria e tipo di business, con funzioni per spedizione e stoccaggio.
              </p>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center justify-center w-12 h-12 mb-4 text-white bg-blue-600 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold">AI Integrata</h3>
              <p className="text-gray-600">
                Chat AI basata su GPT-4-turbo che risponde in modo umano e professionale alle tue domande, con memoria delle conversazioni.
              </p>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center justify-center w-12 h-12 mb-4 text-white bg-blue-600 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold">Account Utente</h3>
              <p className="text-gray-600">
                Area personale personalizzabile con salvataggio persistente, sezione impostazioni editabile e accesso tramite login con opzione "ricordami".
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="container px-4 mx-auto">
          <h2 className="mb-12 text-3xl font-bold text-center text-gray-900">Piani di abbonamento</h2>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:max-w-4xl lg:mx-auto">
            <div className="flex flex-col p-8 bg-white rounded-lg shadow-md">
              <h3 className="mb-4 text-2xl font-bold text-gray-900">Premium</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">€79</span>
                <span className="text-gray-600">/mese</span>
              </div>
              <p className="mb-6 text-gray-600">Funzionalità base per la gestione della tua azienda.</p>
              <ul className="mb-8 space-y-3">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Integrazione con software gestionali
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Dashboard e visualizzazione dati
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Gestione documenti
                </li>
                <li className="flex items-center text-gray-400">
                  <svg className="w-5 h-5 mr-2 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                  AI Integrata
                </li>
                <li className="flex items-center text-gray-400">
                  <svg className="w-5 h-5 mr-2 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                  Accesso multi-dispositivo limitato
                </li>
              </ul>
              <div className="mt-auto">
                <Link to="/register" className="block w-full py-3 text-center text-white bg-blue-600 rounded-md hover:bg-blue-700">
                  Inizia la prova gratuita
                </Link>
              </div>
            </div>
            
            <div className="flex flex-col p-8 bg-white rounded-lg shadow-md border-2 border-blue-600">
              <div className="px-3 py-1 mb-4 text-sm font-semibold text-white bg-blue-600 rounded-full w-fit">Consigliato</div>
              <h3 className="mb-4 text-2xl font-bold text-gray-900">Élite</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">€149</span>
                <span className="text-gray-600">/mese</span>
              </div>
              <p className="mb-6 text-gray-600">Tutte le funzionalità incluse per un'esperienza completa.</p>
              <ul className="mb-8 space-y-3">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Integrazione con software gestionali
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Dashboard e visualizzazione dati avanzata
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Gestione documenti illimitata
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  AI Integrata con GPT-4-turbo
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Accesso multi-dispositivo illimitato
                </li>
              </ul>
              <div className="mt-auto">
                <Link to="/register" className="block w-full py-3 text-center text-white bg-blue-600 rounded-md hover:bg-blue-700">
                  Inizia la prova gratuita
                </Link>
              </div>
            </div>
          </div>
          
          <div className="max-w-2xl p-6 mx-auto mt-12 text-center bg-white rounded-lg shadow-md">
            <h3 className="mb-4 text-xl font-semibold">Sconti disponibili</h3>
            <p className="text-gray-600">
              Risparmia il 10% con abbonamento semestrale o il 20% con abbonamento annuale.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-800">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div>
              <h3 className="mb-4 text-lg font-semibold text-white">ProfitFlow</h3>
              <p className="text-gray-400">
                Piattaforma SaaS per la gestione aziendale delle PMI italiane.
              </p>
            </div>
            
            <div>
              <h4 className="mb-4 text-lg font-semibold text-white">Prodotto</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#features" className="hover:text-white">Funzionalità</a></li>
                <li><a href="#pricing" className="hover:text-white">Prezzi</a></li>
                <li><a href="#" className="hover:text-white">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="mb-4 text-lg font-semibold text-white">Azienda</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Chi siamo</a></li>
                <li><a href="#" className="hover:text-white">Contatti</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="mb-4 text-lg font-semibold text-white">Legale</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Termini di servizio</a></li>
                <li><a href="#" className="hover:text-white">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 mt-8 text-center text-gray-400 border-t border-gray-700">
            <p>&copy; {new Date().getFullYear()} ProfitFlow. Tutti i diritti riservati.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
