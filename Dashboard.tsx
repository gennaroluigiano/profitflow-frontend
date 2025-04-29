import React, { useState } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, PointElement, LineElement } from 'chart.js';
import { Bar, Pie, Line } from 'react-chartjs-2';

// Registrazione dei componenti ChartJS necessari
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
);

const Dashboard: React.FC = () => {
  const [period, setPeriod] = useState('month');
  const [activeTab, setActiveTab] = useState('overview');

  // Dati di esempio per i grafici
  const barChartData = {
    labels: ['Gen', 'Feb', 'Mar', 'Apr', 'Mag', 'Giu'],
    datasets: [
      {
        label: 'Ricavi',
        data: [12000, 19000, 15000, 25000, 22000, 30000],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Spese',
        data: [8000, 12000, 10000, 15000, 14000, 18000],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  const pieChartData = {
    labels: ['Vendite', 'Marketing', 'Sviluppo', 'Amministrazione', 'Logistica'],
    datasets: [
      {
        data: [35, 20, 15, 10, 20],
        backgroundColor: [
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 99, 132, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const lineChartData = {
    labels: ['Gen', 'Feb', 'Mar', 'Apr', 'Mag', 'Giu'],
    datasets: [
      {
        label: 'Profitto',
        data: [4000, 7000, 5000, 10000, 8000, 12000],
        fill: false,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.1
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-6">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          
          {/* Filters and Period Selector */}
          <div className="flex flex-col justify-between mb-6 md:flex-row md:items-center">
            <div className="flex mb-4 space-x-4 md:mb-0">
              <button
                className={`px-4 py-2 text-sm font-medium rounded-md ${
                  activeTab === 'overview'
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setActiveTab('overview')}
              >
                Panoramica
              </button>
              <button
                className={`px-4 py-2 text-sm font-medium rounded-md ${
                  activeTab === 'finance'
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setActiveTab('finance')}
              >
                Finanze
              </button>
              <button
                className={`px-4 py-2 text-sm font-medium rounded-md ${
                  activeTab === 'sales'
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setActiveTab('sales')}
              >
                Vendite
              </button>
            </div>
            
            <div className="inline-flex p-1 bg-gray-100 rounded-md">
              <button
                className={`px-3 py-1 text-sm font-medium rounded-md ${
                  period === 'week' ? 'bg-white shadow' : 'text-gray-700'
                }`}
                onClick={() => setPeriod('week')}
              >
                Settimana
              </button>
              <button
                className={`px-3 py-1 text-sm font-medium rounded-md ${
                  period === 'month' ? 'bg-white shadow' : 'text-gray-700'
                }`}
                onClick={() => setPeriod('month')}
              >
                Mese
              </button>
              <button
                className={`px-3 py-1 text-sm font-medium rounded-md ${
                  period === 'year' ? 'bg-white shadow' : 'text-gray-700'
                }`}
                onClick={() => setPeriod('year')}
              >
                Anno
              </button>
            </div>
          </div>

          {/* KPI Cards */}
          <div className="grid grid-cols-1 gap-5 mb-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="p-5 bg-white rounded-lg shadow">
              <div className="flex items-center">
                <div className="flex-shrink-0 p-3 text-white bg-blue-600 rounded-md">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1 ml-4">
                  <p className="text-sm font-medium text-gray-500">Ricavi</p>
                  <p className="text-2xl font-semibold text-gray-900">€30,000</p>
                  <p className="text-sm text-green-600">+12.5% rispetto al mese scorso</p>
                </div>
              </div>
            </div>
            
            <div className="p-5 bg-white rounded-lg shadow">
              <div className="flex items-center">
                <div className="flex-shrink-0 p-3 text-white bg-red-600 rounded-md">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <div className="flex-1 ml-4">
                  <p className="text-sm font-medium text-gray-500">Spese</p>
                  <p className="text-2xl font-semibold text-gray-900">€18,000</p>
                  <p className="text-sm text-red-600">+5.3% rispetto al mese scorso</p>
                </div>
              </div>
            </div>
            
            <div className="p-5 bg-white rounded-lg shadow">
              <div className="flex items-center">
                <div className="flex-shrink-0 p-3 text-white bg-green-600 rounded-md">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div className="flex-1 ml-4">
                  <p className="text-sm font-medium text-gray-500">Profitto</p>
                  <p className="text-2xl font-semibold text-gray-900">€12,000</p>
                  <p className="text-sm text-green-600">+25.8% rispetto al mese scorso</p>
                </div>
              </div>
            </div>
            
            <div className="p-5 bg-white rounded-lg shadow">
              <div className="flex items-center">
                <div className="flex-shrink-0 p-3 text-white bg-purple-600 rounded-md">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="flex-1 ml-4">
                  <p className="text-sm font-medium text-gray-500">Clienti</p>
                  <p className="text-2xl font-semibold text-gray-900">245</p>
                  <p className="text-sm text-green-600">+8.2% rispetto al mese scorso</p>
                </div>
              </div>
            </div>
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            <div className="p-6 bg-white rounded-lg shadow">
              <h2 className="mb-4 text-lg font-medium text-gray-900">Ricavi vs Spese</h2>
              <div className="h-80">
                <Bar 
                  data={barChartData} 
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      legend: {
                        position: 'top' as const,
                      },
                    },
                  }} 
                />
              </div>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow">
              <h2 className="mb-4 text-lg font-medium text-gray-900">Distribuzione Spese</h2>
              <div className="h-80">
                <Pie 
                  data={pieChartData} 
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      legend: {
                        position: 'right' as const,
                      },
                    },
                  }} 
                />
              </div>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow lg:col-span-2">
              <h2 className="mb-4 text-lg font-medium text-gray-900">Andamento Profitto</h2>
              <div className="h-80">
                <Line 
                  data={lineChartData} 
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      legend: {
                        position: 'top' as const,
                      },
                    },
                  }} 
                />
              </div>
            </div>
          </div>

          {/* Recent Transactions */}
          <div className="mt-8">
            <div className="p-6 bg-white rounded-lg shadow">
              <h2 className="mb-4 text-lg font-medium text-gray-900">Transazioni Recenti</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                        Descrizione
                      </th>
                      <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                        Categoria
                      </th>
                      <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                        Data
                      </th>
                      <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                        Importo
                      </th>
                      <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                        Stato
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">Pagamento Fornitore XYZ</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">Spese</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">22/04/2025</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-red-600">-€2,500</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
                          Completato
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">Vendita Prodotto A</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">Ricavi</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">20/04/2025</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-green-600">+€4,200</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
                          Completato
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">Campagna Marketing</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">Marketing</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">18/04/2025</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-red-600">-€1,800</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
                          Completato
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">Vendita Servizio B</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">Ricavi</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">15/04/2025</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-green-600">+€3,500</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
                          Completato
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">Stipendi Dipendenti</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">Personale</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">10/04/2025</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-red-600">-€8,500</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
                          Completato
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
