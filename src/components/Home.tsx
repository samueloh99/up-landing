import Banner from "../assets/principal.png";
import BannerMobile from "../assets/principal-mobile.png";
interface Props {
  handleScroll: (location: string) => void;
}

const Home = ({ handleScroll }: Props) => {
  return (
    <div className="relative border-black w-full md:w-[1920px] m-auto">
      <img
        src={Banner}
        alt="banner"
        className="h-full w-full object-cover object-center hidden md:flex"
      />

      <img
        src={BannerMobile}
        alt="banner"
        className="h-full w-full object-cover object-center flex md:hidden"
      />
      <div className="px-[20px] md:px-[150px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
        <div>
          <h1 className="text-5xl md:text-8xl bg-gradient-to-r from-mainTxt1 via-mainTxt2 to-mainTxt1 inline-block text-transparent bg-clip-text">
            Especialistas <br /> em Moda
          </h1>
          <h2 className="text-white text-sm md:text-lg">
            Agência de Performance e E-Commerce com mais de <br /> 15
            milhões faturados.
          </h2>
          <button
            onClick={() => handleScroll("location")}
            className="rounded-md text-btnStn bg-white	px-5 py-1 mt-10 w-[180px]"
          >
            FALE CONOSCO
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
