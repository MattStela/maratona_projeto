// grafico.js
import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

export default function Graficos() {
  const [forecastDataTemp, setForecastDataTemp] = useState(null);
  const [forecastDataHumidity, setForecastDataHumidity] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const urlSP = `https://api.open-meteo.com/v1/forecast?latitude=-23.56&longitude=-46.63&hourly=temperature_2m,relative_humidity_2m`;
      const urlItaquera = `https://api.open-meteo.com/v1/forecast?latitude=-23.60&longitude=-46.58&hourly=temperature_2m,relative_humidity_2m`;

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

        const temperaturesSP = dataSP.hourly.temperature_2m.slice(0, 24);
        const humiditySP = dataSP.hourly.relative_humidity_2m.slice(0, 24);
        const temperaturesItaquera = dataItaquera.hourly.temperature_2m.slice(0, 24);
        const humidityItaquera = dataItaquera.hourly.relative_humidity_2m.slice(0, 24);

        setForecastDataTemp({
          labels: Array.from({ length: 24 }, (_, i) => `${i}h`),
          datasets: [
            {
              label: "Temperatura SP",
              data: temperaturesSP,
              borderColor: "rgb(240, 69, 43)",
              backgroundColor: "rgba(77, 0, 0, 0.2)",
              fill: true,
              borderWidth: 2,
              yAxisID: 'y-temp',
            },
            {
              label: "Temperatura Itaquera",
              data: temperaturesItaquera,
              borderColor: "rgb(255, 161, 10)",
              backgroundColor: "rgba(153, 102, 255, 0.2)",
              fill: true,
              borderWidth: 2,
              yAxisID: 'y-temp',
            },
          ],
        });

        setForecastDataHumidity({
          labels: Array.from({ length: 24 }, (_, i) => `${i}h`),
          datasets: [
            {
              label: "Umidade SP",
              data: humiditySP,
              borderColor: "rgb(0, 52, 79)",
              backgroundColor: "rgba(75, 75, 192, 0.2)",
              fill: true,
              borderWidth: 2,
              yAxisID: 'y-humidity',
            },
            {
              label: "Umidade Itaquera",
              data: humidityItaquera,
              borderColor: "rgb(0, 54, 148)",
              backgroundColor: "rgba(153, 153, 255, 0.2)",
              fill: true,
              borderWidth: 2,
              yAxisID: 'y-humidity',
            },
          ],
        });
      } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
      }
    };

    fetchWeather(); // Chama a função na montagem do componente
  }, []);

  const options = {
    plugins: {
      legend: {
        display: true,
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
    scales: {
      x: {
        display: false,
      },
      'y-temp': {
        type: 'linear',
        display: false,
        position: 'left',
      },
      'y-humidity': {
        type: 'linear',
        display: false,
        position: 'right',
        grid: {
          drawOnChartArea: false, // only want the grid lines for one axis
        },
      },
    },
  };

  return (
    <div className="flex justify-center items-center relative w-full">
      {forecastDataHumidity && forecastDataTemp && (
        <div className="w-[90%]">
          <Line className="w-full" data={{
            labels: forecastDataTemp.labels,
            datasets: [
              ...forecastDataTemp.datasets,
              ...forecastDataHumidity.datasets,
            ],
          }} options={options} />
        </div>
      )}
      {!forecastDataTemp && !forecastDataHumidity && <p>Carregando dados de previsão...</p>}
    </div>
  );
}
