import { forwardRef, useState } from "react";

import Zen from "../assets/zen.png";
import Lacleo from "../assets/lacleo.png";
import LacleoMobile from "../assets/lacleo-mobile.png";
import ZenMobile from "../assets/zen-mobile.png";

import { AiFillCaretRight } from "react-icons/ai";

const slides = {
  mobile: [ZenMobile, LacleoMobile],
  desktop: [Zen, Lacleo],
};

const Cases = ({}, ref: any) => {
  const [currentIdx, setCurrentIdx] = useState(0);

  const goNext = () => {
    const isLastSlide = currentIdx === slides["desktop"].length - 1;
    const newIdx = isLastSlide ? 0 : currentIdx + 1;
    setCurrentIdx(newIdx);
  };
  return (
    <div
      ref={ref}
      className="max-w-[1920px] w-full m-auto  text-white  my-10"
    >
      <div className="text-center mb-10 px-3 md:px-0">
        <h1 className="md:text-5xl text-4xl text-btnStn">
          Cases de Sucesso
        </h1>
        <h2 className="md:text-xl text-lg text-btnStn">
          Veja alguns dos 50 parceiros que fizeram parte dessa
          história.
        </h2>
      </div>
      <div className="relative">
        <img
          src={slides["desktop"][currentIdx]}
          className="w-full h-auto hidden md:flex"
        />

        <img
          src={slides["mobile"][currentIdx]}
          className="w-full h-auto flex md:hidden"
        />
        <div
          className="absolute top-[50%] right-0 bg-slate-400	rounded-full p-2 cursor-pointer"
          onClick={() => goNext()}
        >
          <AiFillCaretRight size={30} />
        </div>
      </div>
    </div>
  );
};

export default forwardRef(Cases);
