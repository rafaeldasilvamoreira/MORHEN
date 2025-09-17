

export const AboutPage = () => {

  const aboutInfo = [
    {
      title: "200+",
      description: "Projetos Entregues",
    },
    {
      title: "8+",
      description: "Anos de Experiência",
    },
    {
      title: "99%",
      description: "Clientes Satisfeitos",
    },
    {
      title: "50+",
      description: "Tecnologias Dominadas",
    },
  ];

  return (
    <div className="flex flex-col items-center bg-[#171717] h-auto px-6">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-12 w-full max-w-7xl text-gray-300 my-20">
        <div className="flex flex-col gap-6 text-center lg:text-left w-full lg:w-1/2">
          <h1 className="text-4xl font-bold">
            Sobre a <span className="text-amber-400">MORHEN</span>
          </h1>
          <p className="text-gray-400 leading-relaxed">
            A MorHen é uma empresa especializada em desenvolvimento de software
            e soluções tecnológicas inovadoras. Transformamos ideias em
            aplicações digitais de alta qualidade.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Nossa missão é criar soluções digitais que impulsionam o crescimento
            dos nossos clientes, utilizando as tecnologias mais modernas e
            práticas de desenvolvimento ágil.
          </p>
          <button
            className="lg:mx-0 sm:w-full flex items-center justify-center gap-2 bg-amber-400 text-gray-900 font-semibold py-3 rounded-xl hover:bg-amber-400/80 cursor-pointer transition duration-300">
            Ver Portfólio
          </button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-6 w-full lg:w-1/2">
          {aboutInfo.map((info, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-[#202020] rounded-xl p-10"
            >
              <span className="text-3xl font-bold text-amber-400">
                {info.title}
              </span>
              <span className="text-gray-400">{info.description}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
