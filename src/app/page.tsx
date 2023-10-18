"use client";
import { useState } from "react";
import { NextUIProvider } from "@nextui-org/react";
import Header from "@/components/header/Header";
import Resumen from "@/components/resumen/Resumen";
import Loading from "@/components/Loading/Loading";
import Footer from "@/components/footer/Footer";
import Error from "@/components/resumen/Error";
import WelcomeMessage from "@/components/welcome/WelcomeMessage";

export default function Home() {
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (query: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const apiKey = "a929b4374165be80aa53c4093609b089";
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}`
      );
      const data = await response.json();

      console.log(data);

      if (response.ok) {
        setWeatherData(data);
      } else {
        setError(data.message);
      }
    } catch (error) {
      console.error(error);
      setError("An error occurred while fetching the weather data.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <NextUIProvider>
        <main>
          <Header onSearch={handleSearch} />
          <section className="flex flex-col items-center mt-8">
            {isLoading ? (
              <Loading />
            ) : error ? (
              <Error message={error} />
            ) : weatherData ? (
              <Resumen weatherData={weatherData} />
            ) : (
              <WelcomeMessage />
            )}
          </section>
          <Footer />
        </main>
      </NextUIProvider>
    </>
  );
}
