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
        link: "https://www.google.com.br/maps/dir/R.+Noroguages,+211+-+Itaquera,+S%C3%A3o+Paulo+-+SP,+08215-670,+Brasil/-23.5565399,-46.4462129/-23.5620404,-46.450605/-23.5632773,-46.460745/-23.5657733,-46.4678866/-23.5714655,-46.4662935/-23.572307,-46.4647265/-23.5782374,-46.4588428/-23.5700831,-46.4593192/-23.561991,-46.4508039/@-23.5645671,-46.4589294,14.75z/data=!4m17!4m16!1m5!1m1!1s0x94ce67d77cbe9339:0x418829ed82fc01c6!2m2!1d-46.4431479!2d-23.5499751!1m0!1m0!1m0!1m0!1m0!1m0!1m0!1m0!1m0!3e2?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
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