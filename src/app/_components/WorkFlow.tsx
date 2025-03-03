import Image from "next/image";
import Link from "next/link";
import workflowImage from '../../../public/workflow_resilientes.png';

export function WorkFlow() {
    return (
        <section className="bg-gray-100 text-black relative overflow-hidden rounded-t-[48px]">
            <div className="container mx-auto py-16 px-4 relative">
                <h1 className="text-3xl lg:text-5xl font-space leading-10 py-5">
                    Como funcionam as etapas?
                </h1>
                

                <div className="relative w-full aspect-video mb-8">  
                    <Image 
                        src={workflowImage} 
                        alt="Atendimento Workflow" 
                        fill 
                        sizes='(max-width: 768px) 100vw, 50vw' 
                        quality={100} 
                        priority 
                        className="object-contain"
                    />
                </div>

                <div className="mt-8">  
                    <p className="lg:text-lg py-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ad soluta similique illo. Nesciunt facilis distinctio quia eveniet nam adipisci vel, incidunt iusto. Corporis voluptas iusto unde, ducimus voluptate excepturi!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quasi id atque ad cum, est sed architecto consequuntur debitis explicabo accusantium mollitia placeat minima. Eveniet labore voluptatibus quasi quaerat laborum!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ex numquam voluptatum? Architecto a quos, laborum, inventore facilis assumenda repellendus quaerat fuga incidunt accusantium tempore et ipsa accusamus est neque.
                    </p>
                    
                    <div className="flex justify-center w-full gap-4">
                        <Link href="#contato" className="bg-[#F2994A] text-black px-6 py-3 rounded-md font-semibold hover:bg-[#e68a35] transition-colors duration-300">
                            Fale Conosco
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}