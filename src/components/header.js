"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Graficos from "./graficos";

export default function Header() {
  const [temperaturaSP, setTemperaturaSP] = useState(null);
  const [temperaturaItaquera, setTemperaturaItaquera] = useState(null);

  return (
    <div className="w-full flex flex-col items-center justify-center text-gray-400">
      <div className="menu flex flex-row items-center justify-center w-full">
        
        <div className="h-full w-[20%] flex-grow flex flex-col justify-center items-center">
          <Image
            src="/images/logo-no-bg.png"
            alt="Logo"
            width={100}
            height={100}
            className="object-contain"
          />
        </div>
        
        <div className="h-full w-[30%] flex-grow flex flex-col justify-center items-center">
          <Link
            href="/#"
            className="hover:text-white text-gray-500 font-semibold py-2 px-4 rounded transition duration-300"
          >
            Início
          </Link>
        </div>
        <div className="h-full w-[30%] flex-grow flex flex-col justify-center items-center">
          <Link
            href="/climatempo"
            className="hover:text-white text-gray-500 font-semibold py-2 px-4 rounded transition duration-300"
          >
            climatempo
          </Link>
        </div>

        <div className="h-full w-[20%] flex-grow flex flex-col justify-center items-center"></div>
      </div>
      <br />
      
    </div>
  );
}
