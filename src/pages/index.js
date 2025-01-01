import Link from "next/link";
import React from "react";
import Layout from "@/app/layout"; // Importando o Layout da pasta correta

const Home = () => {
  return (
    <Layout>
      <div className="text-center w-3/4">
        <h1>
          A idéia inicial é planejar e fazer os treinos até concluir o objetivo
          de correr 10km na maratona que ocorrerá entre dia 29/06 e dia 05/06
        </h1>
        <br></br>
        <h1>Para saber mais sobre o plano de treino para a maratona,</h1>
        <Link href="/plano" className="hover:text-blue-500 hover:font-bold hover:cursor-pointer">
            clique aqui
        </Link>
      </div>
    </Layout>
  );
};

export default Home;
