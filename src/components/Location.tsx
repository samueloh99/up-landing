import { HiLocationMarker } from "react-icons/hi";

import { AiOutlineMail } from "react-icons/ai";

import { BsWhatsapp } from "react-icons/bs";

const Location = () => {
  const inputStyle = "bg-transparent w-full p-2 border border-btnStn";
  return (
    <div className="max-w-[1280px] w-full m-auto text-white my-10 flex flex-col md:flex-row gap-[100px] md:gap-0">
      <div className="w-full md:w-[50%] flex flex-col justify-center items-center gap-10 px-10">
        <div className="w-full flex flex-col gap-2 md:text-start text-center">
          <h1 className="md:text-3xl text-5xl text-btnStn">
            Solicite uma Reunião
          </h1>
          <h3 className="text-sm text-btnStn">
            Nós temos todas as soluções para você.
          </h3>
        </div>
        <div className="flex flex-col w-full gap-5">
          <div>
            <h3 className="text-md">*Nome Completo</h3>
            <input className={inputStyle} type="text" />
          </div>
          <div>
            <h3 className="text-md">*Nome da Empresa</h3>
            <input className={inputStyle} type="text" />
          </div>
          <div>
            <h3 className="text-md">*Cargo</h3>
            <input className={inputStyle} type="text" />
          </div>
          <div>
            <h3 className="text-md">*Email</h3>
            <input className={inputStyle} type="text" />
          </div>
          <div>
            <h3 className="text-md">*Telefone</h3>
            <input className={inputStyle} type="text" />
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-md">Você já tem um E-commerce ?</h3>
            <div className="flex gap-4">
              <div className="flex gap-2">
                <input type="checkbox" id="sim" name="sim" checked />
                <label>Sim</label>
              </div>
              <div className="flex gap-2">
                <input type="checkbox" id="sim" name="sim" checked />
                <label>Não</label>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-[12px] text-gray-400">
              Nunca envie senhas ou dados confidenciais por meio de
              formulários desconhecidos. <br /> Certifique-se de que
              este formulário foi gerado por sua empresa ou por uma
              empresa confiável.
            </h3>
          </div>

          <button className="bg-btnStn w-[250px] px-1 py-4">
            ENVIAR FORMULÁRIO
          </button>
        </div>
      </div>

      <div className="flex flex-col md:w-[50%] w-full h-full md:px-0 px-10 bg-violet justify-center items-center">
        <div className="w-full md:h-[30%] h-full flex flex-col bg-violet-500 justify-center px-3 md:px-10 py-5 gap-5">
          <div className="flex gap-4">
            <HiLocationMarker size={25} />
            <h1 className="text-sm">
              Endereço <br />
              Rua da Graça, 37
              <br /> Bom Retiro/SP
              <br /> 01125-000
            </h1>
          </div>
          <div className="flex gap-4 text-sm">
            <AiOutlineMail size={25} />
            <h1>comercial@upagencybrasil.com.br</h1>
          </div>
          <div className="flex gap-4">
            <BsWhatsapp size={25} />
            <h1>11 91457-1385</h1>
          </div>
        </div>
        <div className="h-[70%] w-full">
          <h1>mapa</h1>
        </div>
      </div>
    </div>
  );
};

export default Location;
