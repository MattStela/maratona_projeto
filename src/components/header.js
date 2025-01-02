"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Header() {
  const [temperaturaSP, setTemperaturaSP] = useState(null);
  const [temperaturaItaquera, setTemperaturaItaquera] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const lastFetchTime = localStorage.getItem('lastFetchTime');
      const currentTime = new Date().getTime();
      const oneHour = 60 * 60 * 1000;

      const fetchNewData = async () => {
        const urlSP = `https://api.open-meteo.com/v1/forecast?latitude=-23.56&longitude=-46.63&current_weather=true`;
        const urlItaquera = `https://api.open-meteo.com/v1/forecast?latitude=-23.60&longitude=-46.58&current_weather=true`;

        try {
          const [resSP, resItaquera] = await Promise.all([
            fetch(urlSP),
            fetch(urlItaquera),
          ]);

          if (!resSP.ok || !resItaquera.ok) {
            throw new Error("Falha ao buscar dados da API");
          }

          const dataSP = await resSP.json();
          const dataItaquera = await resItaquera.json();

          if (dataSP.current_weather && dataItaquera.current_weather) {
            const tempSP = dataSP.current_weather.temperature;
            const tempItaquera = dataItaquera.current_weather.temperature;

            setTemperaturaSP(tempSP);
            setTemperaturaItaquera(tempItaquera);

            const weatherData = {
              temperaturaSP: tempSP,
              temperaturaItaquera: tempItaquera,
              fetchTime: currentTime,
            };
            localStorage.setItem('weatherData', JSON.stringify(weatherData));
            localStorage.setItem('lastFetchTime', currentTime.toString());
          } else {
            console.error("Dados da API não contêm 'current_weather'");
          }
        } catch (error) {
          console.error("Erro ao buscar dados da API:", error);
        }
      };

      if (!lastFetchTime) {
        fetchNewData(); // Primeira chamada na montagem do componente
      } else {
        const weatherDataString = localStorage.getItem('weatherData');
        if (!weatherDataString || currentTime - lastFetchTime > oneHour) {
          fetchNewData(); // Chama a função se os dados do clima não estiverem no localStorage ou já passaram uma hora
        } else {
          const weatherData = JSON.parse(weatherDataString);
          setTemperaturaSP(weatherData.temperaturaSP);
          setTemperaturaItaquera(weatherData.temperaturaItaquera);
        }
      }
    };

    fetchWeather(); // Chama a função na montagem do componente

  }, []);

  return (
    <div className="mb-10 w-full h-32 flex flex-col items-center justify-center text-gray-400">
      <div className="menu flex flex-row h-[70%] items-center justify-center w-full">
        <div className="h-full w-[20%] flex-grow flex flex-col justify-center items-center">
          <Image
            src="/images/logo-no-bg.png"
            alt="Logo"
            width={100}
            height={100}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="h-full w-[60%] flex-grow flex flex-col justify-center items-center">
          <Link href="/#" className="hover:text-white text-gray-500 font-semibold py-2 px-4 rounded transition duration-300">
            Início
          </Link>
        </div>
        <div className="h-full w-[20%] flex-grow flex flex-col justify-center items-center"></div>
      </div>
      <br />
      <div className="informativo h-[30%] flex flex-col items-center justify-center w-[80%] text-center">
        <p>Clima hoje em SP: {temperaturaSP !== null ? `${temperaturaSP}` : "Carregando..."}ºC</p>
        <p>Itaquera: {temperaturaItaquera !== null ? `${temperaturaItaquera}` : "Carregando..."}ºC</p>
      </div>
    </div>
  );
}
