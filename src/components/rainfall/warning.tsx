import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import Image from 'next/image';
import { formatDateRecent } from '@/lib/utils';
import { Feed, WeighingRainGaugeData } from '@/lib/types';
import { checkIntensity } from '@/lib/utils';

// const feeds = [
//   {
//     created_at: '2024-05-29T14:46:39Z',
//     entry_id: 1,
//     field3: '0',
//   },
//   {
//     created_at: '2024-05-29T14:46:39Z',
//     entry_id: 1,
//     field3: '1.50070',
//   },
//   {
//     created_at: '2024-05-29T14:47:09Z',
//     entry_id: 2,
//     field3: '3.60128',
//   },
//   {
//     created_at: '2024-05-29T14:47:38Z',
//     entry_id: 3,
//     field3: '8',
//   },
//   {
//     created_at: '2024-05-29T14:47:54Z',
//     entry_id: 4,
//     field3: '16.00374',
//   },
//   {
//     created_at: '2024-05-29T14:48:25Z',
//     entry_id: 5,
//     field3: '31.00317',
//   },
//   {
//     created_at: '2024-05-29T14:48:52Z',
//     entry_id: 6,
//     field3: '1.00570',
//   },
//   {
//     created_at: '2024-05-29T14:49:09Z',
//     entry_id: 7,
//     field3: '2.6',
//   },
//   {
//     created_at: '2024-05-29T14:49:38Z',
//     entry_id: 8,
//     field3: '0.00849',
//   },
//   {
//     created_at: '2024-05-29T14:50:07Z',
//     entry_id: 9,
//     field3: '0.00444',
//   },
//   {
//     created_at: '2024-05-29T14:50:24Z',
//     entry_id: 10,
//     field3: '0.00302',
//   },
//   {
//     created_at: '2024-05-29T14:50:53Z',
//     entry_id: 11,
//     field3: '0.00255',
//   },
//   { created_at: '2024-05-29T15:28:08Z', entry_id: 12, field3: null },
// ];

const RainfallWarning = async ({
  rainfallWarningData,
}: {
  rainfallWarningData: Feed[];
}) => {
  return (
    <div className="flex flex-col bg-gray-950 rounded-xl">
      <div className="p-4 flex flex-col gap-2">
        <h1 className=" opacity-70 font-extrabold">RAINFALL WARNING</h1>
        <hr className="opacity-40" />
      </div>

      <ScrollArea className="whitespace-nowrap w-full">
        <div className="flex space-x-4 py-2 px-4 text-sm w-full">
          {rainfallWarningData.map((data) => {
            const warning = checkIntensity(data.field3 || '');

            return (
              <div
                key={data.entry_id}
                className={`${
                  warning?.color ?? 'bg-slate-400'
                } flex flex-col justify-center items-center  py-2 px-6 rounded-2xl gap-2 `}
              >
                <div className="flex flex-col justify-center items-center">
                  <span>
                    {formatDateRecent(new Date(data.created_at)).date}
                  </span>
                  <span className="opacity-80">
                    {formatDateRecent(new Date(data.created_at)).time}
                  </span>
                </div>
                <span className="text-2xl text-black ">
                  {warning?.rainfallWarning}
                </span>
                <Image
                  src={`${
                    warning?.rainfallWarning === 'No Rain'
                      ? '/sun.gif'
                      : '/rain.gif'
                  }`}
                  width={40}
                  height={40}
                  alt=""
                />
              </div>
            );
          })}
        </div>

        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default RainfallWarning;
