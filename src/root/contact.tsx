import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

export const ContactPage = () => {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [company, setCompany] = useState("");
    const [mensagem, setMensagem] = useState("");

    function enviarWhatsApp() {
        const telefone = "5519993584612"; // <-- coloque seu número aqui       
        const texto = `
        *• Nome:* ${nome}
        *• E-mail:* ${email}
        *• Telefone:* ${telefone} {*Arrumar*}
        *• Mensagem:* ${mensagem}
        `;
        const url = `https://wa.me/${telefone}?text=${encodeURIComponent(texto)}`;
        window.open(url, "_blank"); // abre em nova aba
    }

    return (
        <div id='contact' className="flex flex-col items-center text-gray-300 bg-[#191919] px-6">
            <div className="flex flex-col items-center gap-10 my-16 w-full max-w-7xl">
                <h1 className="text-4xl font-bold text-center">
                    Entre em <span className="text-amber-400">Contato</span>
                </h1>
                <p className="text-lg text-gray-400 text-center max-w-2xl max-sm:text-center max-sm:text-sm">
                    Pronto para dar vida às suas ideias? Vamos conversar sobre como podemos desenvolver a solução digital perfeita para você.
                </p>
                <div className="flex flex-col md:flex-row bg-[#1f1f1f] rounded-2xl shadow-lg w-full overflow-hidden">
                    <div className="flex flex-col flex-1 p-8 gap-6">
                        <h2 className="text-2xl font-semibold text-amber-400 max-sm:w-full">Envie sua mensagem</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <label className="flex flex-col gap-2">
                                <span>Nome:</span>
                                <input
                                    value={nome}
                                    onChange={(e) => setNome(e.target.value)}
                                    type="text"
                                    className="border border-gray-600 bg-transparent p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400"
                                    placeholder="Seu nome"
                                />
                            </label>
                            <label className="flex flex-col gap-2">
                                <span>Email:</span>
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email"
                                    className="border border-gray-600 bg-transparent p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400"
                                    placeholder="Seu email"
                                />
                            </label>
                        </div>
                        <label className="flex flex-col gap-2">
                            <span>Empresa:</span>
                            <input
                                value={company}
                                onChange={(e) => setCompany(e.target.value)}
                                type="text"
                                className="border border-gray-600 bg-transparent p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400"
                                placeholder="Sua empresa"
                            />
                        </label>
                        <label className="flex flex-col gap-2">
                            <span>Mensagem:</span>
                            <textarea
                                value={mensagem}
                                onChange={(e) => setMensagem(e.target.value)}
                                rows={5}
                                className="border border-gray-600 bg-transparent p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 resize-none"
                                placeholder="Digite sua mensagem..."
                            />
                        </label>
                        <button onClick={enviarWhatsApp}
                            className="bg-amber-400 hover:bg-amber-500 transition text-gray-900 font-semibold py-3 rounded-xl cursor-pointer">
                            Enviar Mensagem
                        </button>
                    </div>
                    <div className="flex-1 bg-[#252525] p-8 flex flex-col  gap-6">
                        <h2 className="text-2xl font-semibold text-amber-400">Informações de contato</h2>
                        <p className="text-gray-400">Entre em contato diretamente pelos canais abaixo:</p>
                        <ul className="space-y-3">
                            <li className="flex gap-2"><Mail className="text-amber-400" /> contato@seudominio.com</li>
                            <li className="flex gap-2"><Phone className="text-amber-400" /> (11) 99999-9999</li>
                            <li className="flex gap-2"><MapPin className="text-amber-400" /> Rua Exemplo, 123 - São Paulo/SP</li>
                        </ul>
                        <div className="flex flex-1 w-full  ">
                            <iframe
                                className="rounded-xl"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.7418396746146!2d-46.655981!3d-23.581472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59cceaf6c7e7%3A0x123456789abcdef!2sAv.%20Paulista%2C%20São%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1697045200000!5m2!1spt-BR!2sbr"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>

                </div>
            </div>
            <footer className="w-full max-w-7xl bg-[#191919]">
                <div className="border-t border-gray-700">
                    <p className="text-center text-gray-500 text-sm py-4 px-6">
                        © {new Date().getFullYear()} MORHEN - Development and Technology. Todos os direitos reservados.
                    </p>
                </div>
            </footer>
        </div>
    );
};
