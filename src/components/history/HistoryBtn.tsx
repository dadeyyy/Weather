import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { formatDateRecent } from '@/lib/utils';
import { WeighingRainGaugeData } from '@/lib/types';
import { sortData } from '@/app/rain-gauge/page';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Feed } from '@/lib/types';
import { checkIntensity } from '@/lib/utils';
import { formatToTwoDecimalPlaces } from '@/lib/utils';


const getHistoryData = async () =>{
  const res = await fetch('https://api.thingspeak.com/channels/2546201/feeds.json?api_key=GYG6S0D1CDZ8L1TX&results=', {cache : 'no-store'})

  if(!res.ok){
    throw new Error('Failed to fetch history dataa')
  }

  return res.json();
}


const HistoryBtn = async () => {
  const apiData = await getHistoryData() as WeighingRainGaugeData;
  const historyData = sortData(apiData);

  return (
    <div>

    <Dialog>
      <DialogTrigger asChild>
        <button className=" hover:bg-sky-500 bg-sky-500 sm:bg-slate-500 px-6 sm:px-8 py-4 rounded-xl cursor-pointer text-center mx-auto flex justify-center items-center">
          <div className="flex flex-col justify-center items-center gap-2 ">
            <span className=" text-center ">VIEW DATA HISTORY</span>
          </div>
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px] w-full h-4/5 sm:max-h-[700px] overflow-x-auto overflow-y-auto">
        <DialogTitle>Data History:</DialogTitle>
        <ScrollArea className='overflow-x-auto'>
            
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date Created</TableHead>
                <TableHead>15-minute Rainfall (mm)</TableHead>
                <TableHead>Rainfall Intensity (mm/hr)</TableHead>
                <TableHead>Rainfall Warning</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {historyData.map((data) => {
                const warning = checkIntensity(data.field3 || '');

                return (
                  <TableRow key={data.entry_id}>
                    <TableCell className='flex flex-col text-center'>
                      <span>
                        {formatDateRecent(new Date(data.created_at)).date}{' '}
                      </span>
                      <span>
                        {formatDateRecent(new Date(data.created_at)).time}
                      </span>
                    </TableCell>
                    <TableCell className='text-center '>{formatToTwoDecimalPlaces(data.field2 || '')}</TableCell>
                    <TableCell className='text-center'>{formatToTwoDecimalPlaces(data.field3 || '')}</TableCell>
                    <TableCell
                      className={`${
                        warning?.color ?? 'bg-slate-400'
                      } text-center`}
                    >
                      {warning?.rainfallWarning}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </ScrollArea>
      </DialogContent>
    </Dialog>
    </div>
    
  );
};

export default HistoryBtn;
