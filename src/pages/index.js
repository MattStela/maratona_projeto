// src/pages/plano.js
import React from "react";
import Card from "@/components/card";
import Layout from "@/app/layout";

const Plano = () => {
  const cardData = [
    {
      title: "Janeiro a Março de 2025",
      description:
        "Objetivo: Desenvolver a base aeróbica e melhorar a resistência.",
      imageUrl: "/images/correndo1.png", // URL da imagem local
      tags: ["Janeiro", "Fevereiro", "Março"],
      link: "/jan_mar", // Corrigido para garantir que o link aponte para a página correta
    },
    {
      title: "Abril a Junho de 2025: Construção de Resistência",
      description:
        "Objetivo: Aumentar a distância de corrida e melhorar a capacidade aeróbica.",
      imageUrl: "/images/correndo2.png", // URL da imagem local
      tags: ["Abril", "Maio"],
      link: "/abr_mai",
    },
    {
      title: "Julho de 2025: Preparação Final",
      description: "Objetivo: Manter a forma e evitar lesões.",
      imageUrl: "/images/correndo3.png", // URL da imagem local
      tags: ["Junho"],
      link: "/julho",
    },
    {
      title: "Rotas atuais que eu faço",
      description: "Com detalhes sobre distância e locais de parada",
      imageUrl: "/images/map.png", // URL da imagem local
      tags: ["Rotas"],
      link: "/rotas_atuais",
    },
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
