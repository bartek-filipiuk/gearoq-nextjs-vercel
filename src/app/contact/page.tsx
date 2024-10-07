'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import dynamic from 'next/dynamic'
import Header from "@/components/Header"
import { Footer } from "@/components/Footer"

const ContactForm = dynamic(() => import('@/components/ContactForm'), { ssr: false })

export default function ContactPage() {
  return (
    <div className="dark:bg-muted dark:text-foreground bg-black">
      <div className="container mx-auto px-6 md:px-8">
        <Header />

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

        <Footer />
      </div>
    </div>
  )
}