'use client'
import React from 'react';
import { useRouter } from 'next/navigation'
import Link from 'next/link';



const SoilMoistureBtn = () => {
    const router = useRouter();
  return (
    <button onClick={()=> router.push('/rain-gauge')} className="bg-slate-500 w-full py-3 rounded-xl text-sm sm:text-base">
      Weighing Rain Gauge
    </button>
  );
};

export default SoilMoistureBtn;
