import { FaGithub, FaExternalLinkAlt, FaPlayCircle, FaBox } from 'react-icons/fa';
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";

interface LinkItem {
  type: 'github' | 'demo' | 'docs' | 'product';
  url: string;
  label: string;
}

interface SectionLinks {
  [key: string]: LinkItem[];
}

const sectionLinks: SectionLinks = {
  'section1': [
    { type: 'github', url: 'https://github.com/yourusername/project', label: 'Zobacz kod' },
    { type: 'demo', url: '#', label: 'Zobacz demo' },
    { type: 'docs', url: '#', label: 'Dokumentacja' },
  ],
  'section2': [
    { type: 'github', url: '#', label: 'Repozytorium API' },
    { type: 'product', url: '#', label: 'Wersja live' },
    { type: 'docs', url: '#', label: 'Dokumentacja API' },
  ],
  'section3': [
    { type: 'demo', url: '#', label: 'Demo Social Media' },
    { type: 'product', url: '#', label: 'CV Analyzer' },
    { type: 'docs', url: '#', label: 'Dokumentacja techniczna' },
  ]
};

const getLinkIcon = (type: string) => {
  switch(type) {
    case 'github':
      return <FaGithub className="h-5 w-5" />;
    case 'demo':
      return <FaPlayCircle className="h-5 w-5" />;
    case 'docs':
      return <FaExternalLinkAlt className="h-5 w-5" />;
    case 'product':
      return <FaBox className="h-5 w-5" />;
    default:
      return <FaExternalLinkAlt className="h-5 w-5" />;
  }
};

const getLinkColor = (type: string) => {
  switch(type) {
    case 'github':
      return 'hover:text-purple-400';
    case 'demo':
      return 'hover:text-green-400';
    case 'docs':
      return 'hover:text-blue-400';
    case 'product':
      return 'hover:text-orange-400';
    default:
      return 'hover:text-blue-400';
  }
};

export default function Roadmap() {
  return (
    <div className="bg-black min-h-screen text-foreground">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-[#ADD8E6] to-[#1E90FF] bg-clip-text text-transparent mb-8">
            Roadmap dla Open Business Automations
          </h1>
          
          <p className="text-gray-300 mb-12 text-lg leading-relaxed">
            Projekt zakłada stworzenie otwartoźródłowej platformy automatyzującej procesy biznesowe przy wykorzystaniu AI, 
            z dedykowanymi modułami dla CRM, intranetu, commerce i innych zastosowań firmowych. Kolejne kroki będą opierać 
            się na stopniowej budowie funkcjonalności i estetyki, które umożliwią przyciągnięcie użytkowników oraz łatwiejsze 
            finansowanie rozwoju na dalszych etapach.
          </p>

          <div className="space-y-16">
            {/* Sekcja 1 */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-lg">
              <div className="flex items-start justify-between mb-6">
                <h2 className="text-2xl font-semibold text-blue-400">1. Strona główna projektu - gearoq.com (Landing Page)</h2>
                <div className="flex flex-col gap-2">
                  {sectionLinks['section1'].map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 text-gray-400 ${getLinkColor(link.type)} transition-colors duration-200`}
                    >
                      {getLinkIcon(link.type)}
                      <span>{link.label}</span>
                    </a>
                  ))}
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="pl-4 border-l-2 border-blue-500">
                  <h3 className="text-xl text-white mb-3">Budowa landing page'a</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Wykorzystać Next.js dla szybkiego ładowania i dobrych praktyk SEO</li>
                    <li>Skupić się na prostym, przejrzystym i nowoczesnym wyglądzie</li>
                    <li>Uwzględnić sekcje opisujące główne usługi</li>
                  </ul>
                </div>

                <div className="pl-4 border-l-2 border-blue-500">
                  <h3 className="text-xl text-white mb-3">Optymalizacja użytkownika</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Opracować intuicyjny układ</li>
                    <li>Dodać sekcję ofertową</li>
                    <li>Wprowadzić przyciski CTA</li>
                  </ul>
                </div>

                <div className="pl-4 border-l-2 border-blue-500">
                  <h3 className="text-xl text-white mb-3">Sekcja dla developerów</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Udostępnić zasoby oparte na ddev, Cursor i innych narzędziach</li>
                    <li>Zapewnić dokumentację i przykłady kodu</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Sekcja 2 */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-lg">
              <div className="flex items-start justify-between mb-6">
                <h2 className="text-2xl font-semibold text-blue-400">2. Główne API i Platforma - gearoq.pl (Drupal 11)</h2>
                <div className="flex flex-col gap-2">
                  {sectionLinks['section2'].map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 text-gray-400 ${getLinkColor(link.type)} transition-colors duration-200`}
                    >
                      {getLinkIcon(link.type)}
                      <span>{link.label}</span>
                    </a>
                  ))}
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="pl-4 border-l-2 border-blue-500">
                  <h3 className="text-xl text-white mb-3">Budowa głównej platformy i API</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Zaprojektować i wdrożyć bazową architekturę API</li>
                    <li>Stworzyć strukturę kontentu i logiki</li>
                  </ul>
                </div>

                <div className="pl-4 border-l-2 border-blue-500">
                  <h3 className="text-xl text-white mb-3">Projekt graficzny</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Skupić się na minimalizmie</li>
                    <li>Zaprojektować komponenty UI</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Sekcja 3 */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-lg">
              <div className="flex items-start justify-between mb-6">
                <h2 className="text-2xl font-semibold text-blue-400">3. Automatyzacje do wdrożenia jako MVP</h2>
                <div className="flex flex-col gap-2">
                  {sectionLinks['section3'].map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 text-gray-400 ${getLinkColor(link.type)} transition-colors duration-200`}
                    >
                      {getLinkIcon(link.type)}
                      <span>{link.label}</span>
                    </a>
                  ))}
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="pl-4 border-l-2 border-blue-500">
                  <h3 className="text-xl text-white mb-3">Automatyzacja social media</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Wdrożenie funkcji transkrypcji nagrań do postów</li>
                    <li>Integracja z wybranymi platformami społecznościowymi</li>
                  </ul>
                </div>

                <div className="pl-4 border-l-2 border-blue-500">
                  <h3 className="text-xl text-white mb-3">CV Analyzer</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Przygotowanie modułu analizy CV</li>
                    <li>Możliwość integracji z systemem CRM</li>
                  </ul>
                </div>

                <div className="pl-4 border-l-2 border-blue-500">
                  <h3 className="text-xl text-white mb-3">Generator leadów kontaktowych</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Implementacja formularza kontaktowego</li>
                    <li>Rozbudowa formularza o opcje automatycznego rozsyłania</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 