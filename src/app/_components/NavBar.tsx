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
    <nav className="bg-gray-100 font-poppins">
      <div className="container mx-auto px-4 md:px-5 py-5 flex justify-between items-center">
        <div className="text-xl font-bold text-black select-none">Resilientes</div>
        <div className="hidden md:flex space-x-12 text-black">
          <NavLink href="#sobre-nos">Sobre Nós</NavLink>
          <NavLink href="#manifesto">Manifesto</NavLink>
          <NavLink href="#rede-do-sus">Rede do SUS</NavLink>
          <NavLink href="#programa-de-autocuidado">Programa de autocuidado</NavLink>
        </div>
      </div>
    </nav>
  );
}