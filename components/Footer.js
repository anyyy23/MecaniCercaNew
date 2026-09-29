import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-linear-to-r from-blue-950 to-blue-700 text-white px-8 py-10 mt-12">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between gap-8">

                <div className="flex flex-col gap-2 max-w-xs">
                    <div className="flex items-center">
                        <Image
                            className="w-10 h-10"
                            src="/img/mecani logo.png"
                            alt="MecaniCerca"
                            width={40}
                            height={40}
                        />
                        <h2 className="text-2xl font-extrabold ml-2">
                            <span className="text-black [-webkit-text-stroke:.2px_white]">Mecani</span>
                            <span className="text-blue-900 [-webkit-text-stroke:.2px_white]">Cerca</span>
                        </h2>
                    </div>
                    <p className="text-orange-400 font-bold text-sm">
                        ¿Problema vial? Solución ideal.
                    </p>
                    <p className="text-sm text-blue-200 mt-2">
                        Conectamos a personas con mecánicos, vulcanizadoras y grúas cercanas, las 24 horas.
                    </p>
                </div>

                <div className="flex flex-col gap-3 text-sm">
                    <span className="text-xs uppercase tracking-wider font-bold text-blue-300">
                        Navegación
                    </span>
                    <a href="#features" className="hover:text-orange-400">Características</a>
                    <a href="#about" className="hover:text-orange-400">Nosotros</a>
                    <a href="#emergency" className="hover:text-orange-400">Emergencia 911</a>
                </div>

                <div className="flex flex-col gap-2 text-sm text-blue-200">
                    <span className="text-xs uppercase tracking-wider font-bold text-blue-300">
                        Contacto
                    </span>
                    <p>contacto@mecanicerca.com</p>
                    <p>Toluca, México</p>
                </div>
            </div>

            <p className="text-center text-xs text-blue-300 mt-8">
                © {new Date().getFullYear()} MecaniCerca. Todos los derechos reservados.
            </p>
        </footer>
    )
}
