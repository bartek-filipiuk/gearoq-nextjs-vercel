import Link from "next/link"
import { Button } from "@/components/ui/button"
import { LogInIcon } from "./Icons"

export function Header() {
  return (
    <header className="py-4 md:py-6">
      <div className="container mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-white hover:opacity-75 transition-opacity"
          prefetch={false}
        >
          <LogInIcon className="h-6 w-6 text-blue-500" />
          <span className="text-lg font-semibold text-white">GEAROQ</span>
        </Link>
        <nav className="hidden md:flex items-center gap-4">
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
        <Button className="bg-blue-500 hover:bg-blue-600 text-white">Get a Quote</Button>
      </div>
    </header>
  )
}