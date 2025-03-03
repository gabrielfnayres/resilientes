import Link from "next/link"
import { Linkedin, Facebook, Twitter } from "lucide-react"

interface FooterProps {
  backgroundColor?: string;
}

export function Footer({ backgroundColor = '#FFCF40' }: FooterProps) {
  return (
    <div style={{ backgroundColor }}>
    <section className="bg-black text-white rounded-[32px] px-8 py-6 max-w-7xl mx-auto">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <h2 className="text-3xl font-serif">Resilientes</h2>

          <a href="mailto:algumnomeaqui@email.com" className="hover:opacity-80 transition-opacity">
            algumnomeaqui@email.com
          </a>

          <div className="flex gap-4">
            <Link href="#" className="hover:opacity-80 transition-opacity" aria-label="LinkedIn">
              <Linkedin className="size-6" />
            </Link>
            <Link href="#" className="hover:opacity-80 transition-opacity" aria-label="Facebook">
              <Facebook className="size-6" />
            </Link>
            <Link href="#" className="hover:opacity-80 transition-opacity" aria-label="Twitter">
              <Twitter className="size-6" />
            </Link>
          </div>
        </div>

        <div className="w-full h-px bg-white/20" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© 2025 Resilientes</p>

          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <Link href="#" className="hover:underline">
              Política de privacidade
            </Link>
            <Link href="#" className="hover:underline">
              Lei Geral de Proteção de Dados
            </Link>
            <Link href="#" className="hover:underline">
              Transparência
            </Link>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

