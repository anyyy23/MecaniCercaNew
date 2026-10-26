"use client";

import Link from "next/link";
import { useState } from "react";


export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const inputClasses = "w-full rounded-lg border border-outline-variant/30 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 placeholder:text-gray-400 pr-12";
  const buttonClasses = "flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 font-semibold text-on-primary transition hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed";
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
        <div className="rounded-2xl border border-outline-variant/20 p-8 shadow-2xl bg-linear-to-r from-blue-950 to-blue-800">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold tracking-light">Regístrate</h1>
            <p className="mt-3 text-sm text-on-surface-variant">
              Crea una cuenta para comenzar
            </p>
          </div>
          <form className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium"
              >
                Nombre completo
              </label>
              <input
                id="name"
                type="text"
                placeholder="Tu nombre"
                autoComplete="name"
                required
                className={inputClasses}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium"
              >
                Correo electrónico
              </label>
              <input
                id="email"
                type="email"
                placeholder="ejemplo@correo.com"
                autoComplete="email"
                required
                className={inputClasses}
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium"
              >
                Contraseña
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="********"
                  autoComplete="new-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={inputClasses}
/>
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-on-surface outline-none"
                >
                  <span className="material-symbols-rounded text-xl">
                    {showPassword ? "visibility_off" : "visibility"}
                  </span>
                </button>
              </div>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="mb-2 block text-sm font-medium">
                Confirmar contraseña
              </label>
              <div className="relative">
                <input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="********"
                  autoComplete="new-password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className={inputClasses}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-on-surface outline-none"
                >
                  <span className="material-symbols-rounded text-xl">
                    {showConfirmPassword ? "visibility_off" : "visibility"}
                  </span>
                </button>
              </div>
              {confirmPassword.length > 0 && password !== confirmPassword && (
                <p className="mt-1 text-xs text-red-500">Las contraseñas no coinciden.</p>
              )}
            </div>
            <button
              type="submit"
              disabled={!password || password !== confirmPassword}
              className={buttonClasses}>
              Registrarse
              <span className="material-symbols-rounded text-xl">
                arrow_forward
              </span>
            </button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-sm text-on-surface-variant">
              ¿Ya tienes una cuenta?{" "}
              <Link href="/login" className="font-semibold text-primary hover:underline">
                Inicia sesión
              </Link>
            </p>
          </div>
        </div>
        <p className="mt-8 text-center text-xs text-on-surface-variant text-gray-400">
          {new Date().getFullYear()} MecaniCerca. Todos los derechos reservados.
        </p>
      </div>
    </main>
  );
}