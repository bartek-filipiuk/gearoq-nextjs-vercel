import Link from "next/link"
import { LogInIcon } from "./Icons"

export function Footer() {
  return (
    <footer className="py-8 md:py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <LogInIcon className="h-6 w-6 text-blue-500" />
          <span className="text-lg font-semibold text-white">Automation Agency</span>
        </div>
        <nav className="flex items-center gap-4">
          <Link href="#" className="text-sm font-medium text-white hover:underline" prefetch={false}>
            Services
          </Link>
          <Link href="#" className="text-sm font-medium text-white hover:underline" prefetch={false}>
            Case Studies
          </Link>
          <Link href="#" className="text-sm font-medium text-white hover:underline" prefetch={false}>
            About
          </Link>
          <Link href="/contact" className="text-sm font-medium text-white hover:underline" prefetch={false}>
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  )
}