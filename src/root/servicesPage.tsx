import { Code, Database, Globe, Shield, Smartphone, Zap } from "lucide-react";

export const ServicesPage = () => {
  const services = [
    {
      icon: <Globe size={28} />,
      title: "Desenvolvimento Web",
      description:
        "Criação de sites e aplicações web responsivas usando as tecnologias mais modernas do mercado.",
    },
    {
      icon: <Smartphone size={28} />,
      title: "Aplicações Mobile",
      description:
        "Desenvolvimento de aplicativos nativos e híbridos para iOS e Android com foco na experiência do usuário.",
    },
    {
      icon: <Code size={28} />,
      title: "Software Personalizado",
      description:
        "Soluções de software sob medida para atender às necessidades específicas do seu negócio.",
    },
    {
      icon: <Database size={28} />,
      title: "Sistemas e APIs",
      description:
        "Desenvolvimento de sistemas robustos, APIs RESTful e integração com serviços terceiros.",
    },
    {
      icon: <Zap size={28} />,
      title: "Automação e Integração",
      description:
        "Automatização de processos e integração entre diferentes sistemas e plataformas.",
    },
    {
      icon: <Shield size={28} />,
      title: "Segurança Digital",
      description:
        "Implementação de melhores práticas de segurança e proteção de dados em suas aplicações.",
    },
  ];

  return (
    <div className="flex flex-col items-center bg-[#191919]  px-6">
      <div className="flex flex-col items-center w-full max-w-7xl text-gray-300 my-20 gap-12">
        <div className="text-center max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold">
            Nossos <span className="text-amber-400">Serviços</span>
          </h1>
          <p className="text-lg text-gray-400 mt-4">
            Oferecemos soluções completas de desenvolvimento para transformar
            suas ideias em realidade digital com tecnologia de ponta.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-[#202020] p-8 rounded-2xl gap-4  hover:bg-[#2a2a2a] transition-all duration-200 hover:scale-102">
              <div className="bg-amber-600/10 p-4 rounded-full text-amber-400">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold">{service.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
