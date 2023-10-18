import { LiaTemperatureHighSolid, LiaTemperatureLowSolid } from "react-icons/lia";

interface TempDetailsProps {
    temp_max: number;
    temp_min: number;
  }
  
  const TempDetails: React.FC<TempDetailsProps> = ({ temp_max, temp_min }) => {
    return (
      <section className="flex flex-row items-center justify-center gap-4 mt-6 sm:mt-0">
                <div className="flex flex-col items-center bg-[#f9f9f9] p-3 rounded-2xl w-1/2">
          <LiaTemperatureHighSolid className="text-[#dc63e6] text-4xl" />
          <div className="flex flex-col items-center justify-center">
            <span className="text-neutral-500 text-sm text-center">Max Temp</span>
            <span className="text-black text-sm font-medium mb-1">
            {Math.round(temp_max - 273.15)}°
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center bg-[#f9f9f9] p-3 rounded-2xl w-1/2">
          <LiaTemperatureLowSolid className="text-[#dc63e6] text-4xl" />
          <div className="flex flex-col items-center justify-center">
            <span className="text-neutral-500 text-sm text-center">Min Temp</span>
            <span className="text-black text-sm font-medium mb-1">
            {Math.round(temp_min - 273.15)}°
            </span>
          </div>
        </div>
      </section>
    );
  }

  export default TempDetails;