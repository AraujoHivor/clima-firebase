
import { useEffect, useState } from "react";
import { obtenerClima } from "../services/climaService";
import type { Clima } from "../types/Clima";

export default function useFetchData(ciudad: string) {

  const [clima, setClima] = useState<Clima | null>(null);

  useEffect(() => {

    if (!ciudad) {
      return;
    }

    async function cargarDatos() {
      const datos = await obtenerClima(`clima/${ciudad}`);
      setClima(datos);
    }

    cargarDatos();

  }, [ciudad]);

  return { clima };
}
