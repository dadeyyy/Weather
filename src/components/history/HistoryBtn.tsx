import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import Image from 'next/image';
import { formatDateRecent } from '@/lib/utils';
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

const HistoryBtn = ({ historyData }: { historyData: Feed[] }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className=" hover:bg-sky-500 bg-sky-500 sm:bg-slate-500 p-6 rounded-xl cursor-pointer text-center sm:w-auto w-full">
          <div className="flex flex-col justify-center items-center gap-2 ">
            <span className=" text-center ">History</span>
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
                <TableHead>Rainfall MM</TableHead>
                <TableHead>Rainfall Intensity</TableHead>
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
                    <TableCell>{data.field2}</TableCell>
                    <TableCell>{data.field3}</TableCell>
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
  );
};

export default HistoryBtn;
