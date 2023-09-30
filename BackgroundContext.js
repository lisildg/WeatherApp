import React, { createContext, useContext, useEffect, useState } from "react";

const BackgroundContext = createContext();

export const useBackground = () => {
  return useContext(BackgroundContext);
};

export const BackgroundProvider = ({ children, sunriseTime, sunsetTime }) => {
  const [background, setBackground] = useState("bg-cover bg-gradient-to-r from-blue-500 to-blue-300 h-fit");

  useEffect(() => {
    const updateBackground = () => {
      const now = new Date();

      if (now && sunsetTime && !isNaN(now) && !isNaN(sunsetTime)) {
        // Cambia el fondo según la hora actual
        if (now < sunriseTime) {
          setBackground("bg-cover bg-gradient-to-r from-blue-500 to-blue-300 h-fit");
        } else if (now < sunsetTime) {
          setBackground("bg-cover bg-gradient-to-r from-red-400 via-orange-600 to-yellow-500 h-fit");
        } else if (now.getHours() === sunsetTime.getHours() + 1) {
          setBackground("bg-cover bg-gradient-to-r from-sky-950 via-indigo-900 to-indigo-950 h-fit");
        }
      } else {
        console.error("Los objetos Date no son válidos.");
      }
    };
  

    // Llama a la función para establecer el fondo inicial
    updateBackground();

    // Actualiza el fondo cada minuto para seguir el tiempo real
    const interval = setInterval(updateBackground, 60000);

    return () => clearInterval(interval);
  }, [sunriseTime, sunsetTime]);

  return (
    <BackgroundContext.Provider value={background}>
      {children}
    </BackgroundContext.Provider>
  );
};
