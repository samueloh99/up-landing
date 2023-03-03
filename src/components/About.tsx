import { forwardRef } from "react";

const About = ({}, ref: any) => {
  return (
    <div
      ref={ref}
      className="max-w-[1280px] w-full m-auto  text-white py-[140px] px-3"
    >
      <div className="flex flex-col justify-center items-center text-center w-full mb-[30px]">
        <h1 className="md:text-5xl text-4xl text-btnStn">
          Quem Somos
        </h1>
        <h4 className="md:text-xl text-lg mt-2 text-btnStn">
          Nascemos da necessidade de ajudar Lojistas a entrar no Mundo
          Digital
        </h4>
      </div>
      <div className="flex flex-col items-center justify-center text-center m-auto mb-10 md:text-xl text-lg">
        <h4>
          A UP é uma agência digital especializada no nicho de moda
          feminina e acessórios.
          <br /> Trabalhamos como colaboradores da sua marca, buscando
          de maneira estratégica e efetiva alavancar seus resultados.
        </h4>
        <h4 className="mt-5">
          Acreditamos em uma visão de mundo colaborativa, onde nós
          criamos, analisamos e desenvolvemos juntos. <br /> O que
          buscamos é de maneira positiva criar uma solução prática e
          assertiva para o seu negócio.
        </h4>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center p-5 gap-4">
        <div className="flex flex-col justify-center items-center border-2 border-btnStn px-2 py-3 w-[300px] h-full">
          <h1 className="text-3xl text-btnStn">+R$ 51 milhões</h1>
          <h4 className="text-xl">faturados</h4>
        </div>
        <div className="flex flex-col justify-center items-center border-2 border-btnStn px-2 py-3 w-[300px] h-full">
          <h1 className="text-3xl text-btnStn">+R$ 4 milhões</h1>
          <h4 className="text-xl">investidos</h4>
        </div>
        <div className="flex flex-col justify-center items-center border-2 border-btnStn px-2 py-3 w-[300px] h-full">
          <h1 className="text-3xl text-btnStn">12.34x</h1>
          <h4 className="text-xl">de Retorno</h4>
        </div>
      </div>
      <div className="grid grid-cols-4 justify-items-center w-full gap-4 md:w-[800px] m-auto md:px-0 px-2">
        <img
          className="md:w-[150px] w-[100px]"
          src="https://images.ctfassets.net/cpumif18y1gd/4cJhp04akFgDQKGVuKC4Rx/979c7bb9b42484f5760b26c919448088/TikTok_Partnership__Press_Release_625x417_____2.jpg"
          alt="tiktok_partner"
        />
        <img
          className="md:w-[170px] w-[100px]"
          src="https://static-prod.adweek.com/wp-content/uploads/2019/06/PinterestPartnersLogoJune2019.jpg"
          alt="pinterest_partner"
        />
        <img
          className="md:w-[150px] w-[100px]"
          src="https://seeklogo.com/images/M/meta-business-partner-logo-8CED76C499-seeklogo.com.png"
          alt="meta_partner"
        />
        <img
          className="md:w-[160px] w-[100px]"
          src="https://www.clickinterativo.com.br/conteudo/not/001/int/000103.png"
          alt="google_partner"
        />
      </div>
    </div>
  );
};

export default forwardRef(About);
