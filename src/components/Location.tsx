import { forwardRef, useEffect, useMemo, useState } from "react";

import { HiLocationMarker } from "react-icons/hi";

import { AiOutlineMail } from "react-icons/ai";

import { BsWhatsapp } from "react-icons/bs";

import {
  GoogleMap,
  useLoadScript,
  MarkerF,
} from "@react-google-maps/api";

import emailjs from "emailjs-com";

const Location = ({}, ref: any) => {
  const [form, setForm] = useState({
    email: "",
    cargo: "",
    telefone: "",
    nome: "",
    empresa: "",
    temEcom: false,
  });

  const [errorForm, setErrorForm] = useState(false);

  const [isSended, setIsSended] = useState(false);

  const inputStyle = "bg-transparent w-full p-2 border border-btnStn";
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API;
  const emailjsApiKey = import.meta.env.VITE_EMAILJS_SERVICEID;
  const emailjsPublicKey = import.meta.env.VITE_EMAILJS_PUBLICKEY;

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: apiKey,
  });

  const sendEmail = () => {
    if (form.email.length < 5 && form.nome.length < 5) {
      return setErrorForm(true);
    }

    if (form.telefone.length !== 11) {
      return setErrorForm(true);
    }

    setErrorForm(false);

    emailjs
      .send(
        emailjsApiKey,
        "template_7ca8rp2",
        {
          from_name: form.nome,
          to_name: "comercial@upagencybrasil.com.br",
          message: JSON.stringify(form),
        },
        emailjsPublicKey
      )
      .then(
        (result) => {
          setForm({
            email: "",
            cargo: "",
            telefone: "",
            nome: "",
            empresa: "",
            temEcom: false,
          });
          setIsSended(true);

          setTimeout(() => {
            setIsSended(false);
          }, 5000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div
      ref={ref}
      className="max-w-[1280px] w-full m-auto text-white my-10 flex flex-col md:flex-row gap-[100px] md:gap-0"
    >
      {isSended && (
        <div
          id="toast-simple"
          className="fixed bottom-0 left-1/2 -translate-y-1/2 -translate-x-1/2 z-10 flex justify-center items-center w-full max-w-xs p-4 space-x-4 text-white bg-btnStn divide-x divide-gray-200 rounded-lg shadow dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800"
          role="alert"
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-black dark:text-blue-500"
            focusable="false"
            data-prefix="fas"
            data-icon="paper-plane"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M511.6 36.86l-64 415.1c-1.5 9.734-7.375 18.22-15.97 23.05c-4.844 2.719-10.27 4.097-15.68 4.097c-4.188 0-8.319-.8154-12.29-2.472l-122.6-51.1l-50.86 76.29C226.3 508.5 219.8 512 212.8 512C201.3 512 192 502.7 192 491.2v-96.18c0-7.115 2.372-14.03 6.742-19.64L416 96l-293.7 264.3L19.69 317.5C8.438 312.8 .8125 302.2 .0625 289.1s5.469-23.72 16.06-29.77l448-255.1c10.69-6.109 23.88-5.547 34 1.406S513.5 24.72 511.6 36.86z"
            ></path>
          </svg>
          <div className="pl-4 text-sm font-normal">
            Email Enviado com sucesso.
          </div>
        </div>
      )}
      <div className="w-full md:w-[50%] flex flex-col justify-center items-center gap-10 px-10">
        <div className="w-full flex flex-col gap-2 md:text-start text-center">
          <h1 className="md:text-3xl text-5xl text-btnStn">
            Solicite uma Reunião
          </h1>
          <h3 className="text-sm text-btnStn">
            Nós temos todas as soluções para você.
          </h3>
          {errorForm && (
            <h3 className="text-red-400 text-[12px]">
              *Preencha os campos abaixo para solicitar uma reunião.
            </h3>
          )}
        </div>
        <div className="flex flex-col w-full gap-5">
          <div>
            <h3 className="text-md">*Nome Completo</h3>
            <input
              className={inputStyle}
              type="text"
              value={form.nome}
              onChange={(e) =>
                setForm({ ...form, nome: e.target.value })
              }
            />
          </div>
          <div>
            <h3 className="text-md">*Nome da Empresa</h3>
            <input
              className={inputStyle}
              value={form.empresa}
              type="text"
              onChange={(e) =>
                setForm({ ...form, empresa: e.target.value })
              }
            />
          </div>
          <div>
            <h3 className="text-md">*Cargo</h3>
            <input
              className={inputStyle}
              type="text"
              value={form.cargo}
              onChange={(e) =>
                setForm({ ...form, cargo: e.target.value })
              }
            />
          </div>
          <div>
            <h3 className="text-md">*Email</h3>
            <input
              className={inputStyle}
              type="email"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
            />
          </div>
          <div>
            <h3 className="text-md">*Telefone</h3>
            <input
              className={inputStyle}
              type="text"
              value={form.telefone}
              minLength={11}
              onChange={(e) =>
                setForm({ ...form, telefone: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-md">Você já tem um E-commerce ?</h3>
            <div className="flex gap-4">
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  id="sim"
                  name="sim"
                  checked={form.temEcom ? true : false}
                  onChange={(e) =>
                    setForm({ ...form, temEcom: true })
                  }
                />
                <label>Sim</label>
              </div>
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  id="sim"
                  name="sim"
                  checked={!form.temEcom ? true : false}
                  onChange={(e) =>
                    setForm({ ...form, temEcom: false })
                  }
                />
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

          <button
            className="bg-btnStn w-[250px] px-1 py-4"
            onClick={() => sendEmail()}
          >
            ENVIAR FORMULÁRIO
          </button>
        </div>
      </div>

      <div className="flex flex-col md:w-[50%] w-full h-full md:px-0 px-10 bg-violet justify-center items-center">
        <div className="w-full md:h-[30%] h-full flex flex-col bg-btnStn justify-center px-3 md:px-10 py-5 gap-5">
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
        <div className="h-[70%] w-full ">
          {isLoaded && (
            <GoogleMap
              zoom={18}
              center={{
                lat: -23.530618230757305,
                lng: -46.63836454423658,
              }}
              mapContainerClassName="w-full h-[500px] "
            >
              <MarkerF
                position={{
                  lat: -23.530618230757305,
                  lng: -46.63836454423658,
                }}
              />
            </GoogleMap>
          )}
        </div>
      </div>
    </div>
  );
};

export default forwardRef(Location);
