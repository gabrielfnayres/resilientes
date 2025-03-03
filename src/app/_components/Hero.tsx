import peopleImage from '../../../public/hero_main_image.png'
import Image from 'next/image'
import Navbar from "@/app/_components/NavBar";
export function Hero() {
    return (
        <section className="bg-gray-100 text-black relative overflow-hidden min-h-[90vh]">
            <Navbar />
            <div className="container mx-auto py-12 px-4 relative h-full">
                <article className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-4 min-h-[calc(90vh-80px)]">
                    <div className="space-y-8 z-10 flex flex-col justify-center py-8">
                        <div className="space-y-8 max-w-xl">
                            <p className="text-[#EA580C] text-lg font-semibold tracking-wide">
                                COMBATENDO A EPIDEMIA DE DEPRESSÃO NO BRASIL
                            </p>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-noto-serif leading-tight">
                                Resilientes
                            </h1>
                            <div className="mt-8"> 
                                <p className="text-lg lg:text-xl text-gray-700">
                                    Resilientes é uma ONG que trás uma estratégia digital para melhorar o bem estar
                                </p>
                            </div>
                            
                            <a href="/autocuidado" className="bg-[#FFCF40] text-black px-8 py-3 rounded-md font-semibold flex items-center justify-center w-fit hover:bg-[#f0c230] transition-colors duration-300 text-lg">
                                Programa de autocuidado
                            </a>
                        </div>
                    </div>
                    <div className="relative w-full h-[500px] md:h-[600px] lg:h-[90vh] flex items-center justify-start lg:-ml-12">
                        <Image 
                            src={peopleImage} 
                            alt="Foto de pessoas" 
                            fill 
                            sizes='(max-width: 768px) 100vw, 50vw' 
                            quality={100} 
                            priority 
                            className="object-contain object-center lg:object-left"
                        />
                    </div>
                </article>
            </div>
            
        </section>
    )
}