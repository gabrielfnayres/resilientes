import Link from "next/link";

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="relative text-gray-600 hover:text-gray-800 transition-all duration-300 group"
    >
      {children}
      <span className="absolute bottom-[-2px] left-0 w-0 h-0.5 rounded bg-AzulCeu transition-all duration-300 group-hover:w-full"></span>
    </Link>
  );
}

export default function Navbar() {
  return (
    <nav className="bg-gray-100 font-poppins sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 md:px-5 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-black select-none hover:text-gray-800 transition-all duration-300 font-noto-serif">Resilientes</Link>
        <div className="hidden md:flex items-center space-x-12 text-black">
          <div className="flex items-center space-x-12">
            <NavLink href="/sobre-nos">Sobre Nós</NavLink>
            <NavLink href="/texto">Manifesto</NavLink>
            <NavLink href="/rede-sus">Rede do SUS</NavLink>
          </div>
          <Link href="/autocuidado" className="border-2 border-AzulCeu rounded-full px-6 py-2 text-AzulCeu hover:bg-AzulCeu hover:text-white transition-all duration-300 flex items-center">
            Programa de Autocuidado
          </Link>
        </div>
        <button className="md:hidden text-black hover:text-gray-800 transition-all duration-300">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
}