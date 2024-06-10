import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import Image from 'next/image';
import {
  multiFormatDateString,
  formatDate,
  formatDateRecent,
} from '@/lib/utils';
import { Feed, WeighingRainGaugeData } from '@/lib/types';
import { checkZero } from '@/lib/utils';

const Rainfallmm = async ({
  rainfallMmData,
}: {
  rainfallMmData: Feed[];
}) => {
  return (
    <div className="flex flex-col bg-gray-950 rounded-xl">
      <div className="p-4 flex flex-col gap-2">
        <h1 className=" opacity-70 font-extrabold tracking-wide">15-MINUTE RAINFALL (mm)</h1>
        <hr className="opacity-40" />
      </div>

      <ScrollArea className="whitespace-nowrap w-full">
        <div className="flex w-max space-x-4 py-2 px-4 text-sm">
          {rainfallMmData.map((data) => (
            <div
              key={data.entry_id}
              className="flex flex-col justify-center items-center hover:bg-slate-500 py-2 px-6 rounded-2xl gap-2"
            >
              <div className="flex flex-col justify-center items-center">
                <span>{formatDateRecent(new Date(data.created_at)).date}</span>
                <span className="opacity-80">
                  {formatDateRecent(new Date(data.created_at)).time}
                </span>
              </div>

              <span className="text-2xl">{data.field2} </span>
              <Image src={`${
                    checkZero(data.field2 || '') === true
                      ? '/sun.gif'
                      : '/rain.gif'
                  }`} width={40} height={40} alt="" />
            </div>
          ))}
        </div>

        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default Rainfallmm;
