import React, { useState } from "react";
import Layout from "@/app/layout";
import dynamic from "next/dynamic";

const DynamicMap = dynamic(() => import("@/components/map"), { ssr: false });

const RotasAtuais = () => {
  const [selectedMap, setSelectedMap] = useState("joseBonifacio");

  const handleMapChange = (event) => {
    setSelectedMap(event.target.value);
  };

  return (
    <Layout>
      <div className="w-full min-h-screen p-3">
        {/* Seletor para escolher o mapa */}
        <div className="text-center text-black mb-4">
          <label className="font-bold text-gray-700">Escolha uma rota:</label>
          <select
            value={selectedMap}
            onChange={handleMapChange}
            className="rounded-full px-3 border p-2 ml-2"
          >
            <option value="joseBonifacio">Até José Bonifácio</option>
            <option value="raulSeixas">Parque Raul Seixas</option>
          </select>
        </div>

        {/* Renderiza o mapa selecionado */}
        {selectedMap === "joseBonifacio" && (
          <DynamicMap
            start={[-23.54986, -46.44301]}
            end={[-23.53523, -46.42858]}
            lineColor="blue"
            title="Até a estação José Bonifácio"
            distance="yes"
          />
        )}
        {selectedMap === "raulSeixas" && (
          <DynamicMap
            start={[-23.5521978, -46.4443607]}
            title="Parque Raul Seixas"
            description="em torno de 700 metros cada volta no parque, ou seja, 9 voltas dá 6,3km"
          />
        )}
      </div>
    </Layout>
  );
};

export default RotasAtuais;
