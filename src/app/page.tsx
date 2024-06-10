import RainfallIntensity from '@/components/rainfall/intensity';
import RainfallWarning from '@/components/rainfall/warning';
import Rainfallmm from '@/components/rainfall/rainfallmm';
import RecentData from '@/components/rainfall/recent';
import { link } from 'fs';
import MoreInfoHome from '@/components/navigation/MoreInfoHome';

export default function Home() {
  return (
    <div className="bg-cover bg-center min-h-screen flex justify-center items-center overflow-hidden" style={{ backgroundImage: `url(/weather.webp)` }}>
      <link
        rel="icon"
        href="/wallpaper-cloudy.png"
        type="image/<generated>"
        sizes="<generated>"
      />
      <main className="container mx-auto backdrop-blur-md bg-slate-800 rounded-2xl opacity-80 text-white flex flex-col p-9 gap-5 justify-center items-center h-full sm:max-w-lg md:max-w-xl lg:max-w-4xl">
        <RecentData />
        <MoreInfoHome />
      </main>
    </div>
  );
}

