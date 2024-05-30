import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

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