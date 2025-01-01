// src/pages/jan_mar.js
import Layout from "@/app/layout";
import Calendar from "@/components/calendar";
import Content from "@/components/content";

const titleJaneiro = "Caminhada e Corrida Alternada";
const contentJaneiro = `Segunda, Quarta e Sexta: Caminhada de 30 minutos.
Terça e Quinta: Alternar 1 minuto de corrida leve com 4 minutos de caminhada, repetindo por 30 minutos.
Sábado: Caminhada de 45 minutos.
Domingo: Descanso ou atividade leve, como ioga ou alongamento.`;
const titleFevereiro = "Aumentar o Tempo de Corrida";
const contentFevereiro = `Segunda, Quarta e Sexta: Caminhada de 45 minutos.
Terça e Quinta: Alternar 2 minutos de corrida com 3 minutos de caminhada, repetindo por 30-40 minutos.
Sábado: Caminhada de 60 minutos.
Domingo: Descanso ou atividade leve.`;
const titleMarço = "Introdução à Corrida Contínua";
const contentMarço = `Segunda, Quarta e Sexta: Caminhada ou corrida leve de 45-60 minutos.
Terça e Quinta: Corrida contínua de 20-30 minutos.
Sábado: Corrida/caminhada de 60 minutos.
Domingo: Descanso ou atividade leve.`;

export default function JanMar() {
  return (
    <Layout>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <div className="border-2 border-gray-700">
          <Calendar
            month="Janeiro"
            from="01"
            to="31"
            road="red"
            headerColor="gray"
          />
          <Content title={titleJaneiro} content={contentJaneiro} />
        </div>
        <div className="border-2 border-gray-700">
          <Calendar
            month="Fevereiro"
            from="01"
            to="28"
            road="red"
            headerColor="gray"
          />
          <Content title={titleFevereiro} content={contentFevereiro} />
        </div>
        <div className="border-2 border-gray-700">
          <Calendar
            month="Março"
            from="01"
            to="31"
            road="red"
            headerColor="gray"
          />
          <Content title={titleMarço} content={contentMarço} />
        </div>
      </div>
    </Layout>
  );
}
