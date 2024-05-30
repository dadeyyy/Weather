import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import Image from 'next/image';
import { multiFormatDateString } from '@/lib/utils';
import { WeighingRainGaugeGrams } from '@/lib/types';

async function getRainfallGrams() {
  const res = await fetch(
    'https://api.thingspeak.com/channels/2531448/fields/1.json?api_key=UFR2I5V9Z9KMQ10X'
  );

  if (!res.ok) {
    throw new Error('Failed to fetch new data');
  }
  
  return res.json();
}

const RainfallGrams = async () => {
  const data = (await getRainfallGrams()) as WeighingRainGaugeGrams;

  return (
    <div className="flex flex-col bg-gray-950 rounded-xl">
      <div className="p-4 flex flex-col gap-2">
        <h1 className=" opacity-70 font-extrabold">RAINFALL IN GRAMS</h1>
        <hr className="opacity-40" />
      </div>

      <ScrollArea className="whitespace-nowrap w-full">
        <div className="flex w-max space-x-4 py-2 px-4 text-sm">
          {data.feeds.map((data)=>(
            <div key={data.entry_id} className="flex flex-col justify-center items-center hover:bg-slate-500 py-2 px-6 rounded-2xl gap-2">
            <span>{multiFormatDateString(data.created_at)}</span>
            <span className="text-2xl">{data.field1}</span>
            <Image src={`/rain.gif`} width={40} height={40} alt="" />
          </div>
          ))}
        </div>


        
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default RainfallGrams;
