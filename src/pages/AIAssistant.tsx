import React, { useState, useRef, useEffect } from 'react';

const AIAssistant: React.FC = () => {
  const [messages, setMessages] = useState<Array<{text: string, sender: 'user' | 'ai', timestamp: Date}>>([
    {
      text: 'Ciao! Sono il tuo assistente virtuale ProfitFlow. Come posso aiutarti oggi?',
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll automatico quando arrivano nuovi messaggi
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Simulazione di risposta dell'AI
  const simulateAIResponse = (userMessage: string) => {
    setIsTyping(true);
    
    // Risposte predefinite basate su parole chiave nel messaggio dell'utente
    let aiResponse = '';
    const lowerCaseMessage = userMessage.toLowerCase();
    
    setTimeout(() => {
      if (lowerCaseMessage.includes('fatturato') || lowerCaseMessage.includes('vendite')) {
        aiResponse = 'Basandomi sui dati del tuo gestionale, il fatturato dell\'ultimo trimestre è aumentato del 12% rispetto allo stesso periodo dell\'anno scorso. Le categorie di prodotti con la crescita maggiore sono state Elettronica (+18%) e Abbigliamento (+15%).';
      } else if (lowerCaseMessage.includes('spese') || lowerCaseMessage.includes('costi')) {
        aiResponse = 'Le tue spese operative sono diminuite del 5% rispetto al trimestre precedente. Le aree con maggior risparmio sono state logistica (-8%) e marketing (-3%). Potrei suggerirti ulteriori ottimizzazioni se vuoi un\'analisi più dettagliata.';
      } else if (lowerCaseMessage.includes('magazzino') || lowerCaseMessage.includes('scorte')) {
        aiResponse = 'Attualmente hai 42 prodotti con scorte basse e 15 prodotti esauriti. Ti consiglio di riordinare soprattutto i prodotti della categoria Elettronica, che hanno un tasso di rotazione più elevato.';
      } else if (lowerCaseMessage.includes('clienti') || lowerCaseMessage.includes('customer')) {
        aiResponse = 'Hai acquisito 28 nuovi clienti nell\'ultimo mese, con un tasso di conversione del 3.5%. Il segmento B2B sta crescendo più rapidamente (+15%) rispetto al B2C (+8%).';
      } else if (lowerCaseMessage.includes('previsioni') || lowerCaseMessage.includes('forecast')) {
        aiResponse = 'In base ai trend attuali e alla stagionalità, prevedo un aumento delle vendite del 20% nel prossimo trimestre. Ti suggerisco di aumentare le scorte dei prodotti più venduti e pianificare una campagna marketing mirata.';
      } else {
        aiResponse = 'Capisco la tua richiesta. Posso aiutarti con analisi di fatturato, spese, gestione magazzino, informazioni sui clienti e previsioni di business. Puoi specificare meglio cosa ti serve?';
      }
      
      setMessages(prev => [...prev, {
        text: aiResponse,
        sender: 'ai',
        timestamp: new Date()
      }]);
      
      setIsTyping(false);
    }, 1500); // Simula il tempo di risposta dell'AI
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (inputMessage.trim() === '') return;
    
    // Aggiungi il messaggio dell'utente
    const newUserMessage = {
      text: inputMessage,
      sender: 'user' as const,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, newUserMessage]);
    setInputMessage('');
    
    // Simula la risposta dell'AI
    simulateAIResponse(inputMessage);
  };

  // Formatta la data per i timestamp dei messaggi
  const formatTimestamp = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Assistente AI</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-6">
        <div className="px-4 mx-auto max-w-3xl">
          <div className="flex flex-col h-[calc(100vh-200px)] bg-white rounded-lg shadow">
            {/* Chat Header */}
            <div className="flex items-center p-4 border-b">
              <div className="flex items-center justify-center w-10 h-10 mr-3 text-white bg-blue-600 rounded-full">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h2 className="text-lg font-semibold">Assistente ProfitFlow</h2>
                <p className="text-sm text-gray-500">Powered by GPT-4-turbo</p>
              </div>
            </div>
            
            {/* Messages Container */}
            <div className="flex-1 p-4 overflow-y-auto">
              {messages.map((message, index) => (
                <div 
                  key={index} 
                  className={`mb-4 ${message.sender === 'user' ? 'text-right' : ''}`}
                >
                  <div 
                    className={`inline-block max-w-xs sm:max-w-md px-4 py-2 rounded-lg ${
                      message.sender === 'user' 
                        ? 'bg-blue-600 text-white rounded-br-none' 
                        : 'bg-gray-200 text-gray-800 rounded-bl-none'
                    }`}
                  >
                    <p>{message.text}</p>
                    <p className={`text-xs mt-1 ${message.sender === 'user' ? 'text-blue-200' : 'text-gray-500'}`}>
                      {formatTimestamp(message.timestamp)}
                    </p>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="mb-4">
                  <div className="inline-block px-4 py-2 bg-gray-200 rounded-lg rounded-bl-none">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>
            
            {/* Input Form */}
            <form onSubmit={handleSendMessage} className="flex items-center p-4 border-t">
              <input
                type="text"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Scrivi un messaggio..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
              />
              <button
                type="submit"
                className="px-4 py-2 text-white bg-blue-600 rounded-r-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </form>
          </div>
          
          {/* AI Features */}
          <div className="grid grid-cols-1 gap-4 mt-6 sm:grid-cols-2">
            <div className="p-4 bg-white rounded-lg shadow">
              <h3 className="mb-2 text-lg font-medium text-gray-900">Analisi Dati</h3>
              <p className="text-sm text-gray-600">
                L'assistente può analizzare i tuoi dati aziendali e fornirti insights utili per migliorare le performance.
              </p>
            </div>
            
            <div className="p-4 bg-white rounded-lg shadow">
              <h3 className="mb-2 text-lg font-medium text-gray-900">Previsioni</h3>
              <p className="text-sm text-gray-600">
                Ottieni previsioni basate sui trend storici e sulla stagionalità per pianificare meglio il tuo business.
              </p>
            </div>
            
            <div className="p-4 bg-white rounded-lg shadow">
              <h3 className="mb-2 text-lg font-medium text-gray-900">Suggerimenti</h3>
              <p className="text-sm text-gray-600">
                Ricevi consigli personalizzati per ottimizzare costi, aumentare le vendite e migliorare l'efficienza.
              </p>
            </div>
            
            <div className="p-4 bg-white rounded-lg shadow">
              <h3 className="mb-2 text-lg font-medium text-gray-900">Memoria Conversazioni</h3>
              <p className="text-sm text-gray-600">
                L'assistente ricorda le conversazioni precedenti per fornirti un supporto sempre più personalizzato.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AIAssistant;
