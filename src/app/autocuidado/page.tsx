import React from 'react';
import Image from 'next/image';
import Navbar from '../_components/NavBar';
import { Footer } from '../_components/Footer';
import autocuidadoImage from '../../../public/workflow_resilientes.png';

export default function AutocuidadoPage() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col bg-gray-100 font-space-grotesk">
      {/* Hero Section */}
      <section className="bg-AzulCeu py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 font-noto-serif">
            Programa de Autocuidado
          </h1>
          <p className="text-lg md:text-xl text-black font-space-grotesk w-full py-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta molestias consectetur, beatae quaerat dignissimos repellendus atque tempore non corrupti labore iste, rerum eum, fugiat nihil laboriosam similique doloribus hic nulla?
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus aliquid doloribus consectetur. Sit quasi accusamus quisquam natus omnis nulla pariatur, et dolor corporis blanditiis odit mollitia expedita voluptatem animi minus!
          </p>
          <Image src={autocuidadoImage} alt="Foto de sobre" width={1400} height={500}  quality={100} priority className="object-contain"/>

        </div>
        <div>
        </div>
      </section>
      
    </main>
      <Footer backgroundColor="#f5f5f5" />
    </>
  );
}
