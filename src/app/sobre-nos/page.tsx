import React from 'react';
import Image from 'next/image';
import Navbar from '../_components/NavBar';
import { Footer } from '../_components/Footer';
import aboutImage from '../../../public/workflow_resilientes.png';

export default function SobreNosPage() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col bg-gray-100 font-space-grotesk">
        {/* Hero Section */}
        <section className="bg-AzulCeu py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 font-noto-serif">
              Sobre Nós
            </h1>
            <p className="text-lg md:text-xl text-black font-space-grotesk w-full py-10">
              Somos uma equipe dedicada a transformar a saúde mental no Brasil. Nossa missão é conectar profissionais e pacientes, 
              fornecendo recursos e suporte para uma jornada de bem-estar mais acessível e eficaz.
            </p>
            <Image 
              src={aboutImage} 
              alt="Equipe Resilientes" 
              width={1400} 
              height={500} 
              quality={100} 
              priority 
              className="object-contain rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Nossa História */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 font-noto-serif">
              Nossa História
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-AzulCeu">Como Começamos</h3>
                <p className="text-gray-700 mb-6">
                  Nossa jornada começou com uma visão simples: tornar o cuidado com a saúde mental mais acessível 
                  e eficiente para todos os brasileiros. Identificamos lacunas no sistema atual e decidimos criar 
                  uma solução que pudesse fazer a diferença.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-AzulCeu">Nossa Missão</h3>
                <p className="text-gray-700 mb-6">
                  Buscamos revolucionar a forma como as pessoas acessam e recebem cuidados de saúde mental no Brasil. 
                  Através da tecnologia e da inovação, queremos criar pontes entre profissionais e pacientes, 
                  facilitando o acesso a tratamentos de qualidade.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Nossos Valores */}
        <section className="bg-gray-100 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-12 font-noto-serif">
              Nossos Valores
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-AzulCeu">Acessibilidade</h3>
                <p className="text-gray-700">
                  Acreditamos que o cuidado com a saúde mental deve ser acessível a todos, 
                  independentemente de sua localização ou condição socioeconômica.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-AzulCeu">Inovação</h3>
                <p className="text-gray-700">
                  Utilizamos tecnologia e métodos inovadores para melhorar constantemente 
                  a experiência de nossos usuários e a eficácia de nossos serviços.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-AzulCeu">Empatia</h3>
                <p className="text-gray-700">
                  Colocamos as pessoas em primeiro lugar, entendendo suas necessidades 
                  e trabalhando para criar soluções que realmente façam a diferença.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer backgroundColor="#f5f5f5" />
    </>
  );
}
