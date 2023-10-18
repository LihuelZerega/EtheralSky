import React from "react";
import { WiDaySunny, WiCloud, WiRain, WiSnow, WiFog } from "react-icons/wi";
import { format } from "date-fns";
import TempDetails from "./TempDetails";
import WeatherDetails from "./WeatherDetails";
import SunDetails from "./SunDetails";

interface ResumenProps {
  weatherData: any;
}

function getWeatherIcon(id: number) {
  if (id >= 200 && id < 300) {
    return <WiRain />;
  } else if (id >= 300 && id < 500) {
    return <WiRain />;
  } else if (id >= 500 && id < 600) {
    return <WiRain />;
  } else if (id >= 600 && id < 700) {
    return <WiSnow />;
  } else if (id >= 700 && id < 800) {
    return <WiFog />;
  } else if (id === 800) {
    return <WiDaySunny />;
  } else if (id >= 801 && id < 805) {
    return <WiCloud />;
  } else {
    return <WiDaySunny />;
  }
}

function Resumen({ weatherData }: ResumenProps) {
  if (!weatherData) {
    return <p>No data available</p>;
  }

  const {
    dt,
    main: { temp, feels_like, pressure, humidity, temp_max, temp_min },
    weather,
    wind: { speed: wind_speed, deg: wind_deg },
    visibility,
    name,
    sys: { sunrise, sunset },
  } = weatherData;

  const sunriseTime = new Date(sunrise * 1000);
  const sunsetTime = new Date(sunset * 1000);

  const formattedSunrise = format(sunriseTime, "HH:mm:ss");
  const formattedSunset = format(sunsetTime, "HH:mm:ss");

  const weatherIcon = getWeatherIcon(weather[0].id);
  const currentDate = new Date(dt * 1000);
  const formattedDate = format(currentDate, "PPpp");

  return (
    <div className="flex flex-col sm:flex-row justify-center w-5/6 sm:w-3/6 py-6 gap-2">
      <section className="flex flex-col-reverse w-full md:w-1/2 bg-gradient-to-r from-[#dc63e6] to-[#9964ec] p-6 rounded-3xl shadow-md">
          <div className="flex justify-between items-center xl:h-1/2">
            <div className="flex items-center justify-center text-8xl md:text-9xl text-white w-1/2">
              {weatherIcon}
            </div>

            <div className="flex flex-col items-center justify-center text-white w-1/2">
              <span className="text-6xl font-semibold">
                {Math.round(temp - 273.15)}°
              </span>
              <span>
                <span>Feels Like {Math.round(feels_like - 273.15)}°</span>
              </span>
            </div>
          </div>

          <div className="flex flex-col justify-center text-white md:h-1/2">
            <span className="font-semibold 2xl:text-3xl">{name}</span>
            <span className="capitalize text-sm md:text-3xl 2xl:text-4xl font-light">
              {weather[0].description}
            </span>
            <span className="text-xs 2xl:text-xl">{formattedDate}</span>
          </div>
      </section>

      <section className="w-full xl:w-1/2">
        <TempDetails temp_max={temp_max} temp_min={temp_min} />
        <WeatherDetails
          pressure={pressure}
          humidity={humidity}
          wind_speed={wind_speed}
        />
        <SunDetails sunrise={formattedSunrise} sunset={formattedSunset} />
      </section>

    </div>
  );
}

export default Resumen;
