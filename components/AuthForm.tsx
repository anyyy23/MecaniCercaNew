"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

type AuthFormProps = {
  mode: "login" | "signup";
};

export default function AuthForm({ mode }: AuthFormProps) {
  const esRegistro = mode === "signup";
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const labelClass = "block text-sm font-medium text-on-surface-variant";

  const inputClass =
    "w-full rounded-lg border border-gray-400 bg-surface-container-lowest px-4 py-3 text-sm text-gray-900 text-on-surface placeholder-gray-400 outline-none transition focus:border-primary focus:ring-2 focus:ring-border-blue-500 focus:ring-blue-200 bg-white";

  const iconContainerClass =
    "absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400 pointer-events-none";

  const pwdBtnClass =
    "absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-on-blue-800";

  async function sendForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (esRegistro && password !== confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    setLoading(true);

    try {
      if (esRegistro) {
        // Crear cuenta en Firebase
        const resultado = await createUserWithEmailAndPassword(
          auth,
          email.trim(),
          password,
        );

        // Guardar nombre del usuario
        await updateProfile(resultado.user, {
          displayName: name.trim(),
        });

        console.log("Usuario registrado correctamente:", resultado.user.uid);
      } else {
        // Iniciar sesión en Firebase
        await signInWithEmailAndPassword(auth, email.trim(), password);
      }

      router.replace("/dashboard");
    } catch (error) {
      console.error("Error de Firebase Auth:", error);

      if (error instanceof Error) {
        switch ((error as { code?: string }).code) {
          case "auth/email-already-in-use":
            setError("Este correo ya está registrado.");
            break;

          case "auth/invalid-email":
            setError("El correo electrónico no es válido.");
            break;

          case "auth/weak-password":
            setError("La contraseña debe tener al menos 6 caracteres.");
            break;

          case "auth/invalid-credential":
            setError("Correo o contraseña incorrectos.");
            break;

          case "auth/user-not-found":
            setError("No existe una cuenta con este correo.");
            break;

          case "auth/wrong-password":
            setError("La contraseña es incorrecta.");
            break;

          default:
            setError("Ocurrió un error. Intenta nuevamente.");
        }
      } else {
        setError("Ocurrió un error inesperado.");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="space-y-4" onSubmit={sendForm}>
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
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
            className={`${inputClass} pl-10`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
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
            autoComplete={esRegistro ? "new-password" : "current-password"}
            placeholder="••••••••"
            required
            className={`${inputClass} pl-10 pr-10`}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

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

      {/* Confirmar contraseña */}
      {esRegistro && (
        <div className="space-y-1.5">
          <label htmlFor="confirmPassword" className={labelClass}>
            Confirmar contraseña
          </label>

          <div className="relative">
            <div className={iconContainerClass}>
              <span className="material-symbols-outlined">lock</span>
            </div>

            <input
              id="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              autoComplete="new-password"
              placeholder="••••••••"
              required
              className={`${inputClass} pl-10 pr-10`}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

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

      {/* Mantener sesión: solo en login */}
      {!esRegistro && (
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            id="remember"
            name="remember"
            type="checkbox"
            className="h-4 w-4 rounded accent-primary"
          />

          <span className="text-sm text-on-surface-variant">
            Mantener sesión activa
          </span>
        </label>
      )}

      {/* Mensaje de error */}
      {error && (
        <p className="text-red-500 text-sm" role="alert">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 rounded-lg bg-primary-container px-4 py-3 font-semibold text-on-primary hover:opacity-90 transition cursor-pointer disabled:opacity-50"
      >
        <span>
          {loading
            ? "Procesando..."
            : esRegistro
              ? "Crear cuenta"
              : "Iniciar sesión"}
        </span>

        <span className="material-symbols-outlined">
          {esRegistro ? "person_add" : "arrow_forward"}
        </span>
      </button>

      {!esRegistro && (
        <p className="text-center text-sm text-on-surface-variant">
          ¿No tienes cuenta?{" "}
          <Link
            href="/signup"
            className="font-semibold text-orange-600 hover:underline"
          >
            Regístrate
          </Link>
        </p>
      )}
    </form>
  );
}
