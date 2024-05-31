import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import Image from 'next/image';
import { multiFormatDateString, formatDate, formatDateRecent } from '@/lib/utils';
import { WeighingRainGauge } from '@/lib/types';

async function getRainfallIntensity() {
  const res = await fetch(
    'https://api.thingspeak.com/channels/2531448/fields/3.json?api_key=UFR2I5V9Z9KMQ10X&results='
  );

  if (!res.ok) {
    throw new Error('Failed to fetch new data');
  }
  const data = await res.json() as WeighingRainGauge;

  const sortedFeeds = data.feeds.sort((a, b) => {
    const dateA = new Date(a.created_at).getTime();
    const dateB = new Date(b.created_at).getTime();
    return dateB - dateA;
  });
  
  return sortedFeeds;
}

const RainfallIntensity = async () => {
  const data = (await getRainfallIntensity())

  return (
    <div className="flex flex-col bg-gray-950 rounded-xl">
      <div className="p-4 flex flex-col gap-2">
        <h1 className=" opacity-70 font-extrabold">RAINFALL INTENSITY</h1>
        <hr className="opacity-40" />
      </div>

      <ScrollArea className="whitespace-nowrap w-full">
        <div className="flex w-max space-x-4 py-2 px-4 text-sm">
          {data.map((data)=>(
            <div key={data.entry_id} className="flex flex-col justify-center items-center hover:bg-slate-500 py-2 px-6 rounded-2xl gap-2">
            <span>{formatDate(new Date(data.created_at))}</span>
            <span className="text-2xl">{data.field3}</span>
            <Image src={`/rain.gif`} width={40} height={40} alt="" />
          </div>
          ))}
        </div>


        
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default RainfallIntensity;
