import Link from "next/link";
export default function LoginPage() {
  return (
    <main className="relative flex min-h-screen items-center overflow-hidden justify-center bg-background bg-off-white px-6 py-12 text-on-surface">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-400/60 blur-3xl"></div>
      <div className="relative z-10 w-full max-w-md">
        <Link href="/" className="mb-10 flex items-center justify-center gap-3">
          <span className="material-symbols-rounded text-4xl text-blue-950">
            Build*
          </span>
          <span className="font-mono text-2xl font-bold tracking-light text-blue-950">
            Mecani
            <span className="text-orange-400">Cerca </span>
          </span>
        </Link>
        <div className="rounded-2xl border border-outline-variant/20  p-8 shadow-2xl bg-linear-to-r from-blue-950 to-blue-800">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold tracking-light">Hola!</h1>
            <p className="mt-3 text-sm text-on-surface-variant">
              Inicia sesión para continuar a tu cuenta
            </p>
          </div>
          <form className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium "
              >
                Correo electrónico
              </label>
              <input
                id="email"
                type="email"
                placeholder="ejemplo@correo.com"
                autoComplete="email"
                required
                className="w-full rounded-lg border border-outline-variant/30 bg-background px-4 py-3 text-sm text-on-surface outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 placeholder:text-gray-400"
              />
            </div>
            <div>
              <div className="mb-2 flex items-center justify-between">
                <label htmlFor="password" className="text-sm font-medium">
                  Contraseña
                </label>
                <Link href="#" className="text-sm text-primary hover:underline">
                  ¿Olvidaste tu contraseña?
                </Link>
              </div>
              <input
                id="password"
                type="password"
                placeholder="********"
                autoComplete="current-password"
                required
                className="w-full rounded-lg border border-outline-variant/30 bg-background px-4 py-3 text-sm text-on-surface outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 placeholder:text-gray-400"
              />
            </div>
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 font-semibold text-on-primary transition hover:opacity-90"
            >
              Iniciar sesión
              <span className="material-symbols-rounded text-xl">
                arrow_forward
              </span>
            </button>
          </form>
        </div>
        <p className="mt-8 text-center text-xs text-on-surface-variant text-gray-400">
          {new Date().getFullYear()} MecaniCerca. Todos los derechos reservados.
        </p>
      </div>
    </main>
  );
}
