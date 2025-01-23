import React, { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";
import "leaflet-control-geocoder";

// Função para criar ícones de marcadores personalizados com cores diferentes
const createCustomIcon = (color) => {
  return L.divIcon({
    className: "custom-marker",
    html: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="${color}" viewBox="0 0 24 24" stroke="black" stroke-width="0"><circle cx="12" cy="12" r="10"/></svg>`,
    iconSize: [24, 24],
    iconAnchor: [12, 24],
    popupAnchor: [0, -24],
  });
};

// Ícones personalizados
const startIcon = createCustomIcon("green"); // Ícone verde para o ponto inicial
const endIcon = createCustomIcon("red"); // Ícone vermelho para o ponto final

const Map = ({ start, end, lineColor, title, distance, description }) => {
  const mapRef = useRef(null); // Referência para o mapa
  const routingControlRef = useRef(null); // Referência para o controle de roteamento
  const [totalDistance, setTotalDistance] = useState(0); // Estado para armazenar a distância

  useEffect(() => {
    // Inicializa o mapa apenas se ainda não estiver inicializado
    if (!mapRef.current) {
      const mapInstance = L.map("map").setView(start, 15);

      L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(mapInstance);

      mapRef.current = mapInstance; // Armazena a instância do mapa na referência
    }

    // Define os waypoints de partida e destino a partir das props
    const waypoints = [
      L.latLng(start), // Ponto inicial
      L.latLng(end), // Ponto final
    ];

    // Atualiza o controle de roteamento
    if (mapRef.current) {
      // Remove o controle de roteamento existente, se houver
      if (routingControlRef.current) {
        mapRef.current.removeControl(routingControlRef.current);
      }

      // Cria um novo controle de roteamento com os waypoints definidos, incluindo marcadores personalizados
      routingControlRef.current = L.Routing.control({
        waypoints: waypoints,
        createMarker: function (i, waypoint, n) {
          // Cria e retorna um marcador para cada waypoint com ícones personalizados
          const markerIcon = i === waypoints.length - 1 ? endIcon : startIcon;
          return L.marker(waypoint.latLng, { icon: markerIcon }).bindPopup(
            `Ponto ${i + 1}`
          );
        },
        lineOptions: {
          styles: [{ color: lineColor, opacity: 0.7, weight: 6 }], // Define a cor da linha a partir das props
        },
        routeWhileDragging: false, // Desativa a atualização da rota enquanto arrasta waypoints
        addWaypoints: false, // Impede a adição de novos waypoints
        draggableWaypoints: false, // Impede que os waypoints sejam arrastáveis
        fitSelectedRoutes: true, // Ajusta o zoom do mapa para caber a rota selecionada
        show: false, // Desativa o painel de rotas
      }).addTo(mapRef.current);

      routingControlRef.current.on("routesfound", function (e) {
        const routes = e.routes;
        const summary = routes[0].summary;
        setTotalDistance((summary.totalDistance / 1000).toFixed(2)); // Converte a distância para km e define no estado
      });
    }
  }, [start, end, lineColor]);

  return (
    <div className="text-black">
      {/* Container para o mapa */}
      <p className="text-gray-200 text-center my-5 text-xl font-bold">
        {title}
      </p>
      <div
        id="map"
        style={{
          height: "450px",
          width: "100%",
          borderRadius: "2rem",
          border: "none",
        }}
      ></div>
      {/* Exibe a distância em quilômetros, se distance for "yes" */}
      {distance === "yes" && (
        <div className="mt-4 text-center text-gray-400">
          Distância entre pontos: {totalDistance} km <br />
          ida + volta: {totalDistance * 2} km
        </div>
      )}
      <div className="text-gray-400 mt-4 text-sm text-center">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Map;
