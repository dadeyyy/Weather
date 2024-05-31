import CircularProgress from '@/components/soil/circular-progress';
import { WeighingRainGaugeGrams } from '@/lib/types';
import { formatDate } from '@/lib/utils';
import { checkMoistureContent } from '@/lib/utils';

const getSoilMoisture = async() =>{
  const res = await fetch('https://api.thingspeak.com/channels/2562479/fields/1.json?results=20')

  if(!res.ok){
    throw new Error('Failed to fetch data')
  }

  return res.json();

}

const SoilMoisturizer = async() => {
  const data = await getSoilMoisture() as WeighingRainGaugeGrams;
  
  return (
    <div
      className="bg-cover bg-center h-100 sm:h-screen flex justify-center items-center"
      style={{
        backgroundImage: `url(/farm.webp)`,
      }}
    >
      <main className="container bg-slate-900 rounded-2xl opacity-80  h-screen sm:h-4/5 text-white  p-9 gap-10">
        <h1 className="text-2xl font-semibold">Moisture Content:</h1>
        <div className='flex flex-wrap gap-10'>

          {data.feeds.map((data)=>{
            const advice = checkMoistureContent(data.field1 || '')
            return (
              <div key={data.entry_id}>
              <h1>{formatDate(new Date(data.created_at))}</h1>
              <CircularProgress value={data.field1 || ''}/>
              <p>{advice?.advice}</p>
            </div>
            )
          })}


        </div>
        
      </main>
    </div>
  );
};

export default SoilMoisturizer;
