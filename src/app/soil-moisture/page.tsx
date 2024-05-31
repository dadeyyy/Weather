import CircularProgress from '@/components/soil/circular-progress';

const getSoilMoisture = () =>{
  
}

const SoilMoisturizer = () => {
  return (
    <div
      className="bg-cover bg-center h-100 sm:h-screen flex justify-center items-center"
      style={{
        backgroundImage: `url(/farm.webp)`,
      }}
    >
      <main className="container bg-slate-900 rounded-2xl opacity-80  h-screen sm:h-4/5 text-white  p-9 gap-10">
        <h1 className="text-2xl font-semibold">Moisture Content:</h1>
        {/* <CircularProgress/> */}
      </main>
    </div>
  );
};

export default SoilMoisturizer;
