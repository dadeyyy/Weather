import Image from 'next/image';
import { RecentDataType } from '@/lib/types';

import { checkIntensityText, formatDate, formatDateRecent } from '@/lib/utils';
import MoreInfoHome from '../navigation/MoreInfoHome';

async function getRecentData() {
  const res = await fetch(
    'https://api.thingspeak.com/channels/2531448/feeds/last.json?api_key=UFR2I5V9Z9KMQ10X',
    { cache: 'no-store' }
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
    <div className="flex flex-col p-6 sm:p-6 h-full bg-slate-900 rounded-xl overflow-auto">
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-7 justify-between flex-grow">
        <div className="flex flex-col justify-center items-center mb-5 sm:items-start gap-3 sm:gap-5 flex-shrink-0">
          <Image src={'/rainsense.png'} height={10} width={200} alt="" />

          <div className="flex flex-col justify-center items-center gap-3">
            <p className="text-4xl sm:text-5xl lg:text-7xl font-semibold">
              {formattedDateRecent.time}
            </p>

            <p className="text-xl sm:text-2xl lg:text-3xl font-semibold opacity-80">
              {formattedDateRecent.date}
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-3 sm:gap-5 pr-2 flex-shrink-0">
          <p
            className={`text-2xl sm:text-3xl lg:text-4xl max-w-sm text-center ${warning?.color}`}
          >
            {warning?.rainfallWarning}
          </p>
          <Image
            src={warning?.forecast || ''}
            alt=""
            height={175}
            width={175}
            className="max-h-[20vh] max-w-[20vh] object-contain"
          />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 h-full">
        <div className="flex flex-col justify-evenly items-center rounded-lg p-4 sm:p-5 bg-sky-400/90 gap-2 flex-1 overflow-hidden">
          <div className="flex opacity-70 gap-1 items-center">
            <Image
              src={`thermometer.svg`}
              width={25}
              height={25}
              alt="Thermometer"
            />
            <h1 className="text-black font-extrabold text-center text-md sm:text-lg lg:text-xl">
              15-MINUTE RAINFALL (mm)
            </h1>
          </div>

          <div className="flex flex-col justify-center items-center">
            <span className="text-2xl sm:text-3xl lg:text-4xl">
              {data.field2}
            </span>
            <span className="opacity-70 flex gap-3 sm:gap-5">
              <p>{formattedDateRecent.date}</p>
              <p>{formattedDateRecent.time}</p>
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-evenly items-center rounded-lg p-4 sm:p-5 bg-sky-400/90 gap-2 flex-1 overflow-hidden">
          <div className="flex opacity-70 gap-1 items-center">
            <Image
              src={`droplet.svg`}
              width={25}
              height={25}
              alt="Thermometer"
            />
            <h1 className="text-black font-extrabold  text-md sm:text-lg lg:text-xl">
              RAINFALL INTENSITY (mm/hr)
            </h1>
          </div>

          <div className="flex flex-col justify-center items-center">
            <span className="text-2xl sm:text-3xl lg:text-4xl">
              {data.field3}
            </span>
            <span className="opacity-70 flex gap-3 sm:gap-5">
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
