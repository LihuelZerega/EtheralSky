import { BiWind } from "react-icons/bi";
import { BsCloudHaze, BsMoisture } from "react-icons/bs";

interface WeatherDetailsProps {
  pressure: number;
  humidity: number;
  wind_speed: number;
}

const WeatherDetails: React.FC<WeatherDetailsProps> = ({
  pressure,
  humidity,
  wind_speed,
}) => {
  return (
    <section className="flex flex-row items-end justify-between rounded-xl my-6 gap-3">
      <div className="flex flex-col items-center justify-center bg-[#f9f9f9] p-3 rounded-2xl w-[100px] h-[120px] sm:w-[120px] md:w-[140px] lg:w-[160px] xl:w-[180px] 2xl:w-[200px]">
        <BsCloudHaze className="text-[#dc63e6] text-3xl" />
        <div className="flex flex-col items-center justify-center">
          <span className="text-neutral-500 text-sm my-1">Pressure</span>
          <span className="text-black text-sm font-medium mb-1">
            {pressure} hPa{" "}
          </span>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center bg-[#f9f9f9] p-3 rounded-2xl w-[100px] h-[120px] sm:w-[120px] md:w-[140px] lg:w-[160px] xl:w-[180px] 2xl:w-[200px]">
        <BsMoisture className="text-[#dc63e6] text-3xl" />
        <div className="flex flex-col items-center justify-center">
          <span className="text-neutral-500 text-sm my-1">Moisture</span>
          <span className="text-black text-sm font-medium mb-1">
            {humidity}%
          </span>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center bg-[#f9f9f9] p-3 rounded-2xl w-[100px] h-[120px] sm:w-[120px] md:w-[140px] lg:w-[160px] xl:w-[180px] 2xl:w-[200px]">
        <BiWind className="text-[#dc63e6] text-3xl" />
        <div className="flex flex-col items-center justify-center">
          <span className="text-neutral-500 text-sm my-1">Wind</span>
          <span className="text-black text-sm font-medium mb-1">
            {(wind_speed * 3.6).toFixed(2)} km/h{" "}
          </span>
        </div>
      </div>
    </section>
  );
};

export default WeatherDetails;