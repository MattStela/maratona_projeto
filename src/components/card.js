// src/components/Card.js
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Card = ({ title, description, imageUrl, tags = [], link }) => {
  return (
    <Link href={link}>
      <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 cursor-pointer">
        <Image
          src={imageUrl}
          alt="Imagem do card"
          width={400}
          height={200}
          priority={true} // Garantindo prioridade de carregamento
          style={{ objectFit: "cover", width: "100%", height: "auto" }} // Garantindo a responsividade
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-white">{title}</div>
          <p className="text-gray-500 text-base">{description}</p> {/* Atualizado para text-gray-500 */}
        </div>
        <div className="px-6 pt-4 pb-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default Card;
