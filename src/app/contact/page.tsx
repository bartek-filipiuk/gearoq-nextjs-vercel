import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FaXTwitter, FaYoutube } from 'react-icons/fa6';
import dynamic from 'next/dynamic'

const ContactForm = dynamic(() => import('@/components/ContactForm'), { ssr: false })

export default function ContactPage() {
  return (
    <div className="dark:bg-muted dark:text-foreground bg-black">
      <div className="container mx-auto px-6 md:px-8">
        <header className="py-8 md:py-10">
          <div className="container mx-auto flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-4 text-white hover:opacity-75 transition-opacity"
              prefetch={false}
            >
              <img src="/auto.svg" alt="GEAROQ Logo" className="h-12 w-12" />
              <span className="text-3xl font-semibold text-white">GEAROQ</span>
            </Link>
            <div className="flex items-center gap-8">
              <Link href="#" className="text-xl font-medium text-white hover:underline" prefetch={false}>
                O nas
              </Link>
              <Link href="https://twitter.com/youraccount" className="text-white hover:text-blue-400" target="_blank" rel="noopener noreferrer">
                <FaXTwitter className="h-8 w-8" />
              </Link>
              <Link href="https://youtube.com/yourchannel" className="text-white hover:text-red-600" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="h-8 w-8" />
              </Link>
              <Link href="/contact" passHref>
                <Button className="bg-blue-500 hover:bg-blue-600 text-white text-xl py-3 px-8">Napisz do mnie</Button>
              </Link>
            </div>
          </div>
        </header>

        <main className="flex-grow">
          <section className="header-text py-16 pb-8 md:py-24 md:pb-12 flex items-center justify-center">
            <div className="container mx-auto px-8 md:px-12">
              <div className="text-center max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#ADD8E6] to-[#1E90FF] bg-clip-text text-transparent mb-4">
                  Skontaktuj się
                </h1>
              </div>
            </div>
          </section>
          <section className="py-12">
            <div className="container mx-auto px-6 md:px-8">
              <ContactForm />
            </div>
          </section>
        </main>

        <footer className="py-8 md:py-12">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <img src="/auto.svg" alt="GEAROQ Logo" className="h-6 w-6" />
              <span className="text-lg font-semibold text-white">GEAROQ</span>
            </div>
            <nav className="flex items-center gap-4">
              <Link href="#" className="text-sm font-medium text-white hover:underline" prefetch={false}>
                O nas
              </Link>
              <Link href="#" className="text-sm font-medium text-white hover:underline" prefetch={false}>
                Kontakt
              </Link>
            </nav>
          </div>
        </footer>
      </div>
    </div>
  )
}