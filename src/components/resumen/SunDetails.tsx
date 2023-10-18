import { WiSunrise, WiSunset } from "react-icons/wi";

interface SunDetailsProps {
  sunrise: string;
  sunset: string;
}

const SunDetails: React.FC<SunDetailsProps> = ({ sunrise, sunset }) => {

  return (
    <section className="flex flex-row gap-4">
      <div className="flex flex-col items-center bg-[#f9f9f9] p-3 rounded-2xl w-1/2">
        <WiSunrise className="text-[#dc63e6] text-5xl" />
        <div className="flex flex-col items-center justify-center">
          <span className="text-neutral-500 text-sm">Sunrice</span>
          <span className="text-black text-sm font-medium mb-1">
            {sunrise}
          </span>
        </div>
      </div>

      <div className="flex flex-col items-center bg-[#f9f9f9] p-3 rounded-2xl w-1/2">
        <WiSunset className="text-[#dc63e6] text-5xl" />
        <div className="flex flex-col items-center justify-center">
          <span className="text-neutral-500 text-sm">Sunset</span>
          <span className="text-black text-sm font-medium mb-1">
            {sunset}
          </span>
        </div>
      </div>
    </section>
  );
};

export default SunDetails;