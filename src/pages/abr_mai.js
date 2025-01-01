// src/pages/jan_mar.js
import Layout from "@/app/layout";
import Calendar from "@/components/calendar";
import Content from "@/components/content";

const titleAbril = "Aumentar a Distância";
const contentAbril = `Segunda: Corrida leve de 30 minutos.
Terça: Treino intervalado (2 minutos de corrida rápida seguidos por 2 minutos de corrida leve) por 30-40 minutos.
Quarta: Corrida leve de 45 minutos.
Quinta: Corrida contínua de 40 minutos.
Sexta: Caminhada ou corrida leve de 30 minutos.
Sábado: Corrida longa de 5-7 km.
Domingo: Descanso ou atividade leve.`;

const titleMaio = "Caminhada e Corrida Alternada";
const contentMaio = `Segunda: Corrida leve de 40 minutos.
Terça: Treino intervalado (3 minutos de corrida rápida seguidos por 2 minutos de corrida leve) por 40-50 minutos.
Quarta: Corrida leve de 45-60 minutos.
Quinta: Corrida contínua de 45 minutos.
Sexta: Caminhada ou corrida leve de 35-45 minutos.
Sábado: Corrida longa de 7-9 km.
Domingo: Descanso ou atividade leve.`;

const titleJunho = "Simulação de Corrida";
const contentJunho = `Segunda: Corrida leve de 45 minutos.
Terça: Treino intervalado (4 minutos de corrida rápida seguidos por 2 minutos de corrida leve) por 50-60 minutos.
Quarta: Corrida leve de 60 minutos.
Quinta: Corrida contínua de 50 minutos.
Sexta: Caminhada ou corrida leve de 40-50 minutos.
Sábado: Corrida longa de 8-10 km.
Domingo: Descanso ou atividade leve.
`;


export default function AbrMai() {
  return (
    <Layout>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <div className="border-2 border-gray-700">
          <Calendar
            month="Abril"
            from="01"
            to="30"
            road="red"
            headerColor="gray"
          />
          <Content title={titleAbril} content={contentAbril} />
        </div>
        <div className="border-2 border-gray-700">
          <Calendar
            month="Maio"
            from="01"
            to="31"
            road="red"
            headerColor="gray"
          />
          <Content title={titleMaio} content={contentMaio} />
        </div>
        <div className="border-2 border-gray-700">
          <Calendar
            month="Junho"
            from="01"
            to="30"
            road="red"
            headerColor="gray"
          />
          <Content title={titleJunho} content={contentJunho} />
        </div>
      </div>
    </Layout>
  );
}
