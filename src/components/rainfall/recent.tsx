import Image from 'next/image';
import { RecentDataType } from '@/lib/types';

import { checkIntensityText, formatDate, formatDateRecent } from '@/lib/utils';
import MoreInfoHome from '../navigation/MoreInfoHome';

async function getRecentData() {
  const res = await fetch(
    'https://api.thingspeak.com/channels/2531448/feeds/last.json?api_key=UFR2I5V9Z9KMQ10X',
    {cache: 'no-store'}
  );

  if (!res.ok) {
    throw new Error('Failed to fetch recent data');
  }

  return res.json();
}

const RecentData = async () => {
  const data = (await getRecentData()) as RecentDataType;

  const warning = checkIntensityText(data.field3);
  const formattedDateRecent = formatDateRecent(new Date(data.created_at));
  return (
    <div className="flex flex-col h-full w-full gap-5">
      <div className="flex flex-col p-10 h-full bg-slate-900 rounded-xl mt-2">
        <div className="flex sm:flex-row flex-col gap-8 justify-between mb-5 ">
          <div className="flex flex-col justify-center items-center gap-5">
            <p className="text-5xl sm:text-7xl font-semibold">
              {formattedDateRecent.time}
            </p>
            <p className="text-2xl sm:text-3xl font-semibold opacity-80">
              {formattedDateRecent.date}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-5 pr-2">
            <p
              className={`text-3xl sm:text-4xl max-w-sm text-center ${warning?.color}`}
            >
              {warning?.rainfallWarning}
            </p>
            <Image
              src={warning?.forecast || ''}
              alt=""
              height={175}
              width={175}
            />
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col justify-center rounded-lg p-5 bg-sky-400/90 gap-2">
            <div className="flex opacity-70 gap-1 items-center">
              <Image
                src={`thermometer.svg`}
                width={25}
                height={25}
                alt="Thermometer"
              />
              <h1 className="text-black font-extrabold">
                15-MINUTE RAINFALL (mm)
              </h1>
            </div>
            <span className="text-4xl">{data.field2}</span>
            <span className="opacity-70 flex gap-5">
              <p>{formattedDateRecent.date}</p>
              <p>{formattedDateRecent.time}</p>
            </span>
          </div>

          <div className="flex flex-col justify-center rounded-lg p-5 bg-sky-400/90 gap-2">
            <div className="flex opacity-70 gap-1 items-center">
              <Image
                src={`droplet.svg`}
                width={25}
                height={25}
                alt="Thermometer"
              />
              <h1 className="text-black font-extrabold">
                RAINFALL INTENSITY (mm/hr)
              </h1>
            </div>
            <span className="text-4xl">{data.field3}</span>
            <span className="opacity-70 flex gap-5">
              <p>{formattedDateRecent.date}</p>
              <p>{formattedDateRecent.time}</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentData;
