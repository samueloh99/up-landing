import Logo from "../assets/logo.png";

import {
  AiOutlineInstagram,
  AiOutlineWhatsApp,
  AiFillLinkedin,
} from "react-icons/ai";

interface Props {
  handleScroll: (location: string) => void;
}

const Footer = ({ handleScroll }: Props) => {
  return (
    <div className="flex flex-col justify-center items-center bg-white">
      <div className="flex flex-col md:flex-row text-black max-w-[1280px] w-full m-auto justify-center items-center md:items-start py-[100px] gap-[100px]">
        <div className="w-full md:w-[20%] text-center md:text-start flex flex-col items-center md:items-start px-10 md:px-0">
          <a className="cursor-pointer" href="/">
            <img src={Logo} alt="logo" className="w-[150px]" />
          </a>
          <h3>Nós vamos te ajudar a chegar no resultado desejado.</h3>
        </div>
        <div className="flex flex-col gap-3 text-center md:text-start">
          <h1 className="text-xl mb-2">MENU</h1>
          <h3
            className="underline cursor-pointer"
            onClick={() => handleScroll("top")}
          >
            Página Inicial
          </h3>
          <h3
            className="underline cursor-pointer"
            onClick={() => handleScroll("about-us")}
          >
            Quem somos
          </h3>
          <h3
            className="underline cursor-pointer"
            onClick={() => handleScroll("work")}
          >
            O que fazemos
          </h3>
          <h3
            className="underline cursor-pointer"
            onClick={() => handleScroll("cases")}
          >
            Cases
          </h3>
        </div>
        <div className="flex flex-col gap-10 text-center md:text-start">
          <h3 className="text-xl">QUER SABER MAIS ?</h3>
          <button
            onClick={() => handleScroll("location")}
            className="bg-btnStn w-[200px] text-white py-3 px-10 rounded-md"
          >
            FALE CONOSCO
          </button>
          <div className="flex gap-8 justify-center md:justify-start">
            <a
              target="_blank"
              href="https://www.instagram.com/upagency.brasil/"
            >
              <AiOutlineInstagram size={30} />
            </a>
            <a
              target="_blank"
              href="https://api.whatsapp.com/send?phone=5511914571385"
            >
              <AiOutlineWhatsApp size={30} />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/company/up-agency-oficial"
            >
              <AiFillLinkedin size={30} />
            </a>
          </div>
        </div>
      </div>
      <h3>@ 2023 - Todos os direitos reservados.</h3>
    </div>
  );
};

export default Footer;
