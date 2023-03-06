import { forwardRef } from "react";
import Campanha from "../assets/1.png";
import Conteudo from "../assets/2.png";
import Ecommerce from "../assets/4.png";
import Performance from "../assets/3.png";

import Gradiente from "../assets/gradiente.png";

const services = [
  {
    title: "Implantação de E-Commerce",
    desc: "Fazemos todo o processo para que seu e-commerce esteja em uma plataforma fluida e intuitiva em até 14 dias.",
    icone: Ecommerce,
  },
  {
    title: "Gestão de Performance",
    desc: "Nosso time de marketing trabalha montando estratégias e criando métodos para otimizar campanhas e chegar ao resultado desejado.",
    icone: Performance,
  },
  {
    title: "Criação e Conteúdo",
    desc: "Trabalhamos montando todo seu briefing para criação dos seus conteúdos. Seja seus vídeos, suas fotos ou conteúdos para as mídias.",
    icone: Conteudo,
  },
  {
    title: "Gestão de Mídia Social",
    desc: "Temos um time de social media que faz toda a gestão das suas redes, alimentando e buscando aumentar seu engajamento.",
    icone: Campanha,
  },
];

const Work = ({}, ref: any) => {
  return (
    <div
      ref={ref}
      className="max-w-[1280px] w-full m-auto text-white"
    >
      <div className="flex flex-col text-center">
        <h1 className="md:text-5xl text-4xl text-btnStn">
          O que fazemos
        </h1>
        <h2 className="md:text-xl text-lg mt-2 text-btnStn">
          Temos as Soluções essenciais para você
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-4 py-[80px] justify-items-center">
        {services.map((service, index) => {
          return (
            <div
              key={index}
              className="flex flex-col text-center w-[300px] h-[400px] text-lg px-7 bg-bgBox border border-btnBorder hover:border-indigo-300 transition duration-500"
            >
              <div className="h-[40%] flex justify-center items-center">
                <img src={service.icone} className="w-[60px]" />
              </div>
              <div className="h-[15%] text-btnStn">
                <h1>{service.title}</h1>
              </div>
              <div className="h-[10%]">
                <h2>{service.desc}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default forwardRef(Work);
