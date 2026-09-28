"use client";
import { useState } from "react";

export default function ServiceSelector() {
  const [vehicleType, setVehicleType] = useState("auto");
  const [serviceType, setServiceType] = useState("Talachera / Ponchadura");
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const requestData = {
      vehicleType,
      serviceType,
      location,
      timestamp: new Date().toISOString(),
    };

    console.log("Datos listos para enviar al backend:", requestData);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      alert("Solicitud procesada con éxito (Simulación)");
    } catch (error) {
      console.error("Error al conectar con el backend:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-4xl mx-auto my-8 bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-gray-100">
        <div>
          <span className="text-xs uppercase tracking-wider font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
            Asistencia Vial y Talleres Hub
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-2">
            Solicitar Auxilio Inmediato
          </h2>
          <p className="text-sm text-gray-500">
            Respuesta inmediata en tu ubicación con tarifas transparentes.
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs font-medium text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full self-start sm:self-auto">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          Red activa 24/7
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-6">
        <button
          type="button"
          onClick={() => setVehicleType("auto")}
          className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-medium text-sm transition-all border ${
            vehicleType === "auto"
              ? "bg-blue-50/50 border-blue-600 text-blue-900 shadow-sm"
              : "bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100"
          }`}
        >
          Auto / Camioneta
        </button>
        <button
          type="button"
          onClick={() => setVehicleType("moto")}
          className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-medium text-sm transition-all border ${
            vehicleType === "moto"
              ? "bg-blue-50/50 border-blue-600 text-blue-900 shadow-sm"
              : "bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100"
          }`}
        >
          Motocicleta
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="space-y-1.5">
          <label className="text-xs font-bold uppercase tracking-wider text-gray-600">
            Servicio Requerido
          </label>
          <div className="relative">
            <select 
              value={serviceType}
              onChange={(e) => setServiceType(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600"
            >
              <option value="Talachera / Ponchadura">Talachera / Ponchadura</option>
              <option value="Paso de corriente">Paso de corriente</option>
              <option value="Grúa local">Grúa local</option>
              <option value="Cambio de llanta de refacción">Cambio de llanta de refacción</option>
              <option value="Falla mecánica general">Falla mecánica general</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
              ▼
            </div>
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-bold uppercase tracking-wider text-gray-600">
            Tu Ubicación
          </label>
          <div className="relative">
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Ingresa tu ubicación aquí"
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
              📍
            </span>
          </div>
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#29428f] hover:bg-[#203473] text-white font-semibold py-3.5 px-6 rounded-xl transition-colors shadow-md hover:shadow-lg flex items-center justify-center gap-2 text-base disabled:opacity-50"
      >
        {loading ? "Buscando auxilio..." : "Buscar auxilio cercano"}
      </button>

      <div className="mt-4 text-center">
        <p className="text-xs text-gray-400">
          Tarifas reguladas y supervisadas sin sobreprecios • Mecánicos verificados
        </p>
      </div>
    </form>
  );
}