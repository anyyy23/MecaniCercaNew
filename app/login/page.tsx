import Link from "next/link";
import AuthForm from "@/components/AuthForm";

export default function LoginPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background bg-off-white px-6 py-12 text-on-surface">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-400/60 blur-3xl"></div>

      <div className="relative z-10 w-full max-w-md">
        <Link href="/" className="mb-10 flex items-center justify-center gap-3">
          <span className="material-symbols-rounded text-4xl text-blue-950">
            build
          </span>
          <span className="font-mono text-2xl font-bold tracking-light text-blue-950">
            Mecani
            <span className="text-orange-400">Cerca </span>
          </span>
        </Link>

        <div className="rounded-2xl border border-outline-variant/20 p-8 shadow-2xl bg-linear-to-r from-blue-950 to-blue-800">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold tracking-light text-white">
              ¡Hola!
            </h1>
            <p className="mt-3 text-sm text-on-surface-variant text-gray-200">
              Inicia sesión para continuar a tu cuenta
            </p> 
          </div>

          <AuthForm mode="login" />
        </div>

        <p className="mt-8 text-center text-xs text-on-surface-variant text-gray-400">
          {new Date().getFullYear()} MecaniCerca. Todos los derechos reservados.
        </p>
      </div>
    </main>
  );
}
