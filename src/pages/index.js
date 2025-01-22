// src/pages/plano.js
import React from 'react';
import Card from '@/components/card';
import Layout from "@/app/layout";

const Plano = () => {
  const cardData = [
    {
      title: "Janeiro a Março de 2025",
      description: "Objetivo: Desenvolver a base aeróbica e melhorar a resistência.",
      imageUrl: "/images/correndo1.png", // URL da imagem local
      tags: ["Janeiro", "Fevereiro", "Março"],
      link: "/jan_mar" // Corrigido para garantir que o link aponte para a página correta
    },
    {
      title: "Abril a Junho de 2025: Construção de Resistência",
      description: "Objetivo: Aumentar a distância de corrida e melhorar a capacidade aeróbica.",
      imageUrl: "/images/correndo2.png", // URL da imagem local
      tags: ["Abril", "Maio"],
      link: "/abr_mai"
    },
    {
      title: "Julho de 2025: Preparação Final",
      description: "Objetivo: Manter a forma e evitar lesões.",
      imageUrl: "/images/correndo3.png", // URL da imagem local
      tags: ["Junho"],
      link: "/julho"
    },
    {
        title: "Rota atual da Maratona (sujeito a mudança)",
        description: "A rota de 10km com os pontos de parada a cada 1km",
        imageUrl: "/images/map.png", // URL da imagem local
        tags: ["Junho"],
        link: "https://www.google.com.br/maps/dir/-23.5498493,-46.4432171/-23.551125,-46.4366069/-23.53922,-46.4312334/-23.5353255,-46.428665/-23.5509401,-46.4365379/-23.5498414,-46.4431264/@-23.5443589,-46.436508,15z/data=!4m2!4m1!3e2?entry=ttu&g_ep=EgoyMDI1MDEyMC4wIKXMDSoASAFQAw%3D%3D"
      }
    
  ];

  return (
    <Layout>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {cardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
            tags={card.tags}
            link={card.link}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Plano;