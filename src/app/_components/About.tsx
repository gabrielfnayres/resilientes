import Image from "next/image"
import aboutImage from '../../../public/second_image.png'
export function About(){
    return (
        <section className="bg-[#FFCF40] text-black relative overflow-hidden">
            <div className="container mx-auto py-16 px-4 relative">
                <article className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="hidden md:block h-full relative">
                        <Image src={aboutImage} alt="Foto de sobre" fill  quality={100} priority className="object-contain"/>
                    </div>
                    <div>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-space leading-10">Sobre Nós</h1>
                        <p className="lg:text-lg">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ad soluta similique illo. Nesciunt facilis distinctio quia eveniet nam adipisci vel, incidunt iusto. Corporis voluptas iusto unde, ducimus voluptate excepturi!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quasi id atque ad cum, est sed architecto consequuntur debitis explicabo accusantium mollitia placeat minima. Eveniet labore voluptatibus quasi quaerat laborum!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ex numquam voluptatum? Architecto a quos, laborum, inventore facilis assumenda repellendus quaerat fuga incidunt accusantium tempore et ipsa accusamus est neque.
                        </p>
                        <a href="#" className="bg-[#F2994A] text-black px-4 py-2 rounded-md font-semibold flex items-center justify-center w-fit"> 
                            Sobre Nós
                        </a>
                    </div>
                </article>
            </div>
        </section>
    )
}