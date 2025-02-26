import peopleImage from '../../../public/hero_main_image.png'
import Image from 'next/image'
import Navbar from "@/app/_components/NavBar";
export function Hero() {
    return (
        <section className="bg-gray-100 text-black relative overflow-hidden">
            <Navbar />
            <div className="container mx-auto py-16 px-4 relative">
                <article className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="space-y-6">
                    <p className="text-[#EA580C] ">
                        COMBATENDO A EPIDEMIA DE DEPRESSÃO NO BRASIL
                    </p>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-space leading-10">
                        Resilientes
                    </h1>
                    <div className="mt-8"> 
                    <p className="lg:text-lg">
                        Resilientes é uma ONG que trás uma estratégia digital para melhorar o bem estar
                    </p>
                    </div>
                    
                    <a href="#" className="bg-[#FFCF40] text-black px-4 py-2 rounded-md font-semibold flex items-center justify-center w-fit">
                        Programa de autocuidado
                    </a>
                    </div>
                    <div className="hidden md:block h-full relative">
                        <Image src={peopleImage} alt="Foto de pessoas" fill sizes='(max-width: 768px) 0px, 50vw' quality={100} priority className="object-contain"/>
                    </div>
                </article>
            </div>
            
        </section>
    )
}