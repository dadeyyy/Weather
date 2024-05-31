import RainfallIntensity from '@/components/rainfall/intensity';
import RainfallWarning from '@/components/rainfall/warning';
import Rainfallmm from '@/components/rainfall/rainfallmm';
import RecentData from '@/components/rainfall/recent';

export default function Home() {
  return (
    <div
      className="bg-cover bg-center h-100 sm:h-screen flex justify-center items-center"
      style={{
        backgroundImage: `url(/weather.webp)`,
      }}
    >
      <main className="container mx-auto backdrop-blur-md bg-slate-800 rounded-2xl opacity-80 h-full sm:h-4/5 text-white  flex flex-col sm:flex-row p-9 gap-10">
        <RecentData/>

        <div className=" w:full sm:w-3/5 flex flex-col gap-5">
          <Rainfallmm />
          <RainfallIntensity />
          <RainfallWarning/>
        </div>
      </main>
    </div>
  );
}
