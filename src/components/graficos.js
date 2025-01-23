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
  const [forecastDataTemp, setForecastDataTemp] = useState([]);
  const [forecastDataHumidity, setForecastDataHumidity] = useState([]);
  const [selectedDay, setSelectedDay] = useState(0);

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

        const daysDataSP = [];
        const daysDataItaquera = [];
        for (let i = 0; i < 7; i++) {
          const startIdx = i * 24;
          const endIdx = startIdx + 24;
          daysDataSP.push({
            temperature: dataSP.hourly.temperature_2m.slice(startIdx, endIdx),
            humidity: dataSP.hourly.relative_humidity_2m.slice(startIdx, endIdx),
          });
          daysDataItaquera.push({
            temperature: dataItaquera.hourly.temperature_2m.slice(startIdx, endIdx),
            humidity: dataItaquera.hourly.relative_humidity_2m.slice(startIdx, endIdx),
          });
        }

        setForecastDataTemp(daysDataSP);
        setForecastDataHumidity(daysDataItaquera);
      } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
      }
    };

    fetchWeather(); // Chama a função na montagem do componente
  }, []);

  const options = {
    plugins: {
      legend: {
        display: false,
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
        display: true,
        position: 'left',
      },
      'y-humidity': {
        type: 'linear',
        display: true,
        position: 'right',
        grid: {
          drawOnChartArea: false, // only want the grid lines for one axis
        },
      },
    },
  };

  const handleDayChange = (event) => {
    setSelectedDay(Number(event.target.value));
  };

  const getDayLabel = (dayIndex) => {
    const today = new Date();
    today.setDate(today.getDate() + dayIndex);
    return today.toLocaleDateString();
  };

  return (
    <div className="flex flex-col justify-center items-center relative w-full h-[600px]">
      <div className="mb-4">
        <label className="font-bold text-gray-700">Selecione o dia:</label>
        <select
          value={selectedDay}
          onChange={handleDayChange}
          className="rounded-3xl px-3 text-black border py-2 ml-2"
        >
          {Array.from({ length: 7 }, (_, i) => (
            <option key={i} value={i}>
              {getDayLabel(i)}
            </option>
          ))}
        </select>
      </div>
      {forecastDataTemp.length > 0 && forecastDataHumidity.length > 0 && (
        <div className="flex justify-center items-center w-[90%] h-[600px]">
          <Line
            className="w-full h-[600px]"
            data={{
              labels: Array.from({ length: 24 }, (_, i) => `${i}h`),
              datasets: [
                {
                  label: "Temperatura SP",
                  data: forecastDataTemp[selectedDay].temperature,
                  borderColor: "rgb(240, 69, 43)",
                  backgroundColor: "rgba(77, 0, 0, 0.2)",
                  fill: true,
                  borderWidth: 1,
                  yAxisID: 'y-temp',
                },
                {
                  label: "Temperatura Itaquera",
                  data: forecastDataHumidity[selectedDay].temperature,
                  borderColor: "rgb(255, 161, 10)",
                  backgroundColor: "rgba(153, 102, 255, 0.2)",
                  fill: true,
                  borderWidth: 1,
                  yAxisID: 'y-temp',
                },
                {
                  label: "Umidade SP",
                  data: forecastDataTemp[selectedDay].humidity,
                  borderColor: "rgb(0, 52, 79)",
                  backgroundColor: "rgba(75, 75, 192, 0.2)",
                  fill: true,
                  borderWidth: 1,
                  yAxisID: 'y-humidity',
                },
                {
                  label: "Umidade Itaquera",
                  data: forecastDataHumidity[selectedDay].humidity,
                  borderColor: "rgb(0, 54, 148)",
                  backgroundColor: "rgba(153, 153, 255, 0.2)",
                  fill: true,
                  borderWidth: 1,
                  yAxisID: 'y-humidity',
                },
              ],
            }}
            options={options}
          />
        </div>
      )}
      {forecastDataTemp.length === 0 && forecastDataHumidity.length === 0 && (
        <p>Carregando dados de previsão...</p>
      )}
    </div>
  );
}
