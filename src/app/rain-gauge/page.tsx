import HistoryBtn from '@/components/history/HistoryBtn';
import BackHome from '@/components/navigation/Backhome';
import RainfallIntensity from '@/components/rainfall/intensity';
import Rainfallmm from '@/components/rainfall/rainfallmm';
import RainfallWarning from '@/components/rainfall/warning';
import RefreshBtnRainGauge from '@/components/refresh/RefreshBtnRainGauge';
import CircularProgress from '@/components/soil/circular-progress';
import { WeighingRainGaugeData } from '@/lib/types';
import { formatDateRecent } from '@/lib/utils';
import Link from 'next/link';

const getSoilMoisture = async () => {
  const res = await fetch(
    'https://api.thingspeak.com/channels/2546201/feeds.json?api_key=GYG6S0D1CDZ8L1TX&results=10',
    {
      cache: 'no-store',
    }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
};

export function sortData(apiData: WeighingRainGaugeData) {
  const data = apiData.feeds.sort((a, b) => {
    const dateA = new Date(a.created_at).getTime();
    const dateB = new Date(b.created_at).getTime();
    return dateB - dateA;
  });

  return data;
}

const SoilMoisturizer = async () => {
  const apiData = (await getSoilMoisture()) as WeighingRainGaugeData;
  const data = sortData(apiData);

  return (
    <div
      className="bg-cover bg-center  min-h-screen flex justify-center items-center"
      style={{
        backgroundImage: `url(/weather.webp)`,
      }}
    >
      <link
        rel="icon"
        href="/icon-website.png"
        type="image/<generated>"
        sizes="<generated>"
      />
      <main className="container flex flex-col bg-slate-900 rounded-none sm:rounded-2xl opacity-80 text-white p-8 gap-6">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-5">
            <div className='flex justify-between'>
              <BackHome />
              <RefreshBtnRainGauge/>
            </div>

            <h1 className="sm:text-2xl text-xl font-semibold">
              RainSense Rainfall Data:
            </h1>
          </div>

          <hr className="opacity-50" />
        </div>

        <Rainfallmm rainfallMmData={data} />
        <RainfallIntensity rainfallIntensityData={data} />
        <RainfallWarning rainfallWarningData={data} />
        <HistoryBtn />
      </main>
    </div>
  );
};

export default SoilMoisturizer;
