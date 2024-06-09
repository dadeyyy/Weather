import RainfallIntensity from '@/components/rainfall/intensity';
import RainfallWarning from '@/components/rainfall/warning';
import Rainfallmm from '@/components/rainfall/rainfallmm';
import RecentData from '@/components/rainfall/recent';
import { link } from 'fs';

export default function Home() {
  return (
    
    <div
      className="bg-cover bg-center h-screen flex justify-center items-center"
      style={{
        backgroundImage: `url(/weather.webp)`,
      }}
    >
      <link
        rel="icon"
        href="/wallpaper-cloudy.png"
        type="image/<generated>"
        sizes="<generated>"
      />
      <main className="container mx-auto backdrop-blur-md bg-slate-800 rounded-2xl opacity-80  text-white flex flex-col sm:flex-row p-9 gap-10 sm:h-auto h-full justify-center items-center max-w-2xl">
        <RecentData/>

        {/* <div className=" w:full sm:w-3/5 flex flex-col gap-5">
          <Rainfallmm />
          <RainfallIntensity />
          <RainfallWarning/>
        </div> */}
      </main>
    </div>
  );
}
