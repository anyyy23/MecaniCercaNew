import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-gray-50">
      <div className="flex items-center">
        <Image
          className="w-12 h-12 ml-5"
          src="/img/mecani logo.png"
          alt="MecaniCerca"
          width={40}
          height={40}
        />

        <div className="flex flex-col">
          <h2 className="text-3xl font-extrabold px-4">
            <span className="text-black">Mecani</span>
            <span className="text-blue-900">Cerca</span>
          </h2>

          <h3 className="flex text-orange-500 font-bold">
            ¿Problema vial? Solución ideal.
          </h3>
        </div>
      </div>

      <div className="flex gap-6 text-blue-900 px-8 my-2">
        <span className="flex items-center text-blue-950 bg-gray-200 rounded-full p-3">
          <a href="#features">Características</a>

          <svg className="w-6 h-6 text-red-500 mr-2 ml-2" viewBox="0 0 24 24">
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 6h11M9 12h11M9 18h11M5 6v.01M5 12v.01M5 18v.01"
            />
          </svg>
        </span>

        {/*   <a
          href="#about"
          className="flex items-center text-blue-950 bg-gray-200 rounded-full p-3"
        >
          <span className="material-symbols-rounded">info</span>
          Nosotros
        </a>
        */}
        <span className="flex items-center gap-2 text-red-800 bg-red-200 rounded-full p-3 px-3.5">
          <a href="#emergency">Emergencia 911</a>

          <svg className="w-7 h-7 text-red-800" viewBox="0 0 256 256">
            <path
              fill="currentColor"
              d="m222.37 158.46l-47.11-21.11l-.13-.06a16 16 0 0 0-15.17 1.4a8.12 8.12 0 0 0-.75.56L134.87 160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16 16 0 0 0 1.32-15.06v-.12L97.54 33.64a16 16 0 0 0-16.62-9.52A56.26 56.26 0 0 0 32 80c0 79.4 64.6 144 144 144a56.26 56.26 0 0 0 55.88-48.92a16 16 0 0 0-9.51-16.62ZM176 208A128.14 128.14 0 0 1 48 80a40.2 40.2 0 0 1 34.87-40a.61.61 0 0 0 0 .12l21 47l-20.67 24.74a6.13 6.13 0 0 0-.57.77a16 16 0 0 0-1 15.7c9.06 18.53 27.73 37.06 46.46 46.11a16 16 0 0 0 15.75-1.14a8.44 8.44 0 0 0 .74-.56L168.89 152l47 21.05h.11A40.21 40.21 0 0 1 176 208Z"
            />
          </svg>
        </span>

        <Link
          href="/login"
          className="flex items-center text-blue-950 bg-gray-200 rounded-full p-3"
        >
          <span className="material-symbols-rounded">login</span>
          Login
        </Link>
      </div>
    </nav>
  );
}
