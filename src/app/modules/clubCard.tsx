import { MapPin } from 'lucide-react';
import Image from 'next/image';

import { Club } from '@/lib/definitions';
import { USDFormatter } from '@/lib/numberFormats';
import { cn } from '@/lib/utils';

export const ClubCard = (props: Club) => {
  const { image, price, courts, name, state, city } = props;
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
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-15% from-black/75 to-transparent p-4">
          <h3 className="font-semibold text-lg text-white">{name}</h3>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium bg-rose-quartz bg-opacity-20 text-jet px-3 py-1 rounded-full">
            {courts} {`${courts > 1 ? 'Canchas' : 'Cancha'}`}
          </span>
          <span className="text-sm text-jet/[0.8]">
            {USDFormatter(price)}/hour
          </span>
        </div>
        <div className="flex items-center gap-2 text-jet/[0.8]">
          <MapPin className="h-4 w-4" />
          <span className="text-sm">{`${state}, ${city}`}</span>
        </div>
      </div>
    </div>
  );
};
