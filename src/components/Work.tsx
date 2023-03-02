import { FaShoppingCart } from "react-icons/fa";

const services = [
  {
    title: "Implantação de E-Commerce",
    desc: "Fazemos todo o processo para que seu e-commerce esteja em uma plataforma fluida e intuitiva em até 14 dias.",
  },
  {
    title: "Gestão de Performance",
    desc: "Nosso time de marketing trabalha montando estratégias e criando métodos para otimizar campanhas e chegar ao resultado desejado.",
  },
  {
    title: "Criação e Conteúdo",
    desc: "Trabalhamos montando todo seu briefing para criação dos seus conteúdos. Seja seus vídeos, suas fotos ou conteúdos para as mídias.",
  },
  {
    title: "Gestão de Mídia Social",
    desc: "Temos um time de social media que faz toda a gestão das suas redes, alimentando e buscando aumentar seu engajamento.",
  },
];

const Work = () => {
  return (
    <div className="max-w-[1280px] w-full m-auto text-white">
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
                <FaShoppingCart size={50} color="#7e89de" />
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

export default Work;
