import dayjs from 'dayjs';
import 'dayjs/locale/es';
import { Calendar, Clock, MapPin } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { PlayerRequest } from '@/lib/definitions';
import { cn } from '@/lib/utils';

// eslint-disable-next-line import/no-named-as-default-member
dayjs.locale('es');

export const PlayerRequestCard = (props: PlayerRequest) => {
  const {
    id,
    startTime,
    endTime,
    playersNeeded,
    date,
    level,
    price,
    club,
    state,
    city,
    category,
  } = props;

  const [startHour, startMin] = startTime?.split(':') || [];
  const formatedStartTime = dayjs()
    .set('hour', +startHour)
    .set('minute', +startMin)
    .format('h:mm A');

  const [endHour, endMin] = endTime?.split(':') || [];
  const formatedEndTime = dayjs()
    .set('hour', +endHour)
    .set('minute', +endMin)
    .format('h:mm A');

  const isToday =
    new Date(date).setHours(0, 0, 0, 0) === new Date().setHours(0, 0, 0, 0);
  const formatedDate = isToday ? 'Hoy' : dayjs(date).format('MMMM D, YYYY');

  return (
    <div
      key={id}
      className={cn(
        'bg-white',
        'rounded-xl',
        'shadow-md',
        'hover:shadow-xl',
        'transition-all',
        'duration-300',
        'p-6',
        'flex',
        'flex-col',
        'animate-fade',
        'animate-duration-500',
        'animate-ease-linear',
        'animate-delay-[350ms]',
      )}
    >
      <div className="grid grid-cols-2 justify-between items-center gap-2">
        <span className="inline-block px-3 py-1 bg-rose-quartz bg-opacity-20 text-jet rounded-full text-sm font-medium text-center">
          Nivel <span className="font-bold">{level}</span>
        </span>
        <span className="inline-block px-3 py-1 bg-rose-quartz bg-opacity-20 text-jet rounded-full text-sm font-medium text-center">
          {category}
        </span>
        <span className="inline-block px-3 py-1 bg-rose-quartz bg-opacity-20 text-jet rounded-full text-sm font-medium text-center col-span-full">
          <span className="font-bold">{playersNeeded}</span>{' '}
          {playersNeeded === 1 ? 'Jugador faltante' : 'Jugadores faltantes'}
        </span>
      </div>

      <span className="text-sm text-jet/[0.8] self-end mt-4 mb-1">
        ${price}/persona
      </span>

      <div className="space-y-3 border-t pt-2">
        <Link href={`/club/${id}`}>
          <p className="font-semibold text-sm text-jet">{club}</p>
        </Link>
        <div className="flex items-center gap-2 text-jet/[0.8]">
          <MapPin className="h-4 w-4" />
          <span className="text-sm">{`${state}, ${city}`}</span>
        </div>

        <div className="flex items-center gap-2 text-jet/[0.8]">
          <Calendar className="h-4 w-4" />
          <span className="text-sm capitalize">{formatedDate}</span>
        </div>

        <div className="flex items-center gap-2 text-jet/[0.8]">
          <Clock className="h-4 w-4" />
          <span className="text-sm">
            {formatedStartTime} - {formatedEndTime}
          </span>
        </div>
      </div>

      <Link href={`/player/${id}`}>
        <Button className="mt-4 w-full bg-rich-black text-white py-2 rounded-lg hover:bg-jet transition-colors duration-200">
          Ver mas
        </Button>
      </Link>
    </div>
  );
};
