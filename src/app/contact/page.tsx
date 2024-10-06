import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  return (
    <div className="dark:bg-muted dark:text-foreground bg-black min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="header-text py-16 md:py-24 flex items-center justify-center">
          <div className="container mx-auto px-8 md:px-12">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#ADD8E6] to-[#1E90FF] bg-clip-text text-transparent mb-4">
                Contact Us
              </h1>
              <p className="text-lg md:text-xl mb-8 text-white">
                Get in touch with us for any inquiries or automation needs.
              </p>
            </div>
          </div>
        </section>
        <section className="py-12">
          <div className="container mx-auto px-6 md:px-8">
            <form className="max-w-lg mx-auto">
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select a subject</option>
                  <option value="automation">Automation Services</option>
                  <option value="consultation">Consultation</option>
                  <option value="service-request">Service Request</option>
                </select>
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                Send Message
              </Button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}