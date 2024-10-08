'use client'

import Header from "@/components/Header"
import { Footer } from "@/components/Footer"

export default function AboutPage() {
  return (
    <div className="bg-black text-white">
      <div className="container mx-auto px-6 md:px-8">
        <Header />

        <main className="flex-grow">
          <section className="header-text py-16 pb-8 md:py-24 md:pb-12 flex items-center justify-center">
            <div className="container mx-auto px-8 md:px-12">
              <div className="text-center max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#ADD8E6] to-[#1E90FF] bg-clip-text text-transparent mb-4">
                  O mnie
                </h1>
              </div>
            </div>
          </section>
          <section className="py-12">
            <div className="container mx-auto px-6 md:px-8 max-w-3xl">
              <p className="mb-4">
                Witaj! Jestem doświadczonym programistą z ponad 10-letnim stażem w branży IT. Moja przygoda z programowaniem rozpoczęła się od PHP i systemu Drupal, gdzie zdobyłem solidne podstawy w tworzeniu zaawansowanych aplikacji internetowych.
              </p>
              <p className="mb-4">
                Przez lata specjalizowałem się w rozwoju i utrzymaniu złożonych projektów opartych na Drupalu, tworząc niestandardowe moduły, optymalizując wydajność i zapewniając najwyższą jakość kodu. Moje doświadczenie w PHP pozwoliło mi na tworzenie skalowalnych i bezpiecznych rozwiązań dla różnorodnych klientów.
              </p>
              <p className="mb-4">
                Obecnie, oprócz kontynuowania pracy z technologiami webowymi, jestem pasjonatem sztucznej inteligencji i automatyzacji. Fascynuje mnie potencjał AI w rewolucjonizowaniu procesów biznesowych i tworzeniu innowacyjnych rozwiązań. Aktywnie eksploruję nowe narzędzia i frameworki związane z AI, dążąc do integracji tych technologii w praktycznych zastosowaniach.
              </p>
              <p>
                Moja misja to łączenie tradycyjnego programowania z nowoczesnymi technologiami AI, aby tworzyć inteligentne, efektywne i przyszłościowe rozwiązania. Jestem zawsze otwarty na nowe wyzwania i możliwości współpracy w projektach, które wykorzystują moje doświadczenie w rozwoju oprogramowania oraz pasję do AI i automatyzacji.
              </p>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  )
}