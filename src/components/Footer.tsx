import Link from "next/link"

export function Footer() {
  return (
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
  )
}