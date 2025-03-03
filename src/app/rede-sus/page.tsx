import React from 'react';
import Navbar from '../_components/NavBar';
import { Footer } from '../_components/Footer';
import  MapChart  from '../_components/BrazilMap';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function RedeSUSPage() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col font-space-grotesk bg-gray-100">
        {/* Hero Section */}
        <section className="bg-AzulCeu py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-black text-center mb-6 font-noto-serif">
            Encontre o profissional de saúde mental mais próximo de você           
            </h1>
          </div>

          <div className="max-w-3xl mx-auto mt-8 flex gap-4">
            <div className="flex-1">
              <Select>
              <SelectTrigger className="w-full h-[50px] bg-white text-black">
                <SelectValue placeholder="Lugar" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sp">São Paulo</SelectItem>
                <SelectItem value="rj">Rio de Janeiro</SelectItem>
                <SelectItem value="bh">Belo Horizonte</SelectItem>
                <SelectItem value="ba">Salvador</SelectItem>
                <SelectItem value="df">Brasília</SelectItem>
                <SelectItem value="es">Espirito Santo</SelectItem>
                <SelectItem value="mg">Minas Gerais</SelectItem>
                <SelectItem value="ms">Mato Grosso do Sul</SelectItem>
                <SelectItem value="pr">Paraná</SelectItem>
                <SelectItem value="sc">Santa Catarina</SelectItem>
                <SelectItem value="se">Sergipe</SelectItem>
                <SelectItem value="to">Tocantins</SelectItem>
                <SelectItem value="go">Goiás</SelectItem>
                <SelectItem value="mt">Mato Grosso</SelectItem>
                <SelectItem value="ms">Mato Grosso do Sul</SelectItem>
                <SelectItem value="pa">Pará</SelectItem>
                <SelectItem value="pb">Paraíba</SelectItem>
                <SelectItem value="pa">Paraná</SelectItem>
                <SelectItem value="pe">Pernambuco</SelectItem>
                <SelectItem value="pi">Piauí</SelectItem>
              </SelectContent>
              </Select>
            </div>
            
            <div className="flex-1">
              <Select>
                <SelectTrigger className="w-full h-[50px] bg-white text-black">
                  <SelectValue placeholder="Profissional" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="psiquiatra">Psiquiatra</SelectItem>
                  <SelectItem value="psicologo">Psicólogo</SelectItem>
                  <SelectItem value="terapeuta">Terapeuta</SelectItem>
                  <SelectItem value="assistente_social">Assistente Social</SelectItem>
                  <SelectItem value="enfermeiro">Enfermeiro Especializado</SelectItem>
                  <SelectItem value="caps">CAPS</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mt-12 bg-white rounded-lg shadow-lg p-8">
            <MapChart />
          </div>
        </section>
      </main>
      <Footer backgroundColor="#f5f5f5"/>
    </>
  );
}
