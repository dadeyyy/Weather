import Image from 'next/image';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import RainfallIntensity from '@/components/rainfall/intensity';
import RainfallWarning from '@/components/rainfall/warning';
import Rainfallmm from '@/components/rainfall/rainfallmm';

export default function Home() {
  return (
    <div
      className="bg-cover bg-center h-100 sm:h-screen flex justify-center items-center"
      style={{
        backgroundImage: `url(/weather.webp)`,
      }}
    >
      <main className="container mx-auto backdrop-blur-md bg-slate-800 rounded-2xl opacity-80 h-full sm:h-4/5 text-white  flex flex-col sm:flex-row p-9 gap-10">
        <div className="flex flex-col w-full sm:w-2/5">
          <div className="flex flex-col sm:flex-row gap-4  w-full">
            <button className="bg-slate-500 w-full py-3 rounded-xl text-sm sm:text-base">
              Soil moisture analyzer
            </button>
            {/* <button className="bg-slate-500 w-full py-3 rounded-xl text-sm sm:text-base">
              History
            </button>
            <button className="bg-slate-500 w-full py-3 rounded-xl text-sm sm:text-base">
              Recommendation
            </button> */}
          </div>
          <div className="flex flex-col items-center h-full p-8  bg-slate-900 rounded-xl mt-2">
            <div className="h-1/2 flex flex-col justify-center items-center gap-2 mb-5">
              <p className="text-8xl">28°</p>
              <p className="text-4xl ">Rainy Day</p>
              <span className="font-normal ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
                minima eveniet, voluptates aspernatur culpa soluta totam
                accusantium voluptate quod enim quae
              </span>
            </div>
            <div className=" flex flex-col justify-center  h-1/2 gap-6">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="w-full sm:min-w-1/2 flex flex-col justify-center   rounded-lg p-2 bg-sky-400/90 gap-2">
                  <div className="flex opacity-50 gap-1">
                    <Image
                      src={`thermometer.svg`}
                      width={25}
                      height={25}
                      alt="Thermometer"
                    />

                    <h1 className="text-black  font-extrabold">FEELS LIKE</h1>
                  </div>
                  <span className="text-4xl">30°</span>
                  <span className="opacity-70">
                    Humidity is makit it feel warmer
                  </span>
                </div>

                <div className="w-full sm:min-w-1/2 flex flex-col justify-center   rounded-lg p-2 bg-sky-400/90 gap-2">
                  <div className="flex opacity-50 gap-1">
                    <Image
                      src={`droplet.svg`}
                      width={25}
                      height={25}
                      alt="Droplet"
                    />
                    <h1 className="text-black  font-extrabold">
                      PRECIPITATION
                    </h1>
                  </div>
                  <span className="text-4xl">2.3</span>
                  <span className="opacity-70">
                    expected in next 24h asdfasd
                  </span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="w-full sm:min-w-1/2 flex flex-col justify-center   rounded-lg p-2 bg-sky-400/90 gap-2">
                  <div className="flex opacity-50 gap-1">
                    <Image src={`eye.svg`} width={25} height={25} alt="Eye" />
                    <h1 className="text-black  font-extrabold">VISIBILITY</h1>
                  </div>
                  <span className="text-4xl">6 mi</span>
                  <span className="opacity-70">
                    Lorem ipsum dolor sit amet consectetur,{' '}
                  </span>
                </div>
                <div className="w-full sm:min-w-1/2 flex flex-col justify-center   rounded-lg p-2 bg-sky-400/90 gap-2">
                  <div className="flex opacity-50 gap-1">
                    <Image src={`wind.svg`} width={25} height={25} alt="Wind" />
                    <h1 className="text-black  font-extrabold">HUMIDITY</h1>
                  </div>
                  <span className="text-4xl">82%</span>
                  <span className="opacity-70">
                    The dew point is 40d right now
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" w:full sm:w-3/5 flex flex-col gap-5">
          <Rainfallmm />
          <RainfallIntensity />
          <RainfallWarning/>
        </div>
      </main>
    </div>
  );
}
