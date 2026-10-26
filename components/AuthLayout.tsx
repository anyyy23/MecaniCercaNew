import Link from "next/link";
import type { ReactNode } from "react";
type AuthLayoutProps = {
  title: string;
  description: string;
  mode: "login" | "signup";
  children: ReactNode;
};

export default function AuthLayout({
  title,
  description,
  mode,
  children,
}: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-on-surface text-black">
      <header className="w-full border-b border-blue-900 bg-linear-to-r from-blue-950 to-blue-700 text-white shadow-lg">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">
              build*
            </span>
            <span className="font-semibold">MecaniCerca</span>
          </Link>

          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-on-surface-variant transition-colors hover:text-primary"
          >
            <span className="material-symbols-outlined">arrow_back</span>
            Volver al explorador
          </Link>
        </div>
      </header>

      <main className="flex flex-1 items-center justify-center px-4 py-10 text-white">
        <div className="w-full max-w-[480px] rounded-xl border border-outline-variant/40 bg-surface-container-low p-6 shadow-xl md:p-8 bg-blue-900">
          <div className="mb-6 text-center">
            <h1 className="mb-2 text-2xl font-semibold">{title}</h1>

            <p className="text-sm text-on-surface-variant">{description}</p>
          </div>

          <div className="my-6 flex items-center gap-3">
            <div className="flex-1 border-t border-outline-variant/30" />

            <span className="text-xs uppercase text-outline">
              Ingresa con correo
            </span>

            <div className="flex-1 border-t border-outline-variant/30" />
          </div>
          {/*insertar forulario */}
          {children}
          <div className="mt-6 border-t border-outline-variant/20 pt-5 text-center">
            <p className="text-sm text-on-surface-variant">
              {mode === "login"
                ? "¿No tienes una cuenta aún?"
                : "¿Ya tienes una cuenta?"}

              <Link
                href={mode === "login" ? "/registro" : "/login"}
                className="ml-1 font-semibold text-primary hover:underline"
              >
                {mode === "login" ? "Registrarse" : "Iniciar sesión"}
              </Link>
            </p>
          </div>
        </div>
      </main>
      {/**footer 
      <footer className="border-t border-outline-variant/20 px-4 py-5 text-center text-sm text-gray-300">
        {new Date().getFullYear()} MecaniCerca. Todos los derechos reservados.
      </footer>
      */}
    </div>
  );
}
