'use client'
import React from 'react';
import { useRouter } from 'next/navigation'



const SoilMoistureBtn = () => {
    const router = useRouter();
  return (
    <button onClick={()=> router.push('/soil-moisture')} className="bg-slate-500 w-full py-3 rounded-xl text-sm sm:text-base">
      Soil moisture analyzer
    </button>
  );
};

export default SoilMoistureBtn;
