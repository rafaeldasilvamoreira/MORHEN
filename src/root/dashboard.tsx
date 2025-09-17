import { ArrowRight, CircleCheckBig } from "lucide-react";

export const Dashboard = () => {
    const optionServices = [
        { title: "Desenvolvimento Web" },
        { title: "Aplicativos Móveis" },
        { title: "Soluções Personalizadas" },
    ];

    return (
        <div className="flex flex-col items-center text-gray-300 bg-[#191919] ">
            <div className="flex flex-col items-center gap-10 mb-8 w-full max-w-7xl px-6">
                <div className="flex w-full h-1 bg-amber-400">
                    <br />
                </div>
                <div className="text-center my-4">
                    <h1 className="text-6xl md:text-7xl sm:4xl font-extrabold tracking-tight">
                        MORHEN
                    </h1>
                    <h2 className="text-lg md:text-xl sm:text-md font-light tracking-widest text-gray-400">
                        DEVELOPMENT AND TECHNOLOGY
                    </h2>
                </div>
                <div className="flex flex-col md:flex-row gap-10 items-center">
                    <div className="flex flex-col text-gray-300 gap-6 flex-1">
                        <div className="flex flex-col gap-4">
                            <h2 className="text-3xl md:text-4xl font-bold leading-snug">
                                Transformamos suas ideias em{" "}
                                <span className="text-amber-400">soluções digitais</span> inovadoras
                            </h2>
                            <p className="text-lg text-gray-400">
                                Desenvolvimento de software personalizado, aplicações web e mobile
                                que impulsionam o crescimento do seu negócio digital.
                            </p>
                        </div>
                        <div className="flex ">
                            <a  href="#contact"
                                className="flex items-center justify-center gap-2 bg-amber-400 text-gray-900 font-semibold px-6 py-3 rounded-xl hover:bg-amber-400/80 shadow-lg transition duration-300">
                                Solicitar Orçamento
                                <ArrowRight size={18} />
                            </a>                       
                        </div>
                    </div>
                    <div className="flex flex-col  w-full md:w-1/3 gap-6 ">
                        {optionServices.map((service, index) => (
                            <div
                                key={index}
                                className="flex items-center bg-[#202020] gap-4 p-5 rounded-xl hover:bg-[#2a2a2a] transition-all duration-200 ">
                                <CircleCheckBig className="text-amber-400" />
                                <h3 className="font-semibold">{service.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
