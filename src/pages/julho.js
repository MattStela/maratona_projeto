// src/pages/jan_mar.js
import Layout from "@/app/layout";
import Calendar from "@/components/calendar";
import Content from "@/components/content";


const titleJulho = "Simulação de Corrida";
const contentJulho = `Manter a forma e evitar lesões.

Semana 1-2: Treinos de Manutenção.
Segunda a Sexta: Corridas leves de 5-7 km.
Sábado: Corrida longa de 10 km (simulação da maratona).
Domingo: Descanso ou atividade leve.

Semana 3: Diminuição Gradual
Segunda a Quinta: Corridas leves de 4-5 km.
Sexta: Caminhada leve de 30 minutos.
Sábado: Descanso completo.
Domingo: Corrida de 10km (dia da maratona!).
`;


export default function Julho() {
  return (
    <Layout>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <div className="border-2 border-gray-700">
          <Calendar
            month="Julho"
            from="01"
            to="31"
            road="red"
            headerColor="gray"
          />
          <Content title={titleJulho} content={contentJulho} />
        </div>
      </div>
    </Layout>
  );
}