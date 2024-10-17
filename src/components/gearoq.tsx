'use client'

/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/VAmJFBILP86
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Rubik } from 'next/font/google'
import { Arimo } from 'next/font/google'

rubik({
  subsets: ['latin'],
  display: 'swap',
})

arimo({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"
// import { Button } from "@/components/ui/button"  // Comment this out if it's causing issues
import { FaRocket, FaCog, FaChartLine, FaMoneyBillWave, FaCheckCircle, FaLightbulb, FaDatabase, FaUserFriends } from 'react-icons/fa';
import Header from "../components/Header"
import { Footer } from "../components/Footer"

export function Gearoq() {
  return (
    <div className="bg-black text-foreground">
      <div className="container mx-auto px-6 md:px-8">
        <Header />
        <main>
          <section className="header-text py-16 md:py-24 flex items-center justify-center">
            <div className="container mx-auto px-8 md:px-12">
              <div className="text-center max-w-3xl mx-auto">
                <h1 className="title text-[3rem] font-bold bg-gradient-to-r from-[#ADD8E6] to-[#1E90FF] bg-clip-text text-transparent mb-4 leading-[1.5]">
                  Odkryj moc automatyzacji
                </h1>
                <p className="text-lg md:text-xl mb-8 text-white">
                  Wdrażam pomysły na automatyzację w biznesie i życiu codziennym. Oparte są na narzędziach AI oraz autorskich rozwiązaniach.
                </p>
                <Link href="/contact" passHref>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md">
                    Masz pomysł na automatyzację? Napisz do mnie!
                  </button>
                </Link>
              </div>
            </div>
          </section>
          <section className="py-12">
            <h2 className="section-heading">Zalety automatyzacji opartych na AI</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="service-card bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-lg shadow-lg transition-transform hover:scale-105">
                <div className="flex justify-center mb-4">
                  <FaRocket className="service-icon text-5xl text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center text-white">Szybka dostawa</h3>
                <p className="text-sm text-gray-300 text-center">
                  Wykonanie automatyzacji liczone jest w dniach a nie miesiącach. Oczywiście zależy to od złożoności projektu. Sprawdź case studies i zobacz
                  ile czasu zajmuje wykonanie konkretnego projektu.
                </p>
              </div>
              <div className="service-card bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-lg shadow-lg transition-transform hover:scale-105">
                <div className="flex justify-center mb-4">
                  <FaCog className="service-icon text-5xl text-green-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center text-white">Personalizacja</h3>
                <p className="text-sm text-gray-300 text-center">
                  Każdy biznes jest inny, a automatyzacja musi być dostosowana do specyfiki danego biznesu. 
                  Uniwersalne rozwiązania często nie spełniają unikalnych potrzeb różnych firm. 
                  Dlatego do każdego projektu trzeba podejść indywidualnie, analizując specyficzne wymagania i cele biznesowe.
                </p>
              </div>
              <div className="service-card bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-lg shadow-lg transition-transform hover:scale-105">
                <div className="flex justify-center mb-4">
                  <FaChartLine className="service-icon text-5xl text-yellow-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center text-white">Zwiększenie efektywności</h3>
                <p className="text-sm text-gray-300 text-center">
                  Automatyzacja oparta na AI pozwala firmom wykonywać zadania szybciej i bardziej precyzyjnie. Rutynowe procesy są realizowane bez przerw i błędów, co znacząco podnosi ogólną wydajność organizacji.
                </p>
              </div>
              <div className="service-card bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-lg shadow-lg transition-transform hover:scale-105">
                <div className="flex justify-center mb-4">
                  <FaMoneyBillWave className="service-icon text-5xl text-red-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center text-white">Redukcja kosztów</h3>
                <p className="text-sm text-gray-300 text-center">
                  Wdrażanie AI w procesach biznesowych pomaga obniżyć koszty operacyjne poprzez eliminację potrzeby ręcznego wykonywania wielu zadań, prowadząc do oszczędności finansowych.
                </p>
              </div>
              <div className="service-card bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-lg shadow-lg transition-transform hover:scale-105">
                <div className="flex justify-center mb-4">
                  <FaCheckCircle className="service-icon text-5xl text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center text-white">Dokładność</h3>
                <p className="text-sm text-gray-300 text-center">
                  Systemy oparte na AI charakteryzują się wysoką precyzją, co znacząco redukuje ryzyko popełniania błędów. Zapewnia to spójność w realizacji procesów i wyższą jakość produktów i usług.
                </p>
              </div>
              <div className="service-card bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-lg shadow-lg transition-transform hover:scale-105">
                <div className="flex justify-center mb-4">
                  <FaLightbulb className="service-icon text-5xl text-orange-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center text-white">Uwolnienie potencjału</h3>
                <p className="text-sm text-gray-300 text-center">
                  Automatyzacja rutynowych zadań pozwala pracownikom skupić się na bardziej złożonych i strategicznych działaniach, zwiększając innowacyjność i rozwój firmy.
                </p>
              </div>
              <div className="service-card bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-lg shadow-lg transition-transform hover:scale-105">
                <div className="flex justify-center mb-4">
                  <FaDatabase className="service-icon text-5xl text-indigo-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center text-white">Analiza danych</h3>
                <p className="text-sm text-gray-300 text-center">
                  AI umożliwia szybkie i efektywne przetwarzanie ogromnych ilości danych, co pozwala firmom na podejmowanie decyzji na podstawie dokładnych analiz i uzyskiwanie przewagi konkurencyjnej.
                </p>
              </div>
              <div className="service-card bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-lg shadow-lg transition-transform hover:scale-105">
                <div className="flex justify-center mb-4">
                  <FaUserFriends className="service-icon text-5xl text-pink-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center text-white">Lepsza obsługa klienta</h3>
                <p className="text-sm text-gray-300 text-center">
                  Automatyzacja z wykorzystaniem AI pozwala na bardziej efektywną i spersonalizowaną obsługę klienta, zwiększając satysfakcję i lojalność wobec marki.
                </p>
              </div>
            </div>
          </section>
          {/*<section className="py-16 md:py-24">*/}
          {/*  <div className="w-full lg:w-1/2 mb-6 lg:mb-0">*/}
          {/*    <h2 className="section-heading">Studia przypadków</h2>*/}
          {/*  </div>*/}
          {/*  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">*/}
          {/*    <div className="case-study-card bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-lg shadow-lg transition-transform hover:scale-105">*/}
          {/*      <img*/}
          {/*        className="case-study-image w-full h-48 object-cover rounded-lg mb-4"*/}
          {/*        src="path/to/your/image1.jpg"*/}
          {/*        alt="Studium przypadku 1"*/}
          {/*      />*/}
          {/*      <h3 className="text-xl font-semibold mb-2 text-white">Nazwa projektu 1</h3>*/}
          {/*      <p className="text-sm text-gray-300 mb-4">*/}
          {/*        Krótki opis projektu i jego rezultatów.*/}
          {/*      </p>*/}
          {/*      <a href="#" className="text-blue-400 hover:underline">Czytaj więcej</a>*/}
          {/*    </div>*/}
          {/*    <div className="case-study-card bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-lg shadow-lg transition-transform hover:scale-105">*/}
          {/*      <img*/}
          {/*        className="case-study-image w-full h-48 object-cover rounded-lg mb-4"*/}
          {/*        src="path/to/your/image2.jpg"*/}
          {/*        alt="Studium przypadku 2"*/}
          {/*      />*/}
          {/*      <h3 className="text-xl font-semibold mb-2 text-white">Nazwa projektu 2</h3>*/}
          {/*      <p className="text-sm text-gray-300 mb-4">*/}
          {/*        Krótki opis projektu i jego rezultatów.*/}
          {/*      </p>*/}
          {/*      <a href="#" className="text-blue-400 hover:underline">Czytaj więcej</a>*/}
          {/*    </div>*/}
          {/*    <div className="case-study-card bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-lg shadow-lg transition-transform hover:scale-105">*/}
          {/*      <img*/}
          {/*        className="case-study-image w-full h-48 object-cover rounded-lg mb-4"*/}
          {/*        src="path/to/your/image3.jpg"*/}
          {/*        alt="Studium przypadku 3"*/}
          {/*      />*/}
          {/*      <h3 className="text-xl font-semibold mb-2 text-white">Nazwa projektu 3</h3>*/}
          {/*      <p className="text-sm text-gray-300 mb-4">*/}
          {/*        Krótki opis projektu i jego rezultatów.*/}
          {/*      </p>*/}
          {/*      <a href="#" className="text-blue-400 hover:underline">Czytaj więcej</a>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</section>*/}
        </main>
        <Footer />
      </div>
    </div>
  )
}