import dayjs from 'dayjs';
import { Calendar, Clock, MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Tournament } from '@/lib/definitions';
import 'dayjs/locale/es';
import { cn } from '@/lib/utils';

// eslint-disable-next-line import/no-named-as-default-member
dayjs.locale('es');

export const TournamentCard = (props: Tournament) => {
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
    image,
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
      className={cn(
        'group',
        'bg-white',
        'rounded-xl',
        'overflow-hidden',
        'shadow-md',
        'hover:shadow-xl',
        'transition-all',
        'duration-300',
        'cursor-pointer',
        'animate-fade',
        'animate-duration-500',
        'animate-ease-linear',
        'animate-delay-[350ms]',
        'flex',
        'flex-col',
      )}
    >
      <div className="relative overflow-hidden">
        <Image
          src={image}
          alt="Padel Court"
          width={600}
          height={240}
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-55% from-black/85 to-transparent p-4">
          <div className="flex gap-2">
            <span className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium w-fit">
              Nivel <span className="font-bold">C</span>
            </span>
            <span className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium w-fit">
              <span className="font-bold">16</span> Campos
            </span>
          </div>
          <h3 className="font-semibold text-lg text-white mt-1">{club}</h3>
        </div>
      </div>

      <div className="p-6">
        <span className="text-sm text-jet/[0.8] self-end mt-4 mb-1">
          ${price}/persona
        </span>

        <div className="space-y-3 pt-2">
          <p className="font-semibold text-sm text-jet">{club}</p>
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

        <Link href={`/tournament/${id}`}>
          <Button className="mt-4 w-full bg-rich-black text-white py-2 rounded-lg hover:bg-jet transition-colors duration-200">
            Ver mas
          </Button>
        </Link>
      </div>
    </div>
  );
};
