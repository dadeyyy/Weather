import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { parseISO } from 'date-fns';
import { toZonedTime, format as formatTZ } from 'date-fns-tz';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function formatDateString(dateString: string) {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString("en-US", options);

  const time = date.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });

  return `${formattedDate} at ${time}`;
}

//
export const multiFormatDateString = (timestamp: string = ""): string => {
  const timestampNum = Math.round(new Date(timestamp).getTime() / 1000);
  const date: Date = new Date(timestampNum * 1000);
  const now: Date = new Date();

  const diff: number = now.getTime() - date.getTime();
  const diffInSeconds: number = diff / 1000;
  const diffInMinutes: number = diffInSeconds / 60;
  const diffInHours: number = diffInMinutes / 60;
  const diffInDays: number = diffInHours / 24;

  switch (true) {
    case Math.floor(diffInDays) >= 30:
      return formatDateString(timestamp);
    case Math.floor(diffInDays) === 1:
      return `${Math.floor(diffInDays)} day ago`;
    case Math.floor(diffInDays) > 1 && diffInDays < 30:
      return `${Math.floor(diffInDays)} days ago`;
    case Math.floor(diffInHours) >= 1:
      return `${Math.floor(diffInHours)} hours ago`;
    case Math.floor(diffInMinutes) >= 1:
      return `${Math.floor(diffInMinutes)} minutes ago`;
    default:
      return "Just now";
  }
};

export const checkIntensity = (value: string) => {
  const totalRainfall = parseFloat(value);

  if (totalRainfall === 0) {
    return { rainfallWarning: 'No Rain', color: 'bg-slate-500' };
  } else if (totalRainfall > 0 && totalRainfall <= 2.5) {
    return { rainfallWarning: 'Light Rain', color: 'bg-sky-300' };
  } else if (totalRainfall > 2.5 && totalRainfall <= 7.5) {
    return { rainfallWarning: 'Moderate Rain', color: 'bg-purple-300' };
  } else if (totalRainfall > 7.5 && totalRainfall <= 15) {
    return {
      rainfallWarning: 'Yellow Rainfall Warning',
      color: 'bg-yellow-400',
    };
  } else if (totalRainfall > 15 && totalRainfall <= 30) {
    return {
      rainfallWarning: 'Orange Rainfall Warning',
      color: 'bg-orange-400',
    };
  } else if (totalRainfall > 30) {
    return { rainfallWarning: 'Red Rainfall Warning', color: 'bg-red-400' };
  }
};


export const checkIntensityText = (value: string) => {
  const totalRainfall = parseFloat(value);

  if (totalRainfall === 0) {
    return { rainfallWarning: 'No Rain', color: 'text-slate-500', forecast: '/forecast/no_rain.png' };
  } else if (totalRainfall > 0 && totalRainfall <= 2.5) {
    return { rainfallWarning: 'Light Rain', color: 'text-sky-300', forecast: '/forecast/light_rain.png' };
  } else if (totalRainfall > 2.5 && totalRainfall <= 7.5) {
    return { rainfallWarning: 'Moderate Rain', color: 'text-purple-300', forecast: '/forecast/moderate_rain.png' };
  } else if (totalRainfall > 7.5 && totalRainfall <= 15) {
    return {
      rainfallWarning: 'Yellow Rainfall Warning',
      color: 'text-yellow-400',
      forecast: '/forecast/yellow_warning_1.png'
    };
  } else if (totalRainfall > 15 && totalRainfall <= 30) {
    return {
      rainfallWarning: 'Orange Rainfall Warning',
      color: 'text-orange-400',
      forecast: '/forecast/orange_warning.png'
    };
  } else if (totalRainfall > 30) {
    return { rainfallWarning: 'Red Rainfall Warning', color: 'text-red-400', forecast: '/forecast/red_warning.png' };
  }
};

export const checkMoistureContent = (value:string) =>{
  const moistureContent = parseInt(value);

  if(moistureContent >= 0 && moistureContent <=39){
    return {advice: 'Water the crop'}
  }
  else if(moistureContent >= 40 && moistureContent <=60){
    return {advice: 'Crop water is enough'}
  }
  else if(moistureContent >=61 && moistureContent <=100) {
    return {advice: 'Crop water is too much'}
  }
}



export function formatDate(date: Date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? Number('0'+minutes) : minutes; // Convert minutes to number if necessary
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return (date.getMonth()+1) + "/" + date.getDate() + "/" + date.getFullYear() + "  " + strTime;
}

interface FormattedDate {
  time: string;
  date: string;
}

export function formatDateRecent(date: Date): FormattedDate {
  const timeZone = 'Asia/Manila';
  const zonedDate = toZonedTime(date, timeZone); // Convert to Manila time zone

  const formattedDate = formatTZ(zonedDate, 'MMMM dd, yyyy', { timeZone });
  const formattedTime = formatTZ(zonedDate, 'hh:mm aa', { timeZone });

  return { time: formattedTime, date: formattedDate };
}

export function checkZero (value: string){
  const num = parseFloat(value)

  if(num === 0){
    return true
  }
  return false
}