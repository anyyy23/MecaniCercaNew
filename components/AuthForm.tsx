"use client";
import Link from "next/link";
import { useState } from "react";
type AuthFormProps = {
  mode: "login" | "signup";
};

export default function AuthForm({ mode }: AuthFormProps) {
  const esRegistro = mode === "signup";
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const labelClass = "block text-sm font-medium text-on-surface-variant";
  const inputClass =
    "w-full rounded-lg border border-gray-400 bg-surface-container-lowest px-4 py-3 text-sm text-gray-900 text-on-surface placeholder-gray-400 outline-none transition focus:border-primary focus:ring-2 focus:ring-border-blue-500 focus:ring-blue-200 bg-white";
  const iconContainerClass =
    "absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400 pointer-events-none";
  const pwdBtnClass =
    "absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-on-blue-800";
  return (
    <form className="space-y-4">
      {esRegistro && (
        <div className="space-y-1.5">
          <label htmlFor="nombre" className={labelClass}>
            Nombre completo
          </label>

          <input
            className={inputClass}
            id="nombre"
            type="text"
            autoComplete="name"
            placeholder="Nombre completo"
            required
          ></input>
        </div>
      )}
      <div className="space-y-1.5">
        <label htmlFor="email" className={labelClass}>
          Correo
        </label>
        <div className="relative">
          <div className={iconContainerClass}>
            <span className="material-symbols-outlined">mail</span>
          </div>
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="ejemplo@correo.com"
            required
            className={`${inputClass} pl-10 `}
          ></input>
        </div>
      </div>
      <div className="space-y-1.5">
        <div className="flex items-center justify-between">
          <label htmlFor="password" className={labelClass}>
            Contraseña
          </label>

          {esRegistro && (
            <Link
              href="/recuperar"
              className="text-xs text-primary hover:underline"
            >
              Recuperar contraseña
            </Link>
          )}
        </div>

        <div className="relative">
          <div className={iconContainerClass}>
            <span className="material-symbols-outlined">lock</span>
          </div>

          <input
            id="password"
            type={showPassword ? "text" : "password"}
            autoComplete={esRegistro ? "new-password" : "current_password"}
            placeholder="••••••••"
            required
            className={`${inputClass} pl-10 pr-10`}
          ></input>
          <button
            type="button"
            className={pwdBtnClass}
            onClick={() => setShowPassword((valor) => !valor)}
          >
            <span className="material-symbols-outlined">
              {showPassword ? "visibility_off" : "visibility"}
            </span>
          </button>
        </div>
      </div>
      {/*confirmar contraseña*/}
      {esRegistro && (
        <div className="space-y-1.5">
          <label htmlFor="confirmPassword" className={labelClass}>
            Confirmar constraseña
          </label>
          <div className="relative">
            <div className={iconContainerClass}>
              <span className="material-symbols-outlined">lock</span>
            </div>

            <input
              id="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              autoComplete="new-password"
              placeholder="•••••••"
              required
              className={`${inputClass} pl-10 pr-10`}
            ></input>
            <button
              type="button"
              className={pwdBtnClass}
              onClick={() => setShowConfirmPassword((valor) => !valor)}
            >
              <span className="material-symbols-outlined">
                {showConfirmPassword ? "visibility_off" : "visibility"}
              </span>
            </button>
          </div>
        </div>
      )}
      {/*mantenr sesion:solo en login*/}
      {!esRegistro && (
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            id="remember"
            name="remember"
            type="checkbox"
            className="h-4 w-4 rounded accent-primary"
          ></input>
          <span className="text-sm text-on-surface-variant">
            Mantener sesión activa
          </span>
        </label>
      )}
      <button
        type="submit"
        disabled
        title="Autenticación integrará después"
        className="w-full flex items-center justify-center gap-2 rounded-lg bg-primary-container px-4 py-3 font-semibold text-on-primary opacity-70 cursor-not-allowed"
      >
        <span>{esRegistro ? "Crear cuenta" : "Acceder"}</span>

        <span className="material-symbols-outlined">
          {esRegistro ? "person_add" : "arrow_forward"}
        </span>
      </button>
      {!esRegistro && (
        <p className="text-center text-sm text-gray-900">
          ¿No tienes cuenta?{" "}
          <Link
            href="/signup"
            className="font-semibold text-blue-600 hover:underline"
          >
            Regístrate
          </Link>
        </p>
      )}
    </form>
  );
}
